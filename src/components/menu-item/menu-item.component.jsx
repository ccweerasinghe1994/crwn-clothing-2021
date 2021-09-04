import React from "react";
// this is a HOC
import { withRouter } from "react-router-dom";
import {
  MenuItemContainer,
  BackGroundImageContainer,
  ContentContainer,
  SubtitleContainer,
  TitleContainer,
} from "./menu-item.styles";

// now we have access to history
const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => (
  <MenuItemContainer onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <BackGroundImageContainer imageUrl={imageUrl} />
    <ContentContainer>
      <TitleContainer>{title.toUpperCase()}</TitleContainer>
      <SubtitleContainer>Shop Now</SubtitleContainer>
    </ContentContainer>
  </MenuItemContainer>
);
// by wrapping now we have access to history
export default withRouter(MenuItem);
