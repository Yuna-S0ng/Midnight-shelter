"use client";

import { useState, useRef, useCallback } from "react";
import { NEON_GREEN, NEON_PURPLE, NEON_CYAN } from "@/lib/constants";
import { Message } from "@/lib/types";
import { DUMMY_MESSAGES } from "@/lib/data";

export default function ChatSection() {
  const [messages, setMessages] = useState<Message[]>(DUMMY_MESSAGES);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  const now = () => {
    const d = new Date();
    return `${d.getHours().toString().padStart(2, "0")}:${d.getMinutes().toString().padStart(2, "0")}`;
  };

  const send = useCallback(() => {
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [
      ...m,
      { id: Date.now(), user: "나 (익명)", text, time: now(), isMe: true },
    ]);
    setInput("");
    setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: "smooth" }), 50);
  }, [input]);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          paddingRight: 4,
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        {messages.map((msg, i) => (
          <div
            key={msg.id}
            className={i >= DUMMY_MESSAGES.length ? "animate-msg-in" : ""}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: msg.isMe ? "flex-end" : "flex-start",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                marginBottom: 4,
              }}
            >
              {!msg.isMe && (
                <div
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    background: `${NEON_PURPLE}22`,
                    border: `1px solid ${NEON_PURPLE}44`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 9,
                    color: NEON_PURPLE,
                    fontFamily: "var(--font-space-mono), monospace",
                    fontWeight: 700,
                  }}
                >
                  ?
                </div>
              )}
              <span
                style={{
                  fontSize: 11,
                  color: msg.isMe ? NEON_CYAN : "#4a5070",
                  fontFamily: "var(--font-space-mono), monospace",
                  letterSpacing: "0.03em",
                }}
              >
                {msg.user}
              </span>
              <span
                style={{
                  fontSize: 10,
                  color: "#2a2d4a",
                  fontFamily: "var(--font-space-mono), monospace",
                }}
              >
                {msg.time}
              </span>
            </div>
            <div
              style={{
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
              }}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <div style={{ marginTop: 16, display: "flex", gap: 8 }}>
        <div
          style={{
            flex: 1,
            background: "#0a0e1e",
            border: "1px solid #1e2240",
            borderRadius: 10,
            display: "flex",
            alignItems: "center",
            paddingLeft: 12,
            overflow: "hidden",
            transition: "border-color 0.2s",
          }}
        >
          <span
            style={{
              color: NEON_GREEN,
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: 13,
              marginRight: 8,
            }}
          >
            ›
          </span>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="새벽의 외침을 남겨주세요..."
            style={{
              flex: 1,
              background: "transparent",
              border: "none",
              outline: "none",
              color: "#c8d0e8",
              fontSize: 13,
              padding: "12px 0",
              fontFamily: "var(--font-noto-sans-kr), sans-serif",
            }}
          />
        </div>
        <button
          onClick={send}
          style={{
            background: `${NEON_GREEN}18`,
            border: `1.5px solid ${NEON_GREEN}88`,
            borderRadius: 10,
            padding: "0 20px",
            color: NEON_GREEN,
            fontFamily: "var(--font-space-mono), monospace",
            fontSize: 13,
            fontWeight: 700,
            cursor: "pointer",
            transition: "all 0.2s",
            boxShadow: `0 0 14px ${NEON_GREEN}33`,
            letterSpacing: "0.05em",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = `${NEON_GREEN}28`;
            e.currentTarget.style.boxShadow = `0 0 22px ${NEON_GREEN}55`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = `${NEON_GREEN}18`;
            e.currentTarget.style.boxShadow = `0 0 14px ${NEON_GREEN}33`;
          }}
        >
          전송
        </button>
      </div>
    </div>
  );
}
