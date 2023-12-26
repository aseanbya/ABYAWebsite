import { type AppType } from "next/app";
import { SpeedInsights } from "@vercel/speed-insights/next"

import { api } from "~/utils/api";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <SpeedInsights />
      <Component {...pageProps} />
    </>
  )
};

export default api.withTRPC(MyApp);
