"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
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

  useEffect(() => {
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
    <div className="relative h-52 w-full max-w-[320px] mx-auto flex items-center justify-center my-2">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute bg-white h-48 w-full rounded-2xl p-4 shadow-lg border border-[#9BA4B5]/40 flex flex-col justify-between pointer-events-auto hover:border-[#212A3E] transition-colors duration-300"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, // decrease z-index for the cards that are behind
            }}
          >
            <div className="font-normal text-[#212A3E] flex-1 flex items-center justify-center overflow-hidden rounded-xl bg-[#F1F6F9] border border-[#9BA4B5]/20 mb-3 relative">
              {card.content}
            </div>
            <div className="flex flex-col">
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
  );
};
