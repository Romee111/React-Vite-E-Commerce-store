import axios from "axios";


export function useAuth() {
    const login = async (email, password) => {
        try {
            const response = await axios.post("http://localhost:2900/userauth/login", { email, password });
            console.log(response.data);
            const data = response.data;
            localStorage.setItem('user', JSON.stringify(data));
            console.log(data);
            return data;
        } catch (err) {
            console.log(err);   

        }
        };

        const forgetPassoword=async(email)=>{
            try{
                const response=await axios.post("http://localhost:2900/userauth/forgotPassword",{email})
                console.log(response.data)
                const data=response.data
                return data
            }
            catch(err){
                console.log(err)
        }
     };

        const register=async(firstName,lastName,email,password,phone,isAdmin,address1,address2,city,pincode,country,state,isShipper,image)=>{   
            try{
                  const response=await axios.post("http://localhost:2900/userauth/register",{firstName,lastName,email,password,phone,isAdmin,address1,address2,city,pincode,country,state,isShipper,image})
                  console.log(response.data)
                  const data=response.data
                  return data
              }
              catch(err){
                  console.log(err)
          } 
        };

        const logout =async()=>{
            const response=await axios.get("http://localhost:2900/userauth/logout")
            console.log(response.data)
            const data=response.data
            return data
        };  
        const resetPassword=async(token,password)=>{
            try {
                const response=await axios.post("http://localhost:2900/userauth/resetPassword",{token,password})
                console.log(response.data)
                const data=response.data
                return data
            } catch (err) {
                console.log(err)
            }
        };
    return { login, forgetPassoword,register,logout,resetPassword };

}