import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Oladayo Akinmokun – The Cyber Lawyer",
  description:
    "Combining legal excellence with cutting-edge cybersecurity governance. Trusted advisor in Law, Risk & Compliance.",

  metadataBase: new URL("https://oladayoakinmokun.vercel.app"), // 🔁 Replace with your actual domain

  openGraph: {
    title: "Oladayo Akinmokun – The Cyber Lawyer",
    description:
      "Combining legal excellence with cutting-edge cybersecurity governance. Trusted advisor in Law, Risk & Compliance.",
    url: "https://oladayoakinmokun.vercel.app", // Replace
    siteName: "Oladayo Akinmokun",
    images: [
      {
        url: "/daylee.png", // 📸 Put her photo in `/public`
        width: 1200,
        height: 630,
        alt: "Oladayo Akinmokun – The Cyber Lawyer",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Oladayo Akinmokun – The Cyber Lawyer",
    description:
      "Legal expertise meets modern cybersecurity compliance. Explore Oladayo’s portfolio and work.",
    images: ["/daylee.png"],
    creator: "@OladayoCyberLaw", // optional if available
  },

  icons: {
    icon: "/favicon.ico", // optional favicon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
