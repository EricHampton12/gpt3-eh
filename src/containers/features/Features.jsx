import React from "react";
import Feature from "../../components/feature/Feature";
import "./features.css";

const featuresData = [
  {
    title: "Improving and distrusts instantly",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas quod totam veritatis illo laudantium minima.",
  },
  {
    title: "Become an active member",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas quod totam veritatis illo laudantium minima.",
  },
  {
    title: "Message or Ask GPT to learn",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas quod totam veritatis illo laudantium minima.",
  },
  {
    title: "This is 4th example of the app",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas quod totam veritatis illo laudantium minima.",
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You just need to realize it. Step into the
          Future Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
