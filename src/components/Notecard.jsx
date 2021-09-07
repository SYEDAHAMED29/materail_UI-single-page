import React from "react";
import Card from "@material-ui/core/Card";
import {
  Button,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

const useStyle = makeStyles({
  media: {
    height: 140,
  },
  gap: {
    margin: "1rem ",
  },
});

function Notecard(props) {
  const classes = useStyle();

  return (
    <Card elevation={1} className={classes.gap}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://venngage-wordpress.s3.amazonaws.com/uploads/2018/09/Colorful-Geometric-Simple-Background-Image.jpg"
        />
      </CardActionArea>

      <CardContent>
        <Typography variant="h5" color="primary">
          {props.note}
        </Typography>
        <Typography varaint="textSecondary" color="secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eligendi
          non, quaerat eaque temporibus similique ipsum. Voluptas possimus
          accusamus ipsum?
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small" color="primary">
          Learn more
        </Button>
      </CardActions>
    </Card>
  );
}

export default Notecard;
