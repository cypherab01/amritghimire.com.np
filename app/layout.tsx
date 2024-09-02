import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amrit Ghimire - Electrical Engineer & Innovator",
  description:
    "Welcome to the portfolio of Amrit Ghimire, a dedicated Electrical Engineer specializing in Power Electronics and Drives. With practical experience in PLC, HMI, and SCADA systems, Amrit combines his technical expertise with a passion for innovation. Currently pursuing an M.Sc. at TU, IOE (Pulchowk Campus), he has contributed to key projects in energy generation and system reliability. Explore his work, research publications, and professional journey as he strives to make a positive impact through technology. Outside of his technical pursuits, Amrit enjoys music, football, and exploring new places.",
  keywords:
    "Amrit Ghimire, Electrical Engineer, Power Electronics, Drives Engineering, SCADA, PLC, HMI, energy generation, innovation, Nepal, portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
