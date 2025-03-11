import httpService from "./http.service";
//const urlResource = "https://labsys.frc.utn.edu.ar/dds-express/api/articulos";

// mas adelante podemos usar un archivo de configuracion para el urlResource
import { config } from "../config";
const urlResource = config.urlResourceParte;

async function Buscar(NombreApellido, Pagina) {
  const resp = await httpService.get(urlResource, {
    params: { NombreApellido, Pagina },
  });
  return resp.data;
}

async function BuscarPorId(item) {
  const resp = await httpService.get(urlResource + "/" + item.IdParte);
  return resp.data;
}

async function Grabar(item) {
  if (item.IdParte === 0) {
    await httpService.post(urlResource, item);
  } else {
    await httpService.put(urlResource + "/" + item.IdParte, item);
  }
}

async function Eliminar(item) {
  await httpService.delete(urlResource + "/" + item.IdParte);
}

export const parteService = {
  Buscar,
  BuscarPorId,
  Grabar,
  Eliminar,
};
