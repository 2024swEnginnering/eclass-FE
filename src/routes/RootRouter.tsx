import LectureLayout from "@/layout/LectureLayout";
import SidebarLayout from "@/layout/SidebarLayout";
import DashboardPage from "@/pages/DashboardPage";
import LoginPage from "@/pages/Login";

import { createBrowserRouter } from "react-router-dom";

const RootRouter = createBrowserRouter([
  {
    path: "/",
    element: <SidebarLayout />,
    children: [
      { path: "/", element: <DashboardPage /> },
      {
        path: "/lecture/:id",
        element: <LectureLayout />,
        // children: [{ path: ":id", element: <AddLecturePage /> }],
      },
    ],
  },
  { path: "/login", element: <LoginPage /> },
]);

export default RootRouter;
