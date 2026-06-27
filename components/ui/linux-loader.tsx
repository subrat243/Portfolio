"use client";

import { useState, useEffect, Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { StarBackground } from "@/components/main/star-background";
import { Canvas } from "@react-three/fiber";

interface LogLine {
  time: string;
  status?: string;
  text: string;
}

const logLines: LogLine[] = [
  { time: "0.124531", text: "ACPI: Core revision 20230628" },
  { time: "0.245192", text: "smp: Bringing up secondary CPUs ..." },
  { time: "0.381291", text: "smp: Brought up 16 nodes, 32 CPUs" },
  { time: "0.512392", status: "OK", text: "Started udev Kernel Device Manager." },
  { time: "0.682194", status: "OK", text: "Reached target Local File Systems." },
  { time: "0.829104", status: "OK", text: "Started Network Manager." },
  { time: "0.992102", status: "OK", text: "Started System Logging Service." },
  { time: "1.329102", status: "OK", text: "Started Kaizen Portfolio Microkernel." },
  { time: "1.529103", status: "OK", text: "Initializing Next.js Virtual DOM..." },
  { time: "1.782910", status: "OK", text: "Mounting UI Components & Framer Motion..." },
];

export const LinuxLoader = () => {
  const [visibleCount, setVisibleCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timers = [
      setTimeout(() => setVisibleCount(1), 120),
      setTimeout(() => setVisibleCount(2), 240),
      setTimeout(() => setVisibleCount(3), 380),
      setTimeout(() => setVisibleCount(4), 510),
      setTimeout(() => setVisibleCount(5), 680),
      setTimeout(() => setVisibleCount(6), 820),
      setTimeout(() => setVisibleCount(7), 990),
      setTimeout(() => setVisibleCount(8), 1320),
      setTimeout(() => setVisibleCount(9), 1520),
      setTimeout(() => setVisibleCount(10), 1780),
      setTimeout(() => setLoading(false), 2600),
    ];

    const handleKeyDown = () => setLoading(false);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02, filter: "blur(4px)" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-black text-zinc-200 font-mono p-6 md:p-10 overflow-hidden flex flex-col justify-between select-none cursor-pointer"
          onClick={() => setLoading(false)}
        >
          {/* Starry Background */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-70">
            <Canvas camera={{ position: [0, 0, 1] }} style={{ pointerEvents: "none" }}>
              <Suspense fallback={null}>
                <StarBackground />
              </Suspense>
            </Canvas>
          </div>

          {/* Logs Container */}
          <div className="relative z-10 max-w-5xl space-y-1.5 md:space-y-2">
            {logLines.slice(0, visibleCount).map((line, index) => (
              <div
                key={index}
                className="flex items-start leading-relaxed text-xs md:text-sm lg:text-base tracking-wide"
              >
                <span className="text-zinc-500 w-[90px] md:w-[110px] shrink-0 font-normal">
                  {`[  ${line.time}]`}
                </span>
                <div className="flex items-center flex-1">
                  {line.status ? (
                    <span className="text-zinc-300 shrink-0 mr-3 font-normal">
                      [ &nbsp;<span className="text-green-500 font-bold">{line.status}</span>&nbsp; ]
                    </span>
                  ) : null}
                  <span className="text-zinc-200 font-normal">{line.text}</span>
                </div>
              </div>
            ))}

            {/* Blinking Cursor */}
            <div className="pt-1">
              <span className="animate-pulse w-2.5 h-4 md:w-3.5 md:h-5 bg-zinc-200 inline-block align-middle" />
            </div>
          </div>

          {/* Skip Hint */}
          <div className="relative z-10 text-center text-zinc-600 text-xs md:text-sm animate-pulse pt-8">
            [ Click or press any key to skip ]
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
