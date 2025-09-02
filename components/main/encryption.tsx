"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { slideInFromTop } from "@/lib/motion";

export const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full -z-20">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          Best Practices{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            for
          </span>{" "}
          Security.
        </motion.div>
      </div>

      <div className="absolute inset-0 z-[20] pointer-events-none">
        {/* Centered lock */}
        <div className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto flex flex-col items-center">
          <Image
            src="/lock-top.png"
            alt="Lock top"
            width={50}
            height={50}
            className="translate-y-5 transition-all duration-200"
          />
          <Image
            src="/lock-main.png"
            alt="Lock main"
            width={90}
            height={90}
            className="z-10"
          />
          <div className="Welcome-box px-[15px] py-[4px] z-[20] border my-[20px] border-[#7042F88B] opacity-[0.9] text-center">
            <h1 className="Welcome-text text-[16px]">Security best practices focus on building strong defenses against cyber threats. <br />This includes using encryption to protect sensitive data, keeping software and systems updated,<br /> enforcing strong authentication, monitoring for unusual activity, and educating users about safe practices.<br /> By following these principles, systems remain resilient and trustworthy.</h1>
          </div>
        </div>

      </div>

      <div className="absolute z-[20] bottom-[10px] px-[5px]">
        <div className="cursive text-[20px] font-medium text-center text-gray-300">
          Secure your data with end-to-end encryption.
        </div>
      </div>

      <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="metadata"
          className="w-full h-auto"
        >
          <source src="/videos/encryption-bg.webm" type="video/webm" />
        </video>
      </div>
    </div>
  );
};
