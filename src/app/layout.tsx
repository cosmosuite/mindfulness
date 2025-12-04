import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { CurrencyProvider } from "@/contexts/CurrencyContext";

export const metadata: Metadata = {
  title: {
    default: "Mindfulness Coaching Kit - Professional Mindfulness Resources | Mindfulness Coaching Kit",
    template: "%s | Mindfulness Coaching Kit"
  },
  description: "Complete digital mindfulness coaching toolkit with professional resources and customizable Canva templates. Get instant access to mindfulness workbooks, meditation scripts, coaching worksheets, client management tools, and social media templates. Everything you need to empower your mindfulness coaching practice.",
  keywords: [
    "mindfulness coaching templates",
    "mindfulness coaching toolkit",
    "canva mindfulness templates",
    "mindfulness coach resources",
    "mindfulness coaching worksheets",
    "meditation scripts",
    "mindfulness workbooks",
    "mindfulness social media templates",
    "mindfulness coach tools",
    "mindfulness coaching kit",
    "mindfulness client management",
    "mindfulness worksheets",
    "mindfulness coaching resources",
    "mindfulness coaching essentials",
    "mindfulness templates canva"
  ],
  authors: [{ name: "Mindfulness Coaching Kit" }],
  creator: "Mindfulness Coaching Kit",
  publisher: "Mindfulness Coaching Kit",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mindfulnesscoachingkit.pro',
    siteName: 'Mindfulness Coaching Kit',
    title: 'Mindfulness Coaching Kit - Professional Mindfulness Resources | Mindfulness Coaching Kit',
    description: 'Complete digital mindfulness coaching toolkit with professional resources and customizable Canva templates. Mindfulness workbooks, meditation scripts, coaching worksheets, and client management tools. Instant download.',
    images: [
      {
        url: 'https://mindfulnesscoachingkit.pro/assets/mindfulness/Category Images/Hero Image_converted.webp',
        width: 1200,
        height: 630,
        alt: 'Mindfulness Coaching Kit - Professional Mindfulness Resources',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mindfulness Coaching Kit - Professional Mindfulness Resources | Mindfulness Coaching Kit',
    description: 'Complete digital mindfulness coaching toolkit. Professional resources, meditation scripts, mindfulness workbooks, coaching worksheets, and social media templates. Instant download.',
    images: ['https://mindfulnesscoachingkit.pro/assets/mindfulness/Category Images/Hero Image_converted.webp'],
  },
  metadataBase: new URL('https://mindfulnesscoachingkit.pro'),
  alternates: {
    canonical: '/',
  },
  verification: {
    google: 'your-google-verification-code', // Update with actual verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="preconnect" href="https://link.funnelbay.io" />
        <link rel="preconnect" href="https://i.etsystatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://slelguoygbfzlpylpxfs.supabase.co" />

        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#7F8D74" />

        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '2382881695236689');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            alt=""
            src="https://www.facebook.com/tr?id=2382881695236689&ev=PageView&noscript=1"
          />
        </noscript>

        {/* Pinterest Base Tag */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
!function(e){
  if(!window.pintrk){
    window.pintrk = function () {
      window.pintrk.queue.push(Array.prototype.slice.call(arguments))
    };
    var n=window.pintrk; n.queue=[], n.version="3.0";
    var t=document.createElement("script"); t.async=!0; t.src=e;
    var r=document.getElementsByTagName("script")[0];
    r.parentNode.insertBefore(t,r)
  }
}("https://s.pinimg.com/ct/core.js");

pintrk('load', '2612657632915');
pintrk('page');
            `,
          }}
        />
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }} alt=""
            src="https://ct.pinterest.com/v3/?event=init&tid=2612657632915&noscript=1" />
        </noscript>

        {/* Reddit Base Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
!function(w,d){
  if(!w.rdt){
    var p=w.rdt=function(){p.sendEvent?p.sendEvent.apply(p,arguments):p.callQueue.push(arguments)};
    p.callQueue=[];
    var t=d.createElement("script");
    t.src="https://www.redditstatic.com/ads/pixel.js";
    t.async=!0;
    var s=d.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(t,s);
  }
}(window,document);

rdt('init','a2_hxh7mvrfzlzo');
rdt('track','PageVisit');
            `,
          }}
        />

      </head>
      <body className="antialiased">
        <CurrencyProvider>
          <ErrorReporter />
          {/* FunnelBay Tracking */}
          <Script
            src="https://link.funnelbay.io/js/external-tracking.js"
            strategy="afterInteractive"
            data-tracking-id="tk_e81992bc8b7f4febabd5011637efa8b2"
          />
          <Script
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
            strategy="afterInteractive"
            data-target-origin="*"
            data-message-type="ROUTE_CHANGE"
            data-include-search-params="true"
            data-only-in-iframe="true"
            data-debug="true"
            data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
          />
          {children}
          <VisualEditsMessenger />
        </CurrencyProvider>
      </body>
    </html>
  );
}
