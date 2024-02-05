import { Button, Grid } from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CustomerTabPanel from "../components/CustomTabPanel";

export default function Home() {
  return (
    <Grid container direction={"column"}>
      <Grid item>
        <Button
          sx={{ color: "#707070", textTransform: "none" ,mt:1}}
          startIcon={<ArrowBackIcon />}
        >
          Back
        </Button>
      </Grid>
      <Grid item >
        <CustomerTabPanel />
      </Grid>
    </Grid>
  );
}
