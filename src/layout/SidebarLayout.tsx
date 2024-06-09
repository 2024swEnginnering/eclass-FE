import Sidebar from "@/components/Sidebar";
import { Navigate, Outlet } from "react-router-dom";
import styled from "styled-components";

const Section = styled.section`
  width: 100vw;
  display: grid;
  grid-template-columns: 15vw 1fr;
`;

export default function SidebarLayout() {
  const isLogin = localStorage.getItem("accessToken");

  return (
    <Section>
      <Sidebar />
      {isLogin ? <Outlet /> : <Navigate to='/login' />}
    </Section>
  );
}
