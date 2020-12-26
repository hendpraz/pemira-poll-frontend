import React from "react";
import config from "../../../config";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        paddingLeft: "10%",
        paddingRight: "10%",
    },
    image: {
        display: "block",
        margin: "auto"
    },
    titleText: {
        textAlign: "center",
        color: "#FEEF9F",
        fontSize: "32pt",
        fontFamily: "'Inknut Antiqua', serif",
    }
}));

export default function LoginSelect(props) {
    const { assetsURL } = config;
    const classes = useStyles();

    return(
        <>
            <Grid container className={classes.root} spacing={6}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={1}>
                    {[1, 2, 3].map((value) => (
                        <Grid key={"login-curt" + value} item sm={6} md={4}>
                            <img src={assetsURL.image + `/login-curt${value}.png`} alt="tirai" className={classes["image"]}/>
                        </Grid>
                    ))}
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <Grid container justify="center" spacing={1}>
                        <Grid key={"login_lembaga"} item sm={6} md={4}>
                            <a href="/login-lembaga" >
                                <img src={assetsURL.image + `/login-button.png`} alt="login" className={classes.image}/>
                            </a>
                        </Grid>

                        <Grid key={"login_ina"} item sm={6} md={4}>
                            <a href="/login-INA" >
                                <img src={assetsURL.image + `/login-button.png`} alt="login" className={classes.image}/>
                            </a>
                        </Grid>

                        <Grid key={"login_non_ina"} item sm={6} md={4}>
                            <a href="/login-non-INA" >
                                <img src={assetsURL.image + `/login-button.png`} alt="login" className={classes.image}/>
                            </a>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <p className={classes.titleText}>Who are you?</p>
        </>
    );
}