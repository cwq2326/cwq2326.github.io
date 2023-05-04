import { Box, FormControl, TextField } from "@mui/material";

import Section from "../Layouts/Section";

// Customised styling for Form components.
const formControlStyle = {
  // label when focused
  "& .MuiFormLabel-root.Mui-focused": {
    color: "#d99058",
  },
  // label when not focused
  "& .MuiInputLabel-outlined": {
    color: "#2d3032",
  },
  "& .MuiOutlinedInput": {
    // Set the border color when not focused
    "&-notchedOutline": {
      borderColor: "#FFFFFF",
    },
    // Set the border color when focused
    "&-root.Mui-focused fieldset": {
      borderColor: "#d99058",
    },
  },
  "& .Mui-focused": {
    // Set the text color when focused
    "& input": {
      color: "#d99058",
    },
    // Set the textarea color when focused
    "& textarea": {
      color: "#d99058",
    },
  },
  // Set the background color of the input field
  "& .MuiInputBase": {
    "&-base": {
      backgroundColor: "#d2d3d3",
    },
    "&-root": {
      backgroundColor: "#d2d3d3",
    },
  },
};

export default function index() {
  return (
    <Section title={"Contact"}>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        <FormControl sx={formControlStyle}>
          <TextField
            id="input-name"
            label="Name"
            required
            sx={{ mb: "1rem" }}
          />
          <TextField id="input-email" label="Email" required />
        </FormControl>
        <FormControl sx={formControlStyle} fullWidth>
          <TextField
            id="input-message"
            label="Message"
            multiline
            rows={10}
            required
          />
        </FormControl>
      </Box>
    </Section>
  );
}
