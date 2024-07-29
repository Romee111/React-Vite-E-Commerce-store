import React from 'react'
import { Form } from 'react-bootstrap';
import useSellers from '../hooks/sellershook';
import { useEffect,useState } from 'react';
function sellersSignup() {
  const { AddSeller} =useSellers();
  const [error, setError] = useState('');
 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    
  });

  const handleChange = (e) => {
    const { name,type, value, checked } = e.target;
  
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
     
    })

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await AddSeller(formData);
      console.log(formData);
    } catch (err) {
      setError(err.response.data);
    }
  }

  return (
    <div>
      <h1 style={{textAlign:'center',marginTop:'5%' }}>Welcome to Restorex Seller's portal</h1>
      <div className="container">
        <div className="row" style={{justifyContent:'center',marginTop:'5%'}}>
          <div className="col-6">
          <p>Sign up to sell on Restorex and start selling today!   </p> 
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, nemo dolor. Consequuntur culpa aliquam impedit assumenda corrupti eius in nemo maiores enim repellat ipsam optio debitis, veritatis qui reiciendis vero magni deserunt neque deleniti dicta quo. Sint minima eius consequuntur, in laboriosam pariatur maxime totam perferendis? Quidem quisquam iusto omnis, perferendis adipisci voluptatem, autem officiis sed id culpa quaerat velit ex. Illo rem veritatis nesciunt labore, iusto aut nobis eius quaerat aliquam vitae. Minus accusamus dolorum, perferendis vitae ex dolore!
            

          </p>

          </div>
          <div className="col-6">
              
       <Form.Group style={{width:'75%',margin:'auto',justifyContent:'center',borderRadius:'10px',border:'1px solid white',boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1)' }} onSubmit={handleSubmit}> 
         <Form.Label style={{fontWeight:'bold',color:"#001F3F",marginLeft:'35px',marginTop:'10px'}}>Name:</Form.Label>
         <Form.Control
           type="text"
           style={{width:'80%',margin:'auto',justifyContent:'center',borderRadius:'10px',border:'1px solid white',boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1)' }}
           placeholder="Enter Name"
           value={formData.name} onChange={handleChange}
         />
         <Form.Label style={{fontWeight:'bold',color:"#001F3F",marginLeft:'35px',marginTop:'10px'}}>Email:</Form.Label>
         <Form.Control
           type="email"
           style={{width:'80%',margin:'auto',justifyContent:'center',borderRadius:'10px',border:'1px solid white',boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1)' }}
           placeholder="Enter Email"
           value={formData.email} onChange={handleChange}
         />
         <Form.Label style={{fontWeight:'bold',color:"#001F3F",marginLeft:'35px',marginTop:'10px'}}>Password:</Form.Label>
         <Form.Control
           type="password"
           style={{width:'80%',margin:'auto',justifyContent:'center',borderRadius:'10px',border:'1px solid white',boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1)' }}
           placeholder="Enter Password"
           value={formData.password} onChange={handleChange}
         />
        
       
         <button  type="submit" style={{width:'20%',marginTop:'10px',marginBottom:'10px',justifyContent:'center',borderRadius:'10px',border:'1px solid white',boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1)',backgroundColor:'#001F3F',color:'white',marginLeft:'75%' }}>Next</button>
       </Form.Group>
        </div>
      </div>
    </div>
    </div>
  )
}

export default sellersSignup
