import React from 'react';
import { ITrack } from '../types/track';
import {Card} from "@material-ui/core";
import styles from '../styles/TrackItem.module.scss';
import { IconButton } from '@mui/material/IconButton';

interface TrackListProps {
  track: ITrack;
  active?: boolean;
}

const TrackItem: React.FC<TrackListProps> => {track: ITrack, active: false}) => {
    const router = useRouter()
  return (
    <Card className={styles.track} onClick={() => router.push('/tracks/' + track._id)}>
<IconButton>
{!active 
? <PlayArrow/>
: <Pause/>
}
</IconButton>
<img width={70} height={70} src={track.picture}/>
<Grid container direction="column" style={{width: 200, margin: '0 20px'}}>
<div>{track.name}</div>
<div style={{fontSize: 12, color: 'gray'}}>{track.artist}</div>
</Grid>
{active && <div>02:42 /03:22</div>}
<IconButton onClick={e => e.stopPropagation()}  style={{marginLeft: 'auto'}}>
<Delete/>
</IconButton>
  );
};


export default TrackItem;
