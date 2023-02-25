import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { AppsContextProvider } from "./context/AppsContext/AppsContext";
import { Dashboard } from "./pages/Dashboard";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AppsContextProvider>
        <div className="App">
          <Dashboard />
        </div>
      </AppsContextProvider>
    </QueryClientProvider>
  );
}

export default App;
