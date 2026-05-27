"use client";

import { useState, useEffect } from "react";
import { NEON_GREEN, NEON_PURPLE, NEON_CYAN, STATUS_CONFIG } from "@/lib/constants";
import { User } from "@/lib/types";
import { DUMMY_USERS } from "@/lib/data";
import Toast from "@/components/toast";
import UserCard from "@/components/user-card";
import TimerSection from "@/components/timer-section";
import ChatSection from "@/components/chat-section";
import TypingIndicator from "@/components/typing-indicator";

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [myStatus, setMyStatus] = useState<string>("💻 코딩 폭주");
  const [toasts, setToasts] = useState<{ id: number; message: string }[]>([]);
  const [users, setUsers] = useState<User[]>(DUMMY_USERS);
  const [clock, setClock] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setClock(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const addToast = (msg: string) => {
    const id = Date.now();
    setToasts((t) => [...t, { id, message: msg }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 3600);
  };

  const wakeUser = (user: User) => {
    addToast(`⚡ ${user.name}에게 잠 깨우기 신호를 보냈습니다!`);
  };

  const cfg = STATUS_CONFIG[myStatus];

  const TABS = [
    { label: "밤샘 메이트", icon: "👥" },
    { label: "집중 타이머", icon: "⏱" },
    { label: "대피소 톡방", icon: "💬" },
  ];

  const TAB_COLORS = [NEON_GREEN, NEON_PURPLE, NEON_CYAN];

  return (
    <>
      <Toast toasts={toasts} />

      <div
        style={{
          minHeight: "100vh",
          background: "#080b14",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `
            radial-gradient(ellipse 60% 40% at 20% 10%, ${NEON_PURPLE}0a 0%, transparent 60%),
            radial-gradient(ellipse 50% 30% at 80% 80%, ${NEON_GREEN}08 0%, transparent 60%),
            radial-gradient(ellipse 40% 50% at 50% 50%, ${NEON_CYAN}05 0%, transparent 70%)
          `,
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            height: "100vh",
            backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 49px, #ffffff04 49px, #ffffff04 50px),
            repeating-linear-gradient(90deg, transparent, transparent 49px, #ffffff03 49px, #ffffff03 50px)
          `,
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: 1100,
            margin: "0 auto",
            padding: "0 20px 40px",
          }}
        >
          <header
            style={{
              padding: "28px 0 24px",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 4,
                }}
              >
                <span
                  className="animate-neon-flicker"
                  style={{
                    fontFamily: "var(--font-space-mono), monospace",
                    fontSize: 11,
                    color: NEON_GREEN,
                    letterSpacing: "0.2em",
                    background: `${NEON_GREEN}15`,
                    border: `1px solid ${NEON_GREEN}44`,
                    padding: "2px 10px",
                    borderRadius: 4,
                    textTransform: "uppercase",
                  }}
                >
                  ● LIVE
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-space-mono), monospace",
                    fontSize: 11,
                    color: "#3a3d5a",
                    letterSpacing: "0.1em",
                  }}
                >
                  {clock.toLocaleTimeString("ko-KR", {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                  })}
                </span>
              </div>
              <h1
                style={{
                  fontFamily: "var(--font-space-mono), monospace",
                  fontSize: "clamp(24px, 4vw, 36px)",
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                  lineHeight: 1.1,
                }}
              >
                <span
                  style={{
                    color: NEON_GREEN,
                    textShadow: `0 0 20px ${NEON_GREEN}88`,
                  }}
                >
                  밤샘
                </span>
                <span style={{ color: "#e0e8ff" }}> 대피소</span>
              </h1>
              <p
                style={{
                  fontSize: 12,
                  color: "#3a4060",
                  fontFamily: "var(--font-space-mono), monospace",
                  letterSpacing: "0.06em",
                  marginTop: 4,
                }}
              >
                MIDNIGHT SHELTER — 벼락치기 메이트
              </p>
            </div>
            <div style={{ textAlign: "right" }}>
              <div
                style={{
                  fontSize: 11,
                  color: "#3a3d5a",
                  fontFamily: "var(--font-space-mono), monospace",
                  letterSpacing: "0.08em",
                  marginBottom: 4,
                }}
              >
                ONLINE NOW
              </div>
              <div
                style={{
                  fontFamily: "var(--font-space-mono), monospace",
                  fontSize: 28,
                  fontWeight: 700,
                  color: NEON_GREEN,
                  textShadow: `0 0 16px ${NEON_GREEN}`,
                }}
              >
                {users.filter((u) => !u.asleep).length + 1}
              </div>
              <div
                style={{
                  fontSize: 10,
                  color: "#2a3050",
                  fontFamily: "var(--font-space-mono), monospace",
                  letterSpacing: "0.1em",
                }}
              >
                명 생존 중
              </div>
            </div>
          </header>

          <div
            style={{
              display: "flex",
              gap: 4,
              marginBottom: 28,
              background: "#0a0e1e",
              borderRadius: 12,
              padding: 4,
              border: "1px solid #1a1f3a",
            }}
          >
            {TABS.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                style={{
                  flex: 1,
                  padding: "11px 8px",
                  background:
                    activeTab === i ? `${TAB_COLORS[i]}18` : "transparent",
                  border: `1px solid ${activeTab === i ? TAB_COLORS[i] + "66" : "transparent"}`,
                  borderRadius: 9,
                  color: activeTab === i ? TAB_COLORS[i] : "#3a3d5a",
                  fontFamily: "var(--font-space-mono), monospace",
                  fontSize: "clamp(10px, 1.5vw, 13px)",
                  fontWeight: activeTab === i ? 700 : 400,
                  cursor: "pointer",
                  transition: "all 0.25s",
                  letterSpacing: "0.04em",
                  boxShadow:
                    activeTab === i ? `0 0 16px ${TAB_COLORS[i]}33` : "none",
                }}
              >
                <span style={{ marginRight: 6 }}>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          <div
            style={{
              display: activeTab === 0 ? "block" : "none",
            }}
          >
            <div
              style={{
                marginBottom: 16,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span
                style={{
                  fontSize: 11,
                  color: "#3a3d5a",
                  fontFamily: "var(--font-space-mono), monospace",
                  letterSpacing: "0.1em",
                }}
              >
                ACTIVE USERS — {users.length + 1}명
              </span>
              <span
                style={{
                  fontSize: 11,
                  color: NEON_GREEN,
                  fontFamily: "var(--font-space-mono), monospace",
                  background: `${NEON_GREEN}12`,
                  border: `1px solid ${NEON_GREEN}33`,
                  padding: "3px 10px",
                  borderRadius: 4,
                  letterSpacing: "0.08em",
                }}
              >
                <span
                  className="animate-pulse-dot"
                  style={{ display: "inline-block" }}
                >
                  ●
                </span>{" "}
                실시간 업데이트 중
              </span>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: 12,
              }}
            >
              <div
                style={{
                  background: `linear-gradient(135deg, ${cfg.color}10, #0a0e1e)`,
                  border: `1px solid ${cfg.color}55`,
                  borderRadius: 14,
                  padding: "18px 20px",
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: `0 0 24px ${cfg.color}22, inset 0 0 30px ${cfg.color}08`,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 1,
                    background: `linear-gradient(90deg, transparent, ${cfg.color}, transparent)`,
                  }}
                />
                <div style={{ position: "relative" }}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      background: `${cfg.color}22`,
                      border: `2px solid ${cfg.color}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-space-mono), monospace",
                      fontSize: 12,
                      fontWeight: 700,
                      color: cfg.color,
                      boxShadow: `0 0 16px ${cfg.color}66`,
                    }}
                  >
                    ME
                  </div>
                  <div
                    className="animate-pulse-dot"
                    style={{
                      position: "absolute",
                      bottom: 1,
                      right: 1,
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: cfg.color,
                      boxShadow: `0 0 8px ${cfg.color}`,
                      border: "1.5px solid #0a0e1e",
                    }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      marginBottom: 5,
                    }}
                  >
                    <span
                      style={{ fontSize: 14, fontWeight: 700, color: "#e0e8ff" }}
                    >
                      나 (익명)
                    </span>
                    <span
                      style={{
                        fontSize: 10,
                        fontFamily: "var(--font-space-mono), monospace",
                        background: `${cfg.color}22`,
                        border: `1px solid ${cfg.color}66`,
                        color: cfg.color,
                        padding: "1px 7px",
                        borderRadius: 10,
                      }}
                    >
                      나
                    </span>
                    <TypingIndicator />
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
                    }}
                  >
                    {cfg.tag}
                  </span>
                </div>
              </div>
              {users.map((u) => (
                <UserCard key={u.id} user={u} onWake={wakeUser} />
              ))}
            </div>
          </div>

          <div style={{ display: activeTab === 1 ? "block" : "none" }}>
            <div
              style={{
                background: "linear-gradient(135deg, #0f1428, #0a0e1e)",
                border: "1px solid #1e2240",
                borderRadius: 16,
                padding: "28px 32px",
                boxShadow: "0 0 40px #00000044",
              }}
            >
              <TimerSection myStatus={myStatus} setMyStatus={setMyStatus} />
            </div>
          </div>

          <div style={{ display: activeTab === 2 ? "block" : "none" }}>
            <div
              style={{
                background: "linear-gradient(135deg, #0f1428, #0a0e1e)",
                border: "1px solid #1e2240",
                borderRadius: 16,
                padding: "24px",
                height: 560,
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 0 40px #00000044",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 20,
                  paddingBottom: 16,
                  borderBottom: "1px solid #1a1f3a",
                }}
              >
                <div
                  className="animate-pulse-dot"
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: NEON_CYAN,
                    boxShadow: `0 0 8px ${NEON_CYAN}`,
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-space-mono), monospace",
                    fontSize: 12,
                    color: NEON_CYAN,
                    letterSpacing: "0.1em",
                  }}
                >
                  새벽 대피소 익명 톡방
                </span>
                <span
                  style={{
                    marginLeft: "auto",
                    fontSize: 11,
                    color: "#3a3d5a",
                    fontFamily: "var(--font-space-mono), monospace",
                  }}
                >
                  {users.length + 1}명 접속 중
                </span>
              </div>
              <ChatSection />
            </div>
          </div>

          <footer style={{ marginTop: 32, textAlign: "center" }}>
            <div
              style={{
                fontFamily: "var(--font-space-mono), monospace",
                fontSize: 10,
                color: "#1e2240",
                letterSpacing: "0.15em",
              }}
            >
              MIDNIGHT SHELTER v1.0 — 2026 컴퓨터개론 프로젝트
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
