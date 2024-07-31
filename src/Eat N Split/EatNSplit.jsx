import React, { useState } from "react";
import "./eatNSplit.css";
import FriendList from "./FriendList";
import FormAddFriend from "./FormAddFriend";
import Button from "./Button";
import FormSplitBill from "./FormSplitBill";

export default function EatNSplit() {
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

  const [showAddFriend, setShowAddFriend] = useState(false);

  const [friends, setFriends] = useState(initialFriends);

  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleShowAddFriend = () => {
    setShowAddFriend((show) => !show);
  };

  const handleAddFriend = (friend) => {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  };

  const handleSelectFriend = (friend) => {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  };

  const handleSplitBill = (value) => {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: value + friend.balance }
          : friend
      )
    );

    setSelectedFriend(null);
  };

  return (
    <div className="container">
      <div className="sidebar">
        <FriendList
          friends={friends}
          onSelectFriend={handleSelectFriend}
          selectedFriend={selectedFriend}
        />

        {showAddFriend ? <FormAddFriend onAddFriend={handleAddFriend} /> : null}

        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>

      {selectedFriend ? (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      ) : null}
    </div>
  );
}
