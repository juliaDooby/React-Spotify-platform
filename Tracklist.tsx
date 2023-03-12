import {Book} from '@material-ui/icons';

interface TrackListProps {
    tracks: ITrack[]
}

const TrackList: React.FC<TrackListProps> = ({tracks: ITrack[]}) => {
  return (
  <Grid container direction="column">
    <Box p={2}>
{tracks.map(track => 
    <TrackItem
    key={track._id} 
    track={track}}
    />
    )}
    </Box>
  </Grid>;
  );
};

export default TrackList;