import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Contact API Route
  app.post("/api/contact", async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Todos os campos são obrigatórios." });
    }

    try {
      // Lazy initialization of transporter
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS, // Requires App Password
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'lourencoumue01@gmail.com',
        subject: `Novo contacto de portfólio de ${name}`,
        text: `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`,
        replyTo: email
      };

      if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.warn("EMAIL_USER or EMAIL_PASS not set. Email cannot be sent.");
        return res.status(500).json({ 
          error: "O servidor de e-mail não está configurado no ambiente. Configure EMAIL_USER e EMAIL_PASS no menu Settings." 
        });
      }

      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Mensagem enviada com sucesso!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Erro ao enviar a mensagem. Verifique a configuração do servidor." });
    }
  });

  // Vite middleware setup
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);

  });
}

startServer();
