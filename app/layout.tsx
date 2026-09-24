import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 - Serviced apartments for Rent in Candolim, Goa, India - Airbnb",
  description: "Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi for the perfect unwind. Serviced apartments for rent in Candolim, Goa, India.",
  icons: {
    icon: "https://a0.muscache.com/airbnb/static/icons/android-icon-192x192-c0465f9f0380893768972a31a614b670.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-airbnb-primary antialiased bg-white selection:bg-rose-100 selection:text-rose-900">
        {children}
      </body>
    </html>
  );
}
