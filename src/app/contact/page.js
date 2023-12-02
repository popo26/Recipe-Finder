// "use client";
// import "../page.module.css";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
// import { styled } from "@mui/system";
// import { Button as BaseButton } from "@mui/base/Button";
// import BackBtn from "@/components/BackBtn";
// import { useState } from "react";

// //MUI - Textarea-autosize
// const blue = {
//   100: "#DAECFF",
//   200: "#b6daff",
//   400: "#3399FF",
//   500: "#007FFF",
//   600: "#0072E5",
//   900: "#003A75",
// };

// const grey = {
//   50: "#F3F6F9",
//   100: "#E5EAF2",
//   200: "#DAE2ED",
//   300: "#C7D0DD",
//   400: "#B0B8C4",
//   500: "#9DA8B7",
//   600: "#6B7A90",
//   700: "#434D5B",
//   800: "#303740",
//   900: "#1C2025",
// };

// const Textarea = styled(BaseTextareaAutosize)(
//   ({ theme }) => `
//   width: 320px;
//   font-family: IBM Plex Sans, sans-serif;
//   font-size: 0.875rem;
//   font-weight: 400;
//   line-height: 1.5;
//   padding: 12px;
//   border-radius: 12px 12px 0 12px;
//   color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
//   background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
//   border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
//   box-shadow: 0px 2px 2px ${
//     theme.palette.mode === "dark" ? grey[900] : grey[50]
//   };

//   &:hover {
//     border-color: ${blue[400]};
//   }

//   &:focus {
//     outline: 0;
//     border-color: ${blue[400]};
//     box-shadow: 0 0 0 3px ${
//       theme.palette.mode === "dark" ? blue[600] : blue[200]
//     };
//   }

//   // firefox
//   &:focus-visible {
//     outline: 0;
//   }
// `
// );

// //MUI-Button
// const Button = styled(BaseButton)(
//   ({ theme }) => `
//   font-family: IBM Plex Sans, sans-serif;
//   font-weight: 600;
//   font-size: 0.875rem;
//   line-height: 1.5;
//   background-color: ${blue[500]};
//   padding: 8px 16px;
//   border-radius: 8px;
//   color: white;
//   transition: all 150ms ease;
//   cursor: pointer;
//   border: 1px solid ${blue[500]};
//   box-shadow: 0 2px 1px ${
//     theme.palette.mode === "dark"
//       ? "rgba(0, 0, 0, 0.5)"
//       : "rgba(45, 45, 60, 0.2)"
//   }, inset 0 1.5px 1px ${blue[400]}, inset 0 -2px 1px ${blue[600]};

//   &:hover {
//     background-color: ${blue[600]};
//   }

//   &:active {
//     background-color: ${blue[700]};
//     box-shadow: none;
//   }

//   &:focus-visible {
//     box-shadow: 0 0 0 4px ${
//       theme.palette.mode === "dark" ? blue[300] : blue[200]
//     };
//     outline: none;
//   }

//   &:disabled {
//     background-color: ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
//     color: ${theme.palette.mode === "dark" ? grey[200] : grey[700]};
//     border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
//     cursor: not-allowed;
//     box-shadow: none;

//     &:hover {
//       background-color: ${
//         theme.palette.mode === "dark" ? grey[700] : grey[200]
//       };
//     }
//   }
// `
// );

// export default function Contact() {
//   const [fName, setFName] = useState("");
//   const [lName, setLName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   async function handleSubmit(event) {
//     event.preventDefault();
//     const object = {
//       "First name": fName,
//       "Last name": lName,
//       Email: email,
//       Message: message,
//       from_name: event.target.from_name.value,
//       subject: event.target.subject.value,
//       access_key: process.env.NEXT_PUBLIC_WEB3_CONTACT_FORM_ACCESS_KEY,
//     };
//     const json = JSON.stringify(object);

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: json,
//     })
//       .then(async (response) => {
//         const result = await response.json();
//         if (result.success) {
//           console.log(result);
//           alert(
//             `Thanks, ${
//               fName.charAt(0).toUpperCase() + fName.slice(1)
//             }! Successfully sent.`
//           );
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       })
//       .then(function () {
//         //reset form
//         setFName("");
//         setLName("");
//         setEmail("");
//         setMessage("");
//       });
//   }

