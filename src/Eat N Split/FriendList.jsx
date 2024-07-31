import React from "react";
import "./eatNSplit.css";
import Friend from "./Friend";

export default function FriendList({
  friends,
  onSelectFriend,
  selectedFriend,
}) {
  return (
    <div>
      <ul>
        {friends.map((friend) => (
          <Friend
            friend={friend}
            key={friend.id}
            onSelectFriend={onSelectFriend}
            selectedFriend={selectedFriend}
          />
        ))}
      </ul>
    </div>
  );
}
