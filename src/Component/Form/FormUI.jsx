import React, { useState } from "react";

const FormUI = ({
  inputData,
  setInputData,
  collectData,
  setCollectData,
  setIsTable,
  init,
}) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#!%*?&]).{8,}$/;

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    lName: "",
    fName: "",
  });

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  const submitData = () => {
    const newErrors = {};

    if (inputData.fName.length === 0) {
      newErrors.fName = "Name is required";
    }
    if (!inputData.lName.trim()) {
      newErrors.lName = "Name is required";
    }

    if (!inputData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(inputData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!inputData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (!passwordRegex.test(inputData.password)) {
      newErrors.password =
        "Password must have at least 8 characters, one lowercase, one uppercase, one special character and one digit";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    if (
      inputData.email &&
      inputData.password &&
      inputData.fName &&
      inputData.lName
    ) {
      inputData.createdAt = new Date();
      setIsTable(false);
      const index = collectData.findIndex((e) => e.id === inputData.id);
      
      if (index !== -1) {
        setCollectData((prev) => {
          const dummyCollect = [...prev];
          dummyCollect[index] = inputData;
          return dummyCollect;
        });
      } else {
        inputData.id=collectData.length+1;
        setCollectData([...collectData, inputData]);
      }
      setInputData(init);
    }
  };
  // console.log(errors);
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div className="col">
              <div className="card rounded-4 p-1 p-lg-3 border-0">
                <div className="card-body">
                  <h5 className="card-title fw-bold">
                    <span className="span-1 pe-2">1</span> Account details
                  </h5>
                  <p className="sign-in card-text text-end fw-bold mb-0">
                    Already have an account?
                    <a href="#" className="text-decoration-none">
                      {" "}
                      Sign in here
                    </a>
                  </p>
                  <form>
                    <div className="row">
                      <div className="col-sm-6 pe-md-3">
                        <label className="form-label fw-bold">
                          Email address <span className="text-danger">*</span>
                        </label>
                        <input
                          type="email"
                          className="form-control fw-bold rounded-4 border-0 w-100 ps-3 add"
                          placeholder="Email address"
                          aria-label="Email address"
                          name="email"
                          value={inputData.email}
                          onChange={handleChange}
                        />
                        {errors.email && (
                          <p style={{ color: "red" }}>{errors.email}</p>
                        )}
                      </div>
                      <div className="col-sm-6 ps-md-3">
                        <label className="form-label password fw-bold">
                          Password <span className="text-danger">*</span>
                        </label>
                        <div className="input-group">
                          <input
                            type="password"
                            className="form-control fw-bold pass rounded-4 border-0 ps-3"
                            placeholder="Password"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            name="password"
                            value={inputData.password}
                            onChange={handleChange}
                          />
                        </div>
                        {errors.password && (
                          <p style={{ color: "red" }}>{errors.password}</p>
                        )}
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-sm-6 pe-md-3">
                        <label className="form-label fw-bold">
                          First name <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control fw-bold rounded-4 border-0 w-100 ps-3 add"
                          placeholder="First name"
                          aria-label="First name"
                          name="fName"
                          value={inputData.fName}
                          onChange={handleChange}
                        />
                        {errors.fName && (
                          <p style={{ color: "red" }}>{errors.fName}</p>
                        )}
                      </div>
                      <div className="col-sm-6 ps-md-3">
                        <label className="form-label last fw-bold">
                          Last name <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control fw-bold rounded-4 border-0 w-100 ps-3 add"
                          placeholder="Last name"
                          aria-label="Last name"
                          name="lName"
                          value={inputData.lName}
                          onChange={handleChange}
                        />
                        {errors.lName && (
                          <p style={{ color: "red" }}>{errors.lName}</p>
                        )}
                      </div>
                    </div>
                  </form>
                  <div className="card-body p-0 pt-3">
                    <div className="row">
                      <div className="col-sm-12 col-lg-8">
                        <p className="terms fw-bold pt-2 lh-1 mt-1">
                          By creating an account, you agree to the
                          <a href="#" className="text-decoration-none">
                            {" "}
                            Terms And Conditions
                          </a>{" "}
                          set out by this site, Including our
                          <a href="#" className="text-decoration-none">
                            {" "}
                            Cookies Use
                          </a>
                        </p>
                      </div>
                      <div className="col-sm-12 col-lg-4 ps-sm-0">
                        <button
                          className="btn btn1 fw-bold text-white w-100"
                          onClick={submitData}
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormUI;
