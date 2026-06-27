"use client";
import React, { useState, useRef, useEffect } from "react";
import { CommandLineIcon as TerminalIcon } from "@heroicons/react/24/solid";

interface CommandHistory {
  command: string;
  output: React.ReactNode;
  cwd: string;
}

// Virtual file system for the terminal
const fileSystem: Record<string, Record<string, string>> = {
  "~": {
    "about": "dir",
    "skills": "dir",
    "projects": "dir",
    "contact": "dir",
    "flag.txt": "FLAG{h4ck_y0urs3lf_f1rst_2026}",
    "intro.txt": "Welcome to Subrat's interactive cyber terminal. Type 'help' to begin."
  },
  "~/about": {
    "bio.txt": "Subrat Samantaray is a passionate Penetration Tester, Security Researcher, and Ethical Hacker dedicated to securing modern infrastructures.",
    "education.txt": "Advanced studies in Cybersecurity, Penetration Testing, and Network Defense."
  },
  "~/skills": {
    "red_team.txt": "Vulnerability Assessment, Exploitation, Privilege Escalation, Social Engineering, Custom Payload Development.",
    "blue_team.txt": "Log Analysis, SIEM, Incident Response, Network Monitoring, Hardening, Threat Intelligence.",
    "tools.txt": "Burp Suite, Nmap, Metasploit, Wireshark, Nessus, Ghidra, Python, Bash."
  },
  "~/projects": {
    "projects_list.txt": "1. Comet Threat Intelligence\n2. AI Neural Shield\n3. Zero-Trust Security Scanner\n(Scroll down to the projects section to see more!)"
  },
  "~/contact": {
    "socials.txt": "Email: subrat@secops.local\nGitHub: github.com/subrat243\nLinkedIn: linkedin.com/in/subrat-samantaray"
  }
};

