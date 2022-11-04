import { PropsWithChildren } from "react";

import classes from "./Layout.module.css";

const Layout: React.FC<PropsWithChildren> = (props) => {
  return <div className={classes.layout}>{props.children}</div>;
};

export default Layout;
