"use client";

import React, { useState, useEffect, useCallback, memo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { TryHackMeApiResponse, TryHackMeProfile } from "@/types/tryhackme";

// ─────────────────────────────────────────────────────────────────────────────
// Animation variants
// ─────────────────────────────────────────────────────────────────────────────

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const statsStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
};

// ─────────────────────────────────────────────────────────────────────────────
// Skeleton Loader
// ─────────────────────────────────────────────────────────────────────────────

const SkeletonCard = memo(() => (
  <div className="w-full rounded-2xl border border-[#9BA4B5]/25 bg-white/60 backdrop-blur-md p-6 animate-pulse">
    {/* Avatar row */}
    <div className="flex flex-col items-center gap-3 mb-8">
      <div className="w-24 h-24 rounded-full bg-[#9BA4B5]/25" />
      <div className="h-6 w-32 rounded-full bg-[#9BA4B5]/25" />
      <div className="h-4 w-20 rounded-full bg-[#9BA4B5]/15" />
    </div>
    {/* Stats grid */}
    <div className="grid grid-cols-2 gap-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="rounded-xl bg-[#F1F6F9] border border-[#9BA4B5]/20 p-4 h-20"
        />
      ))}
    </div>
  </div>
));
SkeletonCard.displayName = "SkeletonCard";

// ─────────────────────────────────────────────────────────────────────────────
// Error Card
// ─────────────────────────────────────────────────────────────────────────────

const ErrorCard = memo(({ onRetry }: { onRetry: () => void }) => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    className="w-full rounded-2xl border border-red-200/60 bg-red-50/80 backdrop-blur-md p-8 flex flex-col items-center gap-4 text-center"
  >
    {/* Error icon */}
    <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center">
      <svg className="w-7 h-7 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
      </svg>
    </div>

    <div>
      <h3 className="text-[#212A3E] font-bold text-lg mb-1">Unable to Load Profile</h3>
      <p className="text-[#394867]/70 text-sm max-w-xs">
        Could not fetch TryHackMe profile data. This may be a temporary issue — please try again.
      </p>
    </div>

    <button
      onClick={onRetry}
      aria-label="Retry loading TryHackMe profile"
      className="mt-2 px-6 py-2.5 bg-[#212A3E] text-white text-sm font-semibold rounded-lg hover:bg-[#394867] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#212A3E] focus:ring-offset-2"
    >
      Try Again
    </button>
  </motion.div>
));
ErrorCard.displayName = "ErrorCard";

// ─────────────────────────────────────────────────────────────────────────────
// Individual Stat Card
// ─────────────────────────────────────────────────────────────────────────────

interface StatCardProps {
  label: string;
  value: string | number;
  icon: React.ReactNode;
  accent?: boolean;
}

const StatCard = memo(({ label, value, icon, accent }: StatCardProps) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ y: -3, boxShadow: "0 8px 24px rgba(33,42,62,0.12)" }}
    className={`rounded-xl border p-4 flex flex-col gap-1 cursor-default transition-all duration-200 ${
      accent
        ? "bg-[#212A3E] border-[#212A3E] text-white"
        : "bg-white/70 border-[#9BA4B5]/25 text-[#212A3E]"
    }`}
  >
    <div className={`w-7 h-7 mb-1 ${accent ? "text-white/70" : "text-[#9BA4B5]"}`}>
      {icon}
    </div>
    <span className={`text-2xl font-bold tracking-tight ${accent ? "text-white" : "text-[#212A3E]"}`}>
      {typeof value === "number" ? value.toLocaleString() : value}
    </span>
    <span className={`text-xs font-medium uppercase tracking-widest ${accent ? "text-white/60" : "text-[#9BA4B5]"}`}>
      {label}
    </span>
  </motion.div>
));
StatCard.displayName = "StatCard";

// ─────────────────────────────────────────────────────────────────────────────
// Avatar with glowing ring
// ─────────────────────────────────────────────────────────────────────────────

