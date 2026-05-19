import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Resend lazily or check for key
  const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

  // API routes
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message, businessName } = req.body;

      // Basic validation
      if (!name || !email || !message) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ error: "Invalid email format" });
      }

      if (!resend) {
        console.error("RESEND_API_KEY is missing");
        return res.status(500).json({ error: "Email service not configured" });
      }

      const data = await resend.emails.send({
        from: "Contact Form <onboarding@resend.dev>", // Note: For production use verified domain
        to: ["info@frontierwebpros.com"],
        subject: `New Lead: ${businessName || name} - ${subject || "General Inquiry"}`,
        replyTo: email,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
            <h2 style="color: #224458;">New Frontier Web Pros Lead</h2>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Business Name:</strong> ${businessName || "Not provided"}</p>
            <p><strong>Inquiry Type:</strong> ${subject || "General Inquiry"}</p>
            <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 20px;">
              <p><strong>Message:</strong></p>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
            <footer style="margin-top: 30px; font-size: 12px; color: #888;">
              Sent from Frontier Web Pros Contact Form
            </footer>
          </div>
        `,
      });

      if (data.error) {
        console.error("Resend error:", data.error);
        return res.status(400).json({ error: data.error.message });
      }

      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Server error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
