import { Box, Typography, useTheme } from '@mui/material'
import { tokens } from '../../theme'

import ProgressCircle from '../progress-circle/progress-circle.component'

const StatBox = ({ icon, title, subtitle, progress, increase }) => {
  const theme = useTheme
  const colors = tokens(theme.pallete.mode)

  return (
    <Box width="1005" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography variant="h4" fontWeight="bold" sx={{ color: colors.grey[100] }}>
            {title}
          </Typography>
          <Box>
            <ProgressCircle progress={progress} />
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h5" sx={{ color: colors.greenAccent[100] }}>
              {subtitle}
            </Typography>
            <Typography variant="h5" fontStyle="italic" sx={{ color: colors.greenAccent[600] }}>
              {increase}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
export default StatBox
