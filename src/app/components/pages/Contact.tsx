"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import toast, { Toaster } from 'react-hot-toast';

export function Contact() {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const key = process.env.NEXT_PUBLIC_PUBLIC_KEY;
  
    if (!serviceId || !templateId || !key) {
      console.error(
        "Missing environment variables. Please ensure Service ID, Template ID, and Public Key are properly set."
      );
      toast.error("Failed to send message. Please try again later.");
      return;
    }
  
    if (form.current) {
      emailjs.sendForm(serviceId, templateId, form.current, key).then(
        () => {
          console.log("Email successfully sent!");
          toast.success("Message Sent!");
          form.current?.reset();
        },
        (error) => {
          console.error("Email sending failed. Error details:", error);
          toast.error("Failed to send message. Please try again later.");
        }
      );
    } else {
      console.error("Form reference is null. Unable to send email.");
      toast.error("Failed to send message. Please try again later.");
    }
  };
  
  return (
    <div id="Contact" className="relative min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
      {/* Smooth gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-purple-100/20 to-pink-100/20 dark:from-gray-900/50 dark:via-purple-900/20 dark:to-pink-900/20"></div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 left-32 w-12 h-12 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and innovation.
          </p>
        </div>

        <div className="space-y-12">
          {/* Contact Form - Centered */}
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Send me a message
              </span>
            </h3>
            
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <LabelInputContainer>
                  <Label htmlFor="firstname">First name</Label>
                  <Input id="firstname" name="firstname" placeholder="John" type="text" />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="lastname">Last name</Label>
                  <Input id="lastname" name="lastname" placeholder="Doe" type="text" />
                </LabelInputContainer>
              </div>
              <LabelInputContainer>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" name="email" placeholder="john@example.com" type="email" />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="message">Message</Label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  className="flex min-h-[80px] w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:cursor-not-allowed disabled:opacity-50"
                  rows={4}
                />
              </LabelInputContainer>
              <button
                className="group/btn relative block w-full rounded-md bg-gradient-to-br from-purple-400 to-pink-400 p-[2px] font-medium text-white transition-all duration-300 hover:shadow-[0_0_2rem_-0.5rem_#a855f7] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                type="submit"
              >
                <span className="block rounded-[4px] bg-gray-900 px-4 py-2 transition-all duration-300 group-hover/btn:bg-opacity-0">
                  Send Message
                </span>
              </button>
            </form>
          </div>

          {/* Social Links - Centered and Smaller */}
          <div className="text-center">
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://github.com/khushiupad"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/20 dark:border-white/20 backdrop-blur-sm hover:scale-110 transition-all duration-300 hover:shadow-xl flex items-center justify-center"
                title="GitHub"
              >
                <svg className="w-5 h-5 text-gray-700 dark:text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  GitHub
                </span>
              </a>

              <a
                href="https://linkedin.com/in/khushi-upadhyay"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/20 dark:border-white/20 backdrop-blur-sm hover:scale-110 transition-all duration-300 hover:shadow-xl flex items-center justify-center"
                title="LinkedIn"
              >
                <svg className="w-5 h-5 text-gray-700 dark:text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  LinkedIn
                </span>
              </a>

              <a
                href="https://bento.me/khushiupadhyay"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/20 dark:border-white/20 backdrop-blur-sm hover:scale-110 transition-all duration-300 hover:shadow-xl flex items-center justify-center"
                title="Bento"
              >
                <svg className="w-5 h-5 text-gray-700 dark:text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Bento
                </span>
              </a>

              <a
                href="https://x.com/khushiupadhyay"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/20 dark:border-white/20 backdrop-blur-sm hover:scale-110 transition-all duration-300 hover:shadow-xl flex items-center justify-center"
                title="X (Twitter)"
              >
                <svg className="w-5 h-5 text-gray-700 dark:text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  X (Twitter)
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Toaster position="bottom-right" />
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute -inset-px bg-gradient-to-r from-[#a855f7] to-[#ec4899] rounded-xl blur" />
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute -inset-px bg-gradient-to-r from-[#a855f7] to-[#ec4899] rounded-xl blur" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
export default Contact;