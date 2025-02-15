import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  demo: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  image,
  github,
  demo
}: ProjectCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
      }}
    >
      <Card className="overflow-hidden group">
        <CardContent className="p-0">
          <div className="relative overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          
          <div className="p-6 space-y-4">
            <h3 className="text-xl font-semibold">{title}</h3>
            
            <p className="text-muted-foreground">{description}</p>
            
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <Badge key={index} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
            
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="sm"
                className="gap-2"
                onClick={() => window.open(github, '_blank')}
              >
                <Github className="h-4 w-4" />
                Code
              </Button>
              <Button
                size="sm"
                className="gap-2"
                onClick={() => window.open(demo, '_blank')}
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
