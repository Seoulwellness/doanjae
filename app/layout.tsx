import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import AmplitudeProvider from "@/components/AmplitudeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "도안재 - 프리미엄 다이어트 테라피",
  description: "천년의 지혜와 현대의 기술을 접목한 가장 이상적인 다이어트 솔루션",
  keywords: "도안재, 다이어트, 테라피, 프리미엄, 웰니스",
  metadataBase: new URL("https://doan.life"),
  openGraph: {
    title: "도안재 - 프리미엄 다이어트 테라피",
    description: "천년의 지혜와 현대의 기술을 접목한 가장 이상적인 다이어트 솔루션",
    url: "https://doan.life",
    siteName: "도안재",
    images: [
      {
        url: "https://doan.life/images/landing/image1.png",
        width: 1515,
        height: 1020,
        alt: "도안재 - 프리미엄 다이어트 테라피",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "도안재 - 프리미엄 다이어트 테라피",
    description: "천년의 지혜와 현대의 기술을 접목한 가장 이상적인 다이어트 솔루션",
    images: ["https://doan.life/images/landing/image1.png"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "도안재",
    description: "천년의 지혜와 현대의 기술을 접목한 가장 이상적인 다이어트 솔루션",
    inLanguage: "ko",
    url: "https://doan.life",
  };

  const naverMapClientId = process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID;

  return (
    <html lang="ko">
      <head>
        <meta name="theme-color" content="#3b82f6" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css"
          as="style"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${naverMapClientId}`}
          strategy="beforeInteractive"
        />
        <AmplitudeProvider>{children}</AmplitudeProvider>
      </body>
    </html>
  );
}
