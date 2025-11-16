import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Technology from "./pages/Technology";
import Impact from "./pages/Impact";
import CarbonCredits from "./pages/CarbonCredits";
import Contact from "./pages/Contact";
import CarbonOffset from "./pages/CarbonOffset";
import EmissionReduction from "./pages/EmissionReduction";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/carbon-credits" element={<CarbonCredits />} />
          <Route path="/services/carbon-offset" element={<CarbonOffset />} />
          <Route path="/services/emission-reduction" element={<EmissionReduction />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