const Avatar = memo(({ src, username }: { src: string; username: string }) => (
  <motion.div
    whileHover={{ scale: 1.06 }}
    transition={{ type: "spring", stiffness: 300, damping: 18 }}
    className="relative w-24 h-24 mx-auto"
    aria-label={`${username} avatar`}
  >
    {/* Glowing ring */}
    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#9BA4B5]/60 to-[#212A3E]/40 blur-md scale-110 opacity-60" />
    {/* Online indicator */}
    <div className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white z-10" aria-label="Online" />
    <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-[#9BA4B5]/40 shadow-lg">
      <Image
        src={src || "/favicon.png"}
        alt={`${username}'s TryHackMe avatar`}
        fill
        sizes="96px"
        className="object-cover"
        onError={(e) => {
          (e.target as HTMLImageElement).src = "/favicon.png";
        }}
        unoptimized
      />
    </div>
  </motion.div>
));
Avatar.displayName = "Avatar";

// ─────────────────────────────────────────────────────────────────────────────
// Top Percentage Progress Bar
// ─────────────────────────────────────────────────────────────────────────────

const TopPercentBar = memo(({ pct }: { pct: number }) => {
  const display = Math.min(Math.max(pct, 0), 100);
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-xs font-medium uppercase tracking-widest text-[#9BA4B5]">Top %</span>
        <span className="text-sm font-bold text-[#212A3E]">Top {display}%</span>
      </div>
      <div className="h-2 rounded-full bg-[#F1F6F9] border border-[#9BA4B5]/20 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-[#212A3E] to-[#394867]"
          initial={{ width: 0 }}
          animate={{ width: `${display}%` }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
        />
      </div>
    </div>
  );
});
TopPercentBar.displayName = "TopPercentBar";

// ─────────────────────────────────────────────────────────────────────────────
// Profile Card
// ─────────────────────────────────────────────────────────────────────────────

const ProfileCard = memo(({ profile }: { profile: TryHackMeProfile }) => {
  const stats: StatCardProps[] = [
    {
      label: "Points",
      value: profile.totalPoints,
      accent: true,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
    },
    {
      label: "Rooms",
      value: profile.completedRoomsNumber,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      label: "Badges",
      value: profile.badgesNumber,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="6" />
          <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
        </svg>
      ),
    },
    {
      label: "Global Rank",
      value: `#${profile.rank.toLocaleString()}`,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 20V10M12 20V4M6 20v-6" />
        </svg>
      ),
    },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full rounded-2xl border border-[#9BA4B5]/25 bg-white/60 backdrop-blur-md shadow-[0_4px_32px_rgba(33,42,62,0.08)] overflow-hidden"
    >
      {/* Moving gradient border top */}
      <div className="h-1 w-full bg-gradient-to-r from-[#9BA4B5] via-[#394867] to-[#212A3E]" />

      <div className="p-6 flex flex-col gap-6">
        {/* Profile header */}
        <motion.div variants={itemVariants} className="flex flex-col items-center gap-3 text-center">
          <Avatar src={profile.avatar} username={profile.username} />

          <div>
            <h3 className="text-xl font-bold text-[#212A3E] tracking-tight">{profile.username}</h3>
            <span className="inline-block mt-1 px-3 py-0.5 rounded-full bg-[#212A3E]/8 border border-[#212A3E]/15 text-xs font-semibold text-[#394867] uppercase tracking-wider">
              Level {profile.level}
            </span>
          </div>

          {/* THM badge link */}
          <a
            href={`https://tryhackme.com/p/${profile.username}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${profile.username} on TryHackMe`}
            className="flex items-center gap-1.5 text-xs text-[#9BA4B5] hover:text-[#394867] transition-colors duration-200 group"
          >
            <span className="group-hover:underline">View on TryHackMe</span>
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
            </svg>
          </a>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-[#9BA4B5]/15" />

        {/* Stats grid */}
        <motion.div variants={statsStagger} className="grid grid-cols-2 gap-3">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </motion.div>

        {/* Top percentage bar */}
        <motion.div variants={itemVariants}>
          <TopPercentBar pct={profile.topPercentage} />
        </motion.div>
      </div>
    </motion.div>
  );
});
ProfileCard.displayName = "ProfileCard";

// ─────────────────────────────────────────────────────────────────────────────
// Main exported component
// ─────────────────────────────────────────────────────────────────────────────

export const TryHackMeCard: React.FC = () => {
  const [profile, setProfile] = useState<TryHackMeProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [rateLimited, setRateLimited] = useState(false);

  const fetchProfile = useCallback(async () => {
    setLoading(true);
    setError(false);
    setRateLimited(false);
    try {
      const res = await fetch("/api/tryhackme");

      if (res.status === 429) {
        setRateLimited(true);
        setLoading(false);
        return;
      }

      const json: TryHackMeApiResponse = await res.json();

      if (!json.success || !json.data) {
        throw new Error(json.error ?? "Unknown error");
      }
      setProfile(json.data);
    } catch (err) {
      console.error("[TryHackMeCard] fetch error:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  return (
    <div className="w-full max-w-sm mx-auto" role="region" aria-label="TryHackMe Profile">
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div key="skeleton" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <SkeletonCard />
          </motion.div>
        )}

        {!loading && rateLimited && (
          <motion.div key="ratelimit" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="w-full rounded-2xl border border-amber-200/60 bg-amber-50/80 backdrop-blur-md p-8 flex flex-col items-center gap-4 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center">
                <svg className="w-7 h-7 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <div>
                <h3 className="text-[#212A3E] font-bold text-lg mb-1">Rate Limited</h3>
                <p className="text-[#394867]/70 text-sm max-w-xs">
                  TryHackMe is temporarily limiting requests. Please wait 30 seconds and try again.
                </p>
              </div>
              <button
                onClick={fetchProfile}
                aria-label="Retry loading TryHackMe profile"
                className="mt-2 px-6 py-2.5 bg-[#212A3E] text-white text-sm font-semibold rounded-lg hover:bg-[#394867] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#212A3E] focus:ring-offset-2"
              >
                Try Again
              </button>
            </motion.div>
          </motion.div>
        )}

        {!loading && error && (
          <motion.div key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <ErrorCard onRetry={fetchProfile} />
          </motion.div>
        )}

        {!loading && !error && !rateLimited && profile && (
          <motion.div key="profile" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <ProfileCard profile={profile} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TryHackMeCard;

