"use client";

import { motion } from "framer-motion";

export const HeroModel = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
      className="flex-1 w-full h-[400px] md:h-[500px] lg:h-[600px] relative order-1 lg:order-2 pointer-events-auto"
    >
      <iframe
        title="Game Ready: Cyber Deck"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; fullscreen; xr-spatial-tracking"
        src="https://sketchfab.com/models/3ff72ea4eb9a4b929fc2ff199cb799a4/embed?ui_controls=0&ui_infos=0&ui_stop=0&ui_hint=0&ui_settings=0&ui_vr=0&ui_ar=0&ui_help=0&ui_annotations=0&ui_watermark=0&ui_watermark_link_only=1&autostart=1&transparent=1"
        className="w-full h-full border-0 rounded-lg"
      />
    </motion.div>
  );
};
