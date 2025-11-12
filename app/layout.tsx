import "./globals.css";

export const metadata = {
  title: "Ayubowan Anora",
  description: "Coming soon page for Ayubowan Anora",
};

// Comment

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
