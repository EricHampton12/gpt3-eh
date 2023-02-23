import React from "react";
import "./whatgpt3.css";
import { Feature } from "../../components";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is GPT-3?" />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore the Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Chatbots" text="lorem ipsum this is chatbot" />
        <Feature
          title="Knowledge"
          text="lorem imoasdfka lkjasdlfj alkjadlkfj "
        />
        <Feature
          title="Education"
          text="alkdjflkj alkjf klajdfklj a kljalkdjflk jafd kjasldjf"
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
