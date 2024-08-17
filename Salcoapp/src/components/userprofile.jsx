import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { logoutUser } from '../store/actions/userprofileaction';
import { Link } from 'react-router-dom';
import '../styling/userprofile.css';
import { useNavigate } from 'react-router-dom';
function UserProfile({ show, handleClose }) {
    const user = useSelector((state) => state.user); // Ensure this matches your Redux state structure
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logoutUser());
        handleClose(); // Close the modal after logout
    };

    const handleSeller = () => {
        navigate('/seller');
    };

    return (
        <Modal show={show} onHide={handleClose} className='user-profile-modal' style={{ maxWidth: '250px', marginLeft: '81%', marginRight: 'auto', marginTop: '30px', zIndex: '1' }}>
            <div className='modal-arrow'>
              
            </div>

            <Modal.Header closeButton className='modal-header'>
                <Modal.Title className='modal-title'>
                    User Profile
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='modal-body'>
                <div className='profile-content'>
                    <img src={user.image} alt="User Avatar" className='user-avatar' />
                    <h4>{user.firstName} {user.lastName}</h4>
                    <p>Email: {user.email}</p>
                    <button className='profile-button' onClick={() => handleSeller()}>Become a Seller</button>
                    <hr />
                     <ul className='profile-ul'>
                      <li><Link><a href="/userprofile"> Profile visit </a></Link></li>
                      <li><Link><a href="/ ">settings  & Privacy </a></Link></li>
                      <li><Link><a href="/ ">Help & support</a></Link></li>
                    <li><Link><a href="/ ">   </a></Link> </li> 
                    </ul>

                </div>
                <Button variant="danger" onClick={handleLogout} className='logout-button'>
                    Logout
                </Button>
            </Modal.Body>
        </Modal>
    );
}

export default UserProfile;
