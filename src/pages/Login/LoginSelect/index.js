import React from "react";
import config from "../../../config";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

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
        marginTop: "-5px"
    },
    loginMobile: {
        marginTop: "200px",
        fontSize: "30pt",
        textAlign: "center"
    }
}));

export default function LoginSelect(props) {
    const { assetsURL } = config;
    const classes = useStyles();

    return(
        <>
            <Grid container className={classes.root}>
                <Hidden smDown>
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={1}>
                        {[1, 2, 3].map((value) => (
                            <Grid key={"login-curt" + value} item md={4}>
                                <img src={assetsURL.image + `/login-curt${value}.png`} alt="tirai" className={classes["image"]}/>
                            </Grid>
                        ))}
                        </Grid>
                    </Grid>

                    <Grid item xs={12} style={{marginTop:"30px"}}>
                        <Grid container justify="center" spacing={1}>
                            <a href="/login-lembaga" className={classes.image}>
                                <Grid key={"login_lembaga"} item md={4}>
                                    <img src={assetsURL.image + `/login-button.png`} alt="login" />
                                </Grid>
                            </a>

                            <a href="/login-INA" className={classes.image}>
                                <Grid key={"login_ina"} item md={4}>
                                    <img src={assetsURL.image + `/login-button.png`} alt="login"/>
                                </Grid>
                            </a>

                            <a href="/login-non-INA" className={classes.image}>
                                <Grid key={"login_non_ina"} item md={4}>
                                    <img src={assetsURL.image + `/login-button.png`} alt="login"/>
                                </Grid>
                            </a>
                        </Grid>
                    </Grid>
                </Hidden>
            </Grid>

            <Hidden mdUp>
                <div className={classes.loginMobile}>
                    <a href="/login-lembaga">Login Lembaga </a><br />
                    <a href="/login-INA">Login INA</a><br />
                    <a href="/login-non-INA">Login Non-INA</a><br />
                </div>
            </Hidden>

            <p className={classes.titleText}>Who are you?</p>
        </>
    );
}