export const InteractiveTerminal = () => {
  const [cwd, setCwd] = useState<string>("~");
  const [input, setInput] = useState<string>("");
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: "",
      cwd: "~",
      output: (
        <div className="text-[#00ffcc] font-mono text-xs sm:text-sm space-y-1">
          <p className="font-bold">INITIALIZING SEC-OPS INTERACTIVE TERMINAL v2.5.4...</p>
          <p className="text-[#9BA4B5]">Connecting to subrat@sec-ops.local... ESTABLISHED.</p>
          <p className="text-[#9BA4B5]">Type <span className="text-[#00ffcc] font-bold">help</span> to view available commands.</p>
          <p className="text-xs text-[#394867]">Hint: Try <span className="text-[#00ffcc]">ls</span>, <span className="text-[#00ffcc]">cd</span>, and <span className="text-[#00ffcc]">cat flag.txt</span></p>
        </div>
      )
    }
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom on new commands
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  // Focus input on terminal click
  const handleTerminalClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const executeCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) {
      setHistory(prev => [...prev, { command: "", output: null, cwd }]);
      return;
    }

    const parts = trimmed.split(/\s+/);
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1);

    let output: React.ReactNode = null;
    let newCwd = cwd;

    switch (cmd) {
      case "help":
        output = (
          <div className="space-y-1 text-xs sm:text-sm text-[#9BA4B5]">
            <p className="text-[#00ffcc] font-bold">AVAILABLE COMMANDS:</p>
            <div className="grid grid-cols-3 gap-2">
              <span className="text-white font-bold">help</span>
              <span className="col-span-2">Displays this help message</span>
              <span className="text-white font-bold">ls</span>
              <span className="col-span-2">Lists available sections and files in current directory</span>
              <span className="text-white font-bold">cd &lt;dir&gt;</span>
              <span className="col-span-2">Changes directory (e.g., cd skills, cd ..)</span>
              <span className="text-white font-bold">cat &lt;file&gt;</span>
              <span className="col-span-2">Reads file contents (e.g., cat flag.txt)</span>
              <span className="text-white font-bold">clear</span>
              <span className="col-span-2">Clears the terminal screen</span>
              <span className="text-white font-bold">whoami</span>
              <span className="col-span-2">Displays active profile information</span>
              <span className="text-white font-bold">scan</span>
              <span className="col-span-2">Performs active vulnerability simulation scan</span>
              <span className="text-white font-bold">echo &lt;txt&gt;</span>
              <span className="col-span-2">Prints string back to terminal</span>
              <span className="text-white font-bold">sudo</span>
              <span className="col-span-2">Request superuser privilege</span>
            </div>
          </div>
        );
        break;

      case "ls":
        const currentDirContent = fileSystem[cwd] || {};
        output = (
          <div className="flex flex-wrap gap-4 text-xs sm:text-sm">
            {Object.entries(currentDirContent).map(([name, type]) => (
              <span
                key={name}
                className={type === "dir" ? "text-[#00ffcc] font-bold" : "text-white"}
              >
                {name}{type === "dir" ? "/" : ""}
              </span>
            ))}
          </div>
        );
        break;

      case "cd":
        const target = args[0];
        if (!target || target === "~") {
          newCwd = "~";
        } else if (target === "..") {
          if (cwd !== "~") {
            newCwd = "~";
          }
        } else {
          const checkPath = cwd === "~" ? `~/${target.replace(/\/$/, "")}` : `${cwd}/${target.replace(/\/$/, "")}`;
          if (fileSystem[checkPath]) {
            newCwd = checkPath;
          } else {
            output = <p className="text-red-400 text-xs sm:text-sm">cd: {target}: No such directory</p>;
          }
        }
        break;

      case "cat":
        const fileTarget = args[0];
        if (!fileTarget) {
          output = <p className="text-red-400 text-xs sm:text-sm">cat: missing file operand</p>;
        } else {
          const currentFiles = fileSystem[cwd] || {};
          if (currentFiles[fileTarget]) {
            if (currentFiles[fileTarget] === "dir") {
              output = <p className="text-red-400 text-xs sm:text-sm">cat: {fileTarget}: Is a directory</p>;
            } else {
              output = <p className="text-[#00ffcc] text-xs sm:text-sm whitespace-pre-line">{currentFiles[fileTarget]}</p>;
            }
          } else {
            output = <p className="text-red-400 text-xs sm:text-sm">cat: {fileTarget}: No such file</p>;
          }
        }
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      case "whoami":
        output = <p className="text-[#00ffcc] text-xs sm:text-sm">subrat - Cybersecurity Specialist, Security Researcher & Ethical Hacker</p>;
        break;

      case "scan":
        output = (
          <div className="space-y-1 text-xs sm:text-sm font-mono">
            <p className="text-[#9BA4B5]">Starting Nmap 7.94SVN ( https://nmap.org ) at 2026-06-28 02:30 IST</p>
            <p className="text-[#9BA4B5]">Nmap scan report for sec-ops.local (127.0.0.1)</p>
            <p className="text-[#9BA4B5]">Host is up (0.00012s latency).</p>
            <div className="text-white pl-2">
              <p>PORT    STATE SERVICE</p>
              <p className="text-[#00ffcc]">22/tcp  open  ssh</p>
              <p className="text-[#00ffcc]">80/tcp  open  http</p>
              <p className="text-[#00ffcc]">443/tcp open  https</p>
            </div>
            <p className="text-[#00ffcc] font-bold">Nmap done: 1 IP address (1 host up) scanned in 0.42 seconds.</p>
            <p className="text-[#00ffcc] font-bold">No vulnerabilities detected. Defense Grid 100% Active.</p>
          </div>
        );
        break;

      case "echo":
        output = <p className="text-white text-xs sm:text-sm">{args.join(" ")}</p>;
        break;

      case "sudo":
        output = <p className="text-red-400 text-xs sm:text-sm">subrat is not in the sudoers file. This incident will be reported to the Cyber Defense AI.</p>;
        break;

      case "exit":
      case "reboot":
        output = <p className="text-[#9BA4B5] text-xs sm:text-sm">Session closed. Restarting terminal...</p>;
        setTimeout(() => {
          setHistory([
            {
              command: "",
              cwd: "~",
              output: (
                <div className="text-[#00ffcc] font-mono text-xs sm:text-sm space-y-1">
                  <p className="font-bold">REBOOTING SEC-OPS INTERACTIVE TERMINAL...</p>
                  <p className="text-[#9BA4B5]">Connecting to subrat@sec-ops.local... ESTABLISHED.</p>
                  <p className="text-[#9BA4B5]">Type <span className="text-[#00ffcc] font-bold">help</span> to view available commands.</p>
                </div>
              )
            }
          ]);
        }, 1000);
        break;

      default:
        output = <p className="text-red-400 text-xs sm:text-sm">Command not found: {cmd}. Type &apos;help&apos; for available commands.</p>;
        break;
    }

    setHistory(prev => [...prev, { command: trimmed, output, cwd }]);
    setCwd(newCwd);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand(input);
    }
  };

  return (
    <div
      onClick={handleTerminalClick}
      className="w-full h-[380px] sm:h-[440px] md:h-[500px] bg-[#1a2333]/90 backdrop-blur-md border border-[#9BA4B5]/30 rounded-xl shadow-2xl flex flex-col font-mono select-text cursor-text overflow-hidden group pointer-events-auto"
    >
      {/* Terminal Titlebar */}
      <div className="w-full px-4 py-3 bg-[#212A3E]/80 border-b border-[#9BA4B5]/30 flex items-center justify-between select-none">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500 hover:opacity-80 cursor-pointer" />
          <div className="w-3 h-3 rounded-full bg-yellow-500 hover:opacity-80 cursor-pointer" />
          <div className="w-3 h-3 rounded-full bg-green-500 hover:opacity-80 cursor-pointer" />
        </div>
        <div className="flex items-center gap-2 text-[#9BA4B5] text-xs font-medium tracking-wider">
          <TerminalIcon className="w-4 h-4 text-[#00ffcc]" />
          <span>subrat@sec-ops: ~</span>
        </div>
        <div className="w-12" /> {/* Spacer for centering */}
      </div>

      {/* Terminal Body */}
      <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto space-y-4 select-text">
        {history.map((item, index) => (
          <div key={index} className="space-y-1">
            {item.command && (
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <span className="text-[#00ffcc] font-bold">subrat@sec-ops:{item.cwd}$</span>
                <span className="text-white">{item.command}</span>
              </div>
            )}
            {item.output && <div className="pl-1">{item.output}</div>}
          </div>
        ))}

        {/* Current Active Input Prompt */}
        <div className="flex items-center gap-2 text-xs sm:text-sm pt-1">
          <span className="text-[#00ffcc] font-bold whitespace-nowrap">subrat@sec-ops:{cwd}$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
            spellCheck={false}
            autoComplete="off"
            className="flex-1 bg-transparent text-white focus:outline-none caret-[#00ffcc] font-mono text-xs sm:text-sm"
          />
        </div>
      </div>
    </div>
  );
};
