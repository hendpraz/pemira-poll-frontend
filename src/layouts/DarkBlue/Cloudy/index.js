import React from "react";
import config from "../../../config";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    darkBlue: {
        backgroundColor: "#02141D",
        width: "100vw",
        height: "100vh",
    },
    cloudLeft: {
        position: "fixed",
        bottom: 0,
        left: 0,
    },
    cloudRight: {
        position: "fixed",
        bottom: 0,
        right: 0,
    },
    starLeft: {
        position: "fixed",
        top: "10px",
        left: "10px",
    },
    starRight: {
        position: "fixed",
        top: "10px",
        right: "10px",
    }
}));

export default function Cloudy(props) {
    // variant is either 1 or 2
    const { children, variant } = props;
    const { assetsURL } = config;
    const classes = useStyles();

    return(
        <div className={classes.darkBlue}>
            <img className={classes.cloudLeft} src={assetsURL.image + "/cloudleft.png"} alt="awan1" />
            <img className={classes.cloudRight} src={assetsURL.image + "/cloudright.png"} alt="awan2" />

            <img className={classes.starLeft} src={assetsURL.image + `/star${variant || 1}left.png`} alt="bintang1" />
            <img className={classes.starRight} src={assetsURL.image + `/star${variant || 1}right.png`} alt="bintang2" />

            {children}
        </div>
    );
}