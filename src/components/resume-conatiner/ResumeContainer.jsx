import MyProfileImg from "../../assets/images/image.png";

const ResumeContainer = () => {
  const userDetail = {
    name: "Veerendra Kumar Nagella",
    email: "veerendra.nagella@gmail.com",
    phone: {
      label: "+91 960 35 99809",
      value: "+919603599809",
    },
    image: "../../assets/images/image.png",
    experience: 7.8,
  };

  const styles = {
    color: "red",
    backgroundColor: "yellow",
    padding: "10px",
    borderRadius: "5px",
  };

  const cName = "resume-container";

  return (
    <div className={cName}>
      <div className="info container">
        {/* <h3 style="color: red; background-color: yellow;">   We can't write inline styles like this  */}
        {/* <h3
          style={{
            color: "red",
            backgroundColor: "yellow",
            padding: "10px",
            borderRadius: "5px",
          }}
        > */}
        <h3 style={styles}>{userDetail.name}</h3>
        <div>
          <a href={`mailto:${userDetail.email}`}>{userDetail.email}</a>
        </div>
        <br />
        <div>
          <a href={`tel:${userDetail.phone.value}`}>{userDetail.phone.label}</a>
        </div>
        <br />
        <img src={MyProfileImg} alt="profile-img" />
      </div>
      <br />
      <hr />
      <br />

      <div className="exp container">
        <div>
          <strong>
            <ins>Experience Summary:</ins>
          </strong>
        </div>
        <ul>
          <li>
            Over 7.8 years of experience in MERN Stack Development, designing
            User Interface (UI) applications and professional web applications
            using HTML5, DOM, CSS3, SASS, BulmaCSS, Kendo UI, Bootstrap, jQuery,
            AJAX, JSON, Angular, ReactJS, Redux, Lerna, ExpressJS, NestJS, and
            NodeJS with experience in the software development life cycle.
          </li>
          <li>
            Worked in Agile Scrum Methodology - attended daily standups, sprint
            review, retrospective, and planning meetings. Hands-on experience in
            UI and MERN development processes such as Analysis, Development,
            Testing, and associated methodologies.
          </li>
        </ul>
      </div>
      <div>
        <div>
          <strong>
            <ins>Current Experience: </ins>(DAZN India Pvt. Ltd - Senior Systems
            Analyst)
          </strong>
        </div>
      </div>
    </div>
  );
};

export default ResumeContainer;
