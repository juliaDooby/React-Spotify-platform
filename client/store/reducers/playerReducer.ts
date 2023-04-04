import { PlayerAction, PlayerActionTypes, PlayerState } from '../../types/player';

const initualState: PlayerState = {
  currentTime: 0,
  duration: 0,
  active: null,
  volume: 50,
  pause: true,
};

export const playerReducer = (state = initualState, action: PlayerAction): PlayerState => {
  switch (action.type) {
    case playerActionTypes.PAUSE:
      return { ...state, pause: true };
    case playerActionTypes.PLAY:
      return { ...state, pause: false };
    case playerActionTypes.SET_CURRENT_TIME:
      return { ...state, currentTime: action.payload };
    case playerActionTypes.SET_VOLUME:
      return { ...state, volume: action.payload };
    case playerActionTypes.SET_DURATION:
      return { ...state, duration: action.payload };
    case playerActionTypes.SET_ACTIVE:
      return { ...state, active: action.payload, duration: 0, currentTime: 0 };

    default:
      return state;
  }
};
