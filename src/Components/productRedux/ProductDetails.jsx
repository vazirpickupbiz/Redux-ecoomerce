import { Badge, Button, Card, CardContent, Grid, Rating } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ReplyIcon from "@mui/icons-material/Reply";
import { useDispatch } from "react-redux";

const ProductDetails = () => {
  const navigate = useNavigate();
  const navihome = useLocation();
  const dipatch = useDispatch();
  const data = navihome.state;
  console.log("navihime", data);
  const handleCart = (data) => {
    console.log(data, "Details,Add to cat");
    const type = "CART";
    const payload = data;
    const action = { type, payload };
    dipatch(action);
    navigate("/cart");
  };
  const handleback = () => {
    navigate("/");
  };
  return (
    <div style={{ margin: "50px" }}>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <Card sx={{ textAlign: "center" }}>
            <CardContent>
              <FavoriteBorderIcon
                style={{
                  float: "right",
                  marginRight: "20px",
                  border: "1px solid black",
                  borderRadius: "50px",
                  padding: "7px",
                }}
              />
              <img src={data.image} alt="" width={350} height={350} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={6}>
          <Button
            onClick={handleback}
            sx={{ float: "right" }}
            variant="outlined"
          >
            {" "}
            <ReplyIcon /> Back{" "}
          </Button>
          <br />
          <h2> {data.title} </h2>
          <p>{data.category}</p>
          <Badge badgeContent={data.rating.count} color="primary">
            <Rating value={data.rating.rate} />
          </Badge>
          <br />
          <br />
          <span style={{ fontSize: "50px" }}> ₹ {data.price} </span>
          <span style={{ fontSize: "20px", color: "#737373" }}>
            {" "}
            <del> ₹ {data.price} </del>{" "}
          </span>
          <span
            style={{ fontSize: "20px", color: "green", paddingLeft: "10px" }}
          >
            12% off
          </span>
          <p> {data.description} </p>
        </Grid>
        <Grid item xs={2.5}>
          <Button
            onClick={() => handleCart(data)}
            sx={{ height: 55, color: "white" }}
            variant="contained"
            fullWidth
          >
            {" "}
            <ShoppingCartIcon /> ADD TO CART
          </Button>
        </Grid>
        <Grid item xs={2.5}>
          <Button
            sx={{ height: 55, color: "#ffff" }}
            variant="contained"
            fullWidth
            color="warning"
          >
            {" "}
            <FlashOnIcon /> BUY NOW
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductDetails;
