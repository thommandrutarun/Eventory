export interface OccasionCategory {
  id: string;
  name: string;
  tagline: string;
  icon: string;
  accent: "indigo" | "pink" | "amber" | "neutral";
  countLabel: string;
}

export const OCCASION_CATEGORIES: OccasionCategory[] = [
  {
    id: "graduation",
    name: "Graduation",
    tagline: "Commencements, valedictorian honors & milestone recaps",
    icon: "mortarboard",
    accent: "indigo",
    countLabel: "Academic Milestones",
  },
  {
    id: "birthday",
    name: "Birthday",
    tagline: "Animated invitations, milestone years & party montages",
    icon: "cake",
    accent: "pink",
    countLabel: "Celebrations",
  },
  {
    id: "wedding",
    name: "Wedding",
    tagline: "Save the dates, ceremony highlights & romantic albums",
    icon: "heart",
    accent: "amber",
    countLabel: "Ceremony & Reception",
  },
  {
    id: "travel",
    name: "Travel",
    tagline: "Wanderlust itineraries, vacation reels & scenic postcards",
    icon: "compass",
    accent: "indigo",
    countLabel: "Adventures & Roadtrips",
  },
  {
    id: "festivals",
    name: "Festivals",
    tagline: "Cultural gatherings, holiday greetings & seasonal cheer",
    icon: "sparkles",
    accent: "amber",
    countLabel: "Seasonal & Cultural",
  },
  {
    id: "memories",
    name: "Memories",
    tagline: "Family retrospectives, annual albums & nostalgic stories",
    icon: "clock",
    accent: "indigo",
    countLabel: "Family & Retrospectives",
  },
  {
    id: "everyday",
    name: "Everyday",
    tagline: "Coffee runs, weekend journals & candid aesthetic layouts",
    icon: "camera",
    accent: "neutral",
    countLabel: "Candid Moments",
  },
];
