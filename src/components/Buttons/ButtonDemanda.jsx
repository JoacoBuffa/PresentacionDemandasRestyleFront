import { Button, Box, Container } from "@mui/material";
import { Link } from "react-router-dom";

const ButtonDemanda = ({
  border,
  onClick,
  label,
  disabled,
  bgColor,
  fontColor,
}) => {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      disabled={disabled}
      sx={{
        boxShadow: 0,
        borderRadius: 3,
        padding: "10px 20px",
        fontWeight: "bold",
        margin: "10px",
        backgroundColor: bgColor || "#009189",
        fontSize: "0.8rem",
        color: fontColor || "white",
        border: border || "none",
      }}
    >
      {label}
    </Button>
  );
};

export default ButtonDemanda;
