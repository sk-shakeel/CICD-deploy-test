import { Grid, styled } from '@mui/material'
import React from 'react'

const StyledGrid = styled(Grid)`
  width: 100%;
  height: 100vh;
`

interface HomeTemplateProps {
  header: React.ReactNode
  footer?: React.ReactNode
  main: React.ReactNode
  bgcolor?: any
}

const HomeTemplate = (props: HomeTemplateProps) => {
  return (
    <StyledGrid container bgcolor={props.bgcolor}>
      <Grid item xs={12}>
        {props.header}
      </Grid>
      <Grid item xs={12} sx={{ overflowY: 'scroll' }}>
        {props.main}
      </Grid>
      <Grid item xs={12}>
        {props.footer}
      </Grid>
    </StyledGrid>
  )
}

export default HomeTemplate
