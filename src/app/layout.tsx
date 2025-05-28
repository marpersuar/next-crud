import { Amplify } from 'aws-amplify';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';

import AuthProvider from '@/components/AuthProvider';
import LeftSidebar from '@/components/LeftSidebar';
import Navbar from '@/components/Navbar';
import StoreProvider from '@/components/StoreProvider';
import Toaster from '@/components/Toaster';

import './globals.css';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CRUD en Nextjs',
  description: 'Entrenamiento.',
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
  ],
  robots: {
    index: false,
    follow: false,
  },
};

Amplify.configure({
  Auth: {
    region: 'us-east-1',
    userPoolId: process.env.NEXT_PUBLIC_COGNITO_POOL_ID,
    userPoolWebClientId: process.env.NEXT_PUBLIC_COGNITO_POOL_CLIENT_ID,
  },
  ssr: true,
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" data-theme="light">
      <body className={nunito.className}>
        <AuthProvider>
          <div className="drawer lg:drawer-open">
            <input id="left-sidebar-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
              <Navbar />
              <main className="flex-1 flex-col items-center justify-between p-6">
                <StoreProvider>{children}</StoreProvider>
              </main>
            </div>
            <LeftSidebar />
          </div>
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
