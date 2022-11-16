import Link from "next/link";
import { Orb } from "./svg";
import { Helmet } from "react-helmet";

const Header = () => {
  return (
    <div className="flex flex-col items-start">
      <div className="mb-6">
        <Link href="/">
          <Orb />
        </Link>
      </div>
      <h1>pranathi peri</h1>
      <h2>software engineer + product designer</h2>
    </div>
  );
};

export default Header;
