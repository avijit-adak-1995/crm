import CompanyInfo from "@/components/auth/CompanyInfo";
import ForgotPasswoed from "@/components/auth/ForgotPasswoed";
import SetNewPasswoed from "@/components/auth/SetNewPasswoed";
import SignIn from "@/components/auth/SignIn";
import SignUp from "@/components/auth/SignUp";
import VerifyOTP from "@/components/auth/VerifyOTP";
import {
  useUserRegisterMutation,
  useUserLoginMutation,

} from "@/store/services/authApi"
import Styles from '@/styles/Home.module.css'
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";
export default function Home() {
  const router = useRouter()
  const [authTitle, setAuthTitle] = useState('logins')
  const [Userregister]: any = useUserRegisterMutation();
  const [Userlogin]: any = useUserLoginMutation();
  const [data, setData] = useState({
    name: 'Niraj',
    email: "niraj@gmail.com",
    password: "12345"
  })
  const [loginData, setLoginData] = useState({
    email: 'niraj.inquiry@gmail.com',
    password: 'niraj@123'
  })
  const handleLogin = async () => {
    const login: any = await Userlogin(loginData)
    localStorage.setItem('userToken', JSON.stringify(login.data.token))
    console.log({ login: login.data.Token });
    if (login.data.token) {
      toast.success('Sucessfully logged in')
      router.push('/dashboard')
    }
  }
  const handleRegister = async () => {
    const register: any = await Userregister(data);
    console.log({ register });
  }
  const filterdata = ['login', 'register', 'forgotpassword', 'verifyOtp', 'resetPass', 'step6', 'step7', 'step8', 'step9', "step10", "orgInfo"]
  const [selectedItem, setSelectedItem] = useState(filterdata[0]);
  const [content, setContent] = useState({
    heads: "Sign In to\nArulity Dashboard",
    msg: "if you don’t an account\nyou can",
    image: "/assets/auth.png",
  });
  const handleItemClick = (item: any) => {
    setSelectedItem(item);
    switch (item) {
      case "login":
        setContent(() => ({
          heads: "Sign In to\nArulity Dashboard",
          msg: "if you don’t an account\nyou can",
          image: "/assets/auth.png",
        }));
        break;
      case "register":
        setContent((pre) => ({
          ...pre,
          msg: "Already Have an account?\n",
          image: "/assets/authMsg.png",
        }));
        break;
      case "forgotpassword":
        setContent({
          heads: 'No Worries!\nWe"ll Get You Back',
          msg: "Already Have an account?\n",
          image: "/assets/authWomen.png",
        });
        break;
      case "verifyOtp":
        setContent({
          heads: "Verify OTP to\nReset Password",
          msg: "Already Have an account?\n",
          image: "/assets/authOtp.png",
        });
        break;
      case "resetPass":
        setContent(() => ({
          heads: "Sign In to\nArulity Dashboard",
          msg: "Already Have an account?\n",
          image: "/assets/authOtp.png",
        }));
        break;
    }
  };
  let renderComponents;

  switch (selectedItem) {
    case 'login':
      renderComponents = <SignIn handleItemClick={handleItemClick} handleLogin={handleLogin} />;
      break;
    case "register":
      renderComponents = <SignUp handleItemClick={handleItemClick} />
      break;
    case "forgotpassword":
      renderComponents = <ForgotPasswoed handleItemClick={handleItemClick} />
      break;
    case "verifyOtp":
      renderComponents = <VerifyOTP handleItemClick={handleItemClick} />
      break;
    case 'resetPass':
      renderComponents = <SetNewPasswoed handleItemClick={handleItemClick} />
      break;
    case 'orgInfo':
      renderComponents = <CompanyInfo handleItemClick={handleItemClick}  />
      break;
    default:
      renderComponents = <SignIn handleItemClick={handleItemClick} />;
      break;
  }



  return (
    <>
      <div className={`container  `}>
        <div className="row">
          <div className="col-12">
            <div className={Styles.authContainer}>
              <div className={Styles.authLeft}>
                <div className={Styles.gradientBox}></div>
                <div className={Styles.gradientBoxPurple}></div>
                <h3>{content.heads}</h3>
                <p>
                  {content.msg}
                  <strong>&nbsp;Register here!</strong>
                </p>
              </div>
              <img src={content?.image} className={Styles.authMedium} />
              <div className={Styles.authRight}>
                <div className="text-center mt-4 mb-2">
                  <img src="/assets/Aurolity.svg" height={60} alt="" />
                </div>
                {renderComponents}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <h2>jhkbkmb</h2>
      <button onClick={()=>handleRegister()} >Register</button><br /><br />
      <button onClick={()=>handleLogin()} >login</button> */}
    </>
  )
}
