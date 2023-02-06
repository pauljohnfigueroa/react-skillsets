import { Box, Button, IconButton, useTheme, Typography } from '@mui/material'

import { tokens } from '../../theme'
import { mockTransactions } from '../../data/mockData'

import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined'
import EmailIcon from '@mui/icons-material/Email'
import PointOfSaleIcon from '@mui/icons-material/PointOfSale'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import TrafficIcon from '@mui/icons-material/Traffic'

import Header from '../../components/header/header.component'

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
