import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import SaveIcon from "@mui/icons-material/Save";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ABMButton from "../ABMButton";
import TextFieldTypeText from "../TextFieldTypeText";
import SelectForm from "../SelectForm";

export default function PartesRegistro({
  AccionABMC,
  Sexo,
  tipodocumento,
  Item,
  Grabar,
  Volver,
}) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, touchedFields, isValid, isSubmitted },
  } = useForm({ values: Item });

  const onSubmit = (data) => {
    Grabar(data);
  };
  const textFieldsTypeText = [
    { label: "Nombre y Apellido", name: "NombreApellido", flag: true },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container-fluid">
        <fieldset disabled={AccionABMC === "C"}>
          {/* campo nombre */}
          <div className="row">
            <TextFieldTypeText
              label="Nombre y Apellido"
              name="Nombre y Apellido"
              flag={true}
            />
          </div>
          <div className="row">
            <SelectForm
              label="Tipo Documento"
              name="Tipo Documento"
              value={watch("Tipo Documento")} // Obtiene el valor actual del formulario
              onChange={(e) => setValue("Tipo Documento", e.target.value)} // Actualiza el estado en react-hook-form
              {...(Sexo &&
                Sexo.map((s) => ({ value: s.IdSexo, label: s.Descripcion })))}
              error={errors?.Sexo?.message} // Muestra el mensaje de error si existe
            />
          </div>
          {/* campo Dni */}
          <div className="row">
            <TextFieldTypeText
              label="Documento"
              name="Documento"
              flag={true}
              type="number"
            />
          </div>

          {/* campo FechaNacimiento */}
          <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
              <label className="col-form-label" htmlFor="FechaNacimiento">
                Fecha Nacimiento:
              </label>
            </div>
            <div className="col-sm-8 col-md-6">
              <input
                type="date"
                {...register("FechaNacimiento")}
                className={
                  "form-control " +
                  (errors?.FechaNacimiento ? "is-invalid" : "")
                }
              />
            </div>
          </div>

          {/* campo Peso */}
          <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
              <label className="col-form-label" htmlFor="Peso">
                Peso:
              </label>
            </div>
            <div className="col-sm-8 col-md-6">
              <input
                type="float"
                {...register("Peso", {
                  min: {
                    value: 1,
                    message: "Peso debe ser mayor a 1",
                  },
                  max: {
                    value: 200,
                    message: "Peso debe ser menor a 200",
                  },
                })}
                className={"form-control " + (errors?.Peso ? "is-invalid" : "")}
              />
              {errors?.Peso && touchedFields.Peso && (
                <div className="invalid-feedback">{errors?.Peso?.message}</div>
              )}
            </div>
          </div>

          {/* campo Altura */}
          <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
              <label className="col-form-label" htmlFor="Altura">
                Altura:
              </label>
            </div>
            <div className="col-sm-8 col-md-6">
              <input
                type="float"
                {...register("Altura", {
                  min: {
                    value: 1,
                    message: "Altura debe ser mayor a 1",
                  },
                  max: {
                    value: 220,
                    message: "Altura debe ser menor a 220",
                  },
                })}
                className={
                  "form-control " + (errors?.Altura ? "is-invalid" : "")
                }
              />
              {errors?.Altura && touchedFields.Altura && (
                <div className="invalid-feedback">
                  {errors?.Altura?.message}
                </div>
              )}
            </div>
          </div>

          {/* campo IdPosicion */}
          <div className="row">
            <SelectForm
              label="Sexo"
              name="Sexo"
              value={watch("Sexo")} // Obtiene el valor actual del formulario
              onChange={(e) => setValue("Sexo", e.target.value)} // Actualiza el estado en react-hook-form
              options={Sexo?.map((x) => ({
                value: x.IdSexo,
                label: x.Descripcion,
              }))}
              error={errors?.Sexo?.message} // Muestra el mensaje de error si existe
            />
          </div>

          {/* campo Activo */}
          <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
              <label className="col-form-label" htmlFor="Activo">
                Activo<span className="text-danger">*</span>:
              </label>
            </div>
            <div className="col-sm-8 col-md-6">
              <select
                name="Activo"
                {...register("Activo", {
                  required: { value: true, message: "Activo es requerido" },
                })}
                className={
                  "form-control" + (errors?.Activo ? " is-invalid" : "")
                }
                enabled
              >
                <option value={null}></option>
                <option value={false}>NO</option>
                <option value={true}>SI</option>
              </select>
              <div className="invalid-feedback">{errors?.Activo?.message}</div>
            </div>
          </div>
        </fieldset>

        {/* Botones Grabar, Cancelar/Volver' */}
        <hr />
        <div className="row justify-content-center">
          <div className="col text-center botones">
            {AccionABMC !== "C" && (
              <ABMButton
                to="#"
                label="Grabar"
                Icon={SaveIcon}
                onClick={() => Grabar(Item)}
              />
            )}
            <ABMButton
              to="#"
              label="Volver"
              Icon={ArrowBackIcon}
              onClick={() => Volver()}
            />
          </div>
        </div>

        {/* texto: Revisar los datos ingresados... */}
        {!isValid && isSubmitted && (
          <div className="row alert alert-danger mensajesAlert">
            <i className="fa fa-exclamation-sign"></i>
            Revisar los datos ingresados...
          </div>
        )}
      </div>
    </form>
  );
}
