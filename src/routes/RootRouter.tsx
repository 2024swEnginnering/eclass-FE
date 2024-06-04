import SidebarLayout from "@/layout/SidebarLayout";
import MainPage from "@/pages/main/MainPage";
import { createBrowserRouter } from "react-router-dom";

const RootRouter = createBrowserRouter([
  {
    path: "/",
    element: <SidebarLayout />,
    children: [{ path: "/", element: <MainPage /> }],
  },
  { path: "/login", element: <h1>Login</h1> },
]);

export default RootRouter;
