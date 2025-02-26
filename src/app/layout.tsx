/*
 OOOOOOOOOOOOOOOOOOOOOOOOOOBBBBBBBBBBBSSSSSSSSSSSSSSSSSSSS:

"recommended approach in Next.js" 
layout.tsx //{ should }// remains a pure server component for better performance..   
*/

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import ThemeWrapper from '@/components/theme/theme-wrapper';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import PageContainer from '@/components/layout/page-container';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeWrapper>
          <PageContainer>
            <Navbar />
            {children}
            <Footer />
          </PageContainer>
        </ThemeWrapper>
      </body>
    </html>
  );
}
