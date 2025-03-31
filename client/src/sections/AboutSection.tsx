import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 section-transition">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Card>
              <CardContent className="p-8 mt-6">
                <p className="text-lg mb-6">
                  I'm a software developer with a passion for creating efficient, user-friendly web applications. My journey in software development started during my engineering studies, where I discovered my love for turning complex problems into elegant solutions.
                </p>
                <p className="text-lg mb-6">
                  With expertise in React.js and API integrations, I specialize in building responsive interfaces that provide exceptional user experiences. I enjoy working with modern web technologies and constantly learning new skills to stay at the forefront of the industry.
                </p>
                <p className="text-lg">
                  Beyond coding, I'm enthusiastic about collaborating with teams to deliver products that make a positive impact. I believe in writing clean, maintainable code and following best practices to ensure scalable and robust applications.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
