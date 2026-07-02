export const TERMINAL_COMMANDS = [
  "nmap -sV --script vuln 10.10.10.5",
  "python3 recon.py -t target.com",
  "clear",
  "hashcat -m 0 hashes.txt wordlist.txt",
  "sqlmap -u 'target.com/?id=1' --dbs",
  "clear",
  "gobuster dir -u http://10.0.0.1 -w common.txt",
];

export const TERMINAL_OUTPUTS = {
  0: [
    "Starting Nmap 7.94 SVN",
    "PORT    STATE  SERVICE",
    "22/tcp  open   ssh 8.9",
    "80/tcp  open   http nginx",
    "[!] CVE-2023-4966 — Critical",
  ],
  1: [
    "[*] Enumerating subdomains...",
    "[+] admin.target.com → 203.0.113.5",
    "[+] api.target.com  → 198.51.0.2",
    "[✓] Attack surface mapped",
  ],
  2: [],
  3: [
    "Speed: 8.2 GH/s",
    "Progress: 67.3% [ETA 00:02]",
    "[+] e10adc3...: 123456",
    "[+] 3 of 8 cracked",
  ],
  4: [
    "[*] Testing parameter 'id'...",
    "[+] Type: time-based blind",
    "[+] DBs: [users, admin, config]",
    "[!] Admin panel accessible",
  ],
  5: [],
  6: [
    "[*] Starting directory scan...",
    "[+] /admin     → 200 OK",
    "[+] /backup    → 200 OK",
    "[+] /config    → 403 Forbidden",
    "[✓] 3 endpoints found",
  ],
};
