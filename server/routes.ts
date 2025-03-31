import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Get __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function registerRoutes(app: Express): Promise<Server> {
  // Handle contact form submissions
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      // Validate input
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: "All fields are required" });
      }
      
      // In a real application, this would send an email
      // For now, we'll just log the data and return success
      console.log("Contact form submission:", { name, email, subject, message });
      
      // Simulating processing time
      await new Promise(resolve => setTimeout(resolve, 500));
      
      return res.status(200).json({ 
        success: true,
        message: "Your message has been sent successfully!" 
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      return res.status(500).json({ message: "Failed to send message" });
    }
  });

  // Handle resume download
  app.get("/api/download-resume", (req, res) => {
    // In a real app, this would point to an actual file
    // For now, we'll create a simple text file on the fly
    const resumeContent = `
AKSHAY CHAUHAN
Software Developer

Contact: akshay.chauhan@example.com
Phone: +91 98765 43210
Location: New Delhi, India

EXPERIENCE
- Software Developer at Apeejay Education Society (2020-Present)
- Junior Web Developer at Apeejay Education Society (2018-2020)
- Web Development Intern at Tech Solutions Ltd. (2017-2018)

EDUCATION
- B.Tech in Electronics and Communication, MDU (2013-2017)

SKILLS
- JavaScript, React.js, API Integration, GitHub, Xano, Adalo, Monday.com
    `;
    
    // Create a temporary file
    const tempDir = path.join(__dirname, "../temp");
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir, { recursive: true });
    }
    
    const tempFilePath = path.join(tempDir, "akshay_chauhan_resume.txt");
    fs.writeFileSync(tempFilePath, resumeContent);
    
    // Set headers for download
    res.setHeader("Content-Disposition", "attachment; filename=akshay_chauhan_resume.txt");
    res.setHeader("Content-Type", "text/plain");
    
    // Send file and delete after
    res.download(tempFilePath, (err) => {
      // Delete the temp file after download
      if (fs.existsSync(tempFilePath)) {
        fs.unlinkSync(tempFilePath);
      }
      
      if (err && !res.headersSent) {
        return res.status(500).json({ message: "Failed to download resume" });
      }
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
