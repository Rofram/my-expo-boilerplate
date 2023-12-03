import { useAppState } from "@/hooks/common";
import { useOnlineManager } from "@/hooks/react-query";
import { handleChangeQueryFocus } from "@/utils";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 2 } },
});

export default function RootLayout() {
  useOnlineManager(); // refetch queries on app change internet connection
  useAppState(handleChangeQueryFocus); // refetch queries on app change focus

  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar style="auto" />
      <Stack screenOptions={{ headerTransparent: true, headerTitle: "" }} />
    </QueryClientProvider>
  );
}
