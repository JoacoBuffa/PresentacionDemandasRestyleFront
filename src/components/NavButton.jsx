import { Button, Box, Container } from "@mui/material";
import { Link } from "react-router-dom";

const NavButton = ({ to, label, Icon }) => {
  return (
    <Button
      component={Link}
      to={to}
      variant="contained"
      size="large"
      sx={{
        boxShadow: 0,
        borderRadius: 3,
        padding: "40px 40px",
        fontWeight: "a",
        margin: "10px",
        backgroundColor: "#009189",
        fontSize: 22,
      }}
      startIcon={Icon ? <Icon sx={{ width: 50, height: 50 }} /> : null} // Si hay un icono, se muestra al inicio
    >
      {label}
    </Button>
  );
};

export default NavButton;
