const ProjectSection = ({ subject, project, date, subtitle }) => {
  return (
    <div className="flex flex-col items-start mt-2">
      <h2 className="text-primary">
        {subject}, {project} / <span className="text-secondary">{date}</span>
      </h2>
      <p className="text-secondary">{subtitle}</p>
    </div>
  );
};

export default ProjectSection;
