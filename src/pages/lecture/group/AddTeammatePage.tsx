import CustomModal from "@/components/CustomModal";
import { ListItemText } from "@/components/ListItemText";
import { mock_students } from "@/mock/students";
import useGroupCurrentStore from "@/store/useGroupCurrentStore";
import useTeamStore from "@/store/useTeamStore";
import { Button, Typography } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";

export const TeamList = styled.div`
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

const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
  box-sizing: border-box;
`;

export default function AddTeammatePage() {
  const [selected, setSelected] = useState<number[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { setCurrent } = useGroupCurrentStore();
  const { teammates, setTeammates } = useTeamStore();

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleSubmit = () => {
    setTeammates(selected.map((i) => mock_students[i]));
    console.log(teammates);
    closeModal();
    setCurrent(1);
  };

  return (
    <>
      <CustomModal isOpen={isOpen} closeModal={closeModal}>
        <ModalWrapper>
          <h3 style={{ margin: 0 }}>그룹 팀원 초대</h3>
          <Typography variant='subtitle1' style={{ opacity: 0.7 }}>
            선택한 학생들을 같은 그룹으로 초대하겠습니까?
          </Typography>
          <Button
            sx={{ width: "100%", marginTop: "10px" }}
            variant='contained'
            color='primary'
            onClick={handleSubmit}
          >
            yes
          </Button>
          <Button
            sx={{ width: "100%" }}
            variant='outlined'
            color='info'
            onClick={closeModal}
          >
            cancel
          </Button>
        </ModalWrapper>
      </CustomModal>
      <h3 style={{ margin: 0 }}>전체 수강생</h3>
      <TeamList>
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
            }}
          />
        ))}
      </TeamList>
      <Button variant='contained' color='primary' onClick={openModal}>
        팀원 추가하기
      </Button>
    </>
  );
}
