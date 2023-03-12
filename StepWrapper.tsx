import { Card, Container, Grid, StepLabel, Stepper } from '@mui/material';
import React from 'react';

interface StepWrapperProps {
  activeStep: number;
}
const steps = ['Информация о треке', 'Загрузите обложку', 'Загрузите сам трек'];
const StepWrapper: REact.FC<StepWrapperProps> = ({ activeStep: number, children }) => {
  return (
    <Container>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => {
          <Step key={index}>
            completed={activeStep > index}
            <StepLabel>{step}</StepLabel>
          </Step>;
        })}
      </Stepper>
      <Grid container justifyContent="center" style={{ margin: '20px 0', height = 270 }}>
        <Card style={{ width: 600 }}>{children}</Card>
      </Grid>
    </Container>
  );
};

export default StepWrapper;
