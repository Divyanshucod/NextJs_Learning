import "@/styles/globals.css";
import {Inter} from 'next/font/google'
import { cn } from "@/lib/utils";
import Providers from "./components/providers";
const inter = Inter({subsets:['latin']})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn('bg-white text-slate-900 antialiased', inter.className)}>
      <body className="min-h-screen bg-slate-50 drak:bg-slate-900 antialiased">
        <Providers>
        {children}
        {/* <Navbar/> */}
        </Providers>
        {/* Allow for more height on mobile devices*/}
        <div className="h-40 md:hidden"></div>
      </body>
    </html>
  );
}