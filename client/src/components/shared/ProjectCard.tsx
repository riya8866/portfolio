import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  onClick: () => void;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  image,
  onClick
}: ProjectCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
      }}
    >
      <Card 
        className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300"
        onClick={onClick}
      >
        <CardContent className="p-0">
          <div className="relative overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <ArrowRight className="w-8 h-8 text-white transform translate-x-4 group-hover:translate-x-0 transition-transform" />
            </div>
          </div>

          <div className="p-6 space-y-4">
            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
              {title}
            </h3>

            <p className="text-muted-foreground line-clamp-2">
              {description}
            </p>

            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <Badge key={index} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}