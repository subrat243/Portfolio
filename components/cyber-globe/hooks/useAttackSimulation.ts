"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Attack, AttackType, CountryNode } from "../types";
import { MAJOR_COUNTRIES, ATTACK_ROUTES } from "../constants";

export function useAttackSimulation() {
  const [attacks, setAttacks] = useState<Attack[]>([]);
  const [countries, setCountries] = useState<CountryNode[]>(MAJOR_COUNTRIES);
  const activeAttackIds = useRef<Set<string>>(new Set());

  const generateAttack = useCallback(() => {
    const route = ATTACK_ROUTES[Math.floor(Math.random() * ATTACK_ROUTES.length)];
    const source = countries.find((c) => c.id === route.source) || countries[0];
    const destination =
      countries.find((c) => c.id === route.destination) || countries[1];

    const types: AttackType[] = ["normal", "suspicious", "malicious", "blocked"];
    // Weighted selection: more suspicious/malicious/blocked for drama
    const weights = [0.2, 0.3, 0.3, 0.2];
    const r = Math.random();
    let type: AttackType = "malicious";
    let cumulative = 0;
    for (let i = 0; i < types.length; i++) {
      cumulative += weights[i];
      if (r <= cumulative) {
        type = types[i];
        break;
      }
    }

    const id = `${source.id}-${destination.id}-${Date.now()}-${Math.random()}`;

    return {
      id,
      source,
      destination,
      type,
      progress: 0,
      timestamp: Date.now(),
    };
  }, [countries]);

  useEffect(() => {
    // Initial batch of 15 attacks (keep between 10-20 active attacks simultaneously)
    const initialAttacks: Attack[] = [];
    for (let i = 0; i < 15; i++) {
      const atk = generateAttack();
      initialAttacks.push(atk);
      activeAttackIds.current.add(atk.id);
    }
    setAttacks(initialAttacks);

    // Continuous attack loop
    const interval = setInterval(() => {
      setAttacks((currentAttacks) => {
        // Filter out old attacks (> 6 seconds old)
        const now = Date.now();
        const filtered = currentAttacks.filter((a) => now - a.timestamp < 6000);

        // Update active tracking
        activeAttackIds.current.clear();
        filtered.forEach((a) => activeAttackIds.current.add(a.id));

        // Spawn new attacks if under 18
        const newAttacks = [...filtered];
        while (newAttacks.length < 18) {
          const newAtk = generateAttack();
          newAttacks.push(newAtk);
          activeAttackIds.current.add(newAtk.id);
        }

        return newAttacks;
      });

      // Periodically update attack counts on countries
      setCountries((prevCountries) =>
        prevCountries.map((c) => {
          if (Math.random() > 0.7) {
            return {
              ...c,
              attackCount: c.attackCount + Math.floor(Math.random() * 5) + 1,
              lastActivity: "Just now",
            };
          }
          return c;
        })
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [generateAttack]);

  return { attacks, countries };
}
