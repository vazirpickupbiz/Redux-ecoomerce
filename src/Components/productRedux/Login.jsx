import { Button, Card, CardContent, TextField, Grid } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [data, setData] = useState({
    userId: "vazir74",
    password: "12345",
  });
  const navi = useNavigate();
  const handleLogin = () => {
    data.userId == email && data.password == password
      ? navi("/")
      : navi("/login");
  };
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <h2>Login</h2>
              <br />

              <TextField
                onChange={(e) => setEmail(e.target.value)}
                label="username"
                variant="outlined"
                fullWidth
              />
              <br />
              <br />
              <TextField
                onChange={(e) => setPassword(e.target.value)}
                label="password"
                variant="outlined"
                fullWidth
              />
              <br />
              <br />

              <Button onClick={handleLogin} variant="contained" fullWidth>
                LOGIN
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </div>
  );
};

export default Login;
