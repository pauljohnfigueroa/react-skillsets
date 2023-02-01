import { Box, Typography, useTheme } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import { tokens } from "../../theme"
import { mockDataTeam } from '../../data/mockData'

import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined"
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined"
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined"

import Header from "../../components/header/header.component"


const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)

    const columns = [
        { field: 'id', headerName: 'ID' },
        { field: 'name', headerName: 'Name', flex: 1, cellClassName: 'name-column--cell' },
        { field: 'email', headerName: 'Email' },
        { field: 'age', headerName: 'Age', type: "number", headerAlign: 'left', align: 'left' },
        { field: 'phone', headerName: 'Phone' },
        { field: 'access', headerName: 'Access' }
    ]

    return (
        <Box m="20px">
            <Header title="Team" subtitle='There is no "I" in Team' />
            <Box
                m="40px 0 0 0"
                height="75vh"
            >
                <DataGrid
                    rows={mockDataTeam}
                    columns={columns}
                />
            </Box>
        </Box>
    )
}
export default Team