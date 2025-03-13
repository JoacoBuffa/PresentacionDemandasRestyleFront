import { Button, Box, Container } from "@mui/material";
import { Link } from "react-router-dom";

const NavButtonSec = ({ to, label, Icon }) => {
  return (
    <Button
      component={Link}
      to={to}
      variant="contained"
      sx={{
        boxShadow: 0,
        borderRadius: 3,
        padding: "10px 20px",
        fontWeight: "bold",
        margin: "10px",
        backgroundColor: "#009189",
        fontSize: "0.8rem",
      }}
      startIcon={Icon ? <Icon sx={{ width: 20, height: 20 }} /> : null} // Si hay un icono, se muestra al inicio
    >
      {label}
    </Button>
  );
};

export default NavButtonSec;
