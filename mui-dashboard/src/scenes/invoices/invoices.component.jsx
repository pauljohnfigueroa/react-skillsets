import { Box, useTheme } from "@mui/material"
import { DataGrid, GridToolbar } from "@mui/x-data-grid"
import { tokens } from "../../theme"
import { mockDataInvoices } from '../../data/mockData'

import Header from "../../components/header/header.component"
import { color } from "@mui/system"

const Invoices = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            flex: "0.5"
        },
        {
            field: "registrarId",
            headerName: "Registrar ID"
        },
        {
            field: 'name',
            headerName: 'Name',
            flex: 1,
            cellClassName: 'name-column--cell'
        },
        {
            field: 'email',
            headerName: 'Email',
            flex: 1
        },
        {
            field: 'age',
            headerName: 'Age',
            type: "number",
            headerAlign: 'left',
            align: 'left'
        },
        {
            field: 'phone',
            headerName: 'Phone Number',
            flex: 1
        },
        {
            field: 'address',
            headerName: 'Address',
            flex: 1
        },
        {
            field: 'city',
            headerName: 'City',
            flex: 1
        },
        {
            field: 'zipCode',
            headerName: 'ZIP Code',
            flex: 1
        }
    ]

    return (
        <Box m="20px">
            <Header title="Invoices" subtitle='It is who you know, and not what you know. ' />
            <Box
                m="40px 0 0 0"
                height="100vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none"
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none"
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent[300]
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.blueAccent[600],
                        borderBottom: "none"
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400]
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[600]
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `${colors.grey[100]} !important`
                    }
                }}
            >
                <DataGrid
                    rows={mockDataInvoices}
                    columns={columns}
                    components={{ Toolbar: GridToolbar }}
                />
            </Box>
        </Box>
    )
}
export default Invoices