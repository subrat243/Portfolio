// Type definitions for the TryHackMe API response

export interface TryHackMeProfile {
  username: string;
  avatar: string;
  level: number;
  levelName?: string;
  totalPoints: number;
  completedRoomsNumber: number;
  badgesNumber: number;
  rank: number;
  topPercentage: number;
  joinedOn?: string;
  country?: string;
}

export interface TryHackMeApiResponse {
  success: boolean;
  data?: TryHackMeProfile;
  error?: string;
}
