import StoreContext from '../../../StoreContext';
import FriendsPanel from './FriendsPanel';

const FriendsPanelContainer = () => {
    return (
        <StoreContext.Consumer> 
            {
                (store) => {
                    let state = store.getState();

                    return (
                        <div>
                            <FriendsPanel friends={state.navBar.friends}></FriendsPanel>
                        </div>
                    );
                }
            }
        </StoreContext.Consumer>
    );
}

export default FriendsPanelContainer;