import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  links: {
    live?: string;
    github?: string;
    appStore?: string;
  };
}

const projects: Project[] = [
  {
    title: "CRC-WB Web Application",
    description: "A comprehensive web application for managing and tracking customer relationship management processes with integrated workflow capabilities.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&q=80",
    technologies: ["React", "JavaScript", "API"],
    category: "React.js, API Integration",
    links: {
      live: "#",
      github: "#",
    },
  },
  {
    title: "Smart Workflow Web",
    description: "An intelligent workflow management system that automates task assignment, progress tracking, and reporting for teams and organizations.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop&q=80",
    technologies: ["React", "Xano", "Tailwind"],
    category: "React.js, Xano, Tailwind CSS",
    links: {
      live: "#",
      github: "#",
    },
  },
  {
    title: "Parent App",
    description: "A mobile application for parents to track their children's academic progress, attendance, and school activities in real-time.",
    image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=800&h=400&fit=crop&q=80",
    technologies: ["React Native", "Adalo", "Mobile"],
    category: "React Native, Adalo, API Integration",
    links: {
      appStore: "#",
      github: "#",
    },
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 section-transition">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="h-full"
            >
              <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground">{project.category}</p>
                </CardHeader>
                <CardContent>
                  <p className="mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-4">
                  {project.links.live && (
                    <Button variant="link" className="p-0 h-auto text-primary" asChild>
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <span>Visit Site</span>
                        <ExternalLink className="h-4 w-4 ml-1" />
                      </a>
                    </Button>
                  )}
                  {project.links.appStore && (
                    <Button variant="link" className="p-0 h-auto text-primary" asChild>
                      <a href={project.links.appStore} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <span>App Store</span>
                        <ExternalLink className="h-4 w-4 ml-1" />
                      </a>
                    </Button>
                  )}
                  {project.links.github && (
                    <Button variant="link" className="p-0 h-auto text-primary" asChild>
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <span>GitHub</span>
                        <Github className="h-4 w-4 ml-1" />
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
