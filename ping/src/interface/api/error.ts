interface NotificationResponse {
  id: number;
  type:
    | "VOTE_RESULT"
    | "VOTE_COUNT_ON_TOPIC"
    | "COMMENT_ON_TOPIC"
    | "LIKE_IN_COMMENT";
  receiverType: string;
  isRead: boolean;
  message: Message;
  createdAt: number;
}

interface Message {
  title: string;
  content: string;
  topicId: number;
  commentId: number;
}
export interface ErrorResponse {
  abCode: string;
  errorContent: ErrorContent;
}

interface ErrorContent {
  message: string;
  hint: string;
  httpCode: number;
  payload?: number;
}
export type { NotificationResponse, Message };
