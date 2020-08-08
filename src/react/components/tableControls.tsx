import React from 'react';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
  }),
);

export default function TableControls() {
    const classes = useStyles();

    return(
        <Grid
        container
        spacing={0}
        direction="column"
        alignItems="flex-end"
        justify="center"
        >
            <Grid item>
            <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<AddCircleIcon/>}
            >
            Add Trade
            </Button>
            </Grid>
        </Grid>
    )
}