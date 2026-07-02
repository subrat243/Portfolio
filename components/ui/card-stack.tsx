"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
  image?: string;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    startFlipping();
    return () => clearInterval(interval);
  }, []);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  return (
    <>
      <div className="relative h-72 w-full max-w-[320px] mx-auto flex items-center justify-center mt-6 mb-2 pointer-events-auto">
        {cards.map((card, index) => {
          return (
            <motion.div
              key={card.id}
              onClick={() => setSelectedCard(card)}
              className="absolute bg-white h-[270px] w-full rounded-2xl p-4 shadow-lg border border-[#9BA4B5]/40 flex flex-col justify-between pointer-events-auto hover:border-[#212A3E] transition-colors duration-300 cursor-pointer group"
              style={{
                transformOrigin: "top center",
              }}
              animate={{
                top: index * -CARD_OFFSET,
                scale: Math.max(0, 1 - index * SCALE_FACTOR), // decrease scale for cards that are behind, prevent negative
                zIndex: cards.length - index, // decrease z-index for the cards that are behind
                opacity: index < 3 ? 1 - index * 0.2 : 0, // fade out and hide cards deeper in the stack
              }}
            >
              <div className="font-normal text-[#212A3E] flex-1 flex items-center justify-center overflow-hidden rounded-xl bg-[#F1F6F9] border border-[#9BA4B5]/20 mb-3 relative group-hover:opacity-95 transition-opacity pointer-events-none">
                {card.content}
                <div className="absolute inset-0 bg-[#212A3E]/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3 py-1 bg-[#212A3E] text-white text-xs font-semibold rounded-full shadow-md backdrop-blur-sm">
                    Click to View
                  </span>
                </div>
              </div>
              <div className="flex flex-col text-left pointer-events-none">
                <p className="text-[#212A3E] font-bold text-sm truncate">
                  {card.name}
                </p>
                <p className="text-[#394867] font-medium text-xs truncate">
                  {card.designation}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Popup Modal for Certificate Image via React Portal */}
      {mounted &&
        typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {selectedCard && selectedCard.image && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCard(null)}
                className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 pointer-events-auto"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.9, opacity: 0, y: 20 }}
                  transition={{ type: "spring", damping: 20, stiffness: 300 }}
                  onClick={(e) => e.stopPropagation()}
                  className="bg-white rounded-2xl p-6 max-w-3xl w-full shadow-2xl border border-[#9BA4B5]/40 flex flex-col relative overflow-hidden pointer-events-auto"
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedCard(null)}
                    className="absolute top-4 right-4 z-10 p-2 text-[#212A3E] hover:bg-[#212A3E]/10 rounded-full transition-colors duration-200 cursor-pointer pointer-events-auto"
                    aria-label="Close modal"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>

                  {/* Certificate Image Container */}
                  <div className="relative w-full aspect-[16/9] bg-[#F1F6F9] rounded-xl overflow-hidden mb-6 border border-[#9BA4B5]/20 flex items-center justify-center p-4">
                    <Image
                      src={selectedCard.image}
                      alt={selectedCard.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 800px"
                      className="object-contain p-2"
                      priority
                    />
                  </div>

                  {/* Certificate Details */}
                  <div className="flex flex-col text-left">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-[#212A3E]">
                        {selectedCard.name}
                      </h3>
                      <span className="px-3 py-1 bg-[#394867]/10 border border-[#394867]/20 rounded-full text-xs font-semibold text-[#394867]">
                        Verified
                      </span>
                    </div>
                    <p className="text-base text-[#394867]/90 leading-relaxed">
                      {selectedCard.designation}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
};
