import SidebarLayout from "@/layout/SidebarLayout";
import LoginPage from "@/pages/Login";
import MainPage from "@/pages/main/MainPage";
import { createBrowserRouter } from "react-router-dom";

const RootRouter = createBrowserRouter([
  {
    path: "/",
    element: <SidebarLayout />,
    children: [{ path: "/", element: <MainPage /> }],
  },
  { path: "/login", element: <LoginPage /> },
]);

export default RootRouter;
