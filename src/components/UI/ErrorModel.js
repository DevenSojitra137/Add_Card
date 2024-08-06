import React from "react";
import Button from "./Button";
import Card from "./Card";
import classes from './ErrorModel.module.css'

const ErrorModel = ({ title, message,onConfirm }) => {
  return (
    <>
    <div className={classes.backdrop}  onClick={onConfirm}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{title}</h2>
        </header>
        <div className={classes.content}>
          <p>{message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={onConfirm}>Okay</Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModel;
