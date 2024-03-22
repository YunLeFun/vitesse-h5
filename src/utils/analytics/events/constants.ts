export const analyticsEvents = [
  '',
] as const

export type AnalyticsEvent = typeof analyticsEvents[number]
