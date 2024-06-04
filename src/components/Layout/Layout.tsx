import { Outlet } from "react-router-dom";
import classes from './Layout.module.scss';

const Layout: React.FC = () => {
  return (
    <div className={classes.container}>
      <Outlet />
    </div>
  );
};

export default Layout;
