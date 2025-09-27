import { motion } from "framer-motion";
import {
  SiReact,
  SiTailwindcss,
  SiSpringboot,
  SiHibernate,
  SiGit,
  SiMysql,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiPython,
  SiPostman,
  SiLinux,
  SiAngular,
  SiOpenjdk,
} from "react-icons/si";
import { Card, CardContent } from "@/components/ui/card";
import type { IconType } from "react-icons";
import SectionTitle from "../shared/SectionTitle";

// ---------------- SkillCard ----------------
interface SkillCardProps {
  name: string;
  Icon: IconType;
  color: string;
}

const SkillCard = ({ name, Icon, color }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="group hover:shadow-lg transition-shadow bg-blue-50">
        <CardContent className="p-4 text-center">
          <Icon
            className="w-12 h-12 mx-auto mb-2 transition-transform group-hover:scale-110"
            color={color}
          />
          <p className="font-medium text-sm">{name}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

// ---------------- Skills Section ----------------
export default function Skills() {
  const technicalSkills = [
    { name: "Java", icon: SiOpenjdk, color: "#007396" },
    { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
    { name: "Hibernate", icon: SiHibernate, color: "#59666C" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "Angular", icon: SiAngular, color: "#DD0031" },
    { name: "React.js", icon: SiReact, color: "#61DAFB" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "HTML", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS", icon: SiCss3, color: "#1572B6" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "Linux", icon: SiLinux, color: "#FCC624" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  ];

  return (
    <section className="py-10 bg-white" id="skills">
      <div className="container mx-auto px-4">
        <SectionTitle>Technical Skills</SectionTitle>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mt-6">
          {technicalSkills.map((skill, index) => (
            <SkillCard
              key={index}
              name={skill.name}
              Icon={skill.icon}
              color={skill.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
