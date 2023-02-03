import { type AppType } from "next/dist/shared/lib/utils";
import localFont from "@next/font/local";
import "../styles/globals.css";

const monaSans = localFont({
  src: "../../public/fonts/mona-sans.woff2",
  variable: "--font-mona-sans",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={`${monaSans.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;
