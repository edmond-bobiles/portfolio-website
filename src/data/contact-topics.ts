export const topicValues = ["internship", "collaboration", "hello"] as const;

export type TopicValue = (typeof topicValues)[number];

export const topicLabels: Record<TopicValue, string> = {
  internship: "Internship opportunity",
  collaboration: "Collaboration",
  hello: "Just saying hi",
};