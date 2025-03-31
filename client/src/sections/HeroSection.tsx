import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const handleDownloadResume = () => {
    // Would normally point to a real file
    window.open("/api/download-resume", "_blank");
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 section-transition">
      <div className="container mx-auto px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              <span className="block">Hi, I'm</span>
              <span className="text-primary">Akshay Chauhan</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6">
              Software Developer
            </h2>
            <p className="text-lg mb-8 max-w-lg">
              I build modern web applications with React.js, integrate APIs, and develop
              software solutions that solve real-world problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <a href="#contact">Get in touch</a>
              </Button>
              <Button variant="outline" onClick={handleDownloadResume}>
                Download Resume
              </Button>
            </div>
            <div className="flex space-x-4 mt-8">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </motion.div>
          <motion.div 
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&q=80"
                alt="Akshay Chauhan"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
