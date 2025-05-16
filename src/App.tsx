
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Scheduling from "./pages/Scheduling";
import HowItWorks from "./pages/HowItWorks";
import Pricing from "./pages/Pricing";
import { AuthProvider } from "./contexts/AuthContext";

const queryClient = new QueryClient();

const AppWithAuthProvider = () => (
  <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/agendamento" element={<Scheduling />} />
        <Route path="/como-funciona" element={<HowItWorks />} />
        <Route path="/planos" element={<Pricing />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  </BrowserRouter>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AppWithAuthProvider />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
