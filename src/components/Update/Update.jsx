import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { updateUser } from "../../redux/apiCalls";
import Warning from "./../Warning/Warning";

import "./update.css";

export default function Update() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { userInfo, pending, error } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    e.preventDefault();
    updateUser({ name, email, password: "test" }, dispatch);
  }

  const handleDelete = (e) => {
    e.preventDefault();
  }


  return (
    <div className="update">
      <div className="updateWrapper">
        <h3 className="updateTitle">Update Your Account</h3>
        <Warning />
        <button className="delete" onClick={handleDelete}>Delete Account</button>
        <div className="updateContainer">
          <form onSubmit={handleUpdate}>
            <div className="formItem">
              <label>Profile Picture</label>
              <div className="profilePic">
                <img
                  className="avatar"
                  src="https://images.pexels.com/photos/3024627/pexels-photo-3024627.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <span className="change">Change</span>
              </div>
            </div>
            <div className="formItem">
              <label>Username</label>
              <input
                className="formInput"
                type="text"
                placeholder={userInfo.name}
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div className="formItem">
              <label>Email</label>
              <input
                className="formInput"
                type="email"
                placeholder={userInfo.email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="formItem">
              <label>Password</label>
              <input className="formInput" type="password" />
            </div>
            <button className="updateButton" disabled={pending}>
              Update
            </button>
            {error && <span className="error">{error}</span>}
            {pending === false && !error && <span className="success">Accoun has been updated!</span>}
          </form>
        </div>
      </div>
    </div>
  );
}
