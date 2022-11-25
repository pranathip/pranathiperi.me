import Link from "next/link";
import { Orb, Underline, ArrowLeft } from "./Svg";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  let title = "pranathi peri";
  let subtitle = "software engineer + product designer";
  let isProjectPage = true;

  if (router.pathname == "/") {
    isProjectPage = false;
  } else if (router.pathname == "/projects/github") {
    title = "product designer, github";
    subtitle = "made pull requests even better.";
  } else if (router.pathname == "/projects/facebook") {
    title = "software engineering intern, facebook";
    subtitle = "developing funky features for facebook's messenger kids on iOS";
  } else if (router.pathname == "/projects/bm") {
    title = "product design lead, berkeley mobile";
    subtitle =
      "designing features for uc berkeley's flagship campus mobile application";
  } else if (router.pathname == "/projects/ds") {
    title = "deadstock";
    subtitle =
      "iOS application that allows users to monitor volatile sneaker prices";
  }
  if (isProjectPage) {
    return (
      <div className="flex flex-col items-start">
        <div className="mb-6">
          <Link href="/">
            <p>
              <span>
                <ArrowLeft color="stroke-current text-tertiary" />
              </span>
              home
            </p>
          </Link>
        </div>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <Underline />
      </div>
    );
  }
  return (
    <div className="flex flex-col items-start">
      <div className="mb-6">
        <Link href="/">
          <Orb />
        </Link>
      </div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
};

export default Header;
