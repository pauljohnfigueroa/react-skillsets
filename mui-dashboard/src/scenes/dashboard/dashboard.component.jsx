import { Box, Button, IconButton, useTheme, Typography, colors } from '@mui/material'

import { tokens } from '../../theme'
import { mockTransactions } from '../../data/mockData'

import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined'
import EmailIcon from '@mui/icons-material/Email'
import PointOfSaleIcon from '@mui/icons-material/PointOfSale'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import TrafficIcon from '@mui/icons-material/Traffic'

import LineChart from '../../components/line-chart/line-chart.component'
import PieChart from '../../components/pie-chart/pie-chart.component'
import GeographyChart from '../../components/geography-chart/geography-chart.component'
import BarChart from '../../components/bar-chart/bar-chart.component'

import ProgressCircle from '../../components/progress-circle/progress-circle.component'
import StatBox from '../../components/stat-box/stat-box.component'

import Header from '../../components/header/header.component'

const Dashboard = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Dashboard" subtitle="Your one-stop bird's eye view of everything." />
      </Box>
      <Box>
        <Button
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: '14px',
            fontWeight: 'bold',
            padding: '10px 20px',
            margin: '10px 0'
          }}
        >
          <DownloadOutlinedIcon sx={{ mr: '10px' }} />
          Download Reports
        </Button>
      </Box>

      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="140px" gap="20px">
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            icon={
              <EmailIcon
                sx={{
                  color: colors.greenAccent[600],
                  fontSize: '26px'
                }}
              />
            }
            title="4,302"
            subtitle="Emails Sent"
            progress="0.84"
            increase="+84%"
          />
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            icon={
              <EmailIcon
                sx={{
                  color: colors.greenAccent[600],
                  fontSize: '26px'
                }}
              />
            }
            title="9,768"
            subtitle="Emails Sent"
            progress="0.20"
            increase="+20%"
          />
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            icon={
              <EmailIcon
                sx={{
                  color: colors.greenAccent[600],
                  fontSize: '26px'
                }}
              />
            }
            title="1,222"
            subtitle="Emails Sent"
            progress="0.46"
            increase="+46%"
          />
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            icon={
              <EmailIcon
                sx={{
                  color: colors.greenAccent[600],
                  fontSize: '26px'
                }}
              />
            }
            title="2,189"
            subtitle="Emails Sent"
            progress="0.56"
            increase="+56%"
          />
        </Box>
      </Box>
    </Box>
  )
}
export default Dashboard
