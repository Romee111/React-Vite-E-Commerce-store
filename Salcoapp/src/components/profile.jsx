import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UpdateUser from '../hooks/userauthhooks'; // Adjust the path as necessary

const Profile = ({ userId }) => {
    const [user, setUser] = useState(null);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        country: '',
        pincode: ''
    });

    // Fetch user profile data
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`http://localhost:2900/userauth/getUser/${userId}`);
                setUser(response.data);
                setFormData(response.data);
            } catch (error) {
                console.error('Error fetching profile data:', error);
            }
        };
        fetchUserData();
    }, [userId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const updatedUser = await UpdateUser(userId, formData);
            setUser(updatedUser);
            alert('Profile updated successfully');
        } catch (error) {
            alert('Error updating profile');
            console.error('Error updating profile:', error);
        }
    };

    if (!user) return <div>Loading...</div>;

    return (
        <div className="container">
            <h2>Profile</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input
                        type="text"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="address1" className="form-label">Address Line 1</label>
                    <input
                        type="text"
                        className="form-control"
                        id="address1"
                        name="address1"
                        value={formData.address1}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="address2" className="form-label">Address Line 2</label>
                    <input
                        type="text"
                        className="form-control"
                        id="address2"
                        name="address2"
                        value={formData.address2}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="city" className="form-label">City</label>
                    <input
                        type="text"
                        className="form-control"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="state" className="form-label">State</label>
                    <input
                        type="text"
                        className="form-control"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="country" className="form-label">Country</label>
                    <input
                        type="text"
                        className="form-control"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="pincode" className="form-label">Pincode</label>
                    <input
                        type="text"
                        className="form-control"
                        id="pincode"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn-update-profile">Update Profile</button>
            </form>
        </div>
    );
};

export default Profile;
