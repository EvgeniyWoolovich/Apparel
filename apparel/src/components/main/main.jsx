import mainStyle from "./main.module.css";
import { Sidebar } from "./sidebar/sidebar";
import { Technologies } from "./technologes/technologes";

export const Main = () => {
  return (
    <div className={mainStyle.main}>
      <Sidebar />
      <Technologies />
    </div>
  );
};
