"use client";
import React from "react";
import { motion } from "framer-motion";
import { LinkPreview } from "@/components/ui/link-preview";

export default function LinkPreviewDemo() {
  return (
    <div className="flex justify-center items-center py-16 flex-col px-4 w-full relative z-20 pointer-events-auto">
      <p className="text-[#394867] text-xl md:text-3xl max-w-3xl mx-auto mb-10 text-center font-medium">
        <LinkPreview url="https://tailwindcss.com" className="font-bold text-[#212A3E]">
          Tailwind CSS
        </LinkPreview>{" "}
        and{" "}
        <LinkPreview url="https://framer.com/motion" className="font-bold text-[#212A3E]">
          Framer Motion
        </LinkPreview>{" "}
        are a great way to build modern websites.
      </p>
      <p className="text-[#394867] text-xl md:text-3xl max-w-3xl mx-auto text-center font-medium">
        Visit{" "}
        <LinkPreview
          url="https://ui.aceternity.com"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#212A3E] to-[#394867]"
        >
          Aceternity UI
        </LinkPreview>{" "}
        for amazing Tailwind and Framer Motion components.
      </p>
    </div>
  );
}
