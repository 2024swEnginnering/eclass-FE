import useTeamStore from "@/store/useTeamStore";

export default function MeetingPage() {
  const { teammates } = useTeamStore();

  return teammates.length === 0 ? (
    <h3 style={{ margin: 0 }}>아직 팀이 없습니다</h3>
  ) : (
    <img
      src='/zoom.png'
      width={"118%"}
      style={{
        position: "relative",
        left: "-76px",
        top: "-30px",
      }}
    />
  );
}
