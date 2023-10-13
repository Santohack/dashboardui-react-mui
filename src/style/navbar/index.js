import { Box, List, styled } from "@mui/material";

import { theme } from "../theme";

export const NavContainer = styled(Box)(()=>({
    width: "100%",
    height: "98vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    
    background:theme.palette.primary.main
}))

export const MyList = styled(List)(({type})=>({
    width: "100%",
    height: "100%",
    display: type === 'row'? 'flex':'block',
    alignItems: "center",
    justifyContent: "center",
    flexGrow:1,
    background:theme.palette.primary.main
    
}))