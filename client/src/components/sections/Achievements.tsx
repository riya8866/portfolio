import { motion } from "framer-motion";
import { Award, BookOpen, Users, Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SectionTitle from "../shared/SectionTitle";

const achievements = [
  {
    icon: BookOpen,
    title: "Research Publication",
    description: "Published a review paper on Integrated Pothole Detection and Damage Assessment Model"
  },
  {
    icon: Award,
    title: "IIT Delhi Selection",
    description: "Selected among 20 students from 500 applicants for Graphics & Vision Summer School 2024"
  },
  {
    icon: Code,
    title: "Google Summer of Code",
    description: "Won custom t-shirts as prize in Google Summer of Code 2018"
  },
  {
    icon: Users,
    title: "Leadership Role",
    description: "Database Head at Cyber Crew Club and Cultural Head of house in school"
  }
];

export default function Achievements() {
  return (
    <section className="py-20 bg-background" id="achievements">
      <div className="container mx-auto px-4">
        <SectionTitle>Achievements</SectionTitle>

        <motion.div
          className="grid md:grid-cols-2 gap-6 mt-12"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <achievement.icon className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                      <p className="text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
