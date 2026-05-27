import { useState, useEffect, useRef, useCallback } from "react";

const FONT_URL = "https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Noto+Sans+KR:wght@400;500;700;900&display=swap";

const NEON_GREEN = "#39ff6e";
const NEON_PURPLE = "#bf5fff";
const NEON_CYAN = "#00e5ff";
const NEON_PINK = "#ff2d78";

const STATUS_CONFIG = {
  "💻 코딩 폭주": { color: NEON_GREEN, glow: "0 0 12px #39ff6e88", tag: "🔥코딩 중" },
  "📚 개념 암기": { color: NEON_CYAN, glow: "0 0 12px #00e5ff88", tag: "📖벼락치기 중" },
  "✍️ 레포트 작성": { color: NEON_PURPLE, glow: "0 0 12px #bf5fff88", tag: "📝레포트 잔혹사" },
  "💤 기절 직전": { color: "#555577", glow: "none", tag: "😴기절 직전" },
  "☕ 카페인 수혈": { color: "#ffaa00", glow: "0 0 12px #ffaa0088", tag: "☕아메리카노 수혈 중" },
};

const DUMMY_USERS = [
  { id: 1, name: "익명의 코딩몬스터", status: "💻 코딩 폭주", hours: "5h 23m", avatar: "CM", asleep: false, typing: true },
  { id: 2, name: "레포트계의 전설", status: "✍️ 레포트 작성", hours: "3h 07m", avatar: "RP", asleep: false, typing: true },
  { id: 3, name: "시험왕 도전자", status: "📚 개념 암기", hours: "6h 51m", avatar: "SK", asleep: false, typing: false },
  { id: 4, name: "새벽3시의 영혼", status: "💤 기절 직전", hours: "8h 00m", avatar: "NS", asleep: true, typing: false },
  { id: 5, name: "커피는 내 산소", status: "☕ 카페인 수혈", hours: "2h 44m", avatar: "CF", asleep: false, typing: false },
];

const DUMMY_MESSAGES = [
  { id: 1, user: "익명의 밤샘러", text: "컴공과 과제 던지고 싶다... 근데 못 던지는 게 현실 ㅜㅜ", time: "02:14" },
  { id: 2, user: "새벽감성", text: "교양 레포트 3페이지 남은 분??? 같이 달려요 🔥", time: "02:31" },
  { id: 3, user: "카페인중독자", text: "아메리카노 4잔째입니다. 심장이 코딩을 시작했어요", time: "03:08" },
  { id: 4, user: "시험지옥탈출", text: "자료구조 기말... 트리를 심으면 학점이 열리나요 🌳", time: "03:22" },
];

const globalStyle = `
  @import url('${FONT_URL}');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { 
    background: #080b14; 
    font-family: 'Noto Sans KR', sans-serif;
    color: #c8d0e8;
    min-height: 100vh;
  }
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: #0d1120; }
  ::-webkit-scrollbar-thumb { background: #2a2d4a; border-radius: 2px; }
  
  @keyframes blink-cursor {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
  @keyframes pulse-dot {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.4); opacity: 0.6; }
  }
  @keyframes scanline {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(100vh); }
  }
  @keyframes float-up {
    0% { opacity: 0; transform: translateY(10px); }
    20% { opacity: 1; transform: translateY(0); }
    80% { opacity: 1; transform: translateY(0); }
    100% { opacity: 0; transform: translateY(-10px); }
  }
  @keyframes toast-in {
    0% { opacity: 0; transform: translateX(100%); }
    15% { opacity: 1; transform: translateX(0); }
    80% { opacity: 1; transform: translateX(0); }
    100% { opacity: 0; transform: translateX(100%); }
  }
  @keyframes tab-glow {
    0%, 100% { box-shadow: 0 0 8px currentColor; }
    50% { box-shadow: 0 0 18px currentColor, 0 0 30px currentColor; }
  }
  @keyframes msg-in {
    from { opacity: 0; transform: translateY(12px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes typing-dot {
    0%, 80%, 100% { transform: scale(0.7); opacity: 0.4; }
    40% { transform: scale(1); opacity: 1; }
  }
  @keyframes neon-flicker {
    0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { opacity: 1; }
    20%, 24%, 55% { opacity: 0.7; }
  }
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes progress-pulse {
    0%, 100% { opacity: 0.7; }
    50% { opacity: 1; }
  }
  .neon-text-green { color: ${NEON_GREEN}; text-shadow: 0 0 8px ${NEON_GREEN}88; }
  .neon-text-purple { color: ${NEON_PURPLE}; text-shadow: 0 0 8px ${NEON_PURPLE}88; }
  .neon-text-cyan { color: ${NEON_CYAN}; text-shadow: 0 0 8px ${NEON_CYAN}88; }
  .typing-dot { display: inline-block; animation: typing-dot 1.2s infinite; }
  .typing-dot:nth-child(2) { animation-delay: 0.15s; }
  .typing-dot:nth-child(3) { animation-delay: 0.3s; }
`;

