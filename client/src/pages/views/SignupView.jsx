// import {
//   Button,
//   Container,
//   Stack,
//   TextField,
//   Typography,
//   Link,
//   Alert,
// } from "@mui/material";
// import { Box } from "@mui/system";
// import React, { useState } from "react";
// import { signup } from "../../api/users";
// import { loginUser } from "../../helpers/authHelper";
// import { useNavigate } from "react-router-dom";
// import Copyright from "../Copyright";
// import ErrorAlert from "../ErrorAlert";
// import { isLength, isEmail, contains } from "validator";
// import logo from '../../assets/logo.jpg';

// const SignupView = () => {
//   const navigate = useNavigate();
//   const [serverError, setServerError] = useState("");
//   const [errors, setErrors] = useState({});

//   const logoStyle={
//     width: 250,

//   }

//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const errors = validate();
//     if (Object.keys(errors).length !== 0) return;

//     const data = await signup(formData);

//     if (data.error) {
//       setServerError(data.error);
//     } else {
//       navigate("/login");
//       // loginUser(data);

//     }
//   };

//   const validate = () => {
//     const errors = {};

//     if (!isLength(formData.username, { min: 6, max: 30 })) {
//       errors.username = "Must be between 6 and 30 characters long";
//     }

//     if (contains(formData.username, " ")) {
//       errors.username = "Must contain only valid characters";
//     }

//     if (!isLength(formData.password, { min: 8 })) {
//       errors.password = "Must be at least 8 characters long";
//     }

//     if (!isEmail(formData.email)) {
//       errors.email = "Must be a valid email address";
//     }

//     setErrors(errors);

//     return errors;
//   };

//   return (
//     <Container maxWidth={"xs"} sx={{ mt: { xs: 2, md: 6 } }}>
//       <Stack alignItems="center">
//         <Typography variant="h2" color="text.secondary" sx={{ mb: 6 }}>
//           <a> <img src={logo} style={logoStyle}>
//           </img> </a>
//         </Typography>
//         <Typography variant="h5" gutterBottom>
//           Sign Up
//         </Typography>
//         <Typography color="text.secondary">
//           Already have an account? <Link to="/login">Login</Link>
//         </Typography>
//         <Box component="form" onSubmit={handleSubmit}>
//           <TextField
//             label="Username"
//             fullWidth
//             margin="normal"
//             autoFocus
//             required
//             id="username"
//             name="username"
//             onChange={handleChange}
//             error={errors.username !== undefined}
//             helperText={errors.username}
//           />
//           <TextField
//             label="Email Address"
//             fullWidth
//             margin="normal"
//             autoComplete="email"
//             required
//             id="email"
//             name="email"
//             onChange={handleChange}
//             error={errors.email !== undefined}
//             helperText={errors.email}
//           />
//           <TextField
//             label="Password"
//             fullWidth
//             required
//             margin="normal"
//             autoComplete="password"
//             id="password"
//             name="password"
//             type="password"
//             onChange={handleChange}
//             error={errors.password !== undefined}
//             helperText={errors.password}
//           />
//           <ErrorAlert error={serverError} />
//           <Button type="submit" fullWidth variant="contained" sx={{ my: 2 }}>
//             Sign Up
//           </Button>
//         </Box>
//         <Box sx={{ mt: 3 }}>
//           <Copyright />
//         </Box>
//       </Stack>
//     </Container>
//   );
// };

// export default SignupView;

import {
  Button,
  Container,
  Stack,
  TextField,
  Typography,
  Link,
  Alert,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { login, signup } from "../../api/users";
import { useNavigate } from "react-router-dom";
import { isLength, isEmail, contains } from "validator";
import logo from "../../assets/images/logo.jpg";
import { loginUser } from "../../helpers/authHelper";

const SignupView = () => {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState("");
  const [errors, setErrors] = useState({});

  const logoStyle = {
    width: 250,
  };

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validate();
    if (Object.keys(errors).length !== 0) return;

    const data = await signup(formData);

    if (data.error) {
      setServerError(data.error);
    } else {
      navigate("/login");
    }
  };

  const validate = () => {
    const errors = {};

    if (!isLength(formData.username, { min: 6, max: 30 })) {
      errors.username = "Must be between 6 and 30 characters long";
    }

    if (contains(formData.username, " ")) {
      errors.username = "Must contain only valid characters";
    }

    if (!isLength(formData.password, { min: 8 })) {
      errors.password = "Must be at least 8 characters long";
    }

    if (!isEmail(formData.email)) {
      errors.email = "Must be a valid email address";
    }

    setErrors(errors);

    return errors;
  };

  return (
    <Container
      maxWidth={"xs"}
      sx={{
        mt: 6,
        padding: "20px",
        border: "1px solid #e0e0e0",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Stack alignItems="center">
        <a>
          <img src={logo} style={logoStyle} alt="Logo" />
        </a>
        <Typography variant="h5" gutterBottom sx={{ mt: 2 }}>
          Sign Up
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 2 }}>
          Already have an account?{" "}
          <Link href="/login" style={{ color: "#007bff" }}>
            Login
          </Link>
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
          <TextField
            label="Username"
            fullWidth
            margin="normal"
            autoFocus
            required
            id="username"
            name="username"
            onChange={handleChange}
            error={errors.username !== undefined}
            helperText={errors.username}
          />
          <TextField
            label="Email Address"
            fullWidth
            margin="normal"
            autoComplete="email"
            required
            id="email"
            name="email"
            onChange={handleChange}
            error={errors.email !== undefined}
            helperText={errors.email}
          />
          <TextField
            label="Password"
            fullWidth
            required
            margin="normal"
            autoComplete="password"
            id="password"
            name="password"
            type="password"
            onChange={handleChange}
            error={errors.password !== undefined}
            helperText={errors.password}
          />
          {serverError && <Alert severity="error">{serverError}</Alert>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ my: 2, background: "#007bff", color: "#fff" }}
          >
            Sign Up
          </Button>
        </Box>
        <Box sx={{ mt: 3 }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} NTP News
          </Typography>
        </Box>
      </Stack>
    </Container>
  );
};

export default SignupView;
