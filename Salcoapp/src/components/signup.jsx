import React, { useState } from 'react';
import axios from 'axios';
import '../styling/signup.css';
import resImage from '../assets/res.jpg';
import { useAuth } from '../hooks/userauthhooks';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const { register } = useAuth();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phone: '',
        address1: '',
        address2: '',
        city: '',
        pincode: '',
        country: '',
        state: '',
        isAdmin: false,

        image: '',
        retypePassword: ''
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSignup = async (e) => {
        debugger
        e.preventDefault();
        // setError('');
        // const formData = {
        //     firstName,
        //     lastName,
        //     email,
        //     password,
        //     retypePassword,
        //     phone,
        //     address1,
        //     address2,
        //     city,
        //     pincode,
        //     country,
        //     state,
        //     image,
        //     isAdmin,
        // }

        // const {
        //     firstName,
        //     lastName,
        //     email,
        //     password,
        //     retypePassword,
        //     phone,
        //     address1,
        //     address2,
        //     city,
        //     pincode,
        //     country,
        //     state,
        //     image,
        //     isAdmin,
        // } = formData;

        // if (password !== retypePassword) {
        //     setError('Passwords do not match');
        //     return;
        // }
        debugger

        const res = await register(formData);
        debugger
        console.log(res)
    };

    return (
        <section className="h-100" style={{ backgroundColor: '#d3d3d3' }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-8">
                        <div className="card card-registration my-4" style={{ backgroundColor: '#001f3f' }}>
                            <div className="row g-0">
                                <div className="col-xl-6 d-none d-xl-block">
                                    <img src={resImage} alt="Sample photo" className="img-fluid" style={{ height: "100%" }} />
                                </div>
                                <div className="col-xl-6">
                                    <div className="card-body p-md-5" style={{ color: '#FFFFFF' }}>
                                        <h3 className="mb-5 text-uppercase">Sign UP Restorex</h3>
                                        <form onSubmit={handleSignup}>
                                            <div className="row">
                                                <div className="col-md-6 mb-3">
                                                    <div className="form-outline">
                                                        <input type="text" id="form3Example1m" name="firstName" className="form-control form-control-sm" value={formData.firstName} onChange={handleChange} />
                                                        <label className="form-label" htmlFor="form3Example1m">First name</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <div className="form-outline">
                                                        <input type="text" id="form3Example1n" name="lastName" className="form-control form-control-sm" value={formData.lastName} onChange={handleChange} />
                                                        <label className="form-label" htmlFor="form3Example1n">Last name</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-outline mb-3">
                                                <input type="text" id="form3Example8" name="address1" className="form-control form-control-sm" value={formData.address1} onChange={handleChange} />
                                                <label className="form-label" htmlFor="form3Example8">Address</label>
                                            </div>
                                            <div className="form-outline mb-3">
                                                <input type="text" id="form3Example99" name="address2" className="form-control form-control-sm" value={formData.address2} onChange={handleChange} />
                                                <label className="form-label" htmlFor="form3Example99">Address2</label>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 mb-3">
                                                    <select className="form-control form-control-sm" name="state" value={formData.state} onChange={handleChange}>
                                                        <option value="">State</option>
                                                        <option value="Option 1">Option 1</option>
                                                        <option value="Option 2">Option 2</option>
                                                        <option value="Option 3">Option 3</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <select className="form-control form-control-sm" name="city" value={formData.city} onChange={handleChange}>
                                                        <option value="">City</option>
                                                        <option value="Option 1">Option 1</option>
                                                        <option value="Option 2">Option 2</option>
                                                        <option value="Option 3">Option 3</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-outline mb-3">
                                                <input type="text" id="form3Example98" name="country" className="form-control form-control-sm" value={formData.country} onChange={handleChange} />
                                                <label className="form-label" htmlFor="form3Example98">Country</label>
                                            </div>
                                            <div className="form-outline mb-3">
                                                <input
                                                    type="file"
                                                    className="form-control form-control-sm"
                                                    id="uploadImage"
                                                    accept="image/*"
                                                    onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
                                                />
                                                <label className="form-label" htmlFor="uploadImage">Upload Image</label>
                                            </div>
                                            <div className="form-outline mb-3">
                                                <input type="text" id="form3Example9" name="pincode" className="form-control form-control-sm" value={formData.pincode} onChange={handleChange} />
                                                <label className="form-label" htmlFor="form3Example9">Pincode</label>
                                            </div>
                                            <div className="form-outline mb-3">
                                                <input type="email" id="form3Example97" name="email" className="form-control form-control-sm" value={formData.email} onChange={handleChange} />
                                                <label className="form-label" htmlFor="form3Example97">Email ID</label>
                                            </div>
                                            <div className="form-outline mb-3">
                                                <input type="password" id="form3Example98" name="password" className="form-control form-control-sm" value={formData.password} onChange={handleChange} />
                                                <label className="form-label" htmlFor="form3Example98">Password</label>
                                            </div>
                                            <div className="form-outline mb-3">
                                                <input type="password" id="form3Example99" name="retypePassword" className="form-control form-control-sm" value={formData.retypePassword} onChange={handleChange} />
                                                <label className="form-label" htmlFor="form3Example99">Retype Password</label>
                                            </div>
                                            <div className="form-outline mb-3">
                                                <input type="text" id="form3Example100" name="phone" className="form-control form-control-sm" value={formData.phone} onChange={handleChange} />
                                                <label className="form-label" htmlFor="form3Example100">Phone</label>
                                            </div>

                                           

                                            <button type="submit" className="btn btn-primary">Register</button>
                                        </form>
                                        {error && <p style={{ color: 'red' }}>{error}</p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Signup;
