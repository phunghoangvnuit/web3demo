import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Countdown from "react-countdown";

//INTERNAL IMPORTS
import { VotingContext } from "../context/Voter";
import Styles from "../styles/index.module.css";
import Card from "../components/Card/Card";
import image from "../assets/candidate-1.jpg";

const index = () => {
  const { votingTitle } = useContext(VotingContext);
  return <div>{votingTitle}</div>;
};

export default index;
