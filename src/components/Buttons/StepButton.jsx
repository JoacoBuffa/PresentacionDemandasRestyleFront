import { Button, Box, Container } from "@mui/material";
import { Link } from "react-router-dom";

const ABMButton = ({ label, Icon, onClick }) => {
  return (
    <Button
      component={Link}
      variant="contained"
      size="medium"
      sx={{
        boxShadow: 0,
        borderRadius: 3,
        padding: "10px 20px",
        fontWeight: "bold",
        margin: "10px",
        backgroundColor: "#009189",
        fontSize: "0.8rem",
        flexGrow: 1,
      }}
      onClick={onClick} // Agregamos el onClick aquí
    >
      {label}
    </Button>
  );
};

export default ABMButton;
