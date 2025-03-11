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
    <FormControl fullWidth error={!!error}>
      <InputLabel shrink={!!value}>{label}</InputLabel> {/* Ajustamos shrink */}
      <Select
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur} // Agregamos manejo de blur
        displayEmpty // Permite mostrar el label correctamente
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
