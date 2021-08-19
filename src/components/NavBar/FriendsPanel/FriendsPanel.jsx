import Friend from './Friend/Friend';

const FriendsPanel = (props) => {    

    let friendsComponents = props.friends.map((f) => <Friend data={f}/>);

    return(
        <div>
            {friendsComponents}
        </div>
    );
}

export default FriendsPanel;