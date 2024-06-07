import Sidebar from "@/components/Sidebar";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Section = styled.section`
  width: 100vw;
  display: grid;
  grid-template-columns: 15vw 1fr;
`;

export default function SidebarLayout() {
  return (
    <Section>
      <Sidebar />
      <Outlet />
    </Section>
  );
}
