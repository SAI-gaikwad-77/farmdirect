import { AppProvider } from "./context/AppContext";
import { useApp } from "./context/useApp";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { LandingPage } from "./pages/LandingPage";
import { FarmerEntryPage } from "./pages/FarmerEntryPage";
import { FarmerDashboardPage } from "./pages/FarmerDashboardPage";
import { AddProducePage } from "./pages/AddProducePage";
import { BuyerComparisonPage } from "./pages/BuyerComparisonPage";
import { LogisticsPage } from "./pages/LogisticsPage";
import { BuyerEntryPage } from "./pages/BuyerEntryPage";
import { BuyerDashboardPage } from "./pages/BuyerDashboardPage";
import { PostRequirementPage } from "./pages/PostRequirementPage";

function Router() {
  const { page } = useApp();

  const renderPage = () => {
    switch (page) {
      case "landing":
        return <LandingPage />;
      case "farmer-entry":
        return <FarmerEntryPage />;
      case "farmer-dashboard":
        return <FarmerDashboardPage />;
      case "add-produce":
        return <AddProducePage />;
      case "buyer-comparison":
        return <BuyerComparisonPage />;
      case "logistics":
        return <LogisticsPage />;
      case "buyer-entry":
        return <BuyerEntryPage />;
      case "buyer-dashboard":
        return <BuyerDashboardPage />;
      case "post-requirement":
        return <PostRequirementPage />;
      default:
        return <LandingPage />;
    }
  };

  return (
    <div key={page} className="animate-fade-in">
      {renderPage()}
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <div className="flex min-h-screen flex-col bg-white">
        <Navbar />
        <main className="flex-1">
          <Router />
        </main>
        <Footer />
      </div>
    </AppProvider>
  );
}
