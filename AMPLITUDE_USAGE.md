# Amplitude Analytics Integration

## Overview
Amplitude is now integrated into the website for tracking user behavior and analytics.

## Setup Complete
- ✅ Amplitude SDK installed
- ✅ API Key configured in `.env.local`
- ✅ Automatic page view tracking enabled
- ✅ Session tracking enabled
- ✅ Form interaction tracking enabled

## Automatic Tracking
The following events are tracked automatically:
- **Page Views**: Every page navigation
- **Sessions**: User sessions
- **Form Interactions**: Form submissions
- **File Downloads**: File download clicks

## Manual Event Tracking

### Import the tracking function:
```typescript
import { logEvent } from "@/lib/amplitude";
```

### Track Custom Events

#### Example 1: Track button clicks
```typescript
"use client";

import { logEvent } from "@/lib/amplitude";

export default function BookingButton() {
  const handleClick = () => {
    logEvent("Booking Button Clicked", {
      location: "hero_section",
      button_text: "도안재 예약하기",
    });

    // Your booking logic here
  };

  return (
    <button onClick={handleClick}>
      도안재 예약하기
    </button>
  );
}
```

#### Example 2: Track video interactions
```typescript
const handleVideoPlay = () => {
  logEvent("Video Played", {
    video_name: "premium_therapy",
    section: "premium_section",
  });
};

const handleVideoPause = () => {
  logEvent("Video Paused", {
    video_name: "premium_therapy",
    section: "premium_section",
  });
};
```

#### Example 3: Track navigation clicks
```typescript
const handleNavClick = (sectionName: string) => {
  logEvent("Navigation Click", {
    section: sectionName,
    navigation_type: "menu",
  });
};
```

#### Example 4: Track popup interactions
```typescript
const handlePopupClose = () => {
  logEvent("Popup Closed", {
    popup_type: "welcome",
    action: "close_button",
  });
};

const handleDontShowAgain = () => {
  logEvent("Popup Closed", {
    popup_type: "welcome",
    action: "dont_show_for_day",
  });
};
```

#### Example 5: Track contact form submissions
```typescript
const handleFormSubmit = (formData: any) => {
  logEvent("Contact Form Submitted", {
    form_type: "booking",
    has_phone: !!formData.phone,
    has_email: !!formData.email,
  });
};
```

### Track User Properties
```typescript
import { setUserProperties } from "@/lib/amplitude";

// Set user properties
setUserProperties({
  language: "ko",
  user_type: "new_visitor",
});
```

### Set User ID (for logged-in users)
```typescript
import { setUserId } from "@/lib/amplitude";

// When user logs in
setUserId("user-123");
```

## Common Events to Track

Here are recommended events to track on your website:

1. **CTA Clicks**
   - "CTA Clicked" - When user clicks any call-to-action button
   - Properties: button_text, section, destination

2. **Section Views**
   - "Section Viewed" - When user scrolls to a section
   - Properties: section_name, time_spent

3. **Video Interactions**
   - "Video Played", "Video Paused", "Video Completed"
   - Properties: video_id, video_name, duration

4. **Form Interactions**
   - "Form Started", "Form Submitted", "Form Error"
   - Properties: form_name, error_type

5. **External Link Clicks**
   - "External Link Clicked"
   - Properties: link_url, link_text, destination

6. **Popup Interactions**
   - "Popup Viewed", "Popup Closed", "Popup CTA Clicked"
   - Properties: popup_type, action

## Environment Variables

### Local Development
The API key is stored in `.env.local`:
```
NEXT_PUBLIC_AMPLITUDE_API_KEY=b277222e699cfa4dd35fefc26253bfb1
```

### Production Deployment
Make sure to add the same environment variable to your hosting platform:
- **Vercel**: Add in Project Settings → Environment Variables
- **Netlify**: Add in Site Settings → Environment Variables
- **Other platforms**: Add `NEXT_PUBLIC_AMPLITUDE_API_KEY` with the value

## Testing

### Verify Integration
1. Open your website in a browser
2. Open browser DevTools → Console
3. Navigate through pages
4. Check Amplitude dashboard (https://analytics.amplitude.com) for incoming events

### Debug Mode
To see Amplitude events in console, you can temporarily enable debug mode in `lib/amplitude.ts`:
```typescript
amplitude.init(apiKey, undefined, {
  logLevel: amplitude.Types.LogLevel.Debug, // Add this line
  defaultTracking: {
    sessions: true,
    pageViews: true,
    formInteractions: true,
    fileDownloads: true,
  },
});
```

## Dashboard
Access your Amplitude dashboard at: https://analytics.amplitude.com

Login and navigate to your project to see:
- Real-time events
- User sessions
- Funnel analysis
- User paths
- And more analytics

## Best Practices

1. **Be Consistent**: Use consistent naming for events (e.g., "Button Clicked" not "btn_click")
2. **Add Context**: Include relevant properties with each event
3. **Don't Over-track**: Only track meaningful user interactions
4. **Privacy**: Don't send PII (Personally Identifiable Information) like emails, phone numbers, addresses
5. **Test First**: Test events in development before deploying to production

## Support
For questions about Amplitude integration, refer to:
- [Amplitude TypeScript SDK Docs](https://www.docs.developers.amplitude.com/data/sdks/typescript-browser/)
- [Amplitude Dashboard](https://analytics.amplitude.com)
