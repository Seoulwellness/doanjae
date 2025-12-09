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
  description:
    "천년의 지혜와 현대의 기술을 접목한 가장 이상적인 다이어트 솔루션",
  keywords: "도안재, 다이어트, 테라피, 프리미엄, 웰니스",
  metadataBase: new URL("https://doan.life"),
  openGraph: {
    title: "도안재 - 프리미엄 다이어트 테라피",
    description:
      "천년의 지혜와 현대의 기술을 접목한 가장 이상적인 다이어트 솔루션",
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
    description:
      "천년의 지혜와 현대의 기술을 접목한 가장 이상적인 다이어트 솔루션",
    images: ["https://doan.life/images/landing/image1.png"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#3b82f6",
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
    description:
      "천년의 지혜와 현대의 기술을 접목한 가장 이상적인 다이어트 솔루션",
    inLanguage: "ko",
    url: "https://doan.life",
  };

  const naverMapClientId = process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID;

  return (
    <html lang="ko">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5ZCWXJS5');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5ZCWXJS5"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <Script
          src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${naverMapClientId}`}
          strategy="beforeInteractive"
        />
        <AmplitudeProvider>{children}</AmplitudeProvider>
      </body>
    </html>
  );
}
