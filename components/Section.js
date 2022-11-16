import { Underline } from "./Svg";
import PillButton from "./PillButton";

const Section = ({ title, showLastUpdated, children }) => {
  if (showLastUpdated) {
    return (
      <div>
        <div className="grid grid-flow-col auto-cols-max gap-2 mt-12">
          <h3>{title}</h3>
          <PillButton />
        </div>
        <Underline />
        {children}
      </div>
    );
  }
  return (
    <div className="flex flex-col items-start mt-12">
      <h3>{title}</h3>
      <Underline />
      {children}
    </div>
  );
};

export default Section;
