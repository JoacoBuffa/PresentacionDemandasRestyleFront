// src/components/NavBar.js

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import BalanceIcon from "@mui/icons-material/Balance";
import AccountMenu from "./AccountMenu"; // Importa el componente AccountMenu

const links = [
  { to: "/inicio", label: "Inicio" },
  { to: "/#", label: "Clubes" },
  { to: "/#", label: "Ciudades" },
  { to: "/#", label: "Entrenadores" },
  { to: "/#", label: "Tipos Entrenadores" },
  { to: "/parte", label: "parte" },
  { to: "/#", label: "Torneos" },
  { to: "/#", label: "Temporadas" },
];

export function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="sticky" sx={{ bgcolor: "#009189" }}>
        <Toolbar>
          {/* Botón de menú hamburguesa para móviles */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { xs: "block", md: "block" } }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo y título */}
          <BalanceIcon sx={{ mr: 2, scale: 2 }} />
          <Typography variant="h4" sx={{ flexGrow: 1, textAlign: "center" }}>
            PRESENTACION DE DEMANDAS
          </Typography>

          {/* Aquí colocas el componente de AccountMenu */}
          <AccountMenu />
        </Toolbar>
      </AppBar>

      {/* Drawer (Menú lateral) para móviles */}
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <IconButton
          edge="end"
          color="warning"
          aria-label="menu"
          sx={{ mr: 2, mt: 2, ml: 30, display: { xs: "block", md: "block" } }}
          onClick={() => setOpen(false)}
        >
          <CloseIcon />
        </IconButton>
        <List sx={{ width: 250 }}>
          {links.map((link) => (
            <ListItem key={link.to} disablePadding>
              <ListItemButton
                component={NavLink}
                to={link.to}
                onClick={() => setOpen(false)} // Cerrar el Drawer al hacer clic
              >
                <ListItemText primary={link.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
