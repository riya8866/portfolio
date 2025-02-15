import { motion } from "framer-motion";
import SectionTitle from "../shared/SectionTitle";

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
          className="max-w-3xl mx-auto"
        >
          <p className="text-lg text-muted-foreground">
            Currently a final year student at JSS Academy of Technical Education, Noida. 
            I am a passionate React developer skilled in building user-centric applications 
            using modern frameworks like React and Tailwind CSS. Proficient in Data Structures 
            and Algorithms with a growing interest in Machine Learning.
          </p>
        </motion.div>
      </div>
    </section>
  );
}