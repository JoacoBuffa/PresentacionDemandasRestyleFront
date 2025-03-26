import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
} from "@mui/material";

const SelectForm = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  options,
  error,
}) => {
  return (
    <FormControl
      sx={{
        width: "50%",
        margin: "0 auto",
        mb: 2,
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
      }}
      error={!!error}
    >
      {/* Agrega shrink para evitar superposición */}
      <InputLabel shrink htmlFor={name}>
        {label}
      </InputLabel>

      <Select
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        displayEmpty
        label={label} // Se enlaza con InputLabel
      >
        <MenuItem value="">
          <em>Seleccione una opción</em>
        </MenuItem>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>

      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};

export default SelectForm;
