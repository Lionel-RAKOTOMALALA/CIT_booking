import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';

import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { ThemeProvider } from '@/components/theme-provider';
import { TRPCProvider } from '@/components/providers/trpc-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SouthBooking - Votre Plateforme de Réservation Premium',
  description: 'Réservez des hôtels, restaurants, voitures de location et attractions touristiques dans la région Sud.',
};

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={cn(
        inter.className,
        "min-h-screen antialiased"
      )}>
        <ClerkProvider
          appearance={{
            baseTheme: undefined
          }}
        >
          <TRPCProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
            >
              <div className="relative flex min-h-screen flex-col">
                <SiteHeader />
                <main className="flex-1">{children}</main>
                <SiteFooter />
              </div>
            </ThemeProvider>
          </TRPCProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}