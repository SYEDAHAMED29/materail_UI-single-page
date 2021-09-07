import React from "react";
import {
  Button,
  ButtonGroup,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";

import Notecard from "./Notecard";
import Footer from "./Footer";
import Navbar from "./Navbar";

const useStyle = makeStyles({
  top: {
    padding: "2rem 20rem",
  },
  buttonGroup: {
    textAlign: "center",
    margin: "1rem",
  },
});

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Content() {
  const classes = useStyle();

  return (
    <div>
      <Navbar />

      <Container>
        <main>
          <div className={classes.top}>
            <Typography variant="h3" align="center">
              Simple Practice Page
            </Typography>
            <br />
            <Typography variant="h6" align="center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
              numquam exercitationem repudiandae laborum unde illo voluptas
              nihil accusamus odio placeat.
            </Typography>
          </div>
          <div className={classes.buttonGroup}>
            <ButtonGroup>
              <Button variant="outlined" color="primary">
                ADD THIS
              </Button>
              <Button variant="contained" color="secondary">
                DELETE THIS
              </Button>
            </ButtonGroup>
          </div>
        </main>

        {/* Grid Content */}
        <Grid container>
          {items.map((item, index) => (
            <Grid item key={index} sm={6} xm={12} md={6} lg={4}>
              <Notecard note={item} />
            </Grid>
          ))}
        </Grid>

        {/* Footer */}
        <Footer />
      </Container>
    </div>
  );
}

export default Content;
