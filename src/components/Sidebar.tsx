import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const items = [
  "홈",
  "수업 계획서",
  "주차학습",
  "팀 협업",
  "성적",
  "과제 및 평가",
  "강의 자료실",
];

// TODO: Sidebar 컴포넌트 구현
//       - 스타일링, 현재 메뉴 하이라이트, 버트 클릭시 알맞는 페이지로 이동
export default function Sidebar() {
  return (
    <Drawer variant='permanent' sx={{ width: "200px", display: "flex" }}>
      <List>
        {items.map((text) => {
          return (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
}