function Toast({ toasts }) {
  return (
    <div style={{ position: "fixed", top: 24, right: 24, zIndex: 9999, display: "flex", flexDirection: "column", gap: 8, pointerEvents: "none" }}>
      {toasts.map(t => (
        <div key={t.id} style={{
          background: "linear-gradient(135deg, #1a1f3a, #0f1224)",
          border: `1px solid ${NEON_GREEN}66`,
          borderRadius: 10,
          padding: "12px 18px",
          fontFamily: "'Space Mono', monospace",
          fontSize: 13,
          color: NEON_GREEN,
          textShadow: `0 0 8px ${NEON_GREEN}`,
          boxShadow: `0 0 20px ${NEON_GREEN}33, inset 0 0 20px ${NEON_GREEN}08`,
          animation: "toast-in 3.5s ease forwards",
          maxWidth: 300,
          letterSpacing: "0.04em",
        }}>
          {t.message}
        </div>
      ))}
    </div>
  );
}

function TypingIndicator() {
  return (
    <span style={{ display: "inline-flex", gap: 3, alignItems: "center", marginLeft: 6 }}>
      {[0,1,2].map(i => (
        <span key={i} className="typing-dot" style={{
          width: 5, height: 5, borderRadius: "50%",
          background: NEON_GREEN,
          boxShadow: `0 0 6px ${NEON_GREEN}`,
          animationDelay: `${i * 0.15}s`
        }} />
      ))}
    </span>
  );
}

