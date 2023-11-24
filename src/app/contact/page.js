"use client";
import "../page.module.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import { styled } from "@mui/system";
import { Button as BaseButton } from "@mui/base/Button";
import Stack from "@mui/material/Stack";
import BackBtn from "@/components/BackBtn";

//MUI - Textarea-autosize
const blue = {
  100: "#DAECFF",
  200: "#b6daff",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const Textarea = styled(BaseTextareaAutosize)(
  ({ theme }) => `
  width: 320px;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 12px;
  border-radius: 12px 12px 0 12px;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  box-shadow: 0px 2px 2px ${
    theme.palette.mode === "dark" ? grey[900] : grey[50]
  };

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    outline: 0;
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${
      theme.palette.mode === "dark" ? blue[600] : blue[200]
    };
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`
);

//MUI-Button
const Button = styled(BaseButton)(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  background-color: ${blue[500]};
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: 1px solid ${blue[500]};
  box-shadow: 0 2px 1px ${
    theme.palette.mode === "dark"
      ? "rgba(0, 0, 0, 0.5)"
      : "rgba(45, 45, 60, 0.2)"
  }, inset 0 1.5px 1px ${blue[400]}, inset 0 -2px 1px ${blue[600]};

  &:hover {
    background-color: ${blue[600]};
  }

  &:active {
    background-color: ${blue[700]};
    box-shadow: none;
  }

  &:focus-visible {
    box-shadow: 0 0 0 4px ${
      theme.palette.mode === "dark" ? blue[300] : blue[200]
    };
    outline: none;
  }

  &:disabled {
    background-color: ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    color: ${theme.palette.mode === "dark" ? grey[200] : grey[700]};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    cursor: not-allowed;
    box-shadow: none;

    &:hover {
      background-color: ${
        theme.palette.mode === "dark" ? grey[700] : grey[200]
      };
    }
  }
`
);

export default function Contact() {
  return (
    <div className="Contact">
            <BackBtn/>

      <h1>Contact</h1>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          label="First Name"
          variant="standard"
          color="success"
          focused
        />
        <TextField
          label="Last Name"
          variant="standard"
          color="success"
          focused
        />
        <TextField label="Email" variant="standard" color="success" focused />
      </Box>
      <Textarea
        aria-label="empty textarea"
        placeholder="Say Hi!"
        sx={{ fontFamily: "Cascadia Mono", padding: "20px", my: "20px" }}
      />
      <Box>
        <Button
          sx={{
            fontFamily: "Cascadia Mono",
            borderWidth: 1,
            backgroundColor: "transparent",
            color: "#308080",
            borderRight:1,
            borderColor: "#308080",
            '&:hover':{backgroundColor:"#308080", color:"white"}
          }}
        >
          Send
        </Button>
      </Box>
    </div>
  );
}
