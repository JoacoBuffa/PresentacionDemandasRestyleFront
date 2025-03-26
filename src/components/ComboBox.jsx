import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";

const ComboBoxAutocomplete = ({
  label,
  fetchOptions,
  value,
  onChange,
  width = 300,
}) => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!open) return;

    setLoading(true);
    fetchOptions().then((data) => {
      setOptions(data);
      setLoading(false);
    });
  }, [open]);

  return (
    <Autocomplete
      sx={{ width: "50%", margin: "0 auto", marginBottom: 2 }}
      open={open}
      value={value}
      onChange={(_, newValue) => onChange(newValue)}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      options={options}
      getOptionLabel={(option) => option.nombre}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
};

export default ComboBoxAutocomplete;
