import React from 'react'
import "./Login.css"
import { Button } from '@material-ui/core'
import { auth, provider } from './firebase'
function Login() {

  const signIn = () => {
    //sing in ...


    //先在firebase.js  先定義auth //
    //建立登入認證//
    auth
      //Popup 彈出視窗
      .signInWithPopup(provider)
      .then(result => {
        console.log(result)
      })

      .catch((error) => { alert(error.message) })

  }

  return (


    <div className="login" >
      <div className="login_logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png" alt="" />

        <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt="" />

      </div>
      <Button type="submit" onClick={signIn}>

        Sign In 登入

      </Button>

    </div >
  )
}

export default Login
