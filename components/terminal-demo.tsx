"use client";
import { Terminal } from "@/components/ui/terminal";
import { TERMINAL_COMMANDS, TERMINAL_OUTPUTS } from "@/constants/terminal";

export default function TerminalDemo() {
  return (
    <div className="w-full">
      <Terminal
        username="kaizen@athena"
        commands={TERMINAL_COMMANDS}
        outputs={TERMINAL_OUTPUTS}
        typingSpeed={80}
        delayBetweenCommands={1000}
      />
    </div>
  );
}
