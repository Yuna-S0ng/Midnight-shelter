import { NEON_GREEN } from "@/lib/constants";

interface ToastProps {
  toasts: { id: number; message: string }[];
}

export default function Toast({ toasts }: ToastProps) {
  return (
    <div
      style={{
        position: "fixed",
        top: 24,
        right: 24,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        gap: 8,
        pointerEvents: "none",
      }}
    >
      {toasts.map((t) => (
        <div
          key={t.id}
          className="animate-toast-in"
          style={{
            background: "linear-gradient(135deg, #1a1f3a, #0f1224)",
            border: `1px solid ${NEON_GREEN}66`,
            borderRadius: 10,
            padding: "12px 18px",
            fontFamily: "var(--font-space-mono), monospace",
            fontSize: 13,
            color: NEON_GREEN,
            textShadow: `0 0 8px ${NEON_GREEN}`,
            boxShadow: `0 0 20px ${NEON_GREEN}33, inset 0 0 20px ${NEON_GREEN}08`,
            maxWidth: 300,
            letterSpacing: "0.04em",
          }}
        >
          {t.message}
        </div>
      ))}
    </div>
  );
}
