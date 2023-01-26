import { useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar'
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'
import { tokens } from '../../theme'

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined'
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlined'
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'
// import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlinedOutlined'
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined'

const SideBar = () => {

    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    const { collapseSidebar, toggleSidebar, broken, collapsed, toggled } = useProSidebar()

    const [isCollapsed, setIsCollapsed] = useState(false)
    const [selected, setSelected] = useState('Dashboard')

    console.log(theme.palette.mode);

    const menuItemColor = (theme.palette.mode === 'dark') ? colors.primary[400] : colors.primary[500]

    return (
        <Box style={({ height: "100vh" }, { display: "flex", flexDirection: "row" })}>
            <Sidebar
                rootStyles={{
                    background:
                        `${colors.primary[400]}`
                }}
                breakPoint="sm"
                transitionDuration={800}
            >
                <Menu
                    menuItemStyles={{
                        button: ({ level, active, disabled }) => {
                            if (level === 0) {
                                return {
                                    color: disabled ? colors.primary[700] : menuItemColor,
                                    backgroundColor: active ? "#fff" : undefined,
                                    "&:hover": {
                                        backgroundColor: `${colors.blueAccent[100]} !important`,
                                        color: "white !important",
                                        fontWeight: "bold !important"
                                    },
                                };
                            }
                        },
                    }}
                >
                    <MenuItem
                        icon={<MenuOutlinedIcon />}
                        style={{ textAlign: "right" }}
                        onClick={() => { collapseSidebar() }}
                    >
                        <h2>Admin</h2>
                    </MenuItem>

                    <MenuItem icon={<HomeOutlinedIcon />} component={<Link to="/" />}>Home</MenuItem>
                    <MenuItem icon={<PeopleOutlinedIcon />} component={<Link to="/team" />}>Team</MenuItem>
                    <MenuItem icon={<ContactsOutlinedIcon />} component={<Link to="/contacts" />}>Contacts</MenuItem>
                    <MenuItem icon={<ReceiptOutlinedIcon />} component={<Link to="/profile" />}>Profile</MenuItem>
                    <MenuItem icon={<HelpOutlineOutlinedIcon />} component={<Link to="/faq" />}>FAQ</MenuItem>
                    <MenuItem icon={<CalendarTodayOutlinedIcon />} component={<Link to="/calendar" />}>Calendar</MenuItem>
                    <SubMenu label="Charts" icon={<CalendarTodayOutlinedIcon />}>
                        <MenuItem icon={<CalendarTodayOutlinedIcon />} component={<Link to="/pie" />}> Pie charts </MenuItem>
                        <MenuItem icon={<CalendarTodayOutlinedIcon />} component={<Link to="/line" />}> Line charts </MenuItem>
                    </SubMenu>
                </Menu>
            </Sidebar>

        </Box >
    )
}
export default SideBar
