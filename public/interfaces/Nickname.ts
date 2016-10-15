interface Nickname {
  name: string;
  description: string;
  upvotes: number;
  downvotes: number;
  tags: string[];
  isRealNickname?: boolean;
}

export default Nickname;
