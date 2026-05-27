"use client";

import {
  NEON_GREEN,
  NEON_PURPLE,
  NEON_CYAN,
  NEON_PINK,
  STATUS_CONFIG,
} from "@/lib/constants";
import { User } from "@/lib/types";
import TypingIndicator from "./typing-indicator";

interface UserCardProps {
  user: User;
  onWake: (user: User) => void;
}

export default function UserCard({ user, onWake }: UserCardProps) {
  const cfg = STATUS_CONFIG[user.status] || STATUS_CONFIG["💻 코딩 폭주"];
  const avatarColors: Record<string, string> = {
    CM: NEON_GREEN,
    RP: NEON_PURPLE,
    SK: NEON_CYAN,
    NS: "#555577",
    CF: "#ffaa00",
  };
  const avatarColor = avatarColors[user.avatar] || NEON_GREEN;

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #0f1428 0%, #0a0e1e 100%)",
        border: `1px solid ${user.asleep ? "#2a2d4a" : cfg.color + "44"}`,
        borderRadius: 14,
        padding: "18px 20px",
        display: "flex",
        alignItems: "center",
        gap: 16,
        transition: "all 0.3s ease",
        boxShadow: user.asleep
          ? "none"
          : `0 0 20px ${cfg.color}18, inset 0 0 30px ${cfg.color}05`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background: `linear-gradient(90deg, transparent, ${cfg.color}66, transparent)`,
          opacity: user.asleep ? 0 : 1,
        }}
      />

      <div style={{ position: "relative", flexShrink: 0 }}>
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            background: `${avatarColor}18`,
            border: `2px solid ${avatarColor}66`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--font-space-mono), monospace",
            fontSize: 13,
            fontWeight: 700,
            color: avatarColor,
            boxShadow: user.asleep ? "none" : `0 0 14px ${avatarColor}44`,
            filter: user.asleep ? "grayscale(0.7) brightness(0.6)" : "none",
          }}
        >
          {user.avatar}
        </div>
        <div
          className={user.asleep ? "" : "animate-pulse-dot"}
          style={{
            position: "absolute",
            bottom: 1,
            right: 1,
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: user.asleep ? "#444" : cfg.color,
            boxShadow: user.asleep ? "none" : `0 0 6px ${cfg.color}`,
            border: "1.5px solid #0a0e1e",
          }}
        />
      </div>

      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 5,
          }}
        >
          <span
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: user.asleep ? "#4a4d6a" : "#e0e8ff",
              letterSpacing: "0.02em",
            }}
          >
            {user.name}
          </span>
          {user.typing && !user.asleep && <TypingIndicator />}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontSize: 11,
              fontFamily: "var(--font-space-mono), monospace",
              background: `${cfg.color}18`,
              border: `1px solid ${cfg.color}44`,
              color: cfg.color,
              padding: "2px 8px",
              borderRadius: 20,
              letterSpacing: "0.03em",
              opacity: user.asleep ? 0.4 : 1,
            }}
          >
            {cfg.tag}
          </span>
          <span
            style={{
              fontSize: 11,
              fontFamily: "var(--font-space-mono), monospace",
              color: user.asleep ? "#3a3d5a" : "#5a6080",
              letterSpacing: "0.05em",
            }}
          >
            ⏱ {user.hours}
          </span>
        </div>
      </div>

      {user.asleep ? (
        <button
          onClick={() => onWake(user)}
          style={{
            background: "transparent",
            border: `1px solid ${NEON_PINK}66`,
            borderRadius: 8,
            padding: "7px 13px",
            color: NEON_PINK,
            fontSize: 12,
            fontFamily: "var(--font-space-mono), monospace",
            cursor: "pointer",
            transition: "all 0.2s",
            letterSpacing: "0.03em",
            flexShrink: 0,
            boxShadow: `0 0 10px ${NEON_PINK}22`,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = `${NEON_PINK}18`;
            e.currentTarget.style.boxShadow = `0 0 16px ${NEON_PINK}44`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.boxShadow = `0 0 10px ${NEON_PINK}22`;
          }}
        >
          ⚡ 깨우기
        </button>
      ) : (
        <div
          className="animate-spin-slow"
          style={{
            width: 32,
            height: 32,
            border: `1.5px solid ${cfg.color}44`,
            borderTopColor: cfg.color,
            borderRadius: "50%",
            flexShrink: 0,
            opacity: 0.7,
          }}
        />
      )}
    </div>
  );
}
