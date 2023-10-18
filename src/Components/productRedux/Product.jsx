import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Grid,
  Rating,
  Badge,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link, useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

const Product = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const select = useSelector((state) => state.ProductReducer.cart.length);
  console.log("lllllllllll", select);

  const handleDetails = (item) => {
    console.log("handleDetails", item);
    navigate("/productDetails", { state: item });
  };

  const getApi = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    setData(result.data);
    const type = "PRODUCT";
    const payload = result.data;
    const action = { type, payload };
    dispatch(action);
  };

  const handleCart = (item, ind) => {
    const type = "CART";
    const payload = item;
    const action = { type, payload };
    dispatch(action);
  };

  useEffect(() => {
    getApi();
  }, []);
  return (
    <div style={{ backgroundColor: "#FAF9F6", padding: "20px" }}>
      <Grid container spacing={3}>
        <Grid item xs={10}>
          <TextField variant="outlined" label="search" fullWidth />
        </Grid>
        <Grid item xs={1}>
          <Link to="/cart">
            <Button
              color="warning"
              variant="contained"
              style={{ height: "52px" }}
              fullWidth
            >
              {/* <Badge color="primary"></Badge> */}
              {select > 0 && <p> {select} </p>}
              <ShoppingCartOutlinedIcon sx={{ fontSize: "35px" }} />
            </Button>
          </Link>
        </Grid>
        <Grid item xs={1}>
          <Link to="/login">
            <Button variant="contained" style={{ height: "52px" }} fullWidth>
              <LoginIcon sx={{ fontSize: "35px" }} />
            </Button>
          </Link>
        </Grid>
        {data.map((item, index) => (
          <Grid item xs={3} textAlign={"center"}>
            <Card>
              <CardContent>
                <img
                  onClick={() => handleDetails(item)}
                  src={item.image}
                  width="250px"
                  height="250px"
                  alt=""
                />
                <h2> {item.title.substr(0, 15) + "..."} </h2>

                <span style={{ fontSize: "40px" }}> ₹ {item.price} </span>
                <span style={{ fontSize: "20px" }}>
                  {" "}
                  <del> {item.price} </del>{" "}
                </span>
                <br />
                <p>{item.description.substr(0, 40) + "..."} </p>
                <br />

                <Button
                  onClick={() => handleCart(item, index)}
                  fullWidth
                  variant="contained"
                  color="error"
                >
                  Add to Cart
                </Button>
                <br />
                <br />
                <Button fullWidth variant="contained">
                  BUY
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Product;
