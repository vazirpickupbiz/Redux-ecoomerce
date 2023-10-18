import { Button, Card, CardContent, Grid } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ReplyIcon from "@mui/icons-material/Reply";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const ShopCart = () => {
  const [cnt, setCnt] = useState(1);
  const select = useSelector((state) => state.ProductReducer.cart);
  const dispatch = useDispatch();
  console.log("-------", select);

  const handleRemove = (Pitem, Pind) => {
    if (window.confirm("Your Item Delete Confirm  !!!")) {
      const type = "REMOVE";
      const payload = Pind;
      const action = { type, payload };
      dispatch(action);
    }
  };

  return (
    <Card sx={{ bgcolor: "#FAF9F6" }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Link to="/">
              <Button fullWidth variant="contained">
                <ReplyIcon />
              </Button>
            </Link>
          </Grid>
          {select.map((item, index) => (
            <Grid item sx={12}>
              <Card>
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={2}>
                      <img
                        src={item.image}
                        width="100px"
                        height="100px"
                        alt=""
                      />
                    </Grid>
                    <Grid item xs={8}>
                      <span style={{ fontSize: "30px" }}>
                        {" "}
                        ₹ {item.price * cnt}{" "}
                        <h1>
                          {/* {(item.id = item.id ? "same" : "no")} */}
                          {<h1>{item.id}</h1>}
                        </h1>
                      </span>
                      <p> {item.description} </p>
                    </Grid>
                    <Grid item xs={2}>
                      <Button
                        onClick={() => handleRemove(item, index)}
                        variant="contained"
                        color="error"
                        fullWidth
                      >
                        Remove
                        <DeleteOutlinedIcon />{" "}
                      </Button>
                      <br />
                      <br />
                      <Button
                        variant="outlined"
                        onClick={() => setCnt(cnt + 1)}
                        disabled={cnt === 4}
                      >
                        +
                      </Button>
                      <span style={{ padding: "20px" }}> {cnt} </span>
                      <Button
                        variant="outlined"
                        disabled={cnt === 1}
                        onClick={() => setCnt(cnt - 1)}
                      >
                        -
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ShopCart;
