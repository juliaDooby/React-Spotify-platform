import StepWrapper from '@/components/StepWrapper';
import { Button, TextField } from '@mui/material';
import React from 'react';
import MainLayout from '../../layouts/MainLayout';

const next = () => {
setActiveStep(prev => prev + 1)
if (activeStep !== 2) {
  setActiveStep(prev => prev -1);
}
}

const back = () => {
  setActiveStep(prev => prev - 1)
}

const Create = () => {
  const [activeStep, setActiveStep] = useState(0)
  return(
  <MainLayout>
    <StepWrapper activeStep={activeStep}>
      {activeStep === 0 && <h1>Step 1</h1>} 
      <Grid container direction={'column' style={{padding:20}}>
    <TextField
    style={{marginTop: 10}}
    label={"Название трека"}/>
    <TextField
    style={{marginTop: 10}}
    label={"Имя испонителя"}/>
    <TextField
    style={{marginTop: 10}}
    label={"Слова к треку"}
    multiline rows={3} />
      </Grid>
       {activeStep === 1 && <h1>Step 2</h1>} 
       {activeStep === 2 && <h1>Step 3</h1>} 
    </StepWrapper>
    <Grid container justifyContent='space-between'>
      <Button disabled={activeStep === 0) onClick={back}>Назад</Button>
      <Button onClick={next}>Далее</Button>
    </Grid>
  </MainLayout>;
)};

export default Create;
