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
        <div className="h-0">
          <HeadBar />
        </div>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
 