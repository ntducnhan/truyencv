import { Button, Checkbox, Container, FormControlLabel, FormGroup } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoLogin from "../image/logoLogin.png"
import { useHistory } from "react-router";
import NovelServices from '../services/NovelServices'



export default function SignUp(){

    const [users, setListUsers] = useState([])
   
    const history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

   
    useEffect(()=> {
        getUser()
    },[])

    let list3 = []
    const getUser = () => {
        NovelServices.getAllUser()
        .then((response) =>{       
            list3 = response;  
            console.log('res:', response)
            setListUsers(list3)
        })
        .catch( (error) => console.log(error))
    }
    console.log("users",users)

    const signUp = () => {
        localStorage.setItem('email', email)
        localStorage.setItem('password', password)
  
        
        NovelServices.CreateUser({username: email, password: password}).then( response => {
            console.log("response",response)
            getUser();
         })

         history.push("/sign-in")
        
    }


    return <>
        <div className="main">
            <div className="main-left"></div>
            <div className="main-right">
                <div className="main-signIn1">
                    <Container>
                        <div className="logoLogin">
                            <img src={logoLogin} alt="#" />
                        </div>
                        <div className="contain">
                            <p>ĐĂNG KÝ NGAY</p>
                            <p>Hãy tạo tài khoản và tận hưởng những chương truyện hay nhất ngay sau khi đăng nhập vào hệ thống</p>
                        </div>
                        <div className="inputSignIn">
                            <input type="email" onChange = {(event) => setEmail(event.target.value)} placeholder="Tên tài khoản"/><br></br>
                            <input type="password" onChange = {(event) => setPassword(event.target.value)}  placeholder="Mật khẩu"/>
                        </div>
                        <div className="forgotPass">
                        <Button variant="contained" color="primary" className="btnLogin" onClick={signUp}>
                        ĐĂNG KÝ
                        </Button>
                        </div>
                       
                        <p>Bạn đã có tài khoản rồi?<span><Link to="/sign-in" className="linkUp" style={{textDecoration:"none", paddingLeft:"5%"}}>Đăng nhập</Link></span></p>
                    </Container>
                </div>
            </div>
        </div>
    </>
}