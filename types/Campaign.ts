/* eslint-disable @typescript-eslint/no-explicit-any */
// types/Campaign.ts
export interface Campaign {
  meals: number;
  meal2 : number;
  percentage : number;
  goal: any;
  image: string | Blob | undefined;
  id: number;
  title: string;
  description: string;
  organizer: string;
  target: number;
  user: string;
  category: string;
  createdAt: Date;
  banner: string;
}
