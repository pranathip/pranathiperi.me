import { ArrowRight } from "./Svg";

const ProjectSection = ({ subject, project, link, subtitle }) => {
  return (
    <div className="flex flex-col items-start mt-2">
      <h2 className="text-primary">
        <a href={link}>
          {subject}, {project}
          <ArrowRight color="stroke-current text-primary" />
        </a>
      </h2>
      <p className="text-secondary">{subtitle}</p>
    </div>
  );
};

const ProjectSectionParagraph = () => {
  return (
    <>
      <ProjectSection
        subject="product designer"
        project="github"
        link="/"
        subtitle="made pull requests even better. designed flows for merge queue, threaded comments on PRs, and some other [secret stuff].  "
      ></ProjectSection>
      <ProjectSection
        subject="software engineering intern"
        project="facebook"
        link="/"
        subtitle="designed and developed features for messenger kids on iOS"
      ></ProjectSection>
      <ProjectSection
        subject="product design lead"
        project="berkeley mobile"
        link="/"
        subtitle="led the design and feature development for uc berkeley's flagship mobile application, available on the app store and used daily by thousands of students."
      ></ProjectSection>
      <ProjectSection
        subject="deadstock"
        project="personal project (iOS application)"
        link="/"
        subtitle="deadstock is an app that allows users to monitor volatile prices of highly sought after sneakers. design and developed from the ground up"
      ></ProjectSection>
      <ProjectSection
        subject="founder and designer"
        project="durga the label"
        link="/"
        subtitle="hand making modern clothing pieces out of sustainably sourced indian textiles and fabrics."
      ></ProjectSection>
    </>
  );
};

export default ProjectSectionParagraph;
