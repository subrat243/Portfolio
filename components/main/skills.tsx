"use client";
import { SkillText } from "@/components/sub/skill-text";
import { motion } from "framer-motion";

export const Skills = () => {
  return (
    <section
      id="skills"
      style={{ transform: "scale(0.9)" }}
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
    >
      <SkillText />

      {/* Category Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 w-full px-8 mt-6">
        {[
          {
            title: "Security Tools",
            items: ["Nmap", "Wireshark", "Metasploit", "Nessus", "Burp Suite"],
          },
          {
            title: "Security Practices",
            items: [
              "VAPT",
              "Firewall Management",
              "Cryptography",
              "VPNs",
              "IDS/IPS",
              "SIEM",
              "Antivirus",
            ],
          },
          {
            title: "Frameworks & Standards",
            items: ["NIST", "ISO 27001/27002", "PCI DSS", "HIPAA", "GDPR"],
          },
          {
            title: "Operating Systems & Virtualization",
            items: ["Linux", "Windows", "VMWare", "VirtualBox"],
          },
          {
            title: "Network Concepts",
            items: [
              "OSI Model",
              "TCP/IP",
              "DHCP",
              "ARP",
              "HTTP/HTTPS",
              "DNS",
              "Subnetting",
            ],
          },
        ].map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-[#0b0b0b]/70 border border-[#2A0E61] rounded-2xl p-7 min-h-[220px] text-gray-200 shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4 text-white">{cat.title}</h3>
            <div className="flex flex-wrap gap-3">
              {cat.items.map((name) => (
                <span
                  key={`${cat.title}-${name}`}
                  className="text-base px-4 py-1.5 rounded-full bg-[#120b24] border border-[#2A0E61]"
                >
                  {name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="metadata"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
