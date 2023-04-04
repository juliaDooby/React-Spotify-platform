import { PlayerAction, PlayerActionTypes } from '../../types/player';
import { ITrack } from '../../types/track';

export const playTrack = (): PlayerAction => {
  return { type: playerActionTypes.PLAY };
};
export const pauseTrack = (): PlayerAction => {
  return { type: playerActionTypes.PAUSE };
};
export const setDuration = (payload: number): PlayerAction => {
  return { type: playerActionTypes.SET_DURATION, payload };
};
export const setVolume = (payload: number): PlayerAction => {
  return { type: playerActionTypes.SET_VOLUME, payload };
};
export const setCurrentTime = (payload: number): PlayerAction => {
  return { type: PlayerActionTypes.SET_CURRENT_TIME, payload };
};
export const setActiveTrack = (payload: ITrack): PlayerAction => {
  return { type: playerActionTypes.SET_ACTIVE, payload };
};
