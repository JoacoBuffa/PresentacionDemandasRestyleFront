//const urlServidor = "http://localhost:3000"
//const urlServidor = ""  // vacio para cuando se despliega el frontend, en el mismo servidor que el backend
const urlServidor = "http://localhost:4000";
//const urlServidor = "https://webapi.pymes.net.ar"
//const urlServidor = "https://labsys.frc.utn.edu.ar/dds-express"

const urlResourceParte = urlServidor + "/api/parte";
const urlResourceSexo = urlServidor + "/api/sexo";
const urlResourceTipoDocumento = urlServidor + "/api/tipodocumento";
const urlResourceTipoDomicilio = urlServidor + "/api/tipodomicilio";

export const config = {
  urlServidor,
  urlResourceSexo,
  urlResourceParte,
  urlResourceTipoDocumento,
  urlResourceTipoDomicilio,
};
