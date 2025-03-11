import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";

const TextFieldTypeText = ({ label, name, flag, type = "text" }) => {
  const {
    register,
    formState: { errors, touchedFields },
  } = useForm();

  return (
    <TextField
      sx={{
        width: "50%",
        margin: "0 auto",
        mb: 2,
        borderRadius: 2,
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "#004d40",
          },
          "&:hover fieldset": {
            borderColor: "#009189",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#009189",
          },
          "& .MuiInputLabel-root": {
            color: "#004d40",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#009189",
          },
        },
      }}
      {...register(name, {
        required: "Este campo es requerido",
        minLength: { value: 4, message: "Debe tener al menos 4 caracteres" },
        maxLength: { value: 55, message: "Máximo 55 caracteres" },
      })}
      autoFocus={flag}
      label={label}
      variant="outlined"
      fullWidth
      error={!!errors?.[name] && touchedFields?.[name]}
      helperText={touchedFields?.[name] ? errors?.[name]?.message : ""}
      type={type} // Agregado para permitir tipos dinámicos
    />
  );
};

export default TextFieldTypeText;
