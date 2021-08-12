import react from 'react';
import Friend from './Friend/Friend';
import styles from './FriendsPanel.module.css';

const FriendsPanel = (props) => {
    let friendsComponents = props.friends.map((f) => <Friend data={f}/>);

    return(
        <div>
            {friendsComponents}
        </div>
    );
}

export default FriendsPanel;