import React from "react";
import { Grid, Box } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ABMButton from "../Buttons/ABMButton"; // Asegúrate de que este componente esté bien importado

const PartesListado = ({ Items, Consultar, Modificar, Eliminar }) => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={15} md={15} lg={15}>
        <Box
          sx={{
            display: "block",
            width: "100%",
            borderCollapse: "collapse",
            boxShadow: 3,
            borderRadius: 2,
            overflowX: "auto", // Permite desplazamiento horizontal si es necesario
          }}
        >
          {/* CABECERA */}
          <Box
            sx={{
              display: "flex",
              backgroundColor: "#009189",
              color: "white",
              fontWeight: "bold",
              fontSize: "16px",
              textAlign: "center",
              padding: 1,
              whiteSpace: "nowrap", // Evita que los textos se partan en varias líneas
            }}
          >
            <Box sx={{ flex: 1 }}>NOMBRE / RAZON SOCIAL</Box>
            <Box sx={{ flex: 1 }}>TIPO DOCUMENTO</Box>
            <Box sx={{ flex: 1 }}>N° DOCUMENTO</Box>
            <Box sx={{ flex: 1 }}>LOCALIDAD</Box>
            <Box sx={{ flex: 1 }}>MAIL CONTACTO</Box>
            <Box sx={{ flex: 2 }}>ACCIONES</Box>
          </Box>

          {/* CUERPO DE LA TABLA */}
          <Box sx={{ display: "block" }}>
            {Items &&
              Items.map((Item, index) => (
                <Box
                  key={Item.IdParte}
                  sx={{
                    display: "flex",
                    padding: 1,
                    borderBottom: "1px solid #ddd",
                    backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#fff", // Alterna colores
                    whiteSpace: "nowrap", // Mantiene los textos en una sola línea
                  }}
                >
                  <Box sx={{ flex: 2, textAlign: "center" }}>
                    {Item.NombreApellido}
                  </Box>
                  <Box sx={{ flex: 1, textAlign: "center" }}>
                    {Item.tipodocumento
                      ? Item.tipodocumento.Descripcion
                      : "Sin Datos"}
                  </Box>
                  <Box sx={{ flex: 1, textAlign: "center" }}>
                    {Item.NroDocumento}
                  </Box>
                  <Box sx={{ flex: 1, textAlign: "center" }}>
                    {Item.Localidad}
                  </Box>
                  <Box sx={{ flex: 2, textAlign: "center" }}>
                    {Item.MailContacto}
                  </Box>
                  <Box sx={{ flex: 1, textAlign: "center" }}>
                    {Item.Telefono}
                  </Box>
                  <Box
                    sx={{
                      flex: 2,
                      display: "flex",
                      justifyContent: "center",
                      gap: 1,
                    }}
                  >
                    <ABMButton
                      to="#"
                      label="Ver"
                      Icon={VisibilityIcon}
                      onClick={() => Consultar(Item)}
                    />
                    <ABMButton
                      to="#"
                      label="Editar"
                      Icon={EditIcon}
                      onClick={() => Modificar(Item)}
                    />
                    <ABMButton
                      to="#"
                      label="Eliminar"
                      Icon={DeleteForeverIcon}
                      onClick={() => Eliminar(Item)}
                    />
                  </Box>
                </Box>
              ))}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default PartesListado;
