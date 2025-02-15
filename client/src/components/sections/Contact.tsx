import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, Mail } from "lucide-react";
import SectionTitle from "../shared/SectionTitle";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      await emailjs.send(
        "service_t2yc014", // Replace with your EmailJS service ID
        "template_zwqr876", // Replace with your EmailJS template ID
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
          to_email: "riya8866@gmail.com", // Your email address
        },
        "vjsrG03vCy-lp8IYh" // Replace with your EmailJS public key
      );

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-background/50" id="contact">
      <div className="container mx-auto px-4">
        <SectionTitle>Get In Touch</SectionTitle>

        <motion.div
          className="grid md:grid-cols-2 gap-12 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
            <p className="text-muted-foreground mb-8">
              Feel free to reach out for collaborations or just a friendly
              hello!
            </p>

            <div className="space-y-4">
              <a
                href="https://github.com/riya8866"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
                <span>github.com/riya8866</span>
              </a>
              <a
                href="https://www.linkedin.com/in/riya-jain-in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span>linkedin.com/in/riya-jain-in</span>
              </a>
              <a
                href="mailto:riya8866@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>riya8866@gmail.com</span>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <Input
                placeholder="Your Name"
                {...register("name")}
                className={errors.name ? "border-destructive" : ""}
              />
              {errors.name && (
                <p className="text-sm text-destructive mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <Input
                type="email"
                placeholder="Your Email"
                {...register("email")}
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && (
                <p className="text-sm text-destructive mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <Textarea
                placeholder="Your Message"
                rows={5}
                {...register("message")}
                className={errors.message ? "border-destructive" : ""}
              />
              {errors.message && (
                <p className="text-sm text-destructive mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
