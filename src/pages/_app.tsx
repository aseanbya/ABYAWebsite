import { type AppType } from "next/app";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;
