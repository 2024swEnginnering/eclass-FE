import { ListItemText } from "@/components/ListItemText";
import { mock_students } from "@/mock/students";
import { Button } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";

const List = styled.div`
  height: 80%;
  list-style: none;
  padding: 0px;
  gap: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-top: 10px;
`;

export default function AddTeammatePage() {
  const [selected, setSelected] = useState<number[]>([]);

  return (
    <>
      <h3 style={{ margin: 0 }}>전체 수강생</h3>
      <List>
        {mock_students.map((text, i) => (
          <ListItemText
            style={{
              textDecoration: "none",
            }}
            key={i}
            text={text}
            selected={selected.includes(i)}
            selectedColor='#0073a7'
            onClick={() => {
              if (selected.includes(i)) {
                setSelected(selected.filter((s) => s !== i));
              } else setSelected([...selected, i]);
              console.log(selected);
            }}
          />
        ))}
      </List>
      <Button variant='contained' color='primary'>
        팀원 추가하기
      </Button>
    </>
  );
}
