import React, { useContext } from "react";
import MyProfileImg from "../../assets/images/image.png";
import { UserNameContext } from "../context/userDetialsContext";

const InfoContainer = ({ userDetail }) => {
  const { userName } = useContext(UserNameContext);

  const styles = {
    color: "red",
    backgroundColor: "yellow",
    padding: "10px",
    borderRadius: "5px",
  };

  return (
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
      <h3 style={styles}>{userName ?? "Veerendra"}</h3>
      <div>
        <a href={`mailto:${userDetail.email}`}>{userDetail.email}</a>
      </div>
      <br />
      <div>
        <a href={`tel:${userDetail?.phone?.value ?? ""}`}>
          {userDetail?.phone?.label || ""}
        </a>
      </div>
      <br />
      <img src={MyProfileImg} alt="profile-img" />
    </div>
  );
};

export default InfoContainer;
