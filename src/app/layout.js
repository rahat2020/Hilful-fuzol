import { Montserrat } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { Suspense } from "react";
import GoToTop from "@/UI/GotoTop";
import { StoreProvider } from "@/redux/StoreProvider";
import Topbar from "../components/Home/Topbar";
import Footer from "../components/Home/Footer";
import { ToastContainer } from "react-toastify";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Hilful Fuzol",
  description: "An Islamic social organization.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <NextTopLoader
          color="#008a35"
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
            <ToastContainer />
          </StoreProvider>
        </Suspense>
      </body>
    </html>
  );
}
