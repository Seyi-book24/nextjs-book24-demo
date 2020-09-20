import Head from "next/head";
import React, { Component} from "react";
import Header from '../components/header';
import SignInModal from '../components/signInModal';
import Footer from "../components/footer";
import $ from 'jquery';

class Bookings extends Component {
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
			<h1>Bookings</h1>
		</div>
	</div>
    <main>
		<div class="container margin_60_35">
			<div class="box_booking">
				
				<div class="strip_booking">
					<div class="row">
						<div class="col-lg-2 col-md-2">
							<div class="date">
								<span class="month">Dec</span>
								<span class="day"><strong>23</strong>Sat</span>
							</div>
						</div>
						<div class="col-lg-6 col-md-5">
							<h3 class="hotel_booking">Hotel Mariott Paris<span>2 Adults / 2 Nights</span></h3>
						</div>
						<div class="col-lg-2 col-md-3">
							<ul class="info_booking">
								<li><strong>Booking id</strong> 23442</li>
								<li><strong>Booked on</strong> Sat. 23 Dec. 2018</li>
							</ul>
						</div>
						<div class="col-lg-2 col-md-2">
							<div class="booking_buttons">
								<a href="#0" class="btn_2">Edit</a>
								<a href="#0" class="btn_3">Cancel</a>
							</div>
						</div>
					</div>
					{/* <!-- /row --> */}
				</div>
				{/* <!-- /strip booking --> */}

				<div class="strip_booking">
					<div class="row">
						<div class="col-lg-2 col-md-2">
							<div class="date">
								<span class="month">Dec</span>
								<span class="day"><strong>27</strong>Fri</span>
							</div>
						</div>
						<div class="col-lg-6 col-md-5">
							<h3 class="restaurant_booking">Da Alfredo<span>2 Adults / 2 Childs</span></h3>
						</div>
						<div class="col-lg-2 col-md-3">
							<ul class="info_booking">
								<li><strong>Booking id</strong> 23442</li>
								<li><strong>Booked on</strong> Sat. 20 Dec. 2018</li>
							</ul>
						</div>
						<div class="col-lg-2 col-md-2">
							<div class="booking_buttons">
								<a href="#0" class="btn_2">Edit</a>
								<a href="#0" class="btn_3">Cancel</a>
							</div>
						</div>
					</div>
					{/* <!-- /row --> */}
				</div>
				{/* <!-- /strip booking --> */}

				<div class="strip_booking">
					<div class="row">
						<div class="col-lg-2 col-md-2">
							<div class="date">
								<span class="month">Dec</span>
								<span class="day"><strong>28</strong>Fri</span>
							</div>
						</div>
						<div class="col-lg-6 col-md-5">
							<h3 class="bars_booking">Mojto Bar<span>2 Adults</span></h3>
						</div>
						<div class="col-lg-2 col-md-3">
							<ul class="info_booking">
								<li><strong>Booking id</strong> 23442</li>
								<li><strong>Booked on</strong> Sat. 20 Dec. 2018</li>
							</ul>
						</div>
						<div class="col-lg-2 col-md-2">
							<div class="booking_buttons">
								<a href="#0" class="btn_2">Edit</a>
								<a href="#0" class="btn_3">Cancel</a>
							</div>
						</div>
					</div>
					{/* <!-- /row --> */}
				</div>
				{/* <!-- /strip booking --> */}

				<div class="strip_booking">
					<div class="row">
						<div class="col-lg-2 col-md-2">
							<div class="date">
								<span class="month">Dec</span>
								<span class="day"><strong>30</strong>Fri</span>
							</div>
						</div>
						<div class="col-lg-6 col-md-5">
							<h3 class="restaurant_booking">Tokio Sushi<span>2 Adults / 2Childs</span></h3>
						</div>
						<div class="col-lg-2 col-md-3">
							<ul class="info_booking">
								<li><strong>Booking id</strong> 23442</li>
								<li><strong>Booked on</strong> Sat. 20 Dec. 2018</li>
							</ul>
						</div>
						<div class="col-lg-2 col-md-2">
							<div class="booking_buttons">
								<a href="#0" class="btn_2">Edit</a>
								<a href="#0" class="btn_3">Cancel</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<p class="text-right"><a href="checkout.html" class="btn_1">Checkout</a></p>
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
export default Bookings;
