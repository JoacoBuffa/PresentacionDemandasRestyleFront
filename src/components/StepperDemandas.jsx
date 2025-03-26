import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import TextFieldTypeText from "./TextFieldTypeText";
import { useForm } from "react-hook-form";
import SelectForm from "./SelectForm";
import ButtonDemanda from "./Buttons/ButtonDemanda";
import AddIcon from "@mui/icons-material/Add";
import ABMButton from "./Buttons/ABMButton";

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

const comboOpcionesExtra1 = ["Opción 1", "Opción 2", "Opción 3"];
const comboOpcionesExtra2 = ["Alternativa A", "Alternativa B", "Alternativa C"];

export default function StepperDemandas({ Item, Agregar }) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({ values: Item });

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);
  const handleComplete = () => {
    setCompleted({ ...completed, [activeStep]: true });
    handleNext();
  };
  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  const onSubmit = (data) => {
    console.log("Formulario enviado:", data);
  };

  const asignacionChecked = watch("AsignacionDirecta");

  return (
    <Box
      sx={{
        textAlign: "center",
        mt: 4,
        p: 4,
        borderRadius: 5,
        bgcolor: "white",
        boxShadow: 2,
        border: "1px solid #009189",
      }}
    >
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <ButtonDemanda
              label={label}
              onClick={() => setActiveStep(index)}
              bgColor={activeStep === index ? "#009189" : "transparent"}
              fontColor={activeStep === index ? "white" : "#009189"}
              border={activeStep !== index ? "2px solid #009189" : "none"}
            />
          </Step>
        ))}
      </Stepper>

      <Box sx={{ mt: 3 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {activeStep === 0 && (
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Typography>Seleccione un dato:</Typography>
              <SelectForm
                label={"Litiga en"}
                name="LitigaEn"
                value={watch("LitigaEn")}
                onChange={(e) => setValue("LitigaEn", e.target.value)}
                options={litigaEn.map((x) => ({ value: x, label: x }))}
                error={errors?.LitigaEn?.message}
              />
              <SelectForm
                label="Grupos"
                name="Grupos"
                value={watch("Grupos")}
                onChange={(e) => setValue("Grupos", e.target.value)}
                options={grupos.map((x) => ({ value: x, label: x }))}
                error={errors?.Grupos?.message}
              />
              <SelectForm
                label="Categoria de Juicio"
                name="categoriaJuicio"
                value={watch("categoriaJuicio")}
                onChange={(e) => setValue("categoriaJuicio", e.target.value)}
                options={categoriaJuicio.map((x) => ({ value: x, label: x }))}
                error={errors?.categoriaJuicio?.message}
              />

              {/* Checkbox que activa los nuevos combos y el TextField */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <Checkbox
                  {...register("AsignacionDirecta")}
                  color="primary"
                  checked={asignacionChecked}
                  onChange={(e) =>
                    setValue("AsignacionDirecta", e.target.checked)
                  }
                />
                <Typography>¿Asignación directa?</Typography>
              </Box>

              {/* Muestra los nuevos campos solo si el checkbox está marcado */}
              {asignacionChecked && (
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <SelectForm
                    name="ExtraCombo1"
                    value={watch("ExtraCombo1")}
                    onChange={(e) => setValue("ExtraCombo1", e.target.value)}
                    options={comboOpcionesExtra1.map((x) => ({
                      value: x,
                      label: x,
                    }))}
                    error={errors?.ExtraCombo1?.message}
                  />
                  <SelectForm
                    name="ExtraCombo2"
                    value={watch("ExtraCombo2")}
                    onChange={(e) => setValue("ExtraCombo2", e.target.value)}
                    options={comboOpcionesExtra2.map((x) => ({
                      value: x,
                      label: x,
                    }))}
                    error={errors?.ExtraCombo2?.message}
                  />
                  <TextFieldTypeText
                    label="Observaciones"
                    {...register("TextoAdicional")}
                    variant="outlined"
                    fullWidth
                  />
                </Box>
              )}
            </Box>
          )}

          {activeStep === 1 && (
            <Box>
              <ABMButton
                to="#"
                label="Agregar"
                Icon={AddIcon}
                onClick={() => Agregar()}
              />
            </Box>
          )}

          {activeStep === 2 && <Typography>Resumen y Confirmación</Typography>}

          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <ButtonDemanda
              disabled={activeStep === 0}
              onClick={handleBack}
              label="Atrás"
            />
            <Box sx={{ flex: "1 1 auto" }} />

            {activeStep < steps.length - 1 ? (
              <ButtonDemanda
                onClick={handleNext}
                label="Siguiente"
                bgColor={
                  activeStep !== steps.length - 1 ? "#ffffff" : "#009189"
                }
                fontColor={
                  activeStep !== steps.length - 1 ? "#009189" : "white"
                }
                border="1px solid #009189"
              />
            ) : (
              <Button type="submit" variant="contained" color="primary">
                Finalizar
              </Button>
            )}
          </Box>
        </form>
      </Box>
    </Box>
  );
}
