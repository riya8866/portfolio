import { motion } from "framer-motion";
import {
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiSupabase,
  SiGit,
  SiFigma,
  SiPython,
  SiOpenjdk,
  SiCplusplus,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from "react-icons/si";
import SkillCard from "../shared/SkillCard";
import SectionTitle from "../shared/SectionTitle";

const technicalSkills = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Java", icon: SiOpenjdk, color: "#007396" },
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss3, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
];

export default function Skills() {
  return (
    <section className="py-20 bg-background/50" id="skills">
      <div className="container mx-auto px-4">
        <SectionTitle>Skills</SectionTitle>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {technicalSkills.map((skill, index) => (
              <SkillCard
                key={index}
                name={skill.name}
                Icon={skill.icon}
                color={skill.color}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
