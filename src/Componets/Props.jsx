import React from "react";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import Ourteam from "./Ourteam-sec";

const PropsExample = () => {
  const teamMembers = [
    {
      imageUrl: "./images/member1.jpg",
      title: "John Doe",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ad vitae minus quas inventore itaque optio possimus obcaecati aspernatur, hic quam animi cupiditate corporis dolor excepturi ex enim saepe officia!",
    },
    {
      imageUrl: "./images/member2.jpg",
      title: "John Doe",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ad vitae minus quas inventore itaque optio possimus obcaecati aspernatur, hic quam animi cupiditate corporis dolor excepturi ex enim saepe officia!",
    },
    {
      imageUrl: "./images/member3.png",
      title: "John Doe",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ad vitae minus quas inventore itaque optio possimus obcaecati aspernatur, hic quam animi cupiditate corporis dolor excepturi ex enim saepe officia!",
    },
    {
      imageUrl: "./images/member4.jpg",
      title: "John Doe",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ad vitae minus quas inventore itaque optio possimus obcaecati aspernatur, hic quam animi cupiditate corporis dolor excepturi ex enim saepe officia!",
    },
    {
      imageUrl: "./images/member5.png",
      title: "John Doe",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ad vitae minus quas inventore itaque optio possimus obcaecati aspernatur, hic quam animi cupiditate corporis dolor excepturi ex enim saepe officia!",
    },
    {
      imageUrl: "./images/member6.jpg",
      title: "John Doe",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ad vitae minus quas inventore itaque optio possimus obcaecati aspernatur, hic quam animi cupiditate corporis dolor excepturi ex enim saepe officia!",
    },
    {
      imageUrl: "./images/member1.jpg",
      title: "John Doe",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ad vitae minus quas inventore itaque optio possimus obcaecati aspernatur, hic quam animi cupiditate corporis dolor excepturi ex enim saepe officia!",
    },
    {
      imageUrl: "./images/member2.jpg",
      title: "John Doe",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ad vitae minus quas inventore itaque optio possimus obcaecati aspernatur, hic quam animi cupiditate corporis dolor excepturi ex enim saepe officia!",
    },
    {
      imageUrl: "./images/member3.png",
      title: "John Doe",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ad vitae minus quas inventore itaque optio possimus obcaecati aspernatur, hic quam animi cupiditate corporis dolor excepturi ex enim saepe officia!",
    },
    {
      imageUrl: "./images/member4.jpg",
      title: "John Doe",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ad vitae minus quas inventore itaque optio possimus obcaecati aspernatur, hic quam animi cupiditate corporis dolor excepturi ex enim saepe officia!",
    },
    {
      imageUrl: "./images/member5.png",
      title: "John Doe",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ad vitae minus quas inventore itaque optio possimus obcaecati aspernatur, hic quam animi cupiditate corporis dolor excepturi ex enim saepe officia!",
    },
    {
      imageUrl: "./images/member6.jpg",
      title: "John Doe",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ad vitae minus quas inventore itaque optio possimus obcaecati aspernatur, hic quam animi cupiditate corporis dolor excepturi ex enim saepe officia!",
    },
  ];

  return (
    <>
      <div className="our-team-container">
        <div className="our-team-header">
          <h3 className="header">our team</h3>
        </div>
        <div className="our-team-body">
          {teamMembers.map((member, index) => (
            <Ourteam key={index} props={member} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PropsExample;
