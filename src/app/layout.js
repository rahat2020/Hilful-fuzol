import { Montserrat } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { Suspense } from "react";
import Topbar from "@/components/home/Topbar";
import GoToTop from "@/UI/GotoTop";
import Footer from "@/components/home/Footer";
import { StoreProvider } from "@/redux/StoreProvider";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Hilful fozol",
  description: "An Islamic social organization.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <NextTopLoader
          color="#3B82F6"
          crawlSpeed={5}
          showSpinner={false}
          speed={5}
        />
        <Suspense fallback={null}>
          <StoreProvider>
            <Topbar />
            {children}
            <GoToTop />
            <Footer />
          </StoreProvider>
        </Suspense>
      </body>
    </html>
  );
}
