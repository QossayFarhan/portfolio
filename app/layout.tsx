import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Qossay Abuamriya | Cloud & AI Engineer',
  description: 'Portfolio of Qossay Abuamriya - Cloud & AI Software Engineer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
