import * as amplitude from "@amplitude/analytics-browser";

let isInitialized = false;

export const initAmplitude = () => {
  if (isInitialized) return;

  const apiKey = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY;

  if (!apiKey) {
    console.warn("Amplitude API key not found");
    return;
  }

  amplitude.init(apiKey, undefined, {
    defaultTracking: {
      sessions: true,
      pageViews: true,
      formInteractions: true,
      fileDownloads: true,
    },
  });

  isInitialized = true;
};

export const logEvent = (
  eventName: string,
  eventProperties?: Record<string, any>
) => {
  amplitude.track(eventName, eventProperties);
};

export const setUserId = (userId: string) => {
  amplitude.setUserId(userId);
};

export const setUserProperties = (properties: Record<string, any>) => {
  const identifyEvent = new amplitude.Identify();
  Object.entries(properties).forEach(([key, value]) => {
    identifyEvent.set(key, value);
  });
  amplitude.identify(identifyEvent);
};

export { amplitude };
