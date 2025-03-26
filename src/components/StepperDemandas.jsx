import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import SelectForm from "./SelectForm";
import { useForm } from "react-hook-form";
import ABMButton from "./Buttons/ABMButton";
import Checkbox from "@mui/material/Checkbox";
import { tipodomicilioService } from "../services/tipodomicilio.service";
import NavButtonSec from "./Buttons/NavButtonSec";
import ButtonDemanda from "./Buttons/ButtonDemanda";

const steps = [
  "DATOS DE LA PRESENTACIÓN",
  "PARTES COMUNES A TODA LA PRESENTACIÓN",
  "EXPEDIENTES DE LA PRESENTACIÓN",
];
const litigaEn = ["CORDOBA", "ARROYITO", "CARLOS PAZ", "COSQUIN"];
const grupos = [
  "JUZG. CIV. COM.",
  "SECRETARIA COMUN EJECUCIONES FISCALES",
  "AREA DE MODERNIZACIÓN",
  "GRUPO DE PRUEBA",
];
const categoriaJuicio = [
  "DECLARATORIA DE HEREDEROS",
  "CATEGORIA DE JUICIO",
  "AMPARO",
  "MEDIACION",
];

export default function StepperDemandas(Item, TipoDomicilio) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const [selectedValue, setSelectedValue] = React.useState(""); // Datos del paso 1

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleComplete = () => {
    setCompleted({ ...completed, [activeStep]: true });
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, touchedFields, isValid, isSubmitted },
  } = useForm({ values: Item });
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <ButtonDemanda
              label={label}
              onClick={() => setActiveStep(index)}
              bgColor={activeStep === index ? "#009189" : "transparent"} // Fondo solo en el activo
              fontColor={activeStep === index ? "white" : "#009189"} // Color del texto
              border={activeStep !== index ? "2px solid #009189" : "none"}
            ></ButtonDemanda>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ mt: 3 }}>
        {activeStep === 0 && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: "100%",
              flex: "1 1 auto",
            }}
          >
            <Typography>Seleccione un dato:</Typography>
            <SelectForm
              label=""
              name="LitigaEn"
              value={watch("LitigaEn")} // Obtiene el valor actual del formulario
              onChange={(e) => setValue("LitigaEn", e.target.value)} // Actualiza el estado en react-hook-form
              options={litigaEn?.map((x) => ({ value: x, label: x }))}
              error={errors?.litigaEn?.message}
            />
            <SelectForm
              label=""
              name="Grupos"
              value={watch("Grupos")} // Obtiene el valor actual del formulario
              onChange={(e) => setValue("Grupos", e.target.value)} // Actualiza el estado en react-hook-form
              options={grupos?.map((x) => ({ value: x, label: x }))}
              error={errors?.grupos?.message}
            />
            <SelectForm
              label=""
              name="categoriaJuicio"
              value={watch("categoriaJuicio")} // Obtiene el valor actual del formulario
              onChange={(e) => setValue("categoriaJuicio", e.target.value)} // Actualiza el estado en react-hook-form
              options={categoriaJuicio?.map((x) => ({ value: x, label: x }))}
              error={errors?.categoriaJuicio?.message}
            />
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Checkbox
                {...register("Notificaciones", { required: true })}
                color="primary"
              />
              <Typography>Asignación directa</Typography>
            </Box>
          </Box>
        )}

        {activeStep === 1 && (
          <Box>
            <Typography>Agenda basada en: {selectedValue}</Typography>
            <Typography>Aquí se mostrarían datos dinámicos...</Typography>
          </Box>
        )}

        {activeStep === 2 && <Typography>Resumen y Confirmación</Typography>}
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <ButtonDemanda
          disabled={activeStep === 0}
          onClick={handleBack}
          label="Atrás"
        />
        <Box sx={{ flex: "1 1 auto" }} />
        <ButtonDemanda
          onClick={handleNext}
          disabled={activeStep === steps.length - 1}
          label="Siguiente"
          bgColor="#ffffff"
          fontColor="#009189"
          border="1px solid #009189"
        />

        {activeStep !== steps.length - 1 && (
          <ButtonDemanda onClick={handleComplete} label="Finalizar" />
        )}
        {activeStep === steps.length - 1 && (
          <Button onClick={handleReset}>Reset</Button>
        )}
      </Box>
    </Box>
  );
}
