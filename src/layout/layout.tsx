import { type ReactNode, type FC } from "react";
import Navbar from "../components/navbar";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
