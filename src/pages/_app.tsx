import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { MockProvider } from "~/MockProvider";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <MockProvider>
      <Component {...pageProps} />
    </MockProvider>
  );
};

export default api.withTRPC(MyApp);
