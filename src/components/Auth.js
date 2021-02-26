import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import "./Auth.css";
import defaultImg from "../images/login.jpg";

export default class Auth extends Component {
	signedIn = false;

	loginSuccess = (res) => {
		console.log(res);
		console.log(res.profileObj);
		this.signedIn = true;
		this.props.history.push("/home");
	};
	render() {
		return (
            <>
            <div className='container'>
            <div className='row '>
                <h3 className=' cen text-muted' >Demo Project</h3>
            </div>

            </div>
			<div className="container ht">
				<div className="card width">
					<img src={defaultImg} alt="login" className="card-img-top " />
					<div className="card-body text-center">
						<h5 className="card-title">React Demo</h5>
						<p className="card-text">Login To Continue</p>
						<div className="text-center">
							<GoogleLogin
								clientId="717166574135-05tau200hm1413t0ras9j3o10o8kh49v.apps.googleusercontent.com"
								onSuccess={this.loginSuccess}
								cookiePolicy="single_host_origin"
							/>
						</div>
					</div>
				</div>
			</div>
            </>
		);
	}
}
