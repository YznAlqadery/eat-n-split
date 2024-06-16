import { useState } from "react";
import FriendsList from "./components/FriendsList.js";
import Button from "./components/Button.js";
import FormAddFriend from "./components/FormAddFriend.js";
import FormSplitBill from "./components/FormSplitBill.js";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleClick() {
    setShowAddFriend((showAddFriend) => !showAddFriend);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }
  function handleSelected(friend) {
    setSelectedFriend(friend);
    if (selectedFriend && selectedFriend.id === friend.id) {
      setSelectedFriend(null);
    }
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelectedFriend(null);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          handleSelected={handleSelected}
          selectedFriend={selectedFriend}
        />
        {showAddFriend ? (
          <FormAddFriend
            handleAddFriend={handleAddFriend}
            handleClick={handleClick}
          />
        ) : null}
        <Button handleClick={handleClick}>
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
      </div>
      {selectedFriend ? (
        <FormSplitBill
          selectedFriend={selectedFriend}
          splitBill={handleSplitBill}
        />
      ) : null}
    </div>
  );
}
