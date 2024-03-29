import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../api/users";
import ErrorAlert from "../ErrorAlert";
import { loginUser } from "../../helpers/authHelper";

import logo from "../../assets/images/logos.png";
import logos from "../../assets/images/loginpage2.jpg";

const LoginView = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const logoStyle = {
    width: 250,
  };

  const [serverError, setServerError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await login(formData);
    if (data.error) {
      setServerError(data.error);
    } else {
      loginUser(data);
      navigate("/");
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${logos})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        maxWidth={"xs"}
        sx={{
          mt: 6,
          padding: "20px",
          // border: "1px solid #e0e0e0",
          borderRadius: "10px",
          // background: "rgba(255, 255, 255, 0.0)",
          backdropFilter: "blur(100px)",
          // boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Stack alignItems="center">
          <a>
            <img src={logo} style={logoStyle} alt="Logo" />
          </a>
          <Typography variant="h5" gutterBottom sx={{ mt: 2 }}>
            Login
          </Typography>
          <Typography className="text-dark text-bold" sx={{ mb: 2 }}>
            Don't have an account yet?{" "}
            <Link to="/signup" style={{ color: "black" }}>
              Sign Up
            </Link>
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
            <TextField
              label="Email Address"
              fullWidth
              margin="normal"
              autoComplete="email"
              autoFocus
              required
              id="email"
              name="email"
              onChange={handleChange}
            />
            <TextField
              label="Password"
              fullWidth
              required
              margin="normal"
              id="password  "
              name="password"
              onChange={handleChange}
              type="password"
            />

            <ErrorAlert error={serverError} />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ my: 2, background: "#007bff", color: "#fff" }}
            >
              Login
            </Button>
          </Box>
          <Box sx={{ mt: 3 }}>
            <Typography variant="body2" color="text.secondary">
              © {new Date().getFullYear()} NTP News
            </Typography>
          </Box>
        </Stack>
      </Container>
    </div>
  );
};

export default LoginView;
