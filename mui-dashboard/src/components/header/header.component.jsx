import { Typography, useTheme, Box } from "@mui/material";
import { tokens } from "../../theme";

const Header = ({ title, subtitle }) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return (
        <Box mb="30px">
            <Typography
                variant="h2"
                color={colors.grey[100]}
                fontWeight="bold"
                sx={{ mb: "5px", ml: "1rem" }}
            >
                {title}
            </Typography>
            <Typography
                variant="h5"
                color={colors.greenAccent[400]}
                sx={{ ml: "1rem" }}
            >
                {subtitle}
            </Typography>

        </Box>
    )
}
export default Header