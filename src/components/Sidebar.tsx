import {
  AccountSVG,
  CalendarSVG,
  DashboardSVG,
  GroupSVG,
  HelpSVG,
  MessageSVG,
  MypageSVG,
  SubjectsSVG,
} from "@/assets/icons";
import useCurrentStore from "@/store/useCurrentStore";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const items = [
  { text: "계정", Icon: AccountSVG },
  {
    text: "대시보드",
    to: "/",
    Icon: DashboardSVG,
  },
  { text: "과목", Icon: SubjectsSVG },
  { text: "그룹", Icon: GroupSVG, disabled: true },
  { text: "캘린더", Icon: CalendarSVG, disabled: true },
  { text: "메시지함", Icon: MessageSVG, disabled: true },
  { text: "마이페이지", Icon: MypageSVG, disabled: true },
  { text: "이용안내", Icon: HelpSVG, disabled: true },
];

// TODO: Sidebar 컴포넌트 구현
//       - 스타일링, 현재 메뉴 하이라이트, 버트 클릭시 알맞는 페이지로 이동
export default function Sidebar() {
  const { current, setCurrent } = useCurrentStore();
  const navigate = useNavigate();

  return (
    <Drawer variant='permanent' sx={{ isplay: "flex" }}>
      <List sx={{ backgroundColor: "#3064c5", height: "100vh" }}>
        {items.map(({ text, to, Icon, disabled }) => {
          return (
            <ListItem
              key={text}
              disablePadding
              sx={{
                backgroundColor: current !== text ? "#3064c5" : "#FFFFFF",
              }}
            >
              <ListItemButton
                onClick={() => {
                  if (disabled) return;
                  if (text !== "이용안내") setCurrent(text);
                  to && navigate(to);
                }}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "5px",
                  border: "none",
                }}
              >
                <ListItemIcon
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon
                    width={"26px"}
                    // height={"26px"}
                    fill={current === text ? "#3064c5" : "#FFFFFF"}
                    color={current === text ? "#3064c5" : "#FFFFFF"}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={{
                    fontSize: "12px",
                    color: current === text ? "#3064c5" : "#FFFFFF",
                    textAlign: "center",
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
}
