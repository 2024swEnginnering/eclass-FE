import { ListItemText } from "@/components/ListItemText";
import useGroupCurrentStore from "@/store/useGroupCurrentStore";
import useTeamStore from "@/store/useTeamStore";
import { Button } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import { TeamList } from "./AddTeammatePage";

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  gap: 10px;
  grid-template-rows: 500px 1fr;
`;

const TimetableWrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-start;
`;

const TimeTableWrapper = styled.div`
  width: "300px";
  height: "400px";
  overflow: "hidden";
`;

export default function TimetablePage() {
  const { teammates } = useTeamStore();
  const [selected, setSlected] = useState(0);
  const { setCurrent } = useGroupCurrentStore();

  const NoTeammates = <h3 style={{ margin: 0 }}>아직 팀이 없습니다</h3>;

  return (
    <Wrapper>
      {teammates.length === 0 ? (
        NoTeammates
      ) : (
        <>
          <TimetableWrapper>
            <TeamList>
              {teammates.map((name, i) => (
                <ListItemText
                  style={{ textDecoration: "none" }}
                  key={i}
                  text={name.split(" (")[0]}
                  onClick={() => setSlected(i)}
                  selectedColor='#0073a7'
                  selected={selected === i}
                />
              ))}
            </TeamList>
            <TimeTableWrapper>
              <img
                src={`/timetables/${selected}.png`}
                width={"300px"}
                alt='timetable'
              />
            </TimeTableWrapper>
            <TeamList>
              <ListItemText
                style={{ textDecoration: "none" }}
                selected={true}
                disabled
                text='내 시간표'
              />
            </TeamList>
            <TimeTableWrapper>
              <img src={`/timetables/my.png`} width={"300px"} alt='timetable' />
            </TimeTableWrapper>
          </TimetableWrapper>
          <Button
            variant='contained'
            color='primary'
            onClick={() => setCurrent(2)}
          >
            미팅 시간 정하기
          </Button>
        </>
      )}
    </Wrapper>
  );
}
