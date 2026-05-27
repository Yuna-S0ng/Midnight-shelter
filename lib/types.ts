export interface User {
  id: number;
  name: string;
  status: string;
  hours: string;
  avatar: string;
  asleep: boolean;
  typing: boolean;
}

export interface Message {
  id: number;
  user: string;
  text: string;
  time: string;
  isMe?: boolean;
}

export interface ToastItem {
  id: number;
  message: string;
}
