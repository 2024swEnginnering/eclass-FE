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

const items = [
  { text: "계정", onClick: () => {}, icon: AccountSVG },
  { text: "대시보드", onClick: () => {}, icon: DashboardSVG },
  { text: "과목", onClick: () => {}, icon: SubjectsSVG },
  { text: "그룹", onClick: () => {}, icon: GroupSVG },
  { text: "캘린더", onClick: () => {}, icon: CalendarSVG },
  { text: "메시지함", onClick: () => {}, icon: MessageSVG },
  { text: "마이페이지", onClick: () => {}, icon: MypageSVG },
  { text: "이용안내", onClick: () => {}, icon: HelpSVG },
];

// TODO: Sidebar 컴포넌트 구현
//       - 스타일링, 현재 메뉴 하이라이트, 버트 클릭시 알맞는 페이지로 이동
export default function Sidebar() {
  const { current, setCurrent } = useCurrentStore();

  return (
    <Drawer variant='permanent' sx={{ isplay: "flex" }}>
      <List sx={{ backgroundColor: "#3064c5", height: "100vh" }}>
        {items.map((item) => {
          const selected = current;
          return (
            <ListItem
              key={item.text}
              disablePadding
              sx={{
                backgroundColor: selected !== item.text ? "#3064c5" : "#FFFFFF",
              }}
            >
              <ListItemButton
                onClick={() => {
                  if (item.text !== "이용안내") setCurrent(item.text);
                  item.onClick();
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
                  <item.icon
                    width={"26px"}
                    // height={"26px"}
                    fill={selected === item.text ? "#3064c5" : "#FFFFFF"}
                    color={selected === item.text ? "#3064c5" : "#FFFFFF"}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{
                    fontSize: "12px",
                    color: selected === item.text ? "#3064c5" : "#FFFFFF",
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
