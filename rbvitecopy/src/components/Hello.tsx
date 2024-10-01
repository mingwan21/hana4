import { Children, ReactNode, useState } from "react";

type TitleProps = {
  text: string;
  name: string;
};

const Title = ({ text, name }: TitleProps) => {
  return (
    <h1>
      {text} {name}
    </h1>
  );
};

const Body = ({ children }: { children: ReactNode }) => {
  return (
    <div className="red" style={{ color: "blue" }}>
      {children}
    </div>
  );
};
