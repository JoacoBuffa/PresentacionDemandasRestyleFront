import React, { useState, useEffect } from "react";
import moment from "moment";
import { parteService } from "../../services/parte.service";
import { sexoService } from "../../services/sexo.service";
import { tipodocumentoService } from "../../services/tipodocumento.service";
import { tipodomicilioService } from "../../services/tipodomicilio.service";
import modalDialogService from "../../services/modalDialog.service";
import { Typography, Box, Stepper } from "@mui/material";
import BoxTitle from "../BoxTitle";
import NavButtonSec from "../Buttons/NavButtonSec";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ABMButton from "../Buttons/ABMButton";
import StepperDemandas from "../StepperDemandas";

function Demandas() {
  const [AccionABMC, setAccionABMC] = useState("L");
  const [NombreApellido, setNombreApellido] = useState("");
  const [Activo, setActivo] = useState("");
  const [Descripcion, setDescripcion] = useState("");
  const [IdSexo, setIdSexo] = useState("");
  const [Items, setItems] = useState(null);
  const [Item, setItem] = useState(null); // usado en BuscarporId (Modificar, Consultar)
  const [RegistrosTotal, setRegistrosTotal] = useState(0);
  const [Pagina, setPagina] = useState(1);
  const [Paginas, setPaginas] = useState([]);
  const [Sexo, setSexo] = useState(null);
  const [IdTipoDoc, setIdTipoDoc] = useState("");
  const [TipoDoc, setTipoDoc] = useState(null);
  const [IdTipoDomicilio, setIdTipoDomicilio] = useState("");
  const [TipoDomicilio, setTipoDomicilio] = useState(null);

  useEffect(() => {
    async function fetchData() {
      modalDialogService.BloquearPantalla(true);
      const data = await parteService.Buscar(NombreApellido, Pagina);
      modalDialogService.BloquearPantalla(false);

      const datas = await sexoService.Buscar(IdSexo, Descripcion);
      setSexo(datas);
      setItems(data.Items);
      setRegistrosTotal(data.RegistrosTotal);

      const datat = await tipodocumentoService.Buscar(IdTipoDoc, Descripcion);
      console.log(datat);
      setTipoDoc(datat);

      const datad = await tipodomicilioService.Buscar(
        IdTipoDomicilio,
        Descripcion
      );
      console.log("AAAAAAAA", datad);
      setTipoDomicilio(datad);

      // generar array de las páginas para mostrar en select del paginador
      const arrPaginas = [];
      for (let i = 1; i <= Math.ceil(data.RegistrosTotal / 10); i++) {
        arrPaginas.push(i);
      }
      setPaginas(arrPaginas);
    }

    fetchData();
  }, [Pagina]);

  async function Buscar(_pagina) {
    if (_pagina && _pagina !== Pagina) {
      setPagina(_pagina);
    }
    // OJO Pagina (y cualquier estado...) se actualiza para el proximo render, para buscar usamos el parametro _pagina
    else {
      _pagina = Pagina;
    }
    modalDialogService.BloquearPantalla(true);
    const data = await parteService.Buscar(NombreApellido, Activo, _pagina);
    modalDialogService.BloquearPantalla(false);
    const datas = await sexoService.Buscar(IdSexo, Descripcion);
    setSexo(datas);
    setItems(data.Items);
    setRegistrosTotal(data.RegistrosTotal);

    //generar array de las páginas para mostrar en select del paginador
    const arrPaginas = [];
    for (let i = 1; i <= Math.ceil(data.RegistrosTotal / 10); i++) {
      arrPaginas.push(i);
    }
    setPaginas(arrPaginas);
  }

  async function BuscarPorId(item, accionABMC) {
    const data = await parteService.BuscarPorId(item);
    setItem(data);
    setAccionABMC(accionABMC);
  }

  function Consultar(item) {
    BuscarPorId(item, "C"); // paso la accionABMC pq es asincrono la busqueda y luego de ejecutarse quiero cambiar el estado accionABMC
  }

  async function Agregar() {
    setAccionABMC("A");
    setItem({
      IdParte: 0,
      NombreApellido: "",
      IdSexo: "",
      IdTipoDoc: "",
      NroDocumento: "",
      IdTipoDomicilio: "",
      Domicilio: "",
      Localidad: "",
      MailContacto: "",
      Telefono: "",
    });
    //modalDialogService.Alert("preparando el Alta...");
  }

  async function Eliminar(item) {
    modalDialogService.Confirm(
      "Esta seguro que quiere eliminar el registro?",
      undefined,
      undefined,
      undefined,
      async () => {
        await parteService.Eliminar(item);
        await Buscar();
      }
    );
  }

  async function Grabar(item) {
    // agregar o modificar
    try {
      await parteService.Grabar(item);
    } catch (error) {
      modalDialogService.Alert(
        error?.response?.data?.message ?? error.toString()
      );
      return;
    }
    await Buscar();
    Volver();

    //setTimeout(() => {
    modalDialogService.Alert(
      "Registro " +
        (AccionABMC === "A" ? "agregado" : "modificado") +
        " correctamente."
    );
    //}, 0);
  }

  // Volver/Cancelar desde Agregar/Modificar/Consultar
  function Volver() {
    setAccionABMC("L");
  }

  return (
    <div>
      <Box sx={{ justifyContent: "center" }}>
        <NavButtonSec
          label="Volver al inicio "
          to="/Inicio"
          Icon={ArrowBackIcon}
        />
        <BoxTitle title="" />
      </Box>
      <div>
        <StepperDemandas></StepperDemandas>
      </div>

      {/* Tabla de resutados de busqueda y Paginador */}
    </div>
  );
}
export { Demandas };
