import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    typography:{
        fontFamily:["Ubuntu","sans-serif"].join(","),
        h3:{
            fontSize:"2rem"
        }
    },
    palette:{
        primary:{
            main:"#004b23",
            light:"rgb(206, 255, 206)",
            medium:"#004b23",
            white:"#fff"
        }
    }
});

export default theme;