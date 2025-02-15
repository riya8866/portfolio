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
            I am a final year Computer Science student at JSS Academy of
            Technical Education, Noida with a knack for Web Development and a
            growing interest in Machine Learning. I love bringing ideas to life
            through React and creating intuitive, user-friendly web experiences.
            I believe in continuous learning and love exploring new
            technologies. Whether it’s solving a complex problem or designing a
            seamless UI, I enjoy the process of building and improving.<br></br>
            <br></br>
            Currently, I’m looking for internship opportunities where I can
            apply my skills, learn from real-world challenges, and contribute
            meaningfully. If you're looking for a dedicated developer who’s
            eager to grow, let’s connect! <br></br>
            <br></br>Let’s build something incredible together! 🚀
          </p>
        </motion.div>
      </div>
    </section>
  );
}
