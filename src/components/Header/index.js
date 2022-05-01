import React from "react";
import { Container, Frame, Logo,Background, ButtonLink,Linki} from "./styles/header";
import { Link  } from 'react-router-dom';

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : children;
}
Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};
Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <Link to={to}>
      <Logo {...restProps} />
    </Link>
  );
};
Header.ButtonLink = function HeaderButtonLink({ to,children, ...restProps }) {
    return (
    
      <ButtonLink  to={to}>
        {children}
      </ButtonLink>
  
    );
  };
//   Header.Linki=function HeaderLink({ to ,children,...restProps})
//   {
//       return (<Linki to={to} {...restProps}>
//      {children}
//     </Linki>)
//   }