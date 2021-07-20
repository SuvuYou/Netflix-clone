import React from "react";
import { Container, Title, Picture, Name, List, Item } from "./styles/profile";

export default function Profile({ children }) {
  return <Container>{children}</Container>;
}

Profile.Title = function ProfileTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Profile.Picture = function ProfilePicture({ url, children, ...restProps }) {
  return (
    <>
      <Picture
        style={url ? { opacity: "1" } : null}
        src={`/images/users/${url}.png`}
        {...restProps}
      />
      {url ? null : (
        <Picture
          style={{ opacity: "1" }}
          src={`/images/misc/loading.gif`}
          {...restProps}
        />
      )}
    </>
  );
};

Profile.Name = function ProfileName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};

Profile.List = function ProfileList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

Profile.Item = function ProfileItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};
