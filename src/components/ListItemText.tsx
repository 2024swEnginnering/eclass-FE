import styled from "styled-components";

interface ListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  selected?: boolean;
  text: string;
  onClick?: () => void;
  selectedColor?: string;
  disabled?: boolean;
}

interface ItemTextWrapperProps {
  disabled?: boolean;
}

const ItemTextWrapper = styled.div<ItemTextWrapperProps>`
  &:hover {
    cursor: ${(props) => (props.disabled ? "" : "pointer")};
    opacity: ${(props) => (props.disabled ? 1 : 0.7)};
  }
`;

export const ListItemText = ({
  selected,
  text,
  style,
  onClick,
  disabled,
  selectedColor,
}: ListItemProps) => {
  return (
    <ItemTextWrapper
      onClick={onClick}
      disabled={disabled}
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
