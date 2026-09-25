import "./globals.css";

export const metadata = {
  title: "EduFlow — School Management",
  description: "Modern school management platform"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
