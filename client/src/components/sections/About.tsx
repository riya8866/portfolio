import { motion } from "framer-motion";
import { SiReact, SiTailwindcss, SiNodedotjs, SiSupabase, SiGit, SiFigma, SiPython, SiOpenjdk, SiCplusplus, SiMysql, SiHtml5, SiCss3, SiJavascript, SiTypescript } from "react-icons/si";
import SkillCard from "../shared/SkillCard";
import SectionTitle from "../shared/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";

const technicalSkills = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Java", icon: SiOpenjdk, color: "#007396" },
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss3, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" }
];

const softSkills = [
  "Problem Solving",
  "Quick Learner",
  "Conflict Resolution",
  "Team Work",
  "Leadership"
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
          className="grid md:grid-cols-2 gap-12 items-start"
        >
          {/* Left Column: About Text */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground">
              Passionate React developer skilled in building user-centric applications using modern frameworks like React and
              Tailwind CSS. Proficient in Data Structures and Algorithms with a growing interest in Machine Learning.
            </p>

            <div>
              <h3 className="text-xl font-semibold mb-3">Education</h3>
              <p className="text-muted-foreground">
                B.Tech in Computer Science and Engineering<br />
                JSS Academy of Technical Education, Noida<br />
                Expected Graduation: 2025
              </p>
            </div>
          </div>

          {/* Right Column: Skills */}
          <div className="space-y-8">
            {/* Technical Skills */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
              <motion.div 
                className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
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
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
              <Card>
                <CardContent className="p-6">
                  <motion.ul 
                    className="grid grid-cols-2 gap-3"
                    variants={{
                      hidden: { opacity: 0 },
                      show: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.1
                        }
                      }
                    }}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                  >
                    {softSkills.map((skill, index) => (
                      <motion.li 
                        key={index}
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          show: { opacity: 1, x: 0 }
                        }}
                        className="flex items-center gap-2 text-muted-foreground"
                      >
                        <span className="w-2 h-2 bg-primary rounded-full" />
                        {skill}
                      </motion.li>
                    ))}
                  </motion.ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}