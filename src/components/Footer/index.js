import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    text: {
        textAlign: "center",
    },
    title: {
        fontSize: "24pt",
        color: "#FEEF9F",
        fontFamily: "'Inknut Antiqua', serif",
    },
    subtitle: {
        fontSize: "14pt",
        color: "#AAAAAA",
        fontFamily: "'Nunito', sans-serif",
    }
}));

export default function Footer(props) {
    const classes = useStyles();

    return(
        <div className={classes.text}>
            <hr />
            <p>
                <span className={classes.title} style={{lineHeight: "150%"}}>Pemira KM</span><br />
                <span className={classes.subtitle}>All rights reserved.</span>
            </p>
        </div>
    );
}