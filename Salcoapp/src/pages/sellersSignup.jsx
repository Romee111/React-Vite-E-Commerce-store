// import React from 'react';
// import { Form } from 'react-bootstrap';
// import useSellers from '../hooks/sellershook';
// import { useEffect, useState } from 'react';

// function SellersSignup() {
//   const { AddSeller } = useSellers();
//   const [error, setError] = useState('');

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     const { name, type, value, checked } = e.target;

//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

//     try {
//       await AddSeller(formData);
//       console.log(formData);
//     } catch (err) {
//       setError(err.response.data);
//     }
//   };

//   return (
//     <div>
//       <h1 style={{ textAlign: 'center', marginTop: '5%' }}>Welcome to Restorex Seller's portal</h1>
//       <div className="container">
//         <div className="row" style={{ justifyContent: 'center', marginTop: '5%' }}>
//           <div className="col-6">
//             <p>Sign up to sell on Restorex and start selling today!</p>
//             <p>
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, nemo dolor. Consequuntur culpa aliquam impedit assumenda corrupti eius in nemo maiores enim repellat ipsam optio debitis, veritatis qui reiciendis vero magni deserunt neque deleniti dicta quo. Sint minima eius consequuntur, in laboriosam pariatur maxime totam perferendis? Quidem quisquam iusto omnis, perferendis adipisci voluptatem, autem officiis sed id culpa quaerat velit ex. Illo rem veritatis nesciunt labore, iusto aut nobis eius quaerat aliquam vitae. Minus accusamus dolorum, perferendis vitae ex dolore!
//             </p>
//           </div>
//           <div className="col-6">
//             <Form style={{ width: '75%', margin: 'auto', justifyContent: 'center', borderRadius: '10px', border: '1px solid white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} onSubmit={handleSubmit}>
//               <Form.Group>
//                 <Form.Label style={{ fontWeight: 'bold', color: "#001F3F", marginLeft: '35px', marginTop: '10px' }}>Name:</Form.Label>
//                 <Form.Control
//                   type="text"
//                   style={{ width: '80%', margin: 'auto', justifyContent: 'center', borderRadius: '10px', border: '1px solid white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
//                   placeholder="Enter Name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                 />
//               </Form.Group>
//               <Form.Group>
//                 <Form.Label style={{ fontWeight: 'bold', color: "#001F3F", marginLeft: '35px', marginTop: '10px' }}>Email:</Form.Label>
//                 <Form.Control
//                   type="email"
//                   style={{ width: '80%', margin: 'auto', justifyContent: 'center', borderRadius: '10px', border: '1px solid white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
//                   placeholder="Enter Email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//               </Form.Group>
//               <Form.Group>
//                 <Form.Label style={{ fontWeight: 'bold', color: "#001F3F", marginLeft: '35px', marginTop: '10px' }}>Password:</Form.Label>
//                 <Form.Control
//                   type="password"
//                   style={{ width: '80%', margin: 'auto', justifyContent: 'center', borderRadius: '10px', border: '1px solid white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
//                   placeholder="Enter Password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                 />
//               </Form.Group>
//               <button type="submit" style={{ width: '20%', marginTop: '10px', marginBottom: '10px', justifyContent: 'center', borderRadius: '10px', border: '1px solid white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: '#001F3F', color: 'white', marginLeft: '75%' }}>Next</button>
//             </Form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SellersSignup;

import React from 'react';
import { Form } from 'react-bootstrap';
import useSellers from '../hooks/sellershook';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const steps = ['Seller Information', 'Contact Details', 'Security'];

