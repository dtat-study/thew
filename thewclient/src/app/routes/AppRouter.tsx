import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DashboardPage } from "../../features/dashboard/DashboardPage";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}
