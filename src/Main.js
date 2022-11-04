import React, { useState } from "react";

const Main = () => {
    const [formData, setFormData] = useState({ Name: "", cardNumber: "", expirationDate: "", CVC: "" });

    const handleChange = (event) => {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }
    console.log(formData);

    const handleSubmit = event => {
        event.preventDefault();
        console.log(formData);
      };
    return (
        <div className="container">
            <div class="card">
                <div className="mini-card">
                    <div class="content">
                        <h1>4050 5044 7890 3941</h1>
                        <span>10/28</span>
                        <span>Name</span>
                    </div>
                </div>
                <div class="form-container">
                    <form action="#">
                        <label for="">name of credit card owner</label>
                        <input type="text" name="Name" onChange={handleChange} id="" />
                        <label for="">card number</label>
                        <input type="text" name="cardNumber" onChange={handleChange} id="" />
                        <label for="">expiration date</label>
                        <input type="text" name="expirationDate" onChange={handleChange} id="" />
                        <label for="">cvc</label>
                        <input type="text" name="CVC"  onChange={handleChange} id="" />
                        <button onClick={handleSubmit}>Submit</button>
                    </form>
                    <div class="title-container">
                        <div class="title-content">
                            <h1 className="title">title</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consecture <br /> adpisction elit
                                sed do eiusmod tempor
                                <br />
                                inicudon ut labore et dolore magna aliqua
                                <br /> Ut enim ad minim veniam
                                <br />{" "}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
