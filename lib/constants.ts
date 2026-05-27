export const NEON_GREEN = "#39ff6e";
export const NEON_PURPLE = "#bf5fff";
export const NEON_CYAN = "#00e5ff";
export const NEON_PINK = "#ff2d78";

export const STATUS_CONFIG: Record<
  string,
  { color: string; glow: string; tag: string }
> = {
  "💻 코딩 폭주": {
    color: NEON_GREEN,
    glow: "0 0 12px #39ff6e88",
    tag: "🔥코딩 중",
  },
  "📚 개념 암기": {
    color: NEON_CYAN,
    glow: "0 0 12px #00e5ff88",
    tag: "📖벼락치기 중",
  },
  "✍️ 레포트 작성": {
    color: NEON_PURPLE,
    glow: "0 0 12px #bf5fff88",
    tag: "📝레포트 잔혹사",
  },
  "💤 기절 직전": { color: "#555577", glow: "none", tag: "😴기절 직전" },
  "☕ 카페인 수혈": {
    color: "#ffaa00",
    glow: "0 0 12px #ffaa0088",
    tag: "☕아메리카노 수혈 중",
  },
};
