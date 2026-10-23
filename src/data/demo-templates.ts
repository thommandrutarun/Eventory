export type TemplateFormat = "video" | "photo";
export type AspectRatio = "9:16" | "1:1" | "16:9";

export interface DemoTemplate {
  id: string;
  title: string;
  occasionId: string;
  occasionName: string;
  format: TemplateFormat;
  aspectRatio: AspectRatio;
  duration?: string;
  photoSlots: number;
  description: string;
  accent: "indigo" | "pink" | "amber" | "neutral";
  tags: string[];
  features: string[];
}

export const DEMO_TEMPLATES: DemoTemplate[] = [
  {
    id: "demo-grad-reel",
    title: "Golden Commencement Reel",
    occasionId: "graduation",
    occasionName: "Graduation",
    format: "video",
    aspectRatio: "9:16",
    duration: "15s",
    photoSlots: 5,
    description: "An energetic vertical recap with elegant gold borders, diploma confetti transitions, and celebratory typography.",
    accent: "indigo",
    tags: ["9:16 Reel", "5 Clips", "Gold Accents"],
    features: ["Custom Degree & Honors Text", "Dynamic Rhythm Transitions", "On-Device Render"],
  },
  {
    id: "demo-birthday-confetti",
    title: "Neon Confetti Birthday Story",
    occasionId: "birthday",
    occasionName: "Birthday",
    format: "video",
    aspectRatio: "9:16",
    duration: "12s",
    photoSlots: 4,
    description: "Playful pink and violet motion bursts featuring animated cake candles, milestone age badges, and party audio sync.",
    accent: "pink",
    tags: ["9:16 Story", "4 Clips", "Party Motion"],
    features: ["Editable Age & Wishes", "Bouncy Entrance Animations", "Music Sync Markers"],
  },
  {
    id: "demo-wedding-cinematic",
    title: "Champagne Ceremony Highlights",
    occasionId: "wedding",
    occasionName: "Wedding",
    format: "video",
    aspectRatio: "16:9",
    duration: "30s",
    photoSlots: 8,
    description: "Slow, cinematic widescreen transitions for vows, rings, and banquet memories with warm champagne tone grading.",
    accent: "amber",
    tags: ["16:9 Widescreen", "8 Clips", "Cinematic"],
    features: ["Monogram Title Card", "Soft Vignette Blur", "Vow Audio Layer"],
  },
  {
    id: "demo-travel-postcard",
    title: "Wanderlust Postcard Diary",
    occasionId: "travel",
    occasionName: "Travel",
    format: "photo",
    aspectRatio: "1:1",
    photoSlots: 6,
    description: "A square multi-shot collage featuring stamp overlays, flight path vector graphics, and latitude/longitude tags.",
    accent: "indigo",
    tags: ["1:1 Square", "6 Photos", "Postcard Style"],
    features: ["GPS Coordinate Badges", "Custom City Stamps", "High-Res Print Ready"],
  },
  {
    id: "demo-festivals-glow",
    title: "Festival of Lights Greeting",
    occasionId: "festivals",
    occasionName: "Festivals",
    format: "video",
    aspectRatio: "9:16",
    duration: "15s",
    photoSlots: 3,
    description: "Warm amber lantern glow transitions with sparkling particle overlays designed for seasonal family blessings.",
    accent: "amber",
    tags: ["9:16 Reel", "3 Clips", "Glowing Bokeh"],
    features: ["Multi-Language Greetings", "Ambient Lantern Glow", "Festive Audio Bed"],
  },
  {
    id: "demo-memories-scrapbook",
    title: "Year in Review Scrapbook",
    occasionId: "memories",
    occasionName: "Memories",
    format: "photo",
    aspectRatio: "1:1",
    photoSlots: 9,
    description: "Nine-panel square retrospective with textured tape stickers, handwritten date stamps, and archival borders.",
    accent: "neutral",
    tags: ["1:1 Grid", "9 Photos", "Vintage Tape"],
    features: ["Handwritten Font Slots", "Paper Texture Accents", "Export for Albums"],
  },
  {
    id: "demo-everyday-journal",
    title: "Minimalist Daily Aesthetic",
    occasionId: "everyday",
    occasionName: "Everyday",
    format: "video",
    aspectRatio: "9:16",
    duration: "10s",
    photoSlots: 3,
    description: "Clean typography, subtle film grain, and calm pacing designed for morning coffee, studio desks, and casual vlogs.",
    accent: "indigo",
    tags: ["9:16 Reel", "3 Clips", "Minimalist"],
    features: ["Helvetica Clean Style", "Subtle 35mm Grain", "Calm Pace"],
  },
  {
    id: "demo-birthday-polaroid",
    title: "Instant Polaroid Birthday Frame",
    occasionId: "birthday",
    occasionName: "Birthday",
    format: "photo",
    aspectRatio: "1:1",
    photoSlots: 4,
    description: "Four overlapping instant film frames with customizable marker text and celebratory pastel washi tape stickers.",
    accent: "pink",
    tags: ["1:1 Photo", "4 Photos", "Instant Film"],
    features: ["Marker Pen Captions", "Pastel Washi Accents", "Instant Download"],
  },
];
