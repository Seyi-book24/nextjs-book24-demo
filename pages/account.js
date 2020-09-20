import Head from "next/head";
import React, { Component} from "react";
import Header from '../components/header';
import SignInModal from '../components/signInModal';
import Footer from "../components/footer";
import $ from 'jquery';

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  async componentDidMount() {}
  
  render() {
    return (
      <div>
        <Head>
             <meta name="description" content="SPARKER - Premium directory and listings template by Ansonika."/>
    <meta name="author" content="Ansonika"/>
    <title>SPARKER | Premium directory and listings template by Ansonika.</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
    <link href="css/bootstrap.min.css" rel="stylesheet"/>
    <link href="css/style.css" rel="stylesheet"/>
	<link href="css/vendors.css" rel="stylesheet"/>
    <link href="css/custom.css" rel="stylesheet"/>
        </Head>
        <div id="page">
		<Header/>
		<div className="sub_header_in sticky_header">
		<div className="container">
			<h1>Account</h1>
		</div>
	</div>
    <main>
		<div className="container margin_60">
			<div className="row justify-content-center">
			<div className="col-xl-6 col-lg-6 col-md-8">
				<div className="box_account">
					<h3 className="client">Already Client</h3>
					<div className="form_container">
						<div className="row no-gutters">
							<div className="col-lg-6 pr-lg-1">
								<a href="#0" className="social_bt facebook">Login with Facebook</a>
							</div>
							<div className="col-lg-6 pl-lg-1">
								<a href="#0" className="social_bt google">Login with Google</a>
							</div>
						</div>
						<div className="divider"><span>Or</span></div>
						<div className="form-group">
							<input type="email" className="form-control" name="email"
                             id="email" placeholder="Email*"/>
						</div>
						<div className="form-group">
							<input type="password" className="form-control" name="password_in" 
                            id="password_in" value="" placeholder="Password*"/>
						</div>
						<div className="clearfix add_bottom_15">
							<div className="checkboxes float-left">
								<label className="container_check">Remember me
									<input type="checkbox"/>
									<span className="checkmark"></span>
								</label>
							</div>
							<div className="float-right"><a id="forgot" href="javascript:void(0);">
                            Lost Password?</a></div>
						</div>
						<div className="text-center"><input type="submit" value="Log In" 
                        className="btn_1 full-width"/></div>
						<div id="forgot_pw">
							<div className="form-group">
								<input type="email" className="form-control" name="email_forgot" 
                                id="email_forgot" placeholder="Type your email"/>
							</div>
							<p>A new password will be sent shortly.</p>
							<div className="text-center">
                            <input type="submit" value="Reset Password" className="btn_1"/></div>
						</div>
					</div>
				</div>
				<div className="row hidden_tablet">
					<div className="col-md-6">
						<ul className="list_ok">
							<li>Find Locations</li>
							<li>Quality Location check</li>
							<li>Data Protection</li>
						</ul>
					</div>
					<div className="col-md-6">
						<ul className="list_ok">
							<li>Secure Payments</li>
							<li>H24 Support</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-8">
				<div className="box_account">
					<h3 className="new_client">New Client</h3> <small className="float-right pt-2">* Required Fields</small>
					<div className="form_container">
						<div className="form-group">
							<input type="email" className="form-control" name="email" id="email" placeholder="Email*"/>
						</div>
						<div className="form-group">
							<input type="password" className="form-control" name="password_in_2" id="password_in_2" value="" placeholder="Password*"/>
						</div>
						<hr/>
						<div className="form-group">
							<label className="container_radio" style="display: inline-block; margin-right: 15px;">Private
								<input type="radio" name="client_type" checked value="private"/>
								<span className="checkmark"></span>
							</label>
							<label className="container_radio" style="display: inline-block;">Company
								<input type="radio" name="client_type" value="company"/>
								<span className="checkmark"></span>
							</label>
						</div>
						<div className="private box">
							<div className="row no-gutters">
								<div className="col-6 pr-1">
									<div className="form-group">
										<input type="text" className="form-control" placeholder="Name*"/>
									</div>
								</div>
								<div className="col-6 pl-1">
									<div className="form-group">
										<input type="text" className="form-control" placeholder="Last Name*"/>
									</div>
								</div>
								<div className="col-12">
									<div className="form-group">
										<input type="text" className="form-control" placeholder="Full Address*"/>
									</div>
								</div>
							</div>
							<div className="row no-gutters">
								<div className="col-6 pr-1">
									<div className="form-group">
										<input type="text" className="form-control" placeholder="City*"/>
									</div>
								</div>
								<div className="col-6 pl-1">
									<div className="form-group">
										<input type="text" className="form-control" placeholder="Postal Code*"/>
									</div>
								</div>
								<div className="col-12">
									<div className="form-group">
										<div className="custom-select-form">
											<select className="wide add_bottom_10" name="country" id="country">
													<option value="" selected>Country*</option>
													<option value="Europe">Europe</option>
													<option value="United states">United states</option>
													<option value="Asia">Asia</option>
											</select>
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-12">
									<div className="form-group">
										<input type="text" className="form-control" placeholder="Telephone *"/>
									</div>
								</div>
							</div>
						</div>
						<div className="company box" style="display: none;">
							<div className="row no-gutters">
								<div className="col-12">
									<div className="form-group">
										<input type="text" className="form-control" placeholder="Company Name*"/>
									</div>
								</div>
								<div className="col-12">
									<div className="form-group">
										<input type="text" className="form-control" placeholder="Full Address"/>
									</div>
								</div>
							</div>
							<div className="row no-gutters">
								<div className="col-6 pr-1">
									<div className="form-group">
										<input type="text" className="form-control" placeholder="City*"/>
									</div>
								</div>
								<div className="col-6 pl-1">
									<div className="form-group">
										<input type="text" className="form-control" placeholder="Postal Code*"/>
									</div>
								</div>
								<div className="col-12">
									<div className="form-group">
										<div className="custom-select-form">
											<select className="wide add_bottom_10" name="country" id="country">
													<option value="" selected>Country*</option>
													<option value="Europe">Europe</option>
													<option value="United states">United states</option>
													<option value="Asia">Asia</option>
											</select>
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-12">
									<div className="form-group">
										<input type="text" className="form-control" placeholder="Telephone *"/>
									</div>
								</div>
							</div>
						</div>
						<hr/>
						<div className="form-group">
							<label className="container_check">Accept <a href="#0">
                            Terms and conditions</a>
								<input type="checkbox"/>
								<span className="checkmark"></span>
							</label>
						</div>
						<div className="text-center">
                        <input type="submit" value="Register" className="btn_1 full-width"/></div>
					</div>
				</div>
			</div>
		</div>
		</div>
	</main>
	<Footer/>
	</div>
	<SignInModal />	
	<div id="toTop"></div>
    <script src="js/common_scripts.js"></script>
	<script src="js/functions.js"></script>
	<script src="assets/validate.js"></script>
    <script>{`
		$('.wish_bt.liked').on('click', function (c) {
			$(this).parent().parent().parent().fadeOut('slow', function (c) {});
		});
        `}</script>
        {/* <style global jsx>{`
          body {
            background: #fff;
          }
        `}</style> */}
      </div>
    );
  }
}
export default Account;
