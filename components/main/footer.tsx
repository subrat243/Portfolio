import Link from "next/link";

import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          {/* Only show Contact Me column */}
          {FOOTER_DATA.filter((c) => c.title === "Contact Me").map((column) => (
            <div
              key={column.title}
              className="w-full h-auto flex flex-col items-center justify-start"
            >
              <h3 className="font-bold text-[16px] mb-2">{column.title}</h3>
              <div className="flex flex-row items-center justify-center gap-6 flex-wrap">
                {column.data.map(({ icon: Icon, name, link }) => (
                  <Link
                    key={`${column.title}-${name}`}
                    href={link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex flex-row items-center my-[8px]"
                  >
                    {Icon && <Icon />}
                    <span className="text-[15px] ml-[6px]">{name}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Subrat Samantaray {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </div>
  );
};
