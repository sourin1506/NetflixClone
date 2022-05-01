import React from "react";
import { Rows, Title, Poster, Posters, Loader } from "./styles/rows";

export default function Row({ children, ...restProps }) {
  return <Rows {...restProps}>{children}</Rows>;
}
Row.Title = function RowTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Row.Poster = function RowPoster({ islarge, children, ...restProps }) {
  return (
    <Poster islarge={islarge} {...restProps}>
      {children}
    </Poster>
  );
};
Row.Posters = function RowPosters({ children, ...restProps }) {
  return <Posters {...restProps}>{children}</Posters>;
};
Row.Loader = function RowLoader({ children, ...restProps }) {
  return <Loader {...restProps}>{children}</Loader>;
};
