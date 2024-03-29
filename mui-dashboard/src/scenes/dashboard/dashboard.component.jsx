import { Box, Button, IconButton, useTheme, Typography, colors } from '@mui/material'

import { tokens } from '../../theme'
import { mockTransactions } from '../../data/mockData'

import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined'
import EmailIcon from '@mui/icons-material/Email'
import PointOfSaleIcon from '@mui/icons-material/PointOfSale'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import TrafficIcon from '@mui/icons-material/Traffic'

import LineChart from '../../components/line-chart/LineChart.component'
import PieChart from '../../components/pie-chart/PieChart.component'
import GeographyChart from '../../components/geography-chart/GeographyChart.component'
import BarChart from '../../components/bar-chart/BarChart.component'

import ProgressCircle from '../../components/progress-circle/ProgressCircle.component'
import StatBox from '../../components/stat-box/StatBox.component'

import Header from '../../components/header/Header.component'

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
        {/* Row 1 */}
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
              <PointOfSaleIcon
                sx={{
                  color: colors.greenAccent[600],
                  fontSize: '26px'
                }}
              />
            }
            title="90,768"
            subtitle="Sales"
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
              <PersonAddIcon
                sx={{
                  color: colors.greenAccent[600],
                  fontSize: '26px'
                }}
              />
            }
            title="1,236"
            subtitle="New Clients"
            progress="0.16"
            increase="+16%"
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
              <TrafficIcon
                sx={{
                  color: colors.greenAccent[600],
                  fontSize: '26px'
                }}
              />
            }
            title="982,189"
            subtitle="Traffic"
            progress="0.56"
            increase="+56%"
          />
        </Box>

        {/* Row 2 */}
        <Box gridColumn="span 8" gridRow="span 2" backgroundColor={colors.primary[400]}>
          <Box
            mt="25px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
                Revenue Generated
              </Typography>
              <Typography variant="h5" fontWeight="bold" color={colors.greenAccent[100]}>
                $902,044.00
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{
                    fontSize: '26px',
                    color: colors.greenAccent[400]
                  }}
                />
              </IconButton>
            </Box>
          </Box>

          <Box height="250px" mt="-20px">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.greenAccent[500]}`}
            color={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, index) => (
            <Box
              key={`${transaction.txId} - ${index}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.greenAccent[500]}`}
              p="15px"
            >
              <Box>
                <Typography color={colors.greenAccent[500]} variant="h5" fontWeight="bold">
                  {transaction.txId}
                </Typography>
              </Box>
              <Box>
                <Typography color={colors.grey[100]}>{transaction.user}</Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box backgroundColor={colors.greenAccent[500]} p="5px 10px" borderRadius="4px">
                {transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

        {/* Row 3 */}

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box display="flex" flexDirection="column" alignItems="center" mt="25px">
            <ProgressCircle size="125" progress="0.60" />
            <Typography variant="h5" color={colors.greenAccent[500]} sx={{ mt: '15px' }}>
              $86,342
            </Typography>
            <Typography>including other payables</Typography>
          </Box>
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography variant="h5" fontWeight="600" sx={{ p: '0 30px 0 0' }}>
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <PieChart isDashboard={true} />
          </Box>
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Geography Based Traffic
          </Typography>
          <Box height="250px" mt="-20px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
        {/* Closing */}
      </Box>
    </Box>
  )
}
export default Dashboard
