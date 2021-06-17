import { Header } from "../atoms/layout/Header";

export const HeaderOnly = (props) => {
  const { children } = props;
  // console.log(children);
  return (
    <>
      <Header />
      {children}
    </>
  );
};
