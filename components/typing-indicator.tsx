import { NEON_GREEN } from "@/lib/constants";

export default function TypingIndicator() {
  return (
    <span
      style={{
        display: "inline-flex",
        gap: 3,
        alignItems: "center",
        marginLeft: 6,
      }}
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="typing-dot"
          style={{
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: NEON_GREEN,
            boxShadow: `0 0 6px ${NEON_GREEN}`,
            animationDelay: `${i * 0.15}s`,
          }}
        />
      ))}
    </span>
  );
}
