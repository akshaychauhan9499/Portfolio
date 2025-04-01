import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const images = [
  {
    url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop&q=80",
    title: "Workspace Setup",
    description: "My development workspace with multiple screens for maximum productivity."
  },
  {
    url: "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=800&h=600&fit=crop&q=80",
    title: "Team Collaboration",
    description: "Working with the development team on a new feature implementation."
  },
  {
    url: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&h=600&fit=crop&q=80",
    title: "Code Review Session",
    description: "Conducting a thorough code review with colleagues."
  },
  {
    url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop&q=80",
    title: "Project Planning",
    description: "Planning the architecture for our latest web application."
  },
  {
    url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop&q=80",
    title: "Late Night Coding",
    description: "Sometimes the best code happens after hours."
  },
  {
    url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop&q=80",
    title: "Team Meeting",
    description: "Weekly team meeting discussing project milestones."
  }
];

const GallerySection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="gallery" className="py-20 section-transition">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Photo Gallery</h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {images.map((image, index) => (
            <motion.div key={index} variants={item}>
              <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                <div className="h-64 overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                  <p className="text-muted-foreground">{image.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;