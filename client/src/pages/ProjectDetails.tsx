import { useParams } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

const projects = {
  doorway: {
    title: "Doorway - Full Stack Job Portal",
    description: `A personal project to connect job seekers and employers through a robust, feature-rich job portal, built with modern web technologies for seamless functionality and user-centric design.`,
    features: [
      "Developed a dynamic frontend using React JS, Tailwind CSS, and Shadcn UI for a responsive, user-friendly interface",
      "Powered by Supabase for real-time database management and serverless APIs",
      "Integrated Clerk for secure authentication with social login and role-based access control",
      "Key features: Job posting, resume uploads, application tracking, and real-time notifications",
      "Designed for scalability and performance with lazy loading and mobile-first responsiveness",
    ],
    technologies: [
      "React JS",
      "Tailwind CSS",
      "Supabase",
      "Clerk",
      "Shadcn UI",
    ],
    image: "https://placehold.co/1200x600/333/white?text=Doorway+Project",
    github: "https://github.com/riya8866/doorway",
    demo: "#",
  },
  BChat: {
    title: "BChat - Full Stack Chatting App",
    description: `A personal project for seamless real-time messaging with a secure and intuitive experience.`,
    features: [
      "Developed a dynamic frontend using React.js and Daisy UI.",
      "Powered by Node.js and Express.js for backend handling and real-time communication.",
      "Integrated Socket.io for instant messaging and MongoDB for encrypted data storage.",
      "Designed for scalability and smooth performance.",
    ],
    technologies: ["React JS", "Parcel", "Tailwind CSS", "MongoDB", "Express"],
    image: "https://placehold.co/1200x600/333/white?text=BChat",
    github: "https://github.com/riya8866/BChat",
    demo: "#",
  },
};

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects[id as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card>
          <CardContent className="p-6">
            <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
            <Link href="/#projects">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen py-20"
    >
      <div className="container mx-auto px-4">
        <Link href="/#projects">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </Link>

        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className="space-y-8"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
          />

          <div className="space-y-6">
            <h1 className="text-4xl font-bold">{project.title}</h1>

            <p className="text-lg text-muted-foreground">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Key Features</h2>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4">
              <Button
                size="lg"
                onClick={() => window.open(project.github, "_blank")}
                className="gap-2"
              >
                <Github className="h-5 w-5" />
                View Source Code
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open(project.demo, "_blank")}
                className="gap-2"
              >
                <ExternalLink className="h-5 w-5" />
                Live Demo
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
