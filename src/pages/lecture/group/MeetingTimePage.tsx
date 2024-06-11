import { ListItemText } from "@/components/ListItemText";
import useGroupCurrentStore from "@/store/useGroupCurrentStore";
import useTeamStore from "@/store/useTeamStore";
import { Button } from "@mui/material";
import styled from "styled-components";
import { TeamList } from "./AddTeammatePage";

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  gap: 10px;
  grid-template-rows: 500px 1fr;
`;

const ViewWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 200px 1fr;
`;

const TimeTableWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function MeetingTimePage() {
  const { teammates } = useTeamStore();
  const { setCurrent } = useGroupCurrentStore();
  const NoTeammates = <h3 style={{ margin: 0 }}>아직 팀이 없습니다</h3>;

  return teammates.length === 0 ? (
    NoTeammates
  ) : (
    <Wrapper>
      <ViewWrapper>
        <TeamList>
          <ListItemText
            style={{ textDecoration: "none" }}
            disabled
            text='내 그룹'
            selected
            selectedColor='#0073a7'
          />
          {teammates.map((name, i) => (
            <ListItemText
              style={{ textDecoration: "none" }}
              key={i}
              text={name.split(" (")[0]}
              disabled
            />
          ))}
        </TeamList>
        <TimeTableWrapper>
          <img
            src={`/timetables/overlayed.png`}
            width={"300px"}
            alt='timetable'
            style={{
              position: "relative",
              left: "-100px",
              top: "-50px",
            }}
          />
        </TimeTableWrapper>
      </ViewWrapper>
      <Button variant='contained' color='primary' onClick={() => setCurrent(3)}>
        미팅 바로가기
      </Button>
    </Wrapper>
  );
}
