import React from "react";
import config from "../../../config";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    darkBlue: {
        backgroundColor: "#02141D",
        position: "fixed",
        top: 0,
        left: 0,

        /* Preserve aspect ratio */
        minWidth: "100%",
        minHeight: "100%",
    },
    cloudLeft: {
        position: "fixed",
        bottom: 0,
        left: 0,
        pointerEvents: "none",
    },
    cloudRight: {
        position: "fixed",
        bottom: 0,
        right: 0,
        pointerEvents: "none",
    },
    starLeft: {
        position: "fixed",
        top: "120px",
        left: "30px",
        pointerEvents: "none",
    },
    starRight: {
        position: "fixed",
        top: "120px",
        right: "30px",
        pointerEvents: "none",
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