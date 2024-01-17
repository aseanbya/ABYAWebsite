import { type AppType } from "next/app";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';

import { api } from "~/utils/api";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <SpeedInsights />
      <Analytics />
      <Component {...pageProps} />
    </>
  )
};

export default api.withTRPC(MyApp);
