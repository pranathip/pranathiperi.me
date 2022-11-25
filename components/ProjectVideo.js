const ProjectVideo = ({ src }) => {
  return (
    <video className="rounded-lg" src={src} autoPlay loop playsInline muted />
  );
};

export default ProjectVideo;
