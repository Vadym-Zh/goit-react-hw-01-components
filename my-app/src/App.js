import logo from "./logo.svg";
import "./App.css";
import { Profile } from "./components/profile/Profile";
import { Statistics } from "./components/statistics/Statistics";
import { FriendList } from "./components/friendList/FriendList";
import { TransactionHistory } from "./components/transactionHistory/TransactionHistory";
import {
  baseData,
  friendsData,
  transactionsData,
  userData,
} from "./data/allData";

function App() {
  return (
    <div className="App">
      <Profile user={userData} />
      <Statistics title="Upload stats" stats={baseData} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactionsData} />
    </div>
  );
}

export default App;
