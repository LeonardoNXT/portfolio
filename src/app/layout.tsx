import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Leonardo Leal | Software Engineer",
    template: "%s | Leonardo Leal",
  },

  description:
    "Software Engineer focused on building scalable, distributed and well-architected systems. Full-stack experience across backend engineering, modern web applications and cloud infrastructure.",

  keywords: [
    "Leonardo Leal",
    "Leonardo da Silva Leal",
    "Software Engineer",
    "Software Developer",
    "Full Stack Developer",
    "Backend Engineer",
    "Distributed Systems",
    "Software Architecture",
    "Clean Architecture",
    "Domain-Driven Design",
    "DDD",
    "Microservices",
    "React",
    "Next.js",
    "Node.js",
    "Go",
    "Java",
    "Spring Boot",
    "TypeScript",
    "Kafka",
    "gRPC",
    "AWS",
    "Google Cloud Platform",
    "Portfolio",
  ],

  authors: [
    {
      name: "Leonardo Leal",
    },
  ],

  creator: "Leonardo Leal",
  publisher: "Leonardo Leal",

  category: "technology",

  icons: {
    icon: [
      {
        url: "/icons/favicon.ico",
      },
      {
        url: "/icons/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/icons/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/icons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/icons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],

    shortcut: "/icons/favicon.ico",

    apple: [
      {
        url: "/icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Leonardo Leal",

    title: "Leonardo Leal | Software Engineer",

    description:
      "Software Engineer building scalable systems, distributed architectures and modern digital experiences.",

    images: [
      {
        url: "/social/og-image.png",
        width: 1200,
        height: 630,
        alt: "Leonardo Leal — Software Engineer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Leonardo Leal | Software Engineer",

    description:
      "Software Engineer building scalable systems, distributed architectures and modern digital experiences.",

    images: [
      {
        url: "/social/twitter-image.png",
        width: 1200,
        height: 630,
        alt: "Leonardo Leal — Software Engineer",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          id="theme-preference"
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('portfolio-theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
