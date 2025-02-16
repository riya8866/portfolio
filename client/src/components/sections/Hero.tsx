import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileDown, ArrowDown } from "lucide-react";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
      staggerChildren: 0.05,
    },
  },
};

const charVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Hero() {
  const name = "I am Riya Jain";
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background z-0" />

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="text-center">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            {name.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={charVariants}
                className="inline-block"
                style={{ opacity: char === " " ? 0 : 1 }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <b>Software Engineer</b> : A self-taught developer with an interest
            in Computer Science.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <Button size="lg" onClick={scrollToContact} className="group">
              Let's Connect
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() =>
                window.open(
                  "/public/software_developer_riya8866@gmail.com.pdf",
                  "_blank"
                )
              }
              className="group"
            >
              Download Resume
              <FileDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
