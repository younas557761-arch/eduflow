import './globals.css';

export const metadata = {
  title: 'EduFlow - School Management System',
  description: 'Global SaaS Platform for Schools',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0f172a] text-white antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
