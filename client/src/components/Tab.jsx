import { useSnapshot } from "valtio";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import state from "../store";

const Tab = ({ tab, isFilterTab, isActiveTab, handleClick }) => {
  const snap = useSnapshot(state);
  const activeStyles =
    isFilterTab && isActiveTab
      ? { backgroundColor: snap.color, opacity: 0.5 }
      : { backgroundColor: "transparent", opacity: 1 };

  return (
    <div
      key={tab.name}
      className={`tab-btn ${
        isFilterTab ? "rounded-full glassmorphism" : "rouded-4"
      }`}
      onClick={handleClick}
      style={activeStyles}
    >
      <a className=" flex justify-center" data-tooltip-id="my-tooltip"data-tooltip-content={tab.hover}>
        <Tooltip  id="my-tooltip" place="top"/>
        
        <img
          src={tab.icon}
          alt={tab.name}
          className={`${isFilterTab ? "w-2/3 h-2/3" : "w-11/12 h-11/12"}`}
        />
      </a>
    </div>
  );
};

export default Tab;
