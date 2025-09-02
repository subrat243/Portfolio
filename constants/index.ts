import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const PROJECTS = [
  {
    title: "Automated Dark Web Monitoring Tool",
    description:
      "Regex-based threat detection using Ahmia.fi and Tor exit node rotation; improved search coverage by 40% and anonymity via automated IP rotation.",
    image: "/projects/project-1.png",
    link: "https://github.com/subrat243",
  },
  {
    title: "Network Stress Testing with IP Spoofing",
    description:
      "Traffic and packet generation using Scapy for performance and resilience testing; enhanced monitoring and 30% anomaly detection improvement.",
    image: "/projects/project-2.png",
    link: "https://github.com/subrat243",
  },
  {
    title: "Dynamic Packet Generation & Analysis",
    description:
      "Custom packet crafting, deep packet inspection, and vulnerability analysis pipelines to identify network misconfigurations and weak points.",
    image: "/projects/project-3.png",
    link: "https://github.com/subrat243",
  },
] as const;

export const FOOTER_DATA = [
  
  {
    title: "Contact Me",
    data: [
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com/in/subrat243",
      },
      {
        name: "X",
        icon: RxTwitterLogo,
        link: "https://x.com/subrat243",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/subrat243",
      },
      {
        name: "Email",
        icon: null,
        link: "https://mail.google.com/mail/?view=cm&to=subratsamantaray43@gmail.com",
      },
    ],
  },
  {
    title: "About",
    data: [],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "/",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

