export const SYSTEM_IDS = [
  "skeletal",
  "muscular",
  "nervous",
  "circulatory",
  "respiratory",
  "digestive",
  "urinary",
  "reproductive",
  "endocrine",
  "lymphatic",
  "integumentary",
] as const;

export type SystemId = (typeof SYSTEM_IDS)[number];

export const SYSTEM_COLORS: Record<SystemId, string> = {
  skeletal: "#e8e4d8",
  muscular: "#c0392b",
  nervous: "#f1c40f",
  circulatory: "#8e1b1b",
  respiratory: "#5dade2",
  digestive: "#d68910",
  urinary: "#117a65",
  reproductive: "#9b59b6",
  endocrine: "#d35400",
  lymphatic: "#27ae60",
  integumentary: "#f5cba7",
};
