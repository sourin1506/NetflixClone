import React from "react";
import { Container, Button, Input, Text ,Break} from "./styles/optform";

export default function OptForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
OptForm.Input = function OptFormInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>;
};
OptForm.Button = function OptFormButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children}
      <img src="/images/icons/chevron-right.png"></img>
    </Button>
  );
};

OptForm.Text = function OptFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
OptForm.Break = function OptFormBreak({ ...restProps }) {
  return <Break {...restProps} />;
};
