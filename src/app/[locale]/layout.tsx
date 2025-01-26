/* eslint-disable @next/next/no-sync-scripts */
import '../globals.css';
import type { Metadata } from 'next';
import { Providers } from '../providers';
import HeadBar from '@/src/components/headbar';
import { Fira_Code } from 'next/font/google'
import { routing } from '@/src/i18n/routing';
import { notFound } from 'next/navigation';
import {getMessages} from 'next-intl/server';
import {NextIntlClientProvider} from 'next-intl';



const firaCode = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Jean DE VERA',
  description: "Jean DE VERA's portfolio",
};

export default async function RootLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
    // Ensure that the incoming `locale` is valid
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (!routing.locales.includes(locale as any)) {
      notFound();
    }
    const messages = await getMessages();


  return (
    <html lang={locale} className={firaCode.className} style={{scrollBehavior:'smooth'}}>
      <body>
        <NextIntlClientProvider messages={messages}>
        <HeadBar />
          <Providers>
            {children}
          </Providers>
        </NextIntlClientProvider>
        <script src="https://unpkg.com/taos@1.0.5/dist/taos.js"></script>
      </body>
    </html>
  );
}