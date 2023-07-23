export type ExerciseType = {
  id: string;
  name: string;
  description: string;
  repetitions: string;
  breathing: string;
  link: string;
  // isYoutubeUrl: boolean;
};

export interface User {
  id: string;
  name: string;
  username: string;
  type: "personal" | "client";
}
