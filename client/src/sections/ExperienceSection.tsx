import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  responsibilities: string[];
}

const experiences: Experience[] = [
  {
    title: "Software Developer",
    company: "Apeejay Education Society",
    period: "2020 - Present",
    description: "Leading the development of web applications and internal tools that streamline educational processes and enhance student experiences.",
    responsibilities: [
      "Developed and maintained React-based web applications",
      "Integrated various APIs for seamless data flow",
      "Collaborated with cross-functional teams to deliver projects on time",
      "Implemented responsive design principles for optimal user experience",
    ],
  },
  {
    title: "Junior Web Developer",
    company: "Apeejay Education Society",
    period: "2018 - 2020",
    description: "Assisted in the development and maintenance of educational websites and internal applications.",
    responsibilities: [
      "Built responsive web interfaces using HTML, CSS, and JavaScript",
      "Participated in code reviews and implemented feedback",
      "Troubleshot and resolved website issues",
      "Assisted in database management and optimization",
    ],
  },
  {
    title: "Web Development Intern",
    company: "Tech Solutions Ltd.",
    period: "2017 - 2018",
    description: "Gained hands-on experience in web development while contributing to client projects.",
    responsibilities: [
      "Assisted senior developers in building website components",
      "Learned and applied front-end development best practices",
      "Participated in client meetings and requirement gathering",
      "Documented code and created user guides",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 section-transition">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>

        <div className="max-w-3xl mx-auto">
          {/* Timeline */}
          <div className="relative pl-12 md:pl-16">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                className="mb-12 last:mb-0 relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Timeline line */}
                <div className="absolute -left-0.5 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />
                
                {/* Timeline dot */}
                <div className="absolute -left-3 top-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center z-10">
                  <Briefcase className="h-3 w-3 text-white" />
                </div>
                
                <Card>
                  <CardContent className="p-6 mt-6">
                    <h3 className="text-xl font-semibold text-primary">{exp.title}</h3>
                    <div className="text-muted-foreground mb-2">{exp.company} | {exp.period}</div>
                    <p className="mb-4">{exp.description}</p>
                    <ul className="list-disc list-inside space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
