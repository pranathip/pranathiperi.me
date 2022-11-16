import { Underline } from "./Svg";

const Section = ({ title, children }) => {
  return (
    <div className="flex flex-col items-start mt-12">
      <h3>{title}</h3>
      <Underline />
      {children}
    </div>
  );
};

export default Section;
