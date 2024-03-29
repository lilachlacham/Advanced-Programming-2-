
import './login.css';
import {useNavigate} from 'react-router-dom';
import { userIdentification } from '../DataBase/dataBase';


function Login(){
    
    const navigate = useNavigate();
    return(
    <div className="login">
    <div className="title">
        Login
    </div>
    <form>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Username:</label>
            <input type="name" id="userName"  className="form-control"></input>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password:</label>
            <input type="password" className="form-control"  id="exampleInputPassword1"></input>
        </div>
        <button type="button" className="btn btn-light" onClick={() =>userIdentification(document.getElementById('userName').value ,document.getElementById('exampleInputPassword1').value)} >login </button>
    </form> 
    <span> Not registered?
        <button type="button" className="btn btn-link" onClick={() => navigate("/Register")} >click here </button>
    <span>to register</span>
    </span>
    </div>
    );
}



export default Login;