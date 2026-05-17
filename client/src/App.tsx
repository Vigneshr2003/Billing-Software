import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import BillingPOSPage from "./pages/BillingPOSPage";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="billing-pos" element={<BillingPOSPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
