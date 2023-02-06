import { Box } from '@mui/material'
import GeographyChart from '../../components/geography-chart/geography-chart.component'
import Header from '../../components/header/header.component'

const Geography = () => {
  return (
    <Box m="20px">
      <Header title="Geography Chart" subtitle="A nice geography chart." />
      <Box height="70vh">
        <GeographyChart />
      </Box>
    </Box>
  )
}

export default Geography
