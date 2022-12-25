import React from "react";
import useStyles from "./styles";

const Editor = () => {
    const classes = useStyles()
    return(
        <div className={classes.editor}>
            <h1>Hello world</h1>
        </div>
    )
}

export default Editor;
