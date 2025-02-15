import { motion } from "framer-motion";
import { useLocation } from "wouter";
import ProjectCard from "../shared/ProjectCard";
import SectionTitle from "../shared/SectionTitle";

const projects = [
  {
    id: "doorway",
    title: "Doorway - Job Portal",
    description: "A full-stack job portal connecting job seekers and employers with features like job posting, resume uploads, and real-time notifications.",
    technologies: ["React", "Tailwind CSS", "Supabase", "Clerk"],
    image: "https://placehold.co/600x400/333/white?text=Doorway",
    github: "https://github.com/riya8866/doorway",
    demo: "#"
  },
  {
    id: "youtube",
    title: "YouTube Clone",
    description: "A YouTube-like platform featuring video playback, search functionality, and responsive design built with modern web technologies.",
    technologies: ["React", "Parcel", "Tailwind CSS"],
    image: "https://placehold.co/600x400/333/white?text=YouTube+Clone",
    github: "https://github.com/riya8866/youtube-clone",
    demo: "#"
  }
];

export default function Projects() {
  const [, setLocation] = useLocation();

  return (
    <section className="py-20 bg-background/50" id="projects">
      <div className="container mx-auto px-4">
        <SectionTitle>Featured Projects</SectionTitle>

        <motion.div
          className="grid md:grid-cols-2 gap-8 mt-12"
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
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              {...project} 
              onClick={() => setLocation(`/project/${project.id}`)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}