import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "도안재 - 환영합니다",
  description: "현대적이고 반응형인 랜딩 페이지를 경험해보세요",
  keywords: "랜딩 페이지, 한국어, 반응형",
  openGraph: {
    title: "도안재 - 환영합니다",
    description: "현대적이고 반응형인 랜딩 페이지를 경험해보세요",
  },
  twitter: {
    card: "summary_large_image",
    title: "도안재 - 환영합니다",
    description: "현대적이고 반응형인 랜딩 페이지를 경험해보세요",
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
    description: "현대적이고 반응형인 랜딩 페이지",
    inLanguage: "ko",
    url: "https://example.com",
  };

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
        {children}
      </body>
    </html>
  );
}
