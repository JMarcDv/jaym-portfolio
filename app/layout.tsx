/* eslint-disable @next/next/no-sync-scripts */
import './globals.css';
import type { Metadata } from 'next';
import { Providers } from './providers';
import HeadBar from '@/components/headbar';


export const metadata: Metadata = {
  title: 'Jean DE VERA',
  description: "Jean DE VERA's portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth" style={{scrollBehavior:'smooth'}}>
      <body>
        <header className="h-0">
          <HeadBar />
        </header>
        <Providers>{children}</Providers>
        <script src="https://unpkg.com/taos@1.0.5/dist/taos.js"></script>
      </body>
    </html>
  );
}
 