/* eslint-disable @next/next/no-sync-scripts */
import './globals.css';
import type { Metadata } from 'next';
import { Providers } from './providers';
import HeadBar from '@/components/headbar';
import { Fira_Code } from 'next/font/google'

const firaCode = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
})

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
    <html lang="en" className={firaCode.className} style={{scrollBehavior:'smooth'}}>
      <body>
        <HeadBar />
        <Providers>{children}</Providers>
        <script src="https://unpkg.com/taos@1.0.5/dist/taos.js"></script>
      </body>
    </html>
  );
}