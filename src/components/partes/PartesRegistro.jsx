import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import SaveIcon from "@mui/icons-material/Save";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ABMButton from "../Buttons/ABMButton";
import TextFieldTypeText from "../TextFieldTypeText";
import SelectForm from "../SelectForm";
import ComboBoxAutocomplete from "../ComboBox";

export default function PartesRegistro({
  AccionABMC,
  Sexo,
  TipoDoc,
  TipoDomicilio,
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
              label=""
              name="Tipo Domicilio"
              value={watch("TipoDomicilio")} // Obtiene el valor actual del formulario
              onChange={(e) => setValue("TipoDomicilio", e.target.value)} // Actualiza el estado en react-hook-form
              options={TipoDomicilio?.map((x) => ({
                value: x.IdTipoDomicilio,
                label: x.Descripcion,
              }))}
              error={errors?.TipoDoc?.message} // Muestra el mensaje de error si existe
            />
          </div>
          <div className="row">
            <ComboBoxAutocomplete
              label="Tipo Documento"
              name="TipoDoc"
              value={watch("TipoDoc")}
              onChange={(e) => setValue("TipoDoc", e.target.value)}
              fetchOptions={TipoDoc?.map((x) => ({
                value: x.IdTipoDoc,
                label: x.Descripcion,
              }))}
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
          {/* campo IdPosicion */}
          <div className="row">
            <SelectForm
              label=""
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
