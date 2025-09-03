// import { Switch, Route } from "wouter";
// import { queryClient } from "./lib/queryClient";
// import { QueryClientProvider } from "@tanstack/react-query";
// import { Toaster } from "@/components/ui/toaster";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import NotFound from "@/pages/not-found";
// import Home from "@/pages/home";

// function Router() {
//   return (
//     <Switch>
//       <Route path="/" component={Home} />
//       <Route component={NotFound} />
//     </Switch>
//   );
// }

// function App() {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <TooltipProvider>
//         <Toaster />
//         <Router />
//       </TooltipProvider>
//     </QueryClientProvider>
//   );
// }

// export default App;

import { Router, Route, Switch } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Pages
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import CategoryPage from "@/pages/category"; 
import Laptops from "./pages/Laptops";
import Desktop from "./pages/Desktop"
import MemoryStorage from "./pages/MemoryStorage";
import Peripherals from "./pages/Peripherals";
import CctvSecurity from "./pages/cctvsecurity";
// import TechAccessories from "./pages/TechAccessories";



function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/categories/:id" component={CategoryPage} />
       <Route path="/laptops" component={Laptops} />
        <Route path="/desktop" component={Desktop} />
           <Route path="/memorystorage" component={MemoryStorage} />
         <Route path="/peripherals" component={Peripherals} />
          <Route path="/CctvSecurity" component={CctvSecurity} />
            {/* <Route path="/techaccessories" component={TechAccessories} /> */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router base="/">
          <Routes />
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
export default App;