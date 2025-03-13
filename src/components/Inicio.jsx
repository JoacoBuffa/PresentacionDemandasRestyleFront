import { Link } from "react-router-dom";
import { Button, Box, Container, Icon } from "@mui/material";
import BoxTitle from "../components/BoxTitle"; // Importa el componente
import NavButton from "../components/Buttons/NavButton";
import PostAddIcon from "@mui/icons-material/PostAdd"; // Importa el componente
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import ContactsIcon from "@mui/icons-material/Contacts";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import HelpIcon from "@mui/icons-material/Help";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

export function Inicio() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box
        sx={{
          textAlign: "center",
          mt: 4,
          p: 0,
          borderRadius: 5,
          bgcolor: "white",
          boxShadow: 3,
        }}
      >
        <BoxTitle title="Secciones Disponibles" />

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 0,
            margin: 0,
          }}
        >
          <NavButton
            to="/partes"
            label="Agenda de Partes"
            Icon={ContactsIcon}
          />
        </Box>
      </Box>
    </Container>
  );
}
