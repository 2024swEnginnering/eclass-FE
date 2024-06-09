import SidebarLayout from "@/layout/SidebarLayout";
import DashboardPage from "@/pages/DashboardPage";
import LoginPage from "@/pages/Login";
import TempLecturePage from "@/pages/temp/TempLecturePage";

import { createBrowserRouter } from "react-router-dom";

const RootRouter = createBrowserRouter([
  {
    path: "/",
    element: <SidebarLayout />,
    children: [
      { path: "/", element: <DashboardPage /> },
      { path: "/lecture/:id", element: <TempLecturePage /> },
    ],
  },
  { path: "/login", element: <LoginPage /> },
]);

export default RootRouter;
