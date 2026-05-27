import { User, Message } from "./types";

export const DUMMY_USERS: User[] = [
  {
    id: 1,
    name: "익명의 코딩몬스터",
    status: "💻 코딩 폭주",
    hours: "5h 23m",
    avatar: "CM",
    asleep: false,
    typing: true,
  },
  {
    id: 2,
    name: "레포트계의 전설",
    status: "✍️ 레포트 작성",
    hours: "3h 07m",
    avatar: "RP",
    asleep: false,
    typing: true,
  },
  {
    id: 3,
    name: "시험왕 도전자",
    status: "📚 개념 암기",
    hours: "6h 51m",
    avatar: "SK",
    asleep: false,
    typing: false,
  },
  {
    id: 4,
    name: "새벽3시의 영혼",
    status: "💤 기절 직전",
    hours: "8h 00m",
    avatar: "NS",
    asleep: true,
    typing: false,
  },
  {
    id: 5,
    name: "커피는 내 산소",
    status: "☕ 카페인 수혈",
    hours: "2h 44m",
    avatar: "CF",
    asleep: false,
    typing: false,
  },
];

export const DUMMY_MESSAGES: Message[] = [
  {
    id: 1,
    user: "익명의 밤샘러",
    text: "컴공과 과제 던지고 싶다... 근데 못 던지는 게 현실 ㅜㅜ",
    time: "02:14",
  },
  {
    id: 2,
    user: "새벽감성",
    text: "교양 레포트 3페이지 남은 분??? 같이 달려요 🔥",
    time: "02:31",
  },
  {
    id: 3,
    user: "카페인중독자",
    text: "아메리카노 4잔째입니다. 심장이 코딩을 시작했어요",
    time: "03:08",
  },
  {
    id: 4,
    user: "시험지옥탈출",
    text: "자료구조 기말... 트리를 심으면 학점이 열리나요 🌳",
    time: "03:22",
  },
];
