import { Box, Typography } from "@mui/material";

const BoxTitle = ({ title }) => {
  return (
    <Box
      sx={{
        textAlign: "center",
        color: "white",
        boxShadow: 3,
        padding: 2,
        margin: 0,
        bgcolor: "#009189",
        borderRadius: 2,
        mb: 2,
      }}
    >
      <Typography sx={{ fontSize: "32px", fontWeight: "bold" }}>
        {title}
      </Typography>
    </Box>
  );
};

export default BoxTitle;