function SellersSignup() {
  const { AddSeller } = useSellers();
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    zip: '',
    confirmPassword: '',
  });

  const [activeStep, setActiveStep] = useState(0);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await AddSeller(formData);
      console.log(formData);
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '5%' }}>Welcome to Restorex Seller's portal</h1>
      <div className="container">
        <div className="row" style={{ justifyContent: 'center', marginTop: '5%' }}>
          <div className="col-4">
            <p>Sign up to sell on Restorex and start selling today!</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, nemo dolor. Consequuntur culpa aliquam impedit assumenda corrupti eius in nemo maiores enim repellat ipsam optio debitis, veritatis qui reiciendis vero magni deserunt neque deleniti dicta quo. Sint minima eius consequuntur, in laboriosam pariatur maxime totam perferendis? Quidem quisquam iusto omnis, perferendis adipisci voluptatem, autem officiis sed id culpa quaerat velit ex. Illo rem veritatis nesciunt labore, iusto aut nobis eius quaerat aliquam vitae. Minus accusamus dolorum, perferendis vitae ex dolore!
            </p>
          </div>
          <div className="col-8">
            <Box sx={{ width: '100%' }}>
              <Stepper activeStep={activeStep}>
                {steps.map((label, index) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography sx={{ mt: 2, mb: 1 }}>
                    All steps completed - you're finished
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Box sx={{ flex: '1 1 auto' }} />
                    <Button onClick={handleBack} sx={{ mr: 1 }}>
                      Back
                    </Button>
                    <Button onClick={handleSubmit}>Submit</Button>
                  </Box>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Form  onSubmit={handleSubmit} style={{ marginTop: '5%', width: '100%', margin: 'auto', justifyContent: 'center', borderRadius: '10px', border: '1px solid white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',padding: '20px' }}>
                    {activeStep === 0 && (
                      <React.Fragment>
                        <Form.Group>
                          <Form.Label style={{ fontWeight: 'bold', color: "#001F3F", marginLeft: '10%', marginTop: '10px' }}>Name:</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Name"
                            style={{ width: '80%', margin: 'auto', justifyContent: 'center', borderRadius: '10px', border: '1px solid white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label style={{ fontWeight: 'bold', color: "#001F3F", marginLeft: '10%', marginTop: '10px' }}>Email:</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter Email"
                            style={{ width: '80%', margin: 'auto', justifyContent: 'center', borderRadius: '10px', border: '1px solid white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label style={{ fontWeight: 'bold', color: "#001F3F", marginLeft: '10%', marginTop: '10px' }}>Password:</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Enter Password"
                            style={{ width: '80%', margin: 'auto', justifyContent: 'center', borderRadius: '10px', border: '1px solid white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                          />
                        </Form.Group>
                      </React.Fragment>
                    )}
                    {activeStep === 1 && (
                      <React.Fragment>
                        <Form.Group>
                          <Form.Label style={{ fontWeight: 'bold', color: "#001F3F", marginLeft: '10%', marginTop: '10px' }}>Phone:</Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="Enter Phone Number"
                            name="phone"
                            style={{ width: '80%', margin: 'auto', justifyContent: 'center', borderRadius: '10px', border: '1px solid white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label style={{ fontWeight: 'bold', color: "#001F3F", marginLeft: '10%', marginTop: '10px' }}>Address:</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            style={{ width: '80%', margin: 'auto', justifyContent: 'center', borderRadius: '10px', border: '1px solid white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                          />
                        </Form.Group >
                        <div className="form-info d-flex" style={{ justifyContent: 'space-around' }}>
                        <Form.Group>
                          <Form.Label style={{ fontWeight: 'bold', color: "#001F3F", marginLeft: '30%', marginTop: '10px' }}>ID Number:</Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="Enter ID Number Without Spaces"
                            name=" idNumber"
                            value={formData.idNumber}
                            onChange={handleChange}
                            style={{ width: '80%', marginLeft: '30%', justifyContent: 'center', borderRadius: '10px', border: '1px solid white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label style={{ fontWeight: 'bold', color: "#001F3F", marginLeft: '5%', marginTop: '10px' }}>Date Of Birth:</Form.Label>
                          <Form.Control
                            type="date"
                            placeholder="Enter Date Of Birth"
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                            style={{ width: '80%', marginRight: '50%', justifyContent: 'center', borderRadius: '10px', border: '1px solid white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                          />
                        </Form.Group>
                        </div>
                      </React.Fragment>
                    )}
                    {activeStep === 2 && (
                      <React.Fragment>
                        <Form.Group>
                          <Form.Label>Country:</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Country"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>ZIP Code:</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter ZIP Code"
                            name="zip"
                            value={formData.zip}
                            onChange={handleChange}
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Confirm Password:</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Confirm Password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                          />
                        </Form.Group>
                      </React.Fragment>
                    )}
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }} >
                      <Button 
                        style={{ width: '20%', marginTop: '10px', marginBottom: '10px', justifyContent: 'center', borderRadius: '10px', border: '1px solid white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: '#001F3F', color: 'white', }}
                        color="inherit"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{ mr: 1 }}
                      >
                        Back
                      </Button>
                      <Box sx={{ flex: '1 1 auto' }} />
                      <Button onClick={handleNext} style={{ width: '20%', marginTop: '10px', marginBottom: '10px', justifyContent: 'center', borderRadius: '10px', border: '1px solid white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: '#001F3F', color: 'white', marginLeft: '75%' }}>
                        
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                      </Button>
                    </Box>
                  </Form>
                </React.Fragment>
              )}
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellersSignup;
