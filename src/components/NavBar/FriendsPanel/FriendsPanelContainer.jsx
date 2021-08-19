import { connect } from 'react-redux';
import FriendsPanel from './FriendsPanel';

let mapStateToProps = (state) => {
    return {
        friends: state.navBar.friends
    }
}

const FriendsPanelContainer = connect(mapStateToProps)(FriendsPanel);

export default FriendsPanelContainer;