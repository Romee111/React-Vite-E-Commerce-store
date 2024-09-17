import React, { useState } from 'react';
import { Button, Box, Stepper, Step, StepLabel, Typography } from '@mui/material';
import { Form } from 'react-bootstrap';
import useSellers from '../hooks/sellershook';
import '../styling/sellersSignup.css';
const steps = [
  'Personal Information',
  'Contact Information',
  'ID Verification',
  'Business Information',
  'Bank Information'
];

const SellersSignup = () => {
  const { AddSeller } = useSellers();
  const [activeStep, setActiveStep] = useState(0);
  const [ID_image1, setID_image1] = useState(null);
  const [ID_image2, setID_image2] = useState(null);
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
    isSeller: false,
    imageError: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  // const handleFileChange = (e) => {
  //   const { name, files } = e.target;
  //   if (files[0]) {
  //     if (files[0].size > 500 * 1024) {
  //       setFormData({ ...formData, imageError: 'File size must be less than 500KB' });
  //     } else {
  //       setFormData({ ...formData, [name]: files[0] });
  //       setFormData({ ...formData, [`${name}Preview`]: URL.createObjectURL(files[0]) });
  //     }
  //   }
  // };
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      if (files[0].size > 500 * 1024) {
        setFormData(prevFormData => ({
          ...prevFormData,
          [name]: '',  // Clear the value if the file is too large
          imageError: 'File size must be less than 500KB'
        }));
      } else {
        setFormData(prevFormData => ({
          ...prevFormData,
          [name]: files[0],
          imageError: ''  // Clear error if file is valid
        }));
        if (name === 'ID_image1') {
          setID_image1Preview(URL.createObjectURL(files[0]));
        } else if (name === 'ID_image2') {
          setID_image2Preview(URL.createObjectURL(files[0]));
        }
      }
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleNext = () => {
    if (validateStep()) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setErrors({});
    }
  };

  const validateStep = () => {
    let newErrors = {};

    if (activeStep === 0) {
      if (!formData.name) newErrors.name = 'Please enter your name';
      if (!formData.email) newErrors.email = 'Please enter your email';
      if (!formData.password) newErrors.password = 'Please enter your password';
    }

    if (activeStep === 1) {
      if (!formData.phone) newErrors.phone = 'Please enter your phone number';
      if (!formData.sellersAddress) newErrors.sellersAddress = 'Please enter your address';
      if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Please enter your date of birth';
    }

    if (activeStep === 2) {
      if (!formData.ID_CardNumber) newErrors.ID_CardNumber = 'Please enter your ID Card number';
      if (!formData.ID_image1) newErrors.ID_image1 = 'Please upload your ID image (Front)';
      if (!formData.ID_image2) newErrors.ID_image2 = 'Please upload your ID image (Back)';
    }

    if (activeStep === 3) {
      if (!formData.Business_Name) newErrors.Business_Name = 'Please enter your business name';
      if (!formData.Business_Address) newErrors.Business_Address = 'Please enter your business address';
      if (!formData.Business_Type) newErrors.Business_Type = 'Please enter your business type';
      if (!formData.Business_registerationNumber) newErrors.Business_registerationNumber = 'Please enter your business registration number';
      if (!formData.Tax_IDNumber) newErrors.Tax_IDNumber = 'Please enter your Tax ID number';
    }

    if (activeStep === 4) {
      if (!formData.Bank_Name) newErrors.Bank_Name = 'Please enter your bank name';
      if (!formData.Bank_AccountNumber) newErrors.Bank_AccountNumber = 'Please enter your bank account number';
      if (!formData.Account_HolderName) newErrors.Account_HolderName = 'Please enter your account holder name';
      if (!formData.Branch_Code) newErrors.Branch_Code = 'Please enter your branch code';
      if (!formData.isSeller) newErrors.isSeller = 'You must agree to the terms to proceed';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateStep()) {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach(key => {
        formDataToSend.append(key, formData[key]);
      });

      try {
        const res = await AddSeller(formDataToSend);
        console.log('Seller created:', res);
      } catch (error) {
        console.error('Error creating seller:', error);
      }
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-4 signup-description">
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
                <Box className="stepper-buttons">
                  <Box sx={{ flex: '1 1 auto' }} />
                  <Button onClick={handleBack} className="stepper-button">
                    Back
                  </Button>
                  <Button onClick={handleSubmit} className="stepper-button">
                    Submit
                  </Button>
                </Box>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Form onSubmit={handleSubmit} className="form-container">
                  {/* Render form fields based on activeStep */}
                  {activeStep === 0 && (
                    <React.Fragment>
                      <Form.Group className="form-group">
                        <Form.Label className="form-label">Name:</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Name"
                          className="form-control"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          isInvalid={!!errors.name}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.name}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group className="form-group">
                        <Form.Label className="form-label">Email:</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter Email"
                          className="form-control"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.email}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group className="form-group">
                        <Form.Label className="form-label">Password:</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Enter Password"
                          className="form-control"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          isInvalid={!!errors.password}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.password}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </React.Fragment>
                  )}
                  {activeStep === 1 && (
                    <React.Fragment>
                      <Form.Group className="form-group">
                        <Form.Label className="form-label">Phone:</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Phone Number"
                          className="form-control"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          isInvalid={!!errors.phone}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.phone}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group className="form-group">
                        <Form.Label className="form-label">Address:</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Address"
                          className="form-control"
                          name="sellersAddress"
                          value={formData.sellersAddress}
                          onChange={handleChange}
                          isInvalid={!!errors.sellersAddress}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.sellersAddress}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group className="form-group">
                        <Form.Label className="form-label">Date of Birth:</Form.Label>
                        <Form.Control
                          type="date"
                          placeholder="Enter Date of Birth"
                          className="form-control"
                          name="dateOfBirth"
                          value={formData.dateOfBirth}
                          onChange={handleChange}
                          isInvalid={!!errors.dateOfBirth}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.dateOfBirth}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </React.Fragment>
                  )}
                  {activeStep === 2 && (
                    <React.Fragment>
                      <Form.Group className="form-group">
                        <Form.Label className="form-label">ID Card Number:</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter ID Card Number"
                          className="form-control"
                          name="ID_CardNumber"
                          value={formData.ID_CardNumber}
                          onChange={handleChange}
                          isInvalid={!!errors.ID_CardNumber}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.ID_CardNumber}
                        </Form.Control.Feedback>
                      </Form.Group>
                      {/* <Form.Group className="form-group">
                        <Form.Label className="form-label">ID Image (Front):</Form.Label>
                        <Form.Control
                          type="file"
                          name="ID_image1"
                          onChange={handleFileChange}
                          isInvalid={!!errors.ID_image1}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.ID_image1}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group className="form-group">
                        <Form.Label className="form-label">ID Image (Back):</Form.Label>
                        <Form.Control
                          type="file"
                          name="ID_image2"
                          onChange={handleFileChange}
                          isInvalid={!!errors.ID_image2}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.ID_image2}
                        </Form.Control.Feedback>
                      </Form.Group>
                      {formData.imageError && (
                        <div className="text-danger">{formData.imageError}</div>
                      )} */}
                      <Form.Group controlId="formIDImage1" style={{ textAlign: 'left', marginBottom: '20px' }}>
        <Form.Label style={{ color: '#001F3F', fontWeight: 'bold', marginLeft: '30%' }}>ID Image (Front):</Form.Label>
        <div className="image-upload-container" style={{ textAlign: 'center', marginBottom: '20px' }}>
          <label htmlFor="file-upload-front" className="image-upload-label" style={{ cursor: 'pointer', display: 'inline-block', border: '2px dashed #001F3F', borderRadius: '8px', padding: '20px', width: '100%', maxWidth: '300px', margin: '0 auto' }}>
            <Image size={48} style={{ color: '#001F3F' }} />
            <p style={{ color: '#001F3F', marginTop: '10px' }}>Click or Drag to upload front image</p>
            <input
              id="file-upload-front"
              type="file"
              name="ID_image1"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
          </label>
        </div>
        {ID_image1 && (
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
            <div style={{ margin: '10px' }}>
              <img src={URL.createObjectURL(ID_image1)} alt="ID Image Front" style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '4px' }} />
              <p style={{ textAlign: 'center', color: '#001F3F' }}>{ID_image1.name}</p>
            </div>
          </div>
        )}
        <Form.Control.Feedback type="invalid">
          {errors.ID_image1}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formIDImage2" style={{ textAlign: 'left', marginBottom: '20px' }}>
        <Form.Label style={{ color: '#001F3F', fontWeight: 'bold', marginLeft: '30%' }}>ID Image (Back):</Form.Label>
        <div className="image-upload-container" style={{ textAlign: 'center', marginBottom: '20px' }}>
          <label htmlFor="file-upload-back" className="image-upload-label" style={{ cursor: 'pointer', display: 'inline-block', border: '2px dashed #001F3F', borderRadius: '8px', padding: '20px', width: '100%', maxWidth: '300px', margin: '0 auto' }}>
            <Image size={48} style={{ color: '#001F3F' }} />
            <p style={{ color: '#001F3F', marginTop: '10px' }}>Click or Drag to upload back image</p>
            <input
              id="file-upload-back"
              type="file"
              name="ID_image2"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
          </label>
        </div>
        {ID_image2 && (
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
            <div style={{ margin: '10px' }}>
              <img src={URL.createObjectURL(ID_image2)} alt="ID Image Back" style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '4px' }} />
              <p style={{ textAlign: 'center', color: '#001F3F' }}>{ID_image2.name}</p>
            </div>
          </div>
        )}
        <Form.Control.Feedback type="invalid">
          {errors.ID_image2}
        </Form.Control.Feedback>
      </Form.Group>
                    </React.Fragment>
                  )}
                  {activeStep === 3 && (
                    <React.Fragment>
                      <Form.Group className="form-group">
                        <Form.Label className="form-label">Business Name:</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Business Name"
                          className="form-control"
                          name="Business_Name"
                          value={formData.Business_Name}
                          onChange={handleChange}
                          isInvalid={!!errors.Business_Name}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.Business_Name}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group className="form-group">
                        <Form.Label className="form-label">Business Address:</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Business Address"
                          className="form-control"
                          name="Business_Address"
                          value={formData.Business_Address}
                          onChange={handleChange}
                          isInvalid={!!errors.Business_Address}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.Business_Address}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group className="form-group">
                        <Form.Label className="form-label">Business Type:</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Business Type"
                          className="form-control"
                          name="Business_Type"
                          value={formData.Business_Type}
                          onChange={handleChange}
                          isInvalid={!!errors.Business_Type}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.Business_Type}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group className="form-group">
                        <Form.Label className="form-label">Business Registration Number:</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Business Registration Number"
                          className="form-control"
                          name="Business_registerationNumber"
                          value={formData.Business_registerationNumber}
                          onChange={handleChange}
                          isInvalid={!!errors.Business_registerationNumber}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.Business_registerationNumber}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group className="form-group">
                        <Form.Label className="form-label">Tax ID Number:</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Tax ID Number"
                          className="form-control"
                          name="Tax_IDNumber"
                          value={formData.Tax_IDNumber}
                          onChange={handleChange}
                          isInvalid={!!errors.Tax_IDNumber}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.Tax_IDNumber}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </React.Fragment>
                  )}
                  {activeStep === 4 && (
                    <React.Fragment>
                      <Form.Group className="form-group">
                        <Form.Label className="form-label">Bank Name:</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Bank Name"
                          className="form-control"
                          name="Bank_Name"
                          value={formData.Bank_Name}
                          onChange={handleChange}
                          isInvalid={!!errors.Bank_Name}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.Bank_Name}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group className="form-group">
                        <Form.Label className="form-label">Bank Account Number:</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Bank Account Number"
                          className="form-control"
                          name="Bank_AccountNumber"
                          value={formData.Bank_AccountNumber}
                          onChange={handleChange}
                          isInvalid={!!errors.Bank_AccountNumber}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.Bank_AccountNumber}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group className="form-group">
                        <Form.Label className="form-label">Account Holder Name:</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Account Holder Name"
                          className="form-control"
                          name="Account_HolderName"
                          value={formData.Account_HolderName}
                          onChange={handleChange}
                          isInvalid={!!errors.Account_HolderName}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.Account_HolderName}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group className="form-group">
                        <Form.Label className="form-label">Branch Code:</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Branch Code"
                          className="form-control"
                          name="Branch_Code"
                          value={formData.Branch_Code}
                          onChange={handleChange}
                          isInvalid={!!errors.Branch_Code}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.Branch_Code}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group className="form-group form-check">
                        <Form.Check
                          type="checkbox"
                          label="I agree to the terms and conditions"
                          name="isSeller"
                          checked={formData.isSeller}
                          onChange={handleChange}
                          isInvalid={!!errors.isSeller}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.isSeller}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </React.Fragment>
                  )}
                  <Box className="stepper-buttons">
                    <Button onClick={handleBack} className="stepper-button" disabled={activeStep === 0} style={{ marginRight: '10px',backgroundColor:'#001F3F',color:'white', borderRadius: '0.25rem' }}>
                      Back
                    </Button>
                    <Button onClick={handleNext} className="stepper-button" style={{ marginRight: '10px',backgroundColor:'#001F3F',color:'white', borderRadius: '0.25rem' }}>
                      {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
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
