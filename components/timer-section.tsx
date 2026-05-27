"use client";

import { useState, useEffect, useRef } from "react";
import { NEON_GREEN, NEON_PURPLE, NEON_PINK, STATUS_CONFIG } from "@/lib/constants";

interface TimerSectionProps {
  myStatus: string;
  setMyStatus: (status: string) => void;
}

export default function TimerSection({ myStatus, setMyStatus }: TimerSectionProps) {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [isPomodoro, setIsPomodoro] = useState(false);
  const [pomodoroLeft, setPomodoroLeft] = useState(25 * 60);
  const [pomodoroRunning, setPomodoroRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => setSeconds((s) => s + 1), 1000);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [running]);

  useEffect(() => {
    if (!isPomodoro) return;
    if (pomodoroRunning && pomodoroLeft > 0) {
      intervalRef.current = setInterval(
        () => setPomodoroLeft((s) => s - 1),
        1000
      );
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [pomodoroRunning, isPomodoro, pomodoroLeft]);

  const fmt = (s: number) => {
    const h = Math.floor(s / 3600)
      .toString()
      .padStart(2, "0");
    const m = Math.floor((s % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const sec = (s % 60).toString().padStart(2, "0");
    return h > "00" ? `${h}:${m}:${sec}` : `${m}:${sec}`;
  };

  const statusOptions = Object.keys(STATUS_CONFIG);
  const cfg = STATUS_CONFIG[myStatus];
  const pomodoroProgress = ((25 * 60 - pomodoroLeft) / (25 * 60)) * 100;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, height: "100%" }}>
      <div style={{ display: "flex", gap: 8, background: "#0a0e1e", borderRadius: 10, padding: 4 }}>
        {["스톱워치", "뽀모도로"].map((label, i) => (
          <button
            key={label}
            onClick={() => {
              setIsPomodoro(i === 1);
              setRunning(false);
              setPomodoroRunning(false);
            }}
            style={{
              flex: 1,
              padding: "8px 0",
              background: isPomodoro === (i === 1) ? `${NEON_PURPLE}22` : "transparent",
              border: `1px solid ${isPomodoro === (i === 1) ? NEON_PURPLE + "88" : "transparent"}`,
              borderRadius: 8,
              color: isPomodoro === (i === 1) ? NEON_PURPLE : "#4a5070",
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: 12,
              cursor: "pointer",
              transition: "all 0.2s",
              letterSpacing: "0.05em",
              boxShadow: isPomodoro === (i === 1) ? `0 0 12px ${NEON_PURPLE}33` : "none",
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {!isPomodoro ? (
        <div style={{ textAlign: "center" }}>
          <div
            className={running ? "animate-neon-flicker" : ""}
            style={{
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: "clamp(52px, 10vw, 80px)",
              fontWeight: 700,
              color: cfg.color,
              textShadow: running ? cfg.glow.replace("12px", "20px") : "none",
              letterSpacing: "0.04em",
              lineHeight: 1,
              marginBottom: 8,
              transition: "color 0.4s, text-shadow 0.4s",
            }}
          >
            {fmt(seconds)}
          </div>
          <div
            style={{
              fontSize: 12,
              color: "#3a3d5a",
              fontFamily: "var(--font-space-mono), monospace",
              letterSpacing: "0.1em",
              marginBottom: 28,
            }}
          >
            ELAPSED TIME
          </div>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <button
              onClick={() => setRunning((r) => !r)}
              style={{
                background: running ? `${NEON_PINK}18` : `${cfg.color}18`,
                border: `1.5px solid ${running ? NEON_PINK : cfg.color}`,
                borderRadius: 50,
                width: 64,
                height: 64,
                color: running ? NEON_PINK : cfg.color,
                fontSize: 22,
                cursor: "pointer",
                boxShadow: `0 0 20px ${running ? NEON_PINK : cfg.color}44`,
                transition: "all 0.2s",
              }}
            >
              {running ? "⏸" : "▶"}
            </button>
            <button
              onClick={() => {
                setRunning(false);
                setSeconds(0);
              }}
              style={{
                background: "transparent",
                border: "1.5px solid #2a2d4a",
                borderRadius: 50,
                width: 64,
                height: 64,
                color: "#4a5070",
                fontSize: 18,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#4a5070";
                e.currentTarget.style.color = "#8090b0";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#2a2d4a";
                e.currentTarget.style.color = "#4a5070";
              }}
            >
              ↺
            </button>
          </div>
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>
          <div style={{ position: "relative", display: "inline-block", marginBottom: 20 }}>
            <svg width={160} height={160} style={{ transform: "rotate(-90deg)" }}>
              <circle cx={80} cy={80} r={70} fill="none" stroke="#1a1f3a" strokeWidth={8} />
              <circle
                cx={80}
                cy={80}
                r={70}
                fill="none"
                stroke={NEON_PURPLE}
                strokeWidth={8}
                strokeDasharray={`${2 * Math.PI * 70}`}
                strokeDashoffset={`${2 * Math.PI * 70 * (1 - pomodoroProgress / 100)}`}
                strokeLinecap="round"
                className="animate-progress-pulse"
                style={{
                  filter: `drop-shadow(0 0 6px ${NEON_PURPLE})`,
                  transition: "stroke-dashoffset 0.9s linear",
                }}
              />
            </svg>
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-space-mono), monospace",
                  fontSize: 30,
                  fontWeight: 700,
                  color: NEON_PURPLE,
                  textShadow: `0 0 16px ${NEON_PURPLE}`,
                }}
              >
                {fmt(pomodoroLeft)}
              </div>
              <div
                style={{
                  fontSize: 10,
                  color: "#4a5070",
                  fontFamily: "var(--font-space-mono), monospace",
                  letterSpacing: "0.08em",
                }}
              >
                POMODORO
              </div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <button
              onClick={() => setPomodoroRunning((r) => !r)}
              style={{
                background: pomodoroRunning ? `${NEON_PINK}18` : `${NEON_PURPLE}18`,
                border: `1.5px solid ${pomodoroRunning ? NEON_PINK : NEON_PURPLE}`,
                borderRadius: 50,
                width: 64,
                height: 64,
                color: pomodoroRunning ? NEON_PINK : NEON_PURPLE,
                fontSize: 22,
                cursor: "pointer",
                boxShadow: `0 0 20px ${pomodoroRunning ? NEON_PINK : NEON_PURPLE}44`,
                transition: "all 0.2s",
              }}
            >
              {pomodoroRunning ? "⏸" : "▶"}
            </button>
            <button
              onClick={() => {
                setPomodoroRunning(false);
                setPomodoroLeft(25 * 60);
              }}
              style={{
                background: "transparent",
                border: "1.5px solid #2a2d4a",
                borderRadius: 50,
                width: 64,
                height: 64,
                color: "#4a5070",
                fontSize: 18,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#4a5070";
                e.currentTarget.style.color = "#8090b0";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#2a2d4a";
                e.currentTarget.style.color = "#4a5070";
              }}
            >
              ↺
            </button>
          </div>
        </div>
      )}

      <div>
        <div
          style={{
            fontSize: 11,
            color: "#3a3d5a",
            fontFamily: "var(--font-space-mono), monospace",
            letterSpacing: "0.1em",
            marginBottom: 10,
          }}
        >
          현재 상태 설정
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {statusOptions.map((opt) => {
            const optCfg = STATUS_CONFIG[opt];
            const active = myStatus === opt;
            return (
              <button
                key={opt}
                onClick={() => setMyStatus(opt)}
                style={{
                  textAlign: "left",
                  padding: "10px 14px",
                  background: active ? `${optCfg.color}15` : "transparent",
                  border: `1px solid ${active ? optCfg.color + "66" : "#1e2240"}`,
                  borderRadius: 9,
                  color: active ? optCfg.color : "#5a6080",
                  fontSize: 13,
                  fontWeight: active ? 700 : 400,
                  cursor: "pointer",
                  transition: "all 0.2s",
                  letterSpacing: "0.02em",
                  boxShadow: active ? `0 0 12px ${optCfg.color}22` : "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
                onMouseEnter={(e) => {
                  if (!active) {
                    e.currentTarget.style.background = "#141830";
                    e.currentTarget.style.borderColor = "#2a2d4a";
                    e.currentTarget.style.color = "#8090b0";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!active) {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor = "#1e2240";
                    e.currentTarget.style.color = "#5a6080";
                  }
                }}
              >
                {active && (
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: optCfg.color,
                      boxShadow: `0 0 6px ${optCfg.color}`,
                      display: "inline-block",
                      flexShrink: 0,
                    }}
                  />
                )}
                {opt}
              </button>
            );
          })}
        </div>
      </div>

      <div
        style={{
          background: "linear-gradient(135deg, #0f1428, #0a0e1e)",
          border: `1px solid ${cfg.color}33`,
          borderRadius: 12,
          padding: "14px 16px",
          boxShadow: `0 0 20px ${cfg.color}18, inset 0 0 20px ${cfg.color}05`,
        }}
      >
        <div
          style={{
            fontSize: 11,
            color: "#3a3d5a",
            fontFamily: "var(--font-space-mono), monospace",
            letterSpacing: "0.1em",
            marginBottom: 8,
          }}
        >
          내 프로필 미리보기
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: `${cfg.color}18`,
              border: `2px solid ${cfg.color}88`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: 11,
              fontWeight: 700,
              color: cfg.color,
              boxShadow: `0 0 10px ${cfg.color}44`,
              transition: "all 0.4s",
            }}
          >
            ME
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#e0e8ff", marginBottom: 4 }}>
              나 (익명)
            </div>
            <span
              style={{
                fontSize: 11,
                fontFamily: "var(--font-space-mono), monospace",
                background: `${cfg.color}18`,
                border: `1px solid ${cfg.color}44`,
                color: cfg.color,
                padding: "2px 8px",
                borderRadius: 20,
                transition: "all 0.4s",
              }}
            >
              {cfg.tag}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
