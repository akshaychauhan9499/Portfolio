import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="py-20 section-transition">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>

        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Card>
            <CardContent className="p-8 mt-6">
              <div className="flex flex-col md:flex-row md:items-center mb-6">
                <div className="md:w-24 md:h-24 w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6">
                  <GraduationCap className="h-10 w-10 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">B.Tech in Electronics and Communication</h3>
                  <p className="text-muted-foreground">Maharshi Dayanand University (MDU) | 2013 - 2017</p>
                </div>
              </div>
              <div className="pl-0 md:pl-32">
                <p className="mb-4">
                  Completed a Bachelor's degree in Electronics and Communication Engineering with specialization in embedded systems and digital communication.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Core coursework in electronic circuits, signal processing, and communication systems</li>
                  <li>Specialized in microprocessor architecture and programming</li>
                  <li>Completed a capstone project on IoT-based home automation system</li>
                  <li>Participated in technical symposiums and coding competitions</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
