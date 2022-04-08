import React from 'react';
// import { Grid, LinearProgress, Typography } from '@mui/core';
import { withStyles } from '@mui/styles';
import { Grid, LinearProgress, Typography } from '@mui/material';

const CustomLinearProgress = withStyles((theme: any) => ({
  root: {
    borderRadius: 2,
    background: 'rgba(0, 0, 0, 0.1)'
  }
}))(LinearProgress);

const MatxProgressBar = ({
  value = 75,
  color = 'primary',
  text = '',
  spacing = 2,
  coloredText = false,
  className
}: any) => {
  return (
    <Grid alignItems="center" className={className} container spacing={spacing}>
      <Grid item xs={text ? 8 : 12}>
        <CustomLinearProgress
          color={color}
          value={value}
          variant="determinate"
        />
      </Grid>
      {text !== '' && (
        <Grid item xs={text ? 4 : false}>
          <Typography color={color}>
            <small className={`${coloredText ? '' : 'text-muted'}`}>
              {text}
            </small>
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default MatxProgressBar;

