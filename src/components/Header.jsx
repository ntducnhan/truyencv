import { Box, Container } from "@material-ui/core";
import logo from '../image/logo.png'
import DehazeIcon from '@material-ui/icons/Dehaze';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import EventNoteIcon from '@material-ui/icons/EventNote';
import { AiOutlineSearch } from 'react-icons/ai';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


import { useState } from "react";
import swal from "sweetalert";

export default function Header(){
        const [getNameNovel,setGetNameNovel] = useState("")
        // tim kiem truyen 

    
        //GetNovelById;
           const getNameNovels = () => {
            sessionStorage.setItem("nameNovel",getNameNovel )

         }

    const removeItem = () => {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        window.location.reload();
    }

    const checkLogin = () => {
        if(localStorage.getItem("email") == null){
            return  <div className="log">
            <span><Link to="/sign-in" className="linkSign">Đăng nhập </Link></span>
            <span><Link to="/sign-in" className="linkSign">Đăng ký</Link></span>
            </div>
        }
        else {
            return <p>{localStorage.getItem("email")} <span onClick={removeItem}>Đăng xuất</span> </p>
        }
    }

    const handleAlert = () => {
        swal ( "Oops" ,  "Chức năng đang trong quá trình nâng cấp!" ,  "error" )
    }

  
    return<>
        <div className="header">
            <div className="nav-header">
                <Container fixed id="loginSignup">
                    {
                        checkLogin()
                    }
                </Container>              
            </div>
            <div className="logo-content">
                <Container fixed className="container-logo">
                    <Box className="headerclass" display="flex" justifyContent="center" alignItems="center">
                        <div className="logo">
                          <Link to="/"><img className="imgLogo" src={logo} alt=""/></Link>
                        </div>
                        <div className="search">
                            <input className="inputSearch" type="text" placeholder="Tìm kiếm"  onChange={(event) => setGetNameNovel(event.target.value)} />
                            <span style={{paddingLeft:'3%'}}><Link to="/tim-kiem" ><AiOutlineSearch onClick={() => getNameNovels()} style={{color:"orange", fontSize:'25px', border:'1px solid orange'}}/></Link></span>
                        </div>
                        <div className="tutruyen">
                            <ul>
                                <li><a href="#">
                                    <Link to='/account'><EventNoteIcon/>Tủ truyện</Link>
                                    </a></li>
                            </ul>
                        </div>
                    </Box>                  
                </Container>                 
            </div>
            <div className="menu-header">
                <Container fixed className="container-menu">
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <div className="main-menu">
                            <div className="menu-left">
                                <ul className="lstTheLoai">
                                    <li><a href="#">
                                        <DehazeIcon /> Thể loại
                                        </a></li>
                                </ul>
                                <ul className="lstBXH">
                                    <li><a href="#">
                                        Bảng Xếp Hạng
                                        </a></li>
                                </ul>
                            </div>
                            <div className="menu-right">
                                <ul className="btnUpload" onClick={() => handleAlert()}>
                                    <li><a href="#">
                                        <CloudUploadIcon style={{marginRight:'5px'}}/> Đăng 
                                        </a></li>
                                </ul>
                            </div>                       
                        </div>
                    </Box>                  
                </Container>                 
            </div>
        </div>
    </>
}