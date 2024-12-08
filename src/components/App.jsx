import Profile from "./profile/Profile";;
import FriendList from "./friendlist/FriendList"
import userData from '../userData.json';
import friends from '../friends.json';


export const App = () => {
    return (

        <>

          <Profile
           name={userData.username}
           tag={userData.tag}
           location={userData.location}
           image={userData.avatar}
           stats={userData.stats}
          ></Profile>

       
          <FriendList friends={friends} />
    
        
        </>

        
    );
};

