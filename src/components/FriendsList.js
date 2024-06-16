import Friend from "./Friend.js";

export default function FriendsList({
  friends,
  handleSelected,
  selectedFriend,
}) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          handleSelected={handleSelected}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}
