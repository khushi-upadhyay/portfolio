"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import toast, { Toaster } from 'react-hot-toast';

export function Contact() {
  const form = useRef<HTMLFormElement | null>(null);

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
  //   const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  //   const key = process.env.NEXT_PUBLIC_PUBLIC_KEY;

  //   if (!serviceId || !templateId || !key) {
  //     console.error(
  //       "Missing environment variables. Please ensure Service ID, Template ID, and Public Key are properly set."
  //     );
  //     toast.error("Failed to send message. Please try again later.");
  //     return;
  //   }

  //   if (form.current) {
  //     emailjs.sendForm(serviceId, templateId, form.current, key).then(
  //       () => {
  //         console.log("Email successfully sent!");
  //         toast.success("Message Sent!");
  //         e.target.reset();
  //       },
  //       (error) => {
  //         console.error("Email sending failed. Error details:", error);
  //         toast.error("Failed to send message. Please try again later.");
  //       }
  //     );
  //   } else {
  //     console.error("Form reference is null. Unable to send email.");
  //     toast.error("Failed to send message. Please try again later.");
  //   }
  // };
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
  
          // Reset the form using the form reference
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
    <div
      className="flex flex-col md:flex-row items-center justify-center py-20 h-screen md:h-auto dark:bg-neutral-950 bg-white relative w-full space-y-8 md:space-y-0 md:space-x-8"
      id="Contact"
    >
      <div className="flex-1 flex flex-col items-center justify-center space-y-8 w-full max-w-lg">
        <p className="text-black dark:text-white text-[3.5rem] font-semibold">
          Let&apos;s Connect<span className="text-[#5046e6]">.</span>
        </p>
        <form
          ref={form}
          className="flex flex-col space-y-4 w-full"
          onSubmit={sendEmail}
        >
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-24 mb-4">
            <LabelInputContainer>
              <Label htmlFor="fullname">Full Name</Label>
              <Input
                id="fullname"
                name="user_name" 
                placeholder="John Doe"
                type="text"
                className="w-full"
              />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="user_email" // Ensure name matches the expected emailjs format
              placeholder="johndoe@protonmail.com"
              type="email"
              className="w-full"
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4 flex-grow">
            <Label htmlFor="message">Message</Label>
            <textarea
              id="message"
              placeholder="Type your message here...."
              name="message"
              required
              className="flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] transition duration-400"
            />
          </LabelInputContainer>
          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Send Message &rarr;
            <BottomGradient />
          </button>
          <Toaster />

          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        </form>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
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