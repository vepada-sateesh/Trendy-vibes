import React from "react";
import "../Styles/UserInfo/userinfo.scss";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";

const UserInfo = () => {
  const [userName, setUserName] = useState("Debabrata");
  const [userEmail, setUserEmail] = useState("Debabratakgt@hotmail.com");
  const [userMobile, setUserMobile] = useState(+919436798788);
  const [userGender, setUserGender] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const userDetails = {
    userName,
    userEmail,
    userMobile,
    userGender,
    userPassword,
  };
  console.log(userDetails);
  const handleNameChange = () => {
    if (!userName) {
      alert("Please Enter Input Field");
    }
  };
  const handleEmailChange = () => {
    if (!userEmail) {
      alert("Please Enter Input Field");
    }
  };
  const handleMobileChange = () => {
    if (!userMobile) {
      alert("Please Enter Input Field");
    }
  };
  const handleGenderChange = () => {
    if (!userGender) {
      alert("Please Enter Input Field");
    }
  };
  const handlePasswordChange = () => {
    if (!userPassword) {
      alert("Please Enter Input Field");
    }
  };
  return (
    <div className="user_info">
      <div className="user_avatar">
        <FaUserCircle />
      </div>
      <h2 className="user_name">Debabrata Datta</h2>
      <table>
        <tbody>
          <tr>
            <td>Name:</td>
            <td>
              <input
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                value={userName}
              />
            </td>
            <td>
              <button onClick={handleNameChange}>Update</button>
            </td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>
              <input
                onChange={(e) => setUserEmail(e.target.value)}
                type="text"
                value={userEmail}
              />
            </td>
            <td>
              <button onClick={handleEmailChange}>Update</button>
            </td>
          </tr>
          <tr>
            <td>Mobile:</td>
            <td>
              <input
                onChange={(e) => setUserMobile(e.target.value)}
                type="number"
                value={userMobile}
              />
            </td>
            <td>
              <button onClick={handleMobileChange}>Update</button>
            </td>
          </tr>
          <tr>
            <td>Gender:</td>
            <td>
              <select
                onChange={(e) => setUserGender(e.target.value)}
                name=""
                id=""
                value={userGender}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="transgender">Transgender</option>
              </select>
            </td>
            <td>
              <button onClick={handleGenderChange}>Update</button>
            </td>
          </tr>
          <tr>
            <td>Password:</td>
            <td>
              <input
                onChange={(e) => setUserPassword(e.target.value)}
                type="password"
              />
            </td>
            <td>
              <button onClick={handlePasswordChange}>Update</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserInfo;
