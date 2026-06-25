import "./globals.css";

export const metadata = {
  title: "JobNow",
  description: "JobNow is a platform that connects job seekers with employers.",
  favicon: "/favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/rfy0ikf.css" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
