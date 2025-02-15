import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
      staggerChildren: 0.05
    }
  }
};

const charVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0
  }
};

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-4 lg:px-8">
      <div className="max-w-screen-xl mx-auto w-full">
        <div className="space-y-2">
          <motion.p 
            className="text-primary text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Hey there! I'm-
          </motion.p>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Riya Jain.
          </motion.h1>

          <motion.div 
            className="max-w-2xl space-y-6 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-2xl text-muted-foreground">
              Software Engineer. A self-taught developer with an interest in Computer Science.
            </h2>

            <p className="text-muted-foreground">
              Currently specializing in Frontend (React / Next.js)
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}