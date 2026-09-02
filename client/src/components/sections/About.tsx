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
              I’m a Software Engineer and Java Full Stack Developer focused on
              building scalable, high-performance applications that solve
              real-world problems.
              <br />
              Currently at Motherson Technology Services, I work across the full
              stack with Java, Spring Boot, Angular, React, REST APIs, and
              databases . I’ve contributed to production-grade Warehouse
              Management Systems deployed across Motherson plants in India, with
              modules handling 100,000+ transactions daily.
              <br />
              Beyond writing code, I contribute to architecture, sprint
              planning, performance optimization, and production deployments. I
              enjoy solving complex engineering challenges and turning them into
              solutions that are scalable, maintainable, and built for
              real-world impact.
              <br />
              Driven by curiosity, clean engineering, and continuous
              improvement, I’m always looking for better ways to build,
              optimize, and create.
              <br />
              <b>
                I don’t just build applications—I build solutions designed to
                last.
              </b>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
