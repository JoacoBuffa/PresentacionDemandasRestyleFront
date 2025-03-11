import React from "react";
import { TextField, Button, Grid, Box } from "@mui/material";
import { Add } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import ABMButton from "../ABMButton";

export default function PartesBuscar({
  NombreApellido,
  setNombreApellido,
  Buscar,
  Agregar,
}) {
  return (
    <Box
      component="form"
      sx={{
        width: "50%",
        margin: "0 auto",
        padding: "10px 10px",
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={20} sm={10} md={10}>
          <TextField
            label="Nombre y Apellido / Razón Social"
            fullWidth
            value={NombreApellido}
            onChange={(e) => setNombreApellido(e.target.value)}
            autoFocus
            inputProps={{ maxLength: 55 }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#004d40", // Color del borde normal
                },
                "&:hover fieldset": {
                  borderColor: "#009189", // Color del borde al pasar el mouse
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#009189", // Color del borde cuando está enfocado
                },
              },
            }}
          />
        </Grid>
      </Grid>

      <Box sx={{ mt: 2, textAlign: "center" }}>
        {/* Botones */}
        <ABMButton
          to="#"
          label="Buscar"
          Icon={SearchIcon}
          onClick={() => Buscar()}
        />

        <ABMButton
          to="#"
          label="Agregar"
          Icon={AddIcon}
          onClick={() => Agregar()}
        />
      </Box>
    </Box>
  );
}
