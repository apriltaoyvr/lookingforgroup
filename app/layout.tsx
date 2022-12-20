import './globals.css';
import { Inter } from '@next/font/google';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="dark">
      <head />
      <body className="bg-neutral-100 text-neutral-800 dark:bg-neutral-900 dark:text-neutral-200">
        <main className="flex place-content-center place-items-center min-h-screen mx-auto">{children}</main>
      </body>
    </html>
  );
}