//   return (
//     <div className="Contact">
//       <BackBtn />

//       <h1>Contact</h1>
//       <Box
//         component="form"
//         sx={{
//           "& > :not(style)": { m: 1, width: "25ch" },
//         }}
//         noValidate
//         autoComplete="off"
//         onSubmit={handleSubmit}
//       >
//         <input
//           type="hidden"
//           name="subject"
//           value="New Email from Recipe Finder"
//         />
//         <input type="hidden" name="from_name" value="Recipe Finder" />
//         <TextField
//           label="First Name"
//           variant="standard"
//           color="success"
//           focused
//           name="fname"
//           value={fName}
//           onChange={(e) => setFName(e.target.value)}
//         />
//         <TextField
//           label="Last Name"
//           variant="standard"
//           color="success"
//           focused
//           name="lname"
//           value={lName}
//           onChange={(e) => setLName(e.target.value)}
//         />
//         <TextField
//           label="Email"
//           variant="standard"
//           color="success"
//           focused
//           name="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <Textarea
//           aria-label="empty textarea"
//           placeholder="Say Hi!"
//           sx={{ fontFamily: "Cascadia Mono", padding: "20px", my: "20px" }}
//           name="message"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         />
//         <Button
//           sx={{
//             fontFamily: "Cascadia Mono",
//             borderWidth: 1,
//             backgroundColor: "transparent",
//             color: "#308080",
//             borderRight: 1,
//             borderColor: "#308080",
//             "&:hover": { backgroundColor: "#308080", color: "white" },
//           }}
//           type="submit"
//         >
//           Send
//         </Button>
//       </Box>
//     </div>
//   );
// }

///////With FormData////////////////

"use client";
import "../page.module.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import { styled } from "@mui/system";
import { Button as BaseButton } from "@mui/base/Button";
import BackBtn from "@/components/BackBtn";
import { useState, useRef } from "react";

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
  const fnameRef = useRef("");
  const lnameRef = useRef("");
  const emailRef = useRef("");
  const textareaRef = useRef("");

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3_CONTACT_FORM_ACCESS_KEY
    );

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    console.log("formData", formData);
    console.log("textareaRef", textareaRef);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    })
      .then(async (response) => {
        const result = await response.json();
        if (result.success) {
          console.log(result);
          alert(
            `Thanks, ${
              fnameRef.current.value.charAt(0).toUpperCase() +
              fnameRef.current.value.slice(1)
            }! Successfully sent.`
          );
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .then(function () {
        //reset form
        fnameRef.current.value = "";
        lnameRef.current.value = "";
        emailRef.current.value = "";
        textareaRef.current.value = "";
      });
  }

  return (
    <div className="Contact">
      <BackBtn />

      <h1>Contact</h1>

      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        className="Contact-contents"
      >
        <input
          type="hidden"
          name="subject"
          value="New Email from Recipe Finder"
        />
        <input type="hidden" name="from_name" value="Recipe Finder" />
        <TextField
          label="First Name"
          variant="standard"
          color="success"
          focused
          name="fname"
          inputRef={fnameRef}
        />
        <TextField
          label="Last Name"
          variant="standard"
          color="success"
          focused
          name="lname"
          inputRef={lnameRef}
        />
        <TextField
          label="Email"
          variant="standard"
          color="success"
          focused
          name="email"
          inputRef={emailRef}
        />
        <Textarea
          aria-label="empty textarea"
          placeholder="Say Hi!"
          sx={{ fontFamily: "Cascadia Mono", padding: "20px", my: "20px" }}
          name="message"
          // slotProps={{ textarea: { ref: textareaRef } }}
          inputRef={textareaRef}
        />
        <Button
          sx={{
            fontFamily: "Cascadia Mono",
            borderWidth: 1,
            backgroundColor: "transparent",
            color: "#308080",
            borderRight: 1,
            borderColor: "#308080",
            "&:hover": { backgroundColor: "#308080", color: "white" },
          }}
          type="submit"
        >
          Send
        </Button>
      </Box>
    </div>
  );
}
