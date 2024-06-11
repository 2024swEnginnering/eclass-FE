import styled from "styled-components";

interface ListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  selected?: boolean;
  text: string;
  onClick?: () => void;
  selectedColor?: string;
}

const ItemTextWrapper = styled.div`
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

export const ListItemText = ({
  selected,
  text,
  style,
  onClick,
  selectedColor,
}: ListItemProps) => {
  return (
    <ItemTextWrapper
      onClick={onClick}
      style={{
        color: selected ? `${selectedColor ? selectedColor : "#2D3B45"}` : "",
        borderLeft: selected
          ? `3px solid ${selectedColor ? selectedColor : "#2D3B45"}`
          : "",
      }}
    >
      <span
        style={{
          padding: "0px 6px",
          textDecoration: "underline",
          position: "relative",
          ...style,
        }}
      >
        {text}
      </span>
    </ItemTextWrapper>
  );
};
