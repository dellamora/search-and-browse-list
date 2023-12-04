import { type AppType } from "next/dist/shared/lib/utils";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "~/styles/globals.css";
import BaseLayout from "~/layout/basedLayout";

const queryClient = new QueryClient();

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}>
    <BaseLayout>
    <Component {...pageProps} />;
    </BaseLayout>
    </QueryClientProvider>
  )
};

export default MyApp;
