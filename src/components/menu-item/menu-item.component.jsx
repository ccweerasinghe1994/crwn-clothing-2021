import React from "react";
// this is a HOC
import { withRouter } from "react-router-dom";
import "./menu-item.styles.scss";
// now we have access to history
const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      className="background-image"
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">Shop Now</span>
    </div>
  </div>
);
// by wrapping now we have access to history
export default withRouter(MenuItem);
