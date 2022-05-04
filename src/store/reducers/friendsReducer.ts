import {friendsActions} from "../actions/friendsActions";
import {IReduxAction} from "../../react-app-env";

const initState = {
  friends: [],
  pendingFriendsInvites: [],
  onlineUsers: []

};

const FriendsReducer = (state = initState, action: IReduxAction) => {
  switch (action.type) {
    case friendsActions.SET_PENDING_FRIENDS_INVITES:
      return {...state, pendingFriendsInvites: action.payload};
    case friendsActions.SET_FRIENDS:
      return {...state, friends: action.payload};
    case friendsActions.SET_ONLINE_USERS:
      return {...state, onlineUsers: action.payload};
    default:
      return state;
  }
};

export default FriendsReducer;