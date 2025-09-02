import Link from "next/link";

import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-start justify-around flex-wrap gap-8">
          {/* Show both Social Media and Contact Me columns */}
          {FOOTER_DATA.map((column) => (
            <div
              key={column.title}
              className="flex flex-col items-center justify-start"
            >
              <h3 className="font-bold text-[18px] mb-4 text-white">
                {column.title}
              </h3>
              <div className="flex flex-col items-center justify-center gap-3">
                {column.data.map(({ icon: Icon, name, link }) => (
                  <Link
                    key={`${column.title}-${name}`}
                    href={link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex flex-row items-center hover:text-purple-400 transition-colors duration-200"
                  >
                    {Icon && <Icon className="text-xl" />}
                    <span className="text-[15px] ml-[6px]">{name}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 mb-[20px] text-[15px] text-center border-t border-gray-700 pt-6 w-full">
          &copy; Subrat Samantaray {new Date().getFullYear()} All rights
          reserved.
        </div>
      </div>
    </div>
  );
};
