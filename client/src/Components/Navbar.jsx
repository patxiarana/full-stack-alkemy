import React, {useEffect, useState } from 'react'
import styled from 'styled-components'
import BurguerButton from './Burgerbutton'
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import './button.css'
import Home from './Home'


const Navbar = () =>{

  useEffect(()=>{
    const loggedUserJSON = window.localStorage.getItem('token')
       setUser(loggedUserJSON)
      },[])
    
  let navigate = useNavigate();
  const [user,setUser] = useState('');
    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
      //cuando esta true lo pasa a false y vice versa
      setClicked(!clicked)
      navigate("/NavBar")
    }

    const handleLogout = e => {
 
      Swal.fire({
          title: 'esta seguro?',
          text: "usted esta cerrando sesion",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si!'
        }).then((result) => {
          if(result.isConfirmed) {
             setUser(null)
            window.localStorage.removeItem('token')
            window.location.reload();
          navigate("/user/SignIn")
            }
        })
   }





    return(
<>
<ContainerNav>
    <h2>FULL STACK <span>ALKEMY</span></h2>
    <div className={`links ${clicked ? 'active' : ''}`}>
          <a onClick={handleClick} href="/home">Home</a>
          <a onClick={handleClick} href="/user/SignIn" >iniciar sesion</a>
          <a onClick={handleClick} href="/user/SignUp">Registrarse</a>
         <button className='button' ><a onClick={handleLogout}>cerrar sesion</a></button>
        </div>
        <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
</ContainerNav>
</>

    )
}

export default Navbar;

const ContainerNav = styled.nav`
h2{
    color: white;
     font-weight: 400;
    span{
      font-weight: bold;
    }
  }
  padding: .4rem;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }
  .burguer{
    @media(min-width: 768px){
      display: none;
    }
  }
`

const BgDiv = styled.div`
  background-color: #222;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`