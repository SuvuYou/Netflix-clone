import React from "react";
import { Link } from "react-router-dom";
import {
  Bcground,
  Inner,
  ButtonLink,
  Logo,
  Feature,
  Text,
  TextSmall,
  TextLink,
  Group,
  Picture,
  Profile,
  Dropdown,
} from "./styles/header";

export default function Header({
  src = "/images/misc/home-bg.jpg",
  bg = true,
  children,
  ...restProps
}) {
  return bg ? (
    <Bcground {...restProps} src={src}>
      {children}
    </Bcground>
  ) : (
    children
  );
}

Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <Feature {...restProps}>{children}</Feature>;
};

Header.Picture = function HeaderPicture({ src, ...restProps }) {
  return <Picture {...restProps} src={`/images/users/${src}.png`} />;
};

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>;
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
  return <TextLink {...restProps}>{children}</TextLink>;
};

Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Header.TextSmall = function HeaderTextSmall({ children, ...restProps }) {
  return <TextSmall {...restProps}>{children}</TextSmall>;
};

Header.Inner = function HeaderInner({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>;
};

Header.ButtonLink = function HeaderButtonLink({ to, children, ...restProps }) {
  return (
    <ButtonLink {...restProps} to={to}>
      {children}
    </ButtonLink>
  );
};

Header.Logo = function HeaderLogo({ to, children, ...restProps }) {
  return (
    <Link to={to}>
      <Logo {...restProps} />
    </Link>
  );
};
