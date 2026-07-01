"use client";
import { useState } from "react";
import {
  Navbar as NavbarContainer,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { NAV_LINKS } from "@/constants";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = NAV_LINKS.map((link) => ({
    name: link.title,
    link: link.link,
  }));

  return (
    <div className="relative w-full z-50">
      <NavbarContainer>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-3">
            <AnimatedThemeToggler variant="circle" />
            <NavbarButton variant="primary" href="#contact" className="bg-[#212A3E] text-white hover:bg-[#394867] shadow-md dark:bg-[#E4E9EC] dark:text-[#0d1117] dark:hover:bg-[#9BA4B5]">
              Contact
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <div className="flex items-center gap-2">
              <AnimatedThemeToggler variant="circle" />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-lg font-medium text-[#394867] hover:text-[#212A3E] py-2 w-full border-b border-[#9BA4B5]/20 last:border-none"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4 pt-4">
              <NavbarButton
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full text-center bg-[#212A3E] text-white hover:bg-[#394867]"
              >
                Contact
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </NavbarContainer>
    </div>
  );
};

