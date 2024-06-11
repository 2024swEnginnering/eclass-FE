import LectureCard from "@/components/LectureCard";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-left: 40px;
`;

const LecturesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  width: 100vw;
  height: 100vh;
`;

export default function DashboardPage() {
  return (
    <Wrapper>
      <h2>대시보드</h2>
      <hr />
      <LecturesWrapper>
        <LectureCard
          name='소프트웨어공학 03분반'
          semester='2024년 1학기'
          color='#2F826A'
          to='/lecture/1'
        />
      </LecturesWrapper>
    </Wrapper>
  ); // TODO : MainPage 구현
}
