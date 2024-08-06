import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import { useState } from 'react';

function App() {

  const [userList, setUserList] = useState([])

  const onAddUser = (uName,uAge) => {
    setUserList((prevState)=>{
      return [...prevState, {name: uName, age: uAge}]
    })
  }

  return (
    <>
      <AddUser onAddUser={onAddUser}/>
      <UsersList users={userList}/>
    </>
  );
}

export default App;