function UserCard({ user, onWake }) {
  const cfg = STATUS_CONFIG[user.status] || STATUS_CONFIG["💻 코딩 폭주"];
  const avatarColors = { CM: NEON_GREEN, RP: NEON_PURPLE, SK: NEON_CYAN, NS: "#555577", CF: "#ffaa00" };
  const avatarColor = avatarColors[user.avatar] || NEON_GREEN;

  return (
    <div style={{
      background: "linear-gradient(135deg, #0f1428 0%, #0a0e1e 100%)",
      border: `1px solid ${user.asleep ? "#2a2d4a" : cfg.color + "44"}`,
      borderRadius: 14,
      padding: "18px 20px",
      display: "flex",
      alignItems: "center",
      gap: 16,
      transition: "all 0.3s ease",
      boxShadow: user.asleep ? "none" : `0 0 20px ${cfg.color}18, inset 0 0 30px ${cfg.color}05`,
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${cfg.color}66, transparent)`, opacity: user.asleep ? 0 : 1 }} />
      
      <div style={{ position: "relative", flexShrink: 0 }}>
        <div style={{
          width: 48, height: 48, borderRadius: "50%",
          background: `${avatarColor}18`,
          border: `2px solid ${avatarColor}66`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: "'Space Mono', monospace",
          fontSize: 13, fontWeight: 700,
          color: avatarColor,
          boxShadow: user.asleep ? "none" : `0 0 14px ${avatarColor}44`,
          filter: user.asleep ? "grayscale(0.7) brightness(0.6)" : "none",
        }}>{user.avatar}</div>
        <div style={{
          position: "absolute", bottom: 1, right: 1,
          width: 10, height: 10, borderRadius: "50%",
          background: user.asleep ? "#444" : cfg.color,
          boxShadow: user.asleep ? "none" : `0 0 6px ${cfg.color}`,
          animation: user.asleep ? "none" : "pulse-dot 2s infinite",
          border: "1.5px solid #0a0e1e",
        }} />
      </div>

      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 5 }}>
          <span style={{
            fontSize: 14, fontWeight: 700,
            color: user.asleep ? "#4a4d6a" : "#e0e8ff",
            letterSpacing: "0.02em",
          }}>{user.name}</span>
          {user.typing && !user.asleep && <TypingIndicator />}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
          <span style={{
            fontSize: 11,
            fontFamily: "'Space Mono', monospace",
            background: `${cfg.color}18`,
            border: `1px solid ${cfg.color}44`,
            color: cfg.color,
            padding: "2px 8px",
            borderRadius: 20,
            letterSpacing: "0.03em",
            opacity: user.asleep ? 0.4 : 1,
          }}>{cfg.tag}</span>
          <span style={{
            fontSize: 11,
            fontFamily: "'Space Mono', monospace",
            color: user.asleep ? "#3a3d5a" : "#5a6080",
            letterSpacing: "0.05em",
          }}>⏱ {user.hours}</span>
        </div>
      </div>

      {user.asleep ? (
        <button onClick={() => onWake(user)} style={{
          background: "transparent",
          border: `1px solid ${NEON_PINK}66`,
          borderRadius: 8,
          padding: "7px 13px",
          color: NEON_PINK,
          fontSize: 12,
          fontFamily: "'Space Mono', monospace",
          cursor: "pointer",
          transition: "all 0.2s",
          letterSpacing: "0.03em",
          flexShrink: 0,
          boxShadow: `0 0 10px ${NEON_PINK}22`,
        }}
          onMouseEnter={e => { e.target.style.background = `${NEON_PINK}18`; e.target.style.boxShadow = `0 0 16px ${NEON_PINK}44`; }}
          onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.boxShadow = `0 0 10px ${NEON_PINK}22`; }}
        >⚡ 깨우기</button>
      ) : (
        <div style={{
          width: 32, height: 32,
          border: `1.5px solid ${cfg.color}44`,
          borderTopColor: cfg.color,
          borderRadius: "50%",
          animation: "spin-slow 3s linear infinite",
          flexShrink: 0,
          opacity: 0.7,
        }} />
      )}
    </div>
  );
}

function TimerSection({ myStatus, setMyStatus }) {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [isPomodoro, setIsPomodoro] = useState(false);
  const [pomodoroLeft, setPomodoroLeft] = useState(25 * 60);
  const [pomodoroRunning, setPomodoroRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => setSeconds(s => s + 1), 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [running]);

  useEffect(() => {
    if (!isPomodoro) return;
    if (pomodoroRunning && pomodoroLeft > 0) {
      intervalRef.current = setInterval(() => setPomodoroLeft(s => s - 1), 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [pomodoroRunning, isPomodoro, pomodoroLeft]);

  const fmt = s => {
    const h = Math.floor(s / 3600).toString().padStart(2, "0");
    const m = Math.floor((s % 3600) / 60).toString().padStart(2, "0");
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
          <button key={label} onClick={() => { setIsPomodoro(i === 1); setRunning(false); setPomodoroRunning(false); }} style={{
            flex: 1, padding: "8px 0",
            background: isPomodoro === (i === 1) ? `${NEON_PURPLE}22` : "transparent",
            border: `1px solid ${isPomodoro === (i === 1) ? NEON_PURPLE + "88" : "transparent"}`,
            borderRadius: 8, color: isPomodoro === (i === 1) ? NEON_PURPLE : "#4a5070",
            fontFamily: "'Space Mono', monospace", fontSize: 12, cursor: "pointer",
            transition: "all 0.2s", letterSpacing: "0.05em",
            boxShadow: isPomodoro === (i === 1) ? `0 0 12px ${NEON_PURPLE}33` : "none",
          }}>{label}</button>
        ))}
      </div>

      {!isPomodoro ? (
        <div style={{ textAlign: "center" }}>
          <div style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "clamp(52px, 10vw, 80px)",
            fontWeight: 700,
            color: cfg.color,
            textShadow: running ? cfg.glow.replace("12px", "20px") : "none",
            letterSpacing: "0.04em",
            lineHeight: 1,
            marginBottom: 8,
            transition: "color 0.4s, text-shadow 0.4s",
            animation: running ? "neon-flicker 8s infinite" : "none",
          }}>{fmt(seconds)}</div>
          <div style={{ fontSize: 12, color: "#3a3d5a", fontFamily: "'Space Mono', monospace", letterSpacing: "0.1em", marginBottom: 28 }}>
            ELAPSED TIME
          </div>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <button onClick={() => setRunning(r => !r)} style={{
              background: running ? `${NEON_PINK}18` : `${cfg.color}18`,
              border: `1.5px solid ${running ? NEON_PINK : cfg.color}`,
              borderRadius: 50, width: 64, height: 64,
              color: running ? NEON_PINK : cfg.color,
              fontSize: 22, cursor: "pointer",
              boxShadow: `0 0 20px ${running ? NEON_PINK : cfg.color}44`,
              transition: "all 0.2s",
            }}>
              {running ? "⏸" : "▶"}
            </button>
            <button onClick={() => { setRunning(false); setSeconds(0); }} style={{
              background: "transparent",
              border: "1.5px solid #2a2d4a",
              borderRadius: 50, width: 64, height: 64,
              color: "#4a5070", fontSize: 18, cursor: "pointer",
              transition: "all 0.2s",
            }}
              onMouseEnter={e => { e.target.style.borderColor = "#4a5070"; e.target.style.color = "#8090b0"; }}
              onMouseLeave={e => { e.target.style.borderColor = "#2a2d4a"; e.target.style.color = "#4a5070"; }}
            >↺</button>
          </div>
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>
          <div style={{ position: "relative", display: "inline-block", marginBottom: 20 }}>
            <svg width={160} height={160} style={{ transform: "rotate(-90deg)" }}>
              <circle cx={80} cy={80} r={70} fill="none" stroke="#1a1f3a" strokeWidth={8} />
              <circle cx={80} cy={80} r={70} fill="none" stroke={NEON_PURPLE} strokeWidth={8}
                strokeDasharray={`${2 * Math.PI * 70}`}
                strokeDashoffset={`${2 * Math.PI * 70 * (1 - pomodoroProgress / 100)}`}
                strokeLinecap="round"
                style={{ filter: `drop-shadow(0 0 6px ${NEON_PURPLE})`, transition: "stroke-dashoffset 0.9s linear", animation: "progress-pulse 2s infinite" }}
              />
            </svg>
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center" }}>
              <div style={{
                fontFamily: "'Space Mono', monospace", fontSize: 30, fontWeight: 700,
                color: NEON_PURPLE, textShadow: `0 0 16px ${NEON_PURPLE}`,
              }}>{fmt(pomodoroLeft)}</div>
              <div style={{ fontSize: 10, color: "#4a5070", fontFamily: "'Space Mono', monospace", letterSpacing: "0.08em" }}>POMODORO</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <button onClick={() => setPomodoroRunning(r => !r)} style={{
              background: pomodoroRunning ? `${NEON_PINK}18` : `${NEON_PURPLE}18`,
              border: `1.5px solid ${pomodoroRunning ? NEON_PINK : NEON_PURPLE}`,
              borderRadius: 50, width: 64, height: 64,
              color: pomodoroRunning ? NEON_PINK : NEON_PURPLE,
              fontSize: 22, cursor: "pointer",
              boxShadow: `0 0 20px ${pomodoroRunning ? NEON_PINK : NEON_PURPLE}44`,
              transition: "all 0.2s",
            }}>{pomodoroRunning ? "⏸" : "▶"}</button>
            <button onClick={() => { setPomodoroRunning(false); setPomodoroLeft(25 * 60); }} style={{
              background: "transparent", border: "1.5px solid #2a2d4a",
              borderRadius: 50, width: 64, height: 64,
              color: "#4a5070", fontSize: 18, cursor: "pointer", transition: "all 0.2s",
            }}
              onMouseEnter={e => { e.target.style.borderColor = "#4a5070"; e.target.style.color = "#8090b0"; }}
              onMouseLeave={e => { e.target.style.borderColor = "#2a2d4a"; e.target.style.color = "#4a5070"; }}
            >↺</button>
          </div>
        </div>
      )}

      <div>
        <div style={{ fontSize: 11, color: "#3a3d5a", fontFamily: "'Space Mono', monospace", letterSpacing: "0.1em", marginBottom: 10 }}>
          현재 상태 설정
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {statusOptions.map(opt => {
            const optCfg = STATUS_CONFIG[opt];
            const active = myStatus === opt;
            return (
              <button key={opt} onClick={() => setMyStatus(opt)} style={{
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
                display: "flex", alignItems: "center", gap: 10,
              }}
                onMouseEnter={e => { if (!active) { e.currentTarget.style.background = "#141830"; e.currentTarget.style.borderColor = "#2a2d4a"; e.currentTarget.style.color = "#8090b0"; }}}
                onMouseLeave={e => { if (!active) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "#1e2240"; e.currentTarget.style.color = "#5a6080"; }}}
              >
                {active && <span style={{ width: 6, height: 6, borderRadius: "50%", background: optCfg.color, boxShadow: `0 0 6px ${optCfg.color}`, display: "inline-block", flexShrink: 0 }} />}
                {opt}
              </button>
            );
          })}
        </div>
      </div>

      <div style={{
        background: "linear-gradient(135deg, #0f1428, #0a0e1e)",
        border: `1px solid ${cfg.color}33`,
        borderRadius: 12,
        padding: "14px 16px",
        boxShadow: `0 0 20px ${cfg.color}18, inset 0 0 20px ${cfg.color}05`,
      }}>
        <div style={{ fontSize: 11, color: "#3a3d5a", fontFamily: "'Space Mono', monospace", letterSpacing: "0.1em", marginBottom: 8 }}>내 프로필 미리보기</div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{
            width: 40, height: 40, borderRadius: "50%",
            background: `${cfg.color}18`,
            border: `2px solid ${cfg.color}88`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "'Space Mono', monospace", fontSize: 11, fontWeight: 700,
            color: cfg.color, boxShadow: `0 0 10px ${cfg.color}44`,
            transition: "all 0.4s",
          }}>ME</div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#e0e8ff", marginBottom: 4 }}>나 (익명)</div>
            <span style={{
              fontSize: 11, fontFamily: "'Space Mono', monospace",
              background: `${cfg.color}18`, border: `1px solid ${cfg.color}44`,
              color: cfg.color, padding: "2px 8px", borderRadius: 20,
              transition: "all 0.4s",
            }}>{cfg.tag}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChatSection() {
  const [messages, setMessages] = useState(DUMMY_MESSAGES);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  const now = () => {
    const d = new Date();
    return `${d.getHours().toString().padStart(2,"0")}:${d.getMinutes().toString().padStart(2,"0")}`;
  };

  const send = useCallback(() => {
    const text = input.trim();
    if (!text) return;
    setMessages(m => [...m, { id: Date.now(), user: "나 (익명)", text, time: now(), isMe: true }]);
    setInput("");
    setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: "smooth" }), 50);
  }, [input]);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div style={{ flex: 1, overflowY: "auto", paddingRight: 4, display: "flex", flexDirection: "column", gap: 12 }}>
        {messages.map((msg, i) => (
          <div key={msg.id} style={{
            animation: i >= DUMMY_MESSAGES.length ? "msg-in 0.35s ease" : "none",
            display: "flex", flexDirection: "column",
            alignItems: msg.isMe ? "flex-end" : "flex-start",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
              {!msg.isMe && (
                <div style={{
                  width: 24, height: 24, borderRadius: "50%",
                  background: `${NEON_PURPLE}22`, border: `1px solid ${NEON_PURPLE}44`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 9, color: NEON_PURPLE, fontFamily: "'Space Mono', monospace", fontWeight: 700,
                }}>?</div>
              )}
              <span style={{
                fontSize: 11, color: msg.isMe ? NEON_CYAN : "#4a5070",
                fontFamily: "'Space Mono', monospace", letterSpacing: "0.03em",
              }}>{msg.user}</span>
              <span style={{ fontSize: 10, color: "#2a2d4a", fontFamily: "'Space Mono', monospace" }}>{msg.time}</span>
            </div>
            <div style={{
              maxWidth: "85%",
              background: msg.isMe
                ? `linear-gradient(135deg, ${NEON_CYAN}18, ${NEON_PURPLE}12)`
                : "linear-gradient(135deg, #111628, #0d1020)",
              border: `1px solid ${msg.isMe ? NEON_CYAN + "44" : "#1e2240"}`,
              borderRadius: msg.isMe ? "14px 14px 4px 14px" : "14px 14px 14px 4px",
              padding: "10px 14px",
              fontSize: 13,
              color: msg.isMe ? "#c8f4ff" : "#a0aac8",
              lineHeight: 1.6,
              boxShadow: msg.isMe ? `0 0 12px ${NEON_CYAN}18` : "none",
            }}>{msg.text}</div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <div style={{ marginTop: 16, display: "flex", gap: 8 }}>
        <div style={{
          flex: 1, background: "#0a0e1e",
          border: "1px solid #1e2240", borderRadius: 10,
          display: "flex", alignItems: "center",
          paddingLeft: 12, overflow: "hidden",
          transition: "border-color 0.2s",
        }}>
          <span style={{ color: NEON_GREEN, fontFamily: "'Space Mono', monospace", fontSize: 13, marginRight: 8 }}>›</span>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && send()}
            placeholder="새벽의 외침을 남겨주세요..."
            style={{
              flex: 1, background: "transparent", border: "none", outline: "none",
              color: "#c8d0e8", fontSize: 13, padding: "12px 0",
              fontFamily: "'Noto Sans KR', sans-serif",
            }}
          />
        </div>
        <button onClick={send} style={{
          background: `${NEON_GREEN}18`,
          border: `1.5px solid ${NEON_GREEN}88`,
          borderRadius: 10, padding: "0 20px",
          color: NEON_GREEN, fontFamily: "'Space Mono', monospace",
          fontSize: 13, fontWeight: 700, cursor: "pointer",
          transition: "all 0.2s",
          boxShadow: `0 0 14px ${NEON_GREEN}33`,
          letterSpacing: "0.05em",
        }}
          onMouseEnter={e => { e.currentTarget.style.background = `${NEON_GREEN}28`; e.currentTarget.style.boxShadow = `0 0 22px ${NEON_GREEN}55`; }}
          onMouseLeave={e => { e.currentTarget.style.background = `${NEON_GREEN}18`; e.currentTarget.style.boxShadow = `0 0 14px ${NEON_GREEN}33`; }}
        >전송</button>
      </div>
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [myStatus, setMyStatus] = useState("💻 코딩 폭주");
  const [toasts, setToasts] = useState([]);
  const [users, setUsers] = useState(DUMMY_USERS);
  const [clock, setClock] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setClock(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const addToast = msg => {
    const id = Date.now();
    setToasts(t => [...t, { id, message: msg }]);
    setTimeout(() => setToasts(t => t.filter(x => x.id !== id)), 3600);
  };

  const wakeUser = user => {
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
      <style>{globalStyle}</style>
      <Toast toasts={toasts} />

      <div style={{ minHeight: "100vh", background: "#080b14", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: `
            radial-gradient(ellipse 60% 40% at 20% 10%, ${NEON_PURPLE}0a 0%, transparent 60%),
            radial-gradient(ellipse 50% 30% at 80% 80%, ${NEON_GREEN}08 0%, transparent 60%),
            radial-gradient(ellipse 40% 50% at 50% 50%, ${NEON_CYAN}05 0%, transparent 70%)
          `,
          pointerEvents: "none", zIndex: 0,
        }} />

        <div style={{
          position: "fixed", top: 0, left: 0, right: 0,
          height: "100vh",
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 49px, #ffffff04 49px, #ffffff04 50px),
            repeating-linear-gradient(90deg, transparent, transparent 49px, #ffffff03 49px, #ffffff03 50px)
          `,
          pointerEvents: "none", zIndex: 0,
        }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto", padding: "0 20px 40px" }}>
          <header style={{ padding: "28px 0 24px", display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
                <span style={{
                  fontFamily: "'Space Mono', monospace", fontSize: 11,
                  color: NEON_GREEN, letterSpacing: "0.2em",
                  background: `${NEON_GREEN}15`,
                  border: `1px solid ${NEON_GREEN}44`,
                  padding: "2px 10px", borderRadius: 4,
                  textTransform: "uppercase",
                  animation: "neon-flicker 6s infinite",
                }}>● LIVE</span>
                <span style={{
                  fontFamily: "'Space Mono', monospace", fontSize: 11,
                  color: "#3a3d5a", letterSpacing: "0.1em",
                }}>
                  {clock.toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
                </span>
              </div>
              <h1 style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "clamp(24px, 4vw, 36px)",
                fontWeight: 700,
                letterSpacing: "0.04em",
                lineHeight: 1.1,
              }}>
                <span style={{ color: NEON_GREEN, textShadow: `0 0 20px ${NEON_GREEN}88` }}>밤샘</span>
                <span style={{ color: "#e0e8ff" }}> 대피소</span>
              </h1>
              <p style={{ fontSize: 12, color: "#3a4060", fontFamily: "'Space Mono', monospace", letterSpacing: "0.06em", marginTop: 4 }}>
                MIDNIGHT SHELTER — 벼락치기 메이트
              </p>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 11, color: "#3a3d5a", fontFamily: "'Space Mono', monospace", letterSpacing: "0.08em", marginBottom: 4 }}>ONLINE NOW</div>
              <div style={{
                fontFamily: "'Space Mono', monospace", fontSize: 28, fontWeight: 700,
                color: NEON_GREEN, textShadow: `0 0 16px ${NEON_GREEN}`,
              }}>{users.filter(u => !u.asleep).length + 1}</div>
              <div style={{ fontSize: 10, color: "#2a3050", fontFamily: "'Space Mono', monospace", letterSpacing: "0.1em" }}>명 생존 중</div>
            </div>
          </header>

          <div style={{ display: "flex", gap: 4, marginBottom: 28, background: "#0a0e1e", borderRadius: 12, padding: 4, border: "1px solid #1a1f3a" }}>
            {TABS.map((tab, i) => (
              <button key={i} onClick={() => setActiveTab(i)} style={{
                flex: 1, padding: "11px 8px",
                background: activeTab === i ? `${TAB_COLORS[i]}18` : "transparent",
                border: `1px solid ${activeTab === i ? TAB_COLORS[i] + "66" : "transparent"}`,
                borderRadius: 9,
                color: activeTab === i ? TAB_COLORS[i] : "#3a3d5a",
                fontFamily: "'Space Mono', monospace",
                fontSize: "clamp(10px, 1.5vw, 13px)",
                fontWeight: activeTab === i ? 700 : 400,
                cursor: "pointer",
                transition: "all 0.25s",
                letterSpacing: "0.04em",
                boxShadow: activeTab === i ? `0 0 16px ${TAB_COLORS[i]}33` : "none",
              }}>
                <span style={{ marginRight: 6 }}>{tab.icon}</span>{tab.label}
              </button>
            ))}
          </div>

          <div style={{
            display: activeTab === 0 ? "block" : "none",
          }}>
            <div style={{ marginBottom: 16, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontSize: 11, color: "#3a3d5a", fontFamily: "'Space Mono', monospace", letterSpacing: "0.1em" }}>
                ACTIVE USERS — {users.length + 1}명
              </span>
              <span style={{
                fontSize: 11, color: NEON_GREEN,
                fontFamily: "'Space Mono', monospace",
                background: `${NEON_GREEN}12`, border: `1px solid ${NEON_GREEN}33`,
                padding: "3px 10px", borderRadius: 4, letterSpacing: "0.08em",
              }}>
                <span style={{ animation: "pulse-dot 1.5s infinite", display: "inline-block" }}>●</span> 실시간 업데이트 중
              </span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 12 }}>
              <div style={{
                background: `linear-gradient(135deg, ${cfg.color}10, #0a0e1e)`,
                border: `1px solid ${cfg.color}55`,
                borderRadius: 14, padding: "18px 20px",
                display: "flex", alignItems: "center", gap: 16,
                position: "relative", overflow: "hidden",
                boxShadow: `0 0 24px ${cfg.color}22, inset 0 0 30px ${cfg.color}08`,
              }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${cfg.color}, transparent)` }} />
                <div style={{ position: "relative" }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: "50%",
                    background: `${cfg.color}22`,
                    border: `2px solid ${cfg.color}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "'Space Mono', monospace", fontSize: 12, fontWeight: 700,
                    color: cfg.color, boxShadow: `0 0 16px ${cfg.color}66`,
                  }}>ME</div>
                  <div style={{
                    position: "absolute", bottom: 1, right: 1,
                    width: 10, height: 10, borderRadius: "50%",
                    background: cfg.color, boxShadow: `0 0 8px ${cfg.color}`,
                    animation: "pulse-dot 1.8s infinite",
                    border: "1.5px solid #0a0e1e",
                  }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 5 }}>
                    <span style={{ fontSize: 14, fontWeight: 700, color: "#e0e8ff" }}>나 (익명)</span>
                    <span style={{ fontSize: 10, fontFamily: "'Space Mono', monospace", background: `${cfg.color}22`, border: `1px solid ${cfg.color}66`, color: cfg.color, padding: "1px 7px", borderRadius: 10 }}>나</span>
                    <TypingIndicator />
                  </div>
                  <span style={{
                    fontSize: 11, fontFamily: "'Space Mono', monospace",
                    background: `${cfg.color}18`, border: `1px solid ${cfg.color}44`,
                    color: cfg.color, padding: "2px 8px", borderRadius: 20,
                  }}>{cfg.tag}</span>
                </div>
              </div>
              {users.map(u => (
                <UserCard key={u.id} user={u} onWake={wakeUser} />
              ))}
            </div>
          </div>

          <div style={{ display: activeTab === 1 ? "block" : "none" }}>
            <div style={{
              background: "linear-gradient(135deg, #0f1428, #0a0e1e)",
              border: "1px solid #1e2240",
              borderRadius: 16, padding: "28px 32px",
              boxShadow: "0 0 40px #00000044",
            }}>
              <TimerSection myStatus={myStatus} setMyStatus={setMyStatus} />
            </div>
          </div>

          <div style={{ display: activeTab === 2 ? "block" : "none" }}>
            <div style={{
              background: "linear-gradient(135deg, #0f1428, #0a0e1e)",
              border: "1px solid #1e2240",
              borderRadius: 16, padding: "24px",
              height: 560,
              display: "flex", flexDirection: "column",
              boxShadow: "0 0 40px #00000044",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20, paddingBottom: 16, borderBottom: "1px solid #1a1f3a" }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: NEON_CYAN, boxShadow: `0 0 8px ${NEON_CYAN}`, animation: "pulse-dot 2s infinite" }} />
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: NEON_CYAN, letterSpacing: "0.1em" }}>새벽 대피소 익명 톡방</span>
                <span style={{ marginLeft: "auto", fontSize: 11, color: "#3a3d5a", fontFamily: "'Space Mono', monospace" }}>{users.length + 1}명 접속 중</span>
              </div>
              <ChatSection />
            </div>
          </div>

          <footer style={{ marginTop: 32, textAlign: "center" }}>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: "#1e2240", letterSpacing: "0.15em" }}>
              MIDNIGHT SHELTER v1.0 — 2026 컴퓨터개론 프로젝트
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
