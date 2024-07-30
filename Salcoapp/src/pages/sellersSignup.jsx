import React, { useState } from 'react';
import {  Button, Box, Stepper, Step, StepLabel, Typography } from '@mui/material';
import {Form} from 'react-bootstrap';
const steps = [
  'Personal Information',
  'Contact Information',
  'ID Verification',
  'Business Information',
  'Bank Information'
];

const SellersSignup = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    sellersAddress: '',
    dateOfBirth: '',
    image: '',
    ID_CardNumber: '',
    ID_image1: '',
    ID_image2: '',
    Business_Name: '',
    Business_Address: '',
    Business_Type: '',
    Business_registerationNumber: '',
    Tax_IDNumber: '',
    Bank_Name: '',
    Bank_AccountNumber: '',
    Account_HolderName: '',
    Branch_Code: '',
    imageError: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files[0]) {
      // Check file size (500KB limit)
      if (files[0].size > 500 * 1024) {
        setFormData({ ...formData, imageError: 'File size must be less than 500KB' });
      } else {
        setFormData({ ...formData, [name]: files[0] });
        setFormData({ ...formData, [`${name}Preview`]: URL.createObjectURL(files[0]) });
      }
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
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
              {steps.map((label) => (
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
                <Form onSubmit={handleSubmit} style={{ marginTop: '5%', width: '100%', margin: 'auto', justifyContent: 'center', borderRadius: '10px', border: '1px solid white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
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
                          name="sellersAddress"
                          value={formData.sellersAddress}
                          onChange={handleChange}
                          style={{ width: '80%', margin: 'auto', justifyContent: 'center', borderRadius: '10px', border: '1px solid white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                        />
                      </Form.Group >
                      <Form.Group>
                        <Form.Label style={{ fontWeight: 'bold', color: "#001F3F", marginLeft: '10%', marginTop: '10px' }}>Date Of Birth:</Form.Label>
                        <Form.Control
                          type="date"
                          placeholder="Enter Date Of Birth"
                          name="dateOfBirth"
                          value={formData.dateOfBirth}
                          onChange={handleChange}
                          style={{ width: '80%', margin: 'auto', justifyContent: 'center', borderRadius: '10px', border: '1px solid white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                        />
                      </Form.Group>
                    </React.Fragment>
                  )}
                  {activeStep === 2 && (
                    <React.Fragment>
                      <Form.Group>
                        <Form.Label>ID Card Number:</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter ID Card Number"
                          name="ID_CardNumber"
                          value={formData.ID_CardNumber}
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>ID Image Front:</Form.Label>
                        <Form.Control
                          type="file"
                          name="ID_image1"
                          onChange={handleFileChange}
                        />
                        {formData.ID_image1Preview && (
                          <div className="image-preview">
                            <img src={formData.ID_image1Preview} alt="ID Image Front Preview" style={{ maxWidth: '100px', maxHeight: '100px' }} />
                          </div>
                        )}
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>ID Image Back:</Form.Label>
                        <Form.Control
                          type="file"
                          name="ID_image2"
                          onChange={handleFileChange}
                        />
                        {formData.ID_image2Preview && (
                          <div className="image-preview">
                            <img src={formData.ID_image2Preview} alt="ID Image Back Preview" style={{ maxWidth: '100px', maxHeight: '100px' }} />
                          </div>
                        )}
                      </Form.Group>
                    </React.Fragment>
                  )}
                  {activeStep === 3 && (
                    <React.Fragment>
                      <Form.Group>
                        <Form.Label style={{ fontWeight: 'bold', color: "#001F3F", marginLeft: '10%', marginTop: '10px' }}>Business Name:</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Business Name"
                          name="Business_Name"
                          value={formData.Business_Name}
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label style={{ fontWeight: 'bold', color: "#001F3F", marginLeft: '10%', marginTop: '10px' }}>Business Address:</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Business Address"
                          name="Business_Address"
                          value={formData.Business_Address}
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label style={{ fontWeight: 'bold', color: "#001F3F", marginLeft: '10%', marginTop: '10px' }}>Business Type:</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Business Type"
                          name="Business_Type"
                          value={formData.Business_Type}
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label> style={{ fontWeight: 'bold', color: "#001F3F", marginLeft: '10%', marginTop: '10px' }}Business Registration Number:</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Business Registration Number"
                          name="Business_registerationNumber"
                          value={formData.Business_registerationNumber}
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label style={{ fontWeight: 'bold', color: "#001F3F", marginLeft: '10%', marginTop: '10px' }}>Tax ID Number:</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Tax ID Number"
                          name="Tax_IDNumber"
                          value={formData.Tax_IDNumber}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </React.Fragment>
                  )}
                  {activeStep === 4 && (
                    <React.Fragment>
                      <Form.Group>
                        <Form.Label style={{ fontWeight: 'bold', color: "#001F3F", marginLeft: '10%', marginTop: '10px' }}>Bank Name:</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Bank Name"
                          name="Bank_Name"
                          value={formData.Bank_Name}
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Bank Account Number:</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Bank Account Number"
                          name="Bank_AccountNumber"
                          value={formData.Bank_AccountNumber}
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Account Holder Name:</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Account Holder Name"
                          name="Account_HolderName"
                          value={formData.Account_HolderName}
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Branch Code:</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Branch Code"
                          name="Branch_Code"
                          value={formData.Branch_Code}
                          onChange={handleChange}
                         
                        />
                      </Form.Group>
                    </React.Fragment>
                  )}
                  <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Button
                      color="inherit"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      sx={{ mr: 1 }}
                      style={{ color: '#FFFFFF',width: '100px', backgroundColor: '#001F3F', borderRadius: '10px', borderColor: '#FFFFFF', border: '1px solid white' }}
                    >

                      Back
                    </Button>
                    <Box sx={{ flex: '1 1 auto' }} />
                    <Button
                      onClick={handleNext}
                      sx={{ mr: 1 }}
                      style={{ color: '#FFFFFF',width: '100px', backgroundColor: '#001F3F', borderRadius: '10px', borderColor: '#FFFFFF', border: '1px solid white' }}
                    >
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
  );
};

export default SellersSignup;
