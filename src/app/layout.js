import { Inter } from "next/font/google";
import "./globals.css";
import FooterComponent from "../components/FooterComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Agilesaas",
  description: "Generate and refine your Ideas.",
  canonical: "https://agilesaas.netlify.app/",
  openGraph: {
    url: "https://agilesaas.netlify.app/",
    title: "Agilesaas",
    description:
      "Create and launch your product and startup with ease. Make it accessible to everyone. Generate and refine your product and startup roadmaps with ease",
    images: [
      {
        url: "https://www.example.ie/og-image-01.jpg",
        width: 800,
        height: 600,
        alt: "Og Image Alt",
        type: "image/jpeg",
      },
    ],
    siteName: "SiteName",
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body className={inter.className}>
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
