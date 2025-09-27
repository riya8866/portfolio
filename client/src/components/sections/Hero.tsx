import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileDown, Linkedin, Github, Mail, ChevronDown } from "lucide-react";

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
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  const name = "I am Riya Jain";
  const highlight = "Riya Jain";

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen pt-20 pb-0 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-purple-50 z-0" />

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="text-center">
          {/* Animated Heading */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            {name.split(" ").map((word, index) => {
              const isHighlight = highlight.includes(word);
              return (
                <span
                  key={index}
                  className={
                    isHighlight
                      ? "bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent"
                      : ""
                  }
                >
                  {word.split("").map((char, charIndex) => (
                    <motion.span
                      key={charIndex}
                      variants={charVariants}
                      className="inline-block"
                      style={{ opacity: char === " " ? 0 : 1 }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}{" "}
                </span>
              );
            })}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <b>Software Engineer</b> : A self-taught developer with an interest
            in Computer Science.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <Button
              size="lg"
              onClick={scrollToContact}
              className="group px-8 py-8 text-xl  text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 transition-colors duration-300" // increased padding and text size
            >
              Let's Connect
            </Button>

            <Button
              size="lg"
              onClick={() =>
                window.open(
                  "https://docs.google.com/document/d/1awwJEAVtgHLdzOcUE0mbomB7zi5sHjN3qS5Hf5v7LOs/edit?usp=sharing",
                  "_blank"
                )
              }
              className="group bg-white text-black hover:bg-gray-100 border border-gray-300 px-8 py-8 text-xl" // increased padding and text size
            >
              Download Resume
              <FileDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="flex justify-center gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-primary"
              onClick={() => window.open("mailto:riya8866@gmail.com", "_blank")}
            >
              <Mail size={20} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-primary"
              onClick={() =>
                window.open("https://www.linkedin.com/in/riya-in/", "_blank")
              }
            >
              <Linkedin size={20} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-primary"
              onClick={() =>
                window.open("https://github.com/riya8866", "_blank")
              }
            >
              <Github size={20} />
            </Button>
          </motion.div>

          {/* Scroll Down Arrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
            className="mt-2" // Add a small margin-top if needed
          >
            <Button
              variant="ghost"
              size="icon"
              className="animate-bounce"
              onClick={scrollToAbout}
            >
              <ChevronDown size={24} />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
