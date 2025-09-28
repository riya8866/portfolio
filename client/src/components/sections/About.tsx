import { motion } from "framer-motion";
import SectionTitle from "../shared/SectionTitle";

export default function About() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <SectionTitle>About Me</SectionTitle>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-blue-50 border border-grey-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <p className="text-lg text-black text-justify">
              I am currently working as an Engineer Trainee at Motherson
              Technology Services Limited. I have completed my graduation in
              Computer Science from JSS Academy of Technical Education, Noida.
              <br />
              <br />
              As a Java Fullstack Developer, I enjoy building scalable backend
              systems with Spring Boot, designing responsive frontends with
              Angular & React, and integrating databases like MySQL and
              PostgresSQL to deliver seamless applications. I focus on writing
              clean, maintainable code and solving complex problems with
              efficient solutions.
              <br />
              <br />
              I am passionate about learning new technologies and applying them
              in real-world projects. Through my work, I aim to create
              meaningful, user-friendly applications.
              <br />
              <br />
              Let’s connect and build something great together!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
