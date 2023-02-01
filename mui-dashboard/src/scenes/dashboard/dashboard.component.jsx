import { Box } from "@mui/material"
import Header from "../../components/header/header.component"

const Dashboard = () => {
    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="Dashboard" subtitle="Your one-stop bird's eye view of everything." />
            </Box>
        </Box>
    )
}
export default Dashboard