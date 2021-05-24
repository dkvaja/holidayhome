import React from "react";
import { Link } from "react-router-dom";
import NavigationBar from "../components/Navbar";
import Footer from "../components/Footer";
import RateTable from "../components/RateTable";
import { Container, Typography, Button, Box } from "@material-ui/core";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import myTheme from "../styles/Theme";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    color: "#004b23",
    padding: "2rem 1rem",
    backgroundColor: myTheme.palette.primary.light,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    ["@media (min-width:1280px)"]: {
      maxWidth: "100%",
    },
  },
  h3: {
    fontSize: "2rem",
  },
  bold: {
    fontWeight: "bold",
  },
}));

const RateLayout = () => {
  const classes = useStyles();
  return (
    <>
      <ThemeProvider theme={myTheme}>
        <NavigationBar />
        <Container className={classes.container}>
          <Typography
            variant="h3"
            className={classes.h3}
            gutterBottom
            align="center"
          >
            Rates
          </Typography>
          <Typography variant="subtitle1" gutterBottom align="center">
            The rates differ per period of the year. Below you will find a
            complete overview of the rental rates of the holiday home and the
            additional costs.
          </Typography>
          <RateTable />
          <Typography variant="subtitle1" align="center">
            You can also take care of the final cleaning yourself.
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.bold}
          >
            Rates include tourist tax and reservation costs.
          </Typography>
          <Box m={2} align="center">
            <Button
              variant="contained"
              type="submit"
              style={{
                backgroundColor: "rgb(0, 75, 35)",
              }}
            >
              <Link
                to="/reservation"
                style={{ color: "white", textDecoration: "none" }}
              >
                BOOK NOW
              </Link>
            </Button>
          </Box>
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default RateLayout;
