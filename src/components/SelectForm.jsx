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
        width: "50%", // Ajuste para que coincida con los TextField
        margin: "0 auto",
        mb: 2,
      }}
      error={!!error}
    >
      <InputLabel shrink={!!value}>{label}</InputLabel>
      <Select
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        displayEmpty
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
