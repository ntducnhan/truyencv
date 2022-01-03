import { Button, Checkbox, Container, FormControlLabel, FormGroup } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoLogin from "../image/logoLogin.png"
import { useHistory } from "react-router";
import NovelServices from '../services/NovelServices'


export default function SignIn(props){
    const history = useHistory();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [users, setListUsers] = useState([])


    useEffect(() => {
        getUser();
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



    const username = users.map(item => item.username)
    console.log("username",username)
    const passw = users.map(item => item.password)
    console.log("passw",passw)

   
    

    const signIn = () => {
        
           if( username.find(item => item === email) && passw.find(item => item === password)){
              
               localStorage.setItem('email', email)
               localStorage.setItem('password', password)
               return history.push('/index') 
           }
           else {
               return alert ("sai mat khau hoac tai khoan")
           }
   
    }
    return <>
        <div className="main-signIn">
            <Container>
                <div className="logoLogin">
                    <img src={logoLogin} alt="#" />
                </div>
                <p>Nếu chưa có tài khoản, vui lòng đăng ký tài khoản mới. Tài khoản ở truyencv không thể đăng nhập ở đây</p>
                <div className="inputSignIn">
                    <input type="email" placeholder="Tên tài khoản" onChange = {(event) => setEmail(event.target.value)}/><br></br>
                    <input type="password" placeholder="Mật khẩu" onChange = {(event) => setPassword(event.target.value)}/>
                </div>
                <div className="forgotPass">
                <FormGroup className="formCheckbox">
                    <FormControlLabel className="checkPassword"control={<Checkbox defaultChecked />} label="Nhớ truy cập lần sau" />
                    <span>Quên mật khẩu</span>
                </FormGroup>
                <Button variant="contained" color="primary" className="btnLogin" onClick={signIn}>
                ĐĂNG NHẬP
                </Button>
                </div>
                <p><i>Hệ thống dừng cho phép đăng nhập thông qua Facebook, Google. Nếu bạn muốn tiếp tục sử dụng tài khoản đọc truyện cũ đã từng đăng nhập thông qua Facebook, Google hãy vào mục <a href="#" style={{color:"skyblue",textDecoration:"none"} }>Quên mật khẩu?</a> sau đó điền email tài khoản Facebook, Google của bạn để tạo mật khẩu</i> </p>
                <p>Bạn chưa có tài khoản <span><Link to="/sign-up" className="linkUp" style={{textDecoration:"none"}}>Đăng ký</Link></span></p>
            </Container>
        </div>
    </>
}