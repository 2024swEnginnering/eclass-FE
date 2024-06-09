import { AssignmentSVG } from "@/assets/icons";
import styled from "styled-components";

interface LectureCardProps {
  name: string;
  semester: string;
  color: string;
}

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 262px;
  height: 265px;
  border-radius: 10px;
  border: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Content = styled.div`
  height: 120px;
  background-color: white;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;

  margin-top: 146px;
  border-radius: 0 0 10px 10px;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: blue;
  }
`;

export default function LectureCard({
  name,
  semester,
  color,
}: LectureCardProps) {
  return (
    <CardWrapper style={{ backgroundColor: color }}>
      <Content>
        <span style={{ color: color, fontSize: "14px", fontWeight: "bold" }}>
          {name}
        </span>
        <span>{name}</span>
        <span style={{ fontSize: "12px" }}>{semester}</span>
        <AssignmentSVG style={{ padding: "0px 10px" }} />
      </Content>
    </CardWrapper>
  );
}
