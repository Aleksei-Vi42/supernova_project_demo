import React from "react"
import {LoginReduxForm} from "./LoginForm";
import {connect} from "react-redux";
import {loginUserThunkCreator} from "../Redux/AuthReducer";
import {Redirect} from "react-router-dom";


const LoginPageContainer = (props) => {


  let  loginUser = (formData) => {
       props.login(formData.email, formData.password, formData.isRememberMe)
    }

    if(props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={loginUser}/>
    </div>

}

let mapStateToProps = (state) => {
    return {
       isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps, {login :loginUserThunkCreator} )(LoginPageContainer)
