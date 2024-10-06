import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { logoutUser, fetchUser } from '../store/actions/userprofileaction';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../styling/userprofile.css';

function UserProfile({ show, handleClose }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams(); // Assuming User_id is passed in the URL as a parameter
    const user = useSelector((state) => state.user);

    // Fetch user data using User_id
    useEffect(() => {
        if (id) {
            dispatch(fetchUser(id)); // Pass the User_id to fetchUser action
        }
    }, [dispatch, id]);

    const handleLogout = () => {
        dispatch(logoutUser());
        handleClose(); // Close the modal after logout
    };

    const handleSeller = () => {
        navigate('/seller');
    };

    return (
        <Modal show={show} onHide={handleClose} className='user-profile-modal' style={{ maxWidth: '250px', marginLeft: '81%', marginRight: 'auto', marginTop: '30px', zIndex: '1' }}>
            <Modal.Header closeButton className='modal-header'>
                <Modal.Title className='modal-title'>User Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body className='modal-body'>
                {user && user.firstName ? (
                    <div className='profile-content'>
                        <img src={user.avatar || 'default-avatar.jpg'} alt="User Avatar" className='user-avatar' />
                        <h4>{user.firstName} {user.lastName}</h4>
                        <p>Email: {user.email}</p>
                        <button className='profile-button' onClick={handleSeller}>Become a Seller</button>
                        <hr />
                        <ul className='profile-ul'>
                            <li><Link to="/userprofile">Profile visit</Link></li>
                            <li><Link to="/">Settings & Privacy</Link></li>
                            <li><Link to="/">Help & Support</Link></li>
                        </ul>
                    </div>
                ) : (
                    <p>Loading...</p> // Loading message if user data is not available yet
                )}
                <Button variant="danger" onClick={handleLogout} className='logout-button'>
                    Logout
                </Button>
            </Modal.Body>
        </Modal>
    );
}

export default UserProfile;
