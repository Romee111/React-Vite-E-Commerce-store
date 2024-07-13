import React, { useState } from 'react';
import axios from 'axios';
import '../styling/signup.css';
import res from '../assets/res.jpg';
import { useAuth } from '../hooks/userauthhooks'; // Import the register function from your API file

function Signup() {
    const {register}=useAuth()
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
        isShipper: false,
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
        e.preventDefault();
        setError('');

        const {
            firstName,
            lastName,
            email,
            password,
            retypePassword,
            phone,
            address1,
            address2,
            city,
            pincode,
            country,
            state,
          
            image
        } = formData;

        if (password !== retypePassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            const data = await register(
                firstName,
                lastName,
                email,
                password,
                retypePassword,
                phone,
                address1,
                address2,
                city,
                pincode,
                country,
                state,
                image,

            );
            console.log('Signup successful:', data);
            // handle successful signup, e.g., redirect or show success message
        } catch (err) {
            console.error('Signup failed:', err);
            setError('Signup failed. Please try again.');
        }
    };

    return (
        <section className="h-100 " style={{ backgroundColor: '#d3d3d3' }}> 
            <div className="container py-5 h-100" >
                <div className="row d-flex justify-content-center align-items-center h-100" >
                    <div className="col-8">
                        <div className="card card-registration my-4 "style={{ backgroundColor: '#001f3f,', }}>
                            <div className="row g-0">
                                <div className="col-xl-6 d-none d-xl-block">
                                    <img src={res} alt="Sample photo" className="img-fluid" style={{ height:"100%" }} />
                                </div>
                                <div className="col-xl-6">
                                    <div className="card-body p-md-5 " style={{Color:'#FFFFFF'}}>
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
                                                    <select data-mdb-select-init className="form-control form-control-sm" name="state" value={formData.state} onChange={handleChange}>
                                                        <option value="">State</option>
                                                        <option value="Option 1">Option 1</option>
                                                        <option value="Option 2">Option 2</option>
                                                        <option value="Option 3">Option 3</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <select data-mdb-select-init className="form-control form-control-sm" name="city" value={formData.city} onChange={handleChange}>
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
                                   <label htmlFor="uploadImage" className="form-label">Upload Image</label>
                                   <input
                                                       type="file"
                                                       className="form-control form-control-sm"
                                                       id="uploadImage"
                                                       accept="image/*"
                                                       onChange={handleChange} // Assuming you have a function to handle image upload
                                                   />
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
                                                <input type="password" id="form3Example98" name="retypePassword" className="form-control form-control-sm" value={formData.retypePassword} onChange={handleChange} />
                                                <label className="form-label" htmlFor="form3Example98">Retype Password</label>
                                            </div>
                                            <div className="form-outline mb-3">
                                                <input type="text" id="form3Example98" name="phone" className="form-control form-control-sm" value={formData.phone} onChange={handleChange} />
                                                <label className="form-label" htmlFor="form3Example98">Phone</label>
                                            </div>
                                           
                                          
                                            <div className="form-check mb-3">
                                                <input
                                                             className="form-check-input"
                                                             type="checkbox"
                                                             id="termsAgreement"
                                                             name="termsAgreement"
                                                             checked={formData.termsAgreement}
                                                             onChange={handleChange}
                                                         />
                                                         <label className="form-check-label" htmlFor="termsAgreement">
                                                             I agree to the <a href="/terms" target="_blank">Terms and Conditions</a>
                                                         </label>
                                                     </div>

                                         
                                            {error && <p className="text-danger">{error}</p>}
                                            <div className="d-flex justify-content-end pt-3">
                                            <button type="submit" className="btn-sm ms-2" style={{ backgroundColor: '#001F3F',color:"#FFFFFf",border:'none',borderRadius: '10px',fontWeight:"bold" }}>SignUp</button>
                                            </div>
                                        </form>
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
