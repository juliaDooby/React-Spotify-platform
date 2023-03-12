import MainLayout from '@/layouts/MainLayout';
import { ITrack } from '@/types/track';
import { Grid, Card, Box } from '@mui/material';
import React from 'react';

const Index = () => {
  const router = useRouter()
  const tracks:ITrack = [] = [{
    {_id: '1', name: 'Трек 1', artist: 'Исполнитель 1', text: 'Какой-то текст', listens: 5, audio: 'http://localhost:5000/audio/3495.mp3', picture: 'http://localhost:5000/image/avat.jpg', comments:[]},
    {_id: '2', name: 'Трек 2', artist: 'Исполнитель 2', text: 'Какой-то текст', listens: 5, audio: 'http://localhost:5000/audio/94159.mp3', picture: 'http://localhost:5000/image/unnamed.jpg', comments:[]},
    {_id: '3', name: 'Трек 3', artist: 'Исполнитель 3', text: 'Какой-то текст', listens: 5, audio: 'http://localhost:5000/audio/94150.mp3', picture: 'http://localhost:5000/image/unnamed.jpg', comments:[]},
  }]

  }]
  return( 
  <MainLayout>
    <Grid container justifyContent="center">
      <Card style={width: 900}>
        <Box p={3}>
        <Grid container justifyContent="space-between">
          <h1>Список треков</h1>
          <Button onClick={() => router.push('/tracks/create')}>
            Загрузить
            </Button>
        </Grid>
        </Box>
        <TrackList tracks={tracks}/>
      </Card>
    </Grid>
    </MainLayout>;
  )};

export default Index;
