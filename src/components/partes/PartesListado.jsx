import React from "react";
import { Grid, Box } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import moment from "moment";
import ABMButton from "../ABMButton"; // Asegúrate de que este componente esté bien importado

const PartesListado = ({ Items, Consultar, Modificar, Eliminar }) => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: "flex",
        justifyContent: "center", // Centra la tabla
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Grid item xs={12} md={10} lg={8}>
        {" "}
        {/* Ajusta el ancho en distintas pantallas */}
        <Box
          sx={{
            display: "table",
            width: "100%",
            borderCollapse: "collapse",
            margin: "0 auto",
            boxShadow: 3, // Agrega una sombra para mejorar la estética
            borderRadius: 2,
            overflow: "hidden", // Evita que los bordes se vean cortados
          }}
        >
          {/* CABECERA */}
          <Box
            sx={{
              display: "table-header-group",
              bgcolor: "#009189",
              color: "white",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            <Grid container spacing={2} sx={{ padding: 1 }}>
              <Grid item xs={3}>
                NOMBRE / RAZON SOCIAL
              </Grid>
              <Grid item xs={3}>
                TIPO DOCUMENTO
              </Grid>
              <Grid item xs={2}>
                N° DOCUMENTO
              </Grid>
              <Grid item xs={4}>
                ACCIONES
              </Grid>
            </Grid>
          </Box>

          {/* CUERPO DE LA TABLA */}
          <Box sx={{ display: "table-row-group" }}>
            {Items &&
              Items.map((Item) => (
                <Grid
                  container
                  spacing={1}
                  key={Item.IdParte}
                  sx={{
                    padding: 1,
                    borderBottom: "1px solid #ddd",
                    "&:nth-of-type(even)": { backgroundColor: "#black" }, // Alterna colores
                  }}
                >
                  <Grid item xs={3} textAlign="center">
                    {Item.NombreApellido}
                  </Grid>
                  <Grid item xs={3} textAlign="center">
                    {Item.FechaNacimiento}
                  </Grid>
                  <Grid item xs={2} textAlign="center">
                    {Item.Dni}
                  </Grid>
                  <Grid item xs={4} textAlign="center">
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap", // Permite que los botones se acomoden en pantallas pequeñas
                        justifyContent: "center",
                        gap: 1, // Espacio entre botones
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
                  </Grid>
                </Grid>
              ))}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default PartesListado;
