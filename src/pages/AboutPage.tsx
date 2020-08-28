import React from "react";
import { useHistory } from "react-router-dom";

export const AboutPage: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h1>About page</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
        cumque ipsum similique iste quis pariatur earum ut numquam amet quo
        quibusdam saepe, itaque alias ea aut cupiditate accusantium voluptate
        corporis!
      </p>
      <button className="btn" onClick={() => history.push("/")}>
        Back to TODO list
      </button>
    </>
  );
};
