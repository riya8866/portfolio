import { motion } from "framer-motion";
import { SiReact, SiTailwindcss, SiNodedotjs, SiSupabase, SiGit, SiFigma } from "react-icons/si";
import SkillCard from "../shared/SkillCard";
import SectionTitle from "../shared/SectionTitle";

const skills = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" }
];

export default function About() {
  return (
    <section className="py-20 bg-background" id="about">
      <div className="container mx-auto px-4">
        <SectionTitle>About Me</SectionTitle>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <p className="text-lg text-muted-foreground mb-6">
              Passionate React developer skilled in building user-centric applications using modern frameworks like React and
              Tailwind CSS. Proficient in Data Structures and Algorithms with a growing interest in Machine Learning.
            </p>
            <p className="text-lg text-muted-foreground">
              Currently pursuing B.Tech in Computer Science and Engineering at JSS Academy of Technical Education, Noida.
              Expected to graduate in 2025.
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 gap-6"
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
            {skills.map((skill, index) => (
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
