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
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined'

const SideBar = () => {

    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    const { collapseSidebar, toggleSidebar, broken, collapsed, toggled } = useProSidebar()

    // const [isCollapsed, setIsCollapsed] = useState(false)
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
                            if (level === 0 || level === 1) {
                                return {
                                    color: disabled ? colors.primary[300] : menuItemColor,
                                    backgroundColor: active ? "#fff" : undefined,
                                    "&:hover": {
                                        backgroundColor: `${colors.blueAccent[700]} !important`,
                                        color: "white !important",
                                        fontWeight: "500 !important"
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
                        <h2>HapiCodr</h2>
                    </MenuItem>


                    {/* User Image */}
                    {!collapsed && (
                        <Box mb="25px">
                            <Box display="flex" justifyContent="center" alignItems="center" >
                                <img
                                    src={`../../../../assets/images/paul.png`}
                                    alt="User"
                                    width="100px"
                                    height="100px"
                                    style={{ cursor: "pointer", borderRadius: "50%" }} />
                            </Box>
                            <Box textAlign="center">
                                <Typography
                                    variant="h2"
                                    color={colors.greenAccent[100]}
                                    fontWeight="bold"
                                    sx={{ m: "10px 0 0 0" }}
                                >
                                    Paul Figueroa
                                </Typography>
                                <Typography
                                    variant="h5"
                                    color={colors.greenAccent[600]}
                                >
                                    Software Engineer
                                </Typography>
                            </Box>
                        </Box>
                    )}

                    <MenuItem active={true} icon={<HomeOutlinedIcon />} component={<Link to="/" />}>Dashboard</MenuItem>
                    <MenuItem disabled={false} icon={<ReceiptOutlinedIcon />} component={<Link to="/profile" />}>Profile</MenuItem>
                    <MenuItem icon={<PeopleOutlinedIcon />} component={<Link to="/team" />}>Manage Team</MenuItem>
                    <MenuItem icon={<ContactsOutlinedIcon />} component={<Link to="/contacts" />}>Contacts</MenuItem>
                    <MenuItem icon={<CalendarTodayOutlinedIcon />} component={<Link to="/calendar" />}>Calendar</MenuItem>
                    <SubMenu label="Charts" icon={<ShowChartOutlinedIcon />}>
                        <MenuItem icon={<PieChartOutlineOutlinedIcon />} component={<Link to="/pie-chart" />}> Pie charts </MenuItem>
                        <MenuItem icon={<BarChartOutlinedIcon />} component={<Link to="/bar-chart" />}> Bar charts </MenuItem>
                    </SubMenu>
                    <MenuItem icon={<HelpOutlineOutlinedIcon />} component={<Link to="/faq" />}>FAQ</MenuItem>
                </Menu>
            </Sidebar>

        </Box >
    )
}
export default SideBar
