import TransactionHistory from './TransactionHistory/TransactionHistory'
import Profile from "./profile/Profile";
import FriendList from "./friendlist/FriendList";
import userData from '../userData.json';
import friends from '../friends.json';
import transactions from '../transaction.json'


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
          
          <TransactionHistory items={transactions} />
        
        </>

        
    );
};

