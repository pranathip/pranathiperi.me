const ContactInfo = () => {
  return (
    <div className="columns-2 mt-4">
      <div>
        <h2 className="text-primary">the corporate stuff</h2>
        <h2>
          <a href="https://read.cv/pranathi">cv</a> •{" "}
          <a href="mailto:pranathi.peri@gmail.com">email</a> •{" "}
          <a href="https://linkedin.com/in/pranathip">linkedin</a>
        </h2>
      </div>
      <div>
        <h2 className="text-primary">the fun stuff</h2>
        <h2>
          <a href="https://github.com/pranathip">github</a> •{" "}
          <a href="https://twitter.com/pranathiperii">twitter</a> •{" "}
          <a href="https://dribbble.com/pranathip">dribbble</a>
        </h2>
      </div>
    </div>
  );
};

export default ContactInfo;
