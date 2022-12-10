import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./profilenew.css";
import img from "../../img/blogo.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "react-avatar-edit";
import { useEffect } from "react";

function Pdetail() {
  const [dialogs, setDialogs] = useState(false);
  const [Crop, setCrop] = useState(false);

  const onCrop = (view) => {
    setCrop(view);
  };
  const onClose = (view) => {
    setCrop(view);
  };

  const [Details, setDetails] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://www.luenze.in/back/brands/profile/?auth_token=" +
        localStorage.getItem("auth_token"),
      requestOptions
    )
      .then((response) => response.json())
      .then((json) => {
        console.log("jonsn", json);
        setDetails(json);
      })
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }, []);

  const Update_pdetail = () => {
    var raw =
      '{\n    "brand_name": "Nike",\n    "contact_person_name": "Tikesh",\n    "phone_number": 9799813598,\n    "email": "harsh@x.com",\n    "standard_discount": 15\n}';
    var requestOptionPatch = {
      method: "PATCH",
      body: raw,
      redirect: "follow",
    };

    fetch(
      "http://localhost:8000/brands/products/6d7969bd-a6e4-4065-ae91-765313b2f9b4/?auth_token=755e22bd-1aa0-48fa-a6e8-c7db3911be5e",
      requestOptionPatch
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      {Details &&
        Details.map((Detail, i) => (
          <div className="details rounded-2 p-5">
            <div className="row imgalign">
              <div className="col">
                <div className="m-2">
                  <a href="#" className=" ">
                    <script></script>
                    <img
                      // src= {"https://thebrandaffiliates.herokuapp.com"+Detail.brand_logo}
                      src={img}
                      alt="profile"
                      onClose={onClose}
                      onCrop={onCrop}
                      className="img logo"
                      onClick={() => setDialogs(true)}
                    />
                  </a>
                </div>
              </div>
              <div className="col rightcol">
                <div className="col">
                  <p className="tittle">Brand Name</p>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={Detail.brand_name}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <p className="tittle">Contact Name</p>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Contact Name"
                  defaultValue={Detail.contact_person_name}
                />
              </div>
              <div className="col rightcol">
                <p className="tittle">Phone Number</p>
                <input
                  type="mobile"
                  className="form-control"
                  placeholder="Mobile Number"
                  defaultValue={Detail.phone_number}
                />
              </div>
            </div>

            <div className="row">
              <div className="col">
                <p className="tittle">Email</p>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  defaultValue={Detail.email}
                />
              </div>
              <div className="col rightcol">
                <p className="tittle">Standard Discount(%)</p>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Discount"
                  defaultValue={Detail.standard_discount}
                />
              </div>
            </div>

            <div className="row"></div>

            <div className="save">
              <button className="btn-2 rounded-2" onClick={Update_pdetail}>
                {" "}
                Save
              </button>
            </div>
          </div>
        ))}
    </>
  );
}

export default Pdetail;
