import { useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar, menuClasses } from 'react-pro-sidebar'

import { Box, Typography, useTheme } from '@mui/material'

import { Link } from 'react-router-dom'
import { tokens } from '../../theme'

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined'
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined'
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
  // const theme = useTheme()
  // const colors = tokens(theme.palette.mode)
  return (
    <MenuItem
      active={selected === title}
      onClick={() => setSelected(title)}
      icon={icon}
      component={<Link to={to} />}
      // style={{ color: colors.primary[200] }}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  )
}

const SideBar = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const menuItemStyles = {
    root: {
      fontSize: '13px',
      fontWeight: 400
    },

    icon: {
      color: colors.greenAccent[500],
      [`&.${menuClasses.disabled}`]: {
        color: colors.grey[100]
      }
    },

    button: ({ level }) => {
      if (level === 0)
        return {
          [`&.${menuClasses.disabled}`]: {
            color: colors.grey[400]
          },
          [`&.${menuClasses.active}`]: {
            //backgroundColor: colors.blueAccent[700],
            color: colors.greenAccent[400]
          },
          '&:hover': {
            backgroundColor: 'transparent',
            color: colors.greenAccent[500]
          }
        }
    },

    label: ({ open }) => ({
      fontWeight: open ? 700 : undefined
    }),

    SubMenuExpandIcon: {
      color: colors.greenAccent[500]
    },

    subMenuContent: ({ level }) => ({
      backgroundColor: level === 0 ? colors.blueAccent[100] : 'transparent'
    })
  }

  const { collapseSidebar, collapsed } = useProSidebar()
  const [selected, setSelected] = useState('Dashboard')

  return (
    <Sidebar
      rootStyles={{
        color: colors.greenAccent[700]
      }}
      backgroundColor={colors.primary[600]}
      breakPoint="sm"
      transitionDuration={300}
      width="280px"
    >
      <Menu menuItemStyles={menuItemStyles}>
        <MenuItem
          icon={<MenuOutlinedIcon />}
          style={{ textAlign: 'right', color: colors.greenAccent[600] }}
          onClick={() => {
            collapseSidebar()
          }}
        >
          <h2>HapiCodr</h2>
        </MenuItem>

        {/* User Image */}
        {!collapsed && (
          <Box m="25px 0">
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
                color={colors.greenAccent[400]}
                fontWeight="bold"
                sx={{ m: '10px 0 0 0' }}
              >
                Paul Figueroa
              </Typography>
              <Typography variant="h5" color={colors.grey[500]}>
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
        <Item
          title="Profile"
          icon={<PeopleOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
          to="/profile-form"
        />
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

        <Item
          title="Invoices"
          icon={<ReceiptOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
          to="/invoices"
        />
        <Menu menuItemStyles={menuItemStyles}>
          <SubMenu
            //onOpenChange={() => console.log('onOpenChange')}
            label="Charts"
            icon={<ShowChartOutlinedIcon />}
          >
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
        </Menu>

        <Item
          title="FAQ"
          icon={<HelpOutlineOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
          to="/faq"
        />
      </Menu>
    </Sidebar>
  )
}
export default SideBar
