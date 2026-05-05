"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  FileText, 
  ExternalLink 
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";

function LinkedinIcon({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormState({ name: "", email: "", subject: "", message: "" });
    
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: portfolioData.personal.email,
      href: `mailto:${portfolioData.personal.email}`,
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    {
      icon: Phone,
      label: "Phone",
      value: (portfolioData.personal as any).phone,
      href: `tel:${(portfolioData.personal as any).phone}`,
      color: "text-green-500",
      bg: "bg-green-500/10"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Direct Chat",
      href: portfolioData.personal.socials.whatsapp,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10"
    }
  ];

  const statusColors = {
    available: "bg-green-500",
    busy: "bg-red-500",
    limited: "bg-yellow-500"
  };

  return (
    <section id="contact" className="py-32 relative bg-white dark:bg-black transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left Side: Info & Hire Me */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-6">
                <span className={`w-2 h-2 rounded-full animate-pulse ${statusColors[(portfolioData.personal as any).status as keyof typeof statusColors]}`} />
                <span>{(portfolioData.personal as any).availability}</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                Let's Build Something <span className="text-blue-600 dark:text-blue-500">Exceptional</span>.
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
                Whether you have a specific project in mind or just want to explore how we can work together, I'm always open to new opportunities.
              </p>
            </motion.div>

            {/* Quick Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-6 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl ${method.bg} ${method.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <method.icon size={24} />
                  </div>
                  <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-1">{method.label}</h3>
                  <p className="text-gray-900 dark:text-white font-semibold truncate">{method.value}</p>
                </motion.a>
              ))}
              
              {/* Hire Me / Resume Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="p-6 rounded-2xl bg-blue-600 text-white shadow-xl shadow-blue-600/20 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-sm font-bold opacity-80 uppercase tracking-widest mb-1">Professional CV</h3>
                  <p className="font-semibold mb-4">View my full career path</p>
                </div>
                <button className="flex items-center justify-center space-x-2 bg-white text-blue-600 px-4 py-2 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                  <FileText size={18} />
                  <span>Download CV</span>
                </button>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <a href={portfolioData.personal.socials.linkedin} className="text-gray-400 hover:text-blue-500 transition-colors">
                <LinkedinIcon size={24} />
              </a>
              <a href={portfolioData.personal.socials.github} className="text-gray-400 hover:text-white transition-colors">
                <GithubIcon size={24} />
              </a>
              <div className="h-8 w-px bg-gray-200 dark:bg-white/10 mx-2" />
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 dark:text-gray-500 font-bold mb-1">Location</span>
                <span className="text-sm font-bold text-gray-700 dark:text-gray-300 flex items-center gap-1">
                  <MapPin size={14} className="text-blue-500" />
                  {portfolioData.personal.location}
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl dark:shadow-none backdrop-blur-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Full Name</label>
                    <input
                      required
                      type="text"
                      placeholder="John Doe"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all dark:text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Email Address</label>
                    <input
                      required
                      type="email"
                      placeholder="john@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all dark:text-white"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Subject</label>
                  <input
                    required
                    type="text"
                    placeholder="Project Inquiry"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all dark:text-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Your Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your project..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all dark:text-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gray-900 dark:bg-white text-white dark:text-black font-bold py-4 rounded-xl flex items-center justify-center space-x-2 hover:bg-gray-800 dark:hover:bg-gray-100 transition-all active:scale-95 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>

              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-3xl"
                  >
                    <div className="text-center p-8">
                      <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 size={32} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                      <p className="text-gray-600 dark:text-gray-400">Thank you for reaching out. I'll get back to you shortly 🚀</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
