import { KeyboardArrowRightOutlined, MenuOutlined } from "@mui/icons-material";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 75px 1fr;
  margin-left: 24px;
`;

const Header = styled.header`
  padding: 22px 0px;
  display: flex;
  justify-content: flex-start;
  gap: 8px;
  align-items: center;
  border-bottom: 1px solid #c7cdd1;
  color: #0073a7;
  font-size: 18px;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: calc(156px * 2px) 1fr;
  margin-top: 24px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0px;
  width: 156px;
`;

const ListItem = styled.li`
  height: 36.8px;
  color: #0073a7;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

// FIXME : mock
const path = ["소프트웨어공학 03분반", "사용자", "그룹"];

const leftListItems = [
  { text: "홈" },
  { text: "수업 계획서" },
  { text: "주차학습 (모듈)" },
  { text: "출결현황" },
  { text: "사용자 및 그룹" },
  { text: "성적" },
  { text: "과제 및 평가" },
  { text: "Zoom" },
  { text: "전자출석부" },
  { text: "게시판" },
  { text: "강의자료실" },
];

const rightListItems = [
  { text: "팀원 추가하기" },
  { text: "시간표 보기" },
  { text: "미팅시간 정하기" },
  { text: "온라인 미팅" },
];

interface ListItemProps {
  selected: boolean;
  text: string;
}

const ListItemText = ({ selected, text }: ListItemProps) => {
  return (
    <div
      style={{
        color: selected ? "#2D3B45" : "",
        borderLeft: selected ? "3px solid #2D3B45" : "",
      }}
    >
      <span
        style={{
          padding: "0px 6px",
          textDecoration: "underline",
          position: "relative",
          left: selected ? "-3px" : "0px",
        }}
      >
        {text}
      </span>
    </div>
  );
};

export default function LectureLayout() {
  return (
    <Wrapper>
      <Header>
        <MenuOutlined style={{ fontSize: "24px", marginRight: "8px" }} />
        {path.map((p, i) => (
          <>
            {i !== 0 && (
              <KeyboardArrowRightOutlined
                style={{ fontSize: "15px", color: "#777777" }}
              />
            )}
            <span key={i}>{p}</span>
          </>
        ))}
      </Header>
      <ContentGrid>
        <div>
          <p style={{ fontSize: "11px", color: "#2D3B45" }}>2024년 1학기</p>
          <div style={{ display: "flex" }}>
            <List>
              {leftListItems.map((item, i) => (
                <ListItem key={i}>
                  <ListItemText selected={i === 4} text={item.text} />
                </ListItem>
              ))}
            </List>
            <List>
              {rightListItems.map((item, i) => (
                <ListItem key={i}>
                  <ListItemText selected={i === 0} text={item.text} />
                </ListItem>
              ))}
            </List>
          </div>
        </div>
      </ContentGrid>
    </Wrapper>
  );
}
