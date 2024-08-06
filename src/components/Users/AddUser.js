import React from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import { useState } from "react";
import ErrorModel from "../UI/ErrorModel";

const AddUser = ({ onAddUser }) => {
  const [enetredUsername, setEnetredUsername] = useState("");
  const [enetredAge, setEnetredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enetredUsername.trim().length === 0 || enetredAge.trim().length === 0) {
      setError({
        title:"Invalid input",
        message:"Please enter a valid name and age (non-empty values)"
      })
      return;
    }
    if (enetredAge < 1) {
      setError({
        title:"Invalid input",
        message:"Please enter a valid age (>0)"
      })
      return;
    }

    onAddUser(enetredUsername, enetredAge);
    setEnetredAge("");
    setEnetredUsername("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && <ErrorModel
        title={error.title}
        message={error.message}
        onConfirm={errorHandler}
      />}
      ;
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={enetredUsername}
            onChange={(e) => setEnetredUsername(e.target.value)}
          />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            value={enetredAge}
            onChange={(e) => setEnetredAge(e.target.value)}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
