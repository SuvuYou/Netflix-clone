import React from "react";
import { Link } from "react-router-dom";
import { Bcground, Inner, ButtonLink, Logo } from "./styles/header";

export default function Header({
  src = "/images/misc/home-bg.jpg",
  bc = true,
  children,
}) {
  return bc ? <Bcground src={src}>{children}</Bcground> : children;
}

Header.Inner = function HeaderInner({ children }) {
  return <Inner>{children}</Inner>;
};

Header.ButtonLink = function HeaderButtonLink({ to, children }) {
  return <ButtonLink to={to}>{children}</ButtonLink>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <Link to={to}>
      <Logo {...restProps} />
    </Link>
  );
};
