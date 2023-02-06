import { useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar'

import { Box, Typography, useTheme } from '@mui/material'

import { Link } from 'react-router-dom'
import { tokens } from '../../theme'

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined'
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined'
// import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlined'
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined'
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined'
import StackedLineChartOutlinedIcon from '@mui/icons-material/StackedLineChartOutlined' // import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined'

// with set active MenuItem
const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.primary[500] }}
      onClick={() => setSelected(title)}
      icon={icon}
      component={<Link to={to} />}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  )
}

const SideBar = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const { collapseSidebar, collapsed } = useProSidebar()

  const [selected, setSelected] = useState('Dashboard')

  const menuItemColor = theme.palette.mode === 'dark' ? colors.primary[400] : colors.primary[500]

  return (
    <Box style={({ height: '100vh' }, { display: 'flex', flexDirection: 'row' })}>
      <Sidebar
        rootStyles={{
          backgroundColor: `${colors.primary[600]}`
        }}
        breakPoint="sm"
        transitionDuration={800}
      >
        <Menu
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              if (level === 0 || level === 1) {
                return {
                  color: disabled ? colors.grey[100] : menuItemColor,
                  backgroundColor: active ? colors.grey[400] : undefined,
                  '&:hover': {
                    backgroundColor: `${colors.grey[600]} !important`,
                    color: '#ffffff !important',
                    fontWeight: '500 !important'
                  }
                }
              }
            }
          }}
        >
          <MenuItem
            icon={<MenuOutlinedIcon />}
            style={{ textAlign: 'right' }}
            onClick={() => {
              collapseSidebar()
            }}
          >
            <h2>HapiCodr</h2>
          </MenuItem>

          {/* User Image */}
          {!collapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  src={`../../../../assets/images/paul.png`}
                  alt="User"
                  width="100px"
                  height="100px"
                  style={{ cursor: 'pointer', borderRadius: '50%' }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.primary[500]}
                  fontWeight="bold"
                  sx={{ m: '10px 0 0 0' }}
                >
                  Paul Figueroa
                </Typography>
                <Typography variant="h5" color={colors.primary[500]}>
                  Software Engineer
                </Typography>
              </Box>
            </Box>
          )}

          <Item
            title="Dashboard"
            icon={<HomeOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
            to="/"
          />
          <MenuItem
            active={selected === 'Profile'}
            onClick={() => setSelected('Profile')}
            icon={<PeopleOutlinedIcon />}
            component={<Link to="/profile-form" />}
          >
            Profile
          </MenuItem>
          {/* <Item
            title="Profile"
            icon={<PeopleOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
            to="/profile-form"
          /> */}
          <Item
            title="Manage Team"
            icon={<PeopleOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
            to="/team"
          />
          <Item
            title="Contacts"
            icon={<ContactsOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
            to="/contacts"
          />
          <Item
            title="Calendar"
            icon={<CalendarTodayOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
            to="/event-calendar"
          />

          <SubMenu label="Charts" icon={<ShowChartOutlinedIcon />}>
            <Item
              title="Bar Chart"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              to="/bar-chart"
            />
            <Item
              title="Pie Chart"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              to="/pie-chart"
            />
            <Item
              title="Line Chart"
              icon={<StackedLineChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              to="/line-chart"
            />
            <Item
              title="Geography Chart"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              to="/geography-chart"
            />
          </SubMenu>
          <Item
            title="FAQ"
            icon={<HelpOutlineOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
            to="/faq"
          />
        </Menu>
      </Sidebar>
    </Box>
  )
}
export default SideBar
