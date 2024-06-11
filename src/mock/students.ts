export const mock_students: string[] = [...Array(40).keys()].map((_, i) => {
  return `학생 ${i + 1} (20${Math.floor(Math.random() * 5) + 17}${(
    Math.random() * 99
  )
    .toString()
    .split(".")[0]
    .padStart(2, "0")}**)`;
});
