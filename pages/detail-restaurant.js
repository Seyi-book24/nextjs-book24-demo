import Head from "next/head";
import React, { Component} from "react";
import Header from '../components/header';
import SignInModal from '../components/signInModal';
import Footer from "../components/footer";
import $ from 'jquery';

class DetailRestaurant extends Component {
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
	
        <main>		
		<div class="hero_in restaurant_detail">
			<div class="wrapper">
				<span class="magnific-gallery">
					<a href="/images/gallery/hotel_list_1.jpg" class="btn_photos" title="Photo title" data-effect="mfp-zoom-in">View photos</a>
					<a href="/images/gallery/hotel_list_2.jpg" title="Photo title" data-effect="mfp-zoom-in"></a>
					<a href="/images/gallery/hotel_list_3.jpg" title="Photo title" data-effect="mfp-zoom-in"></a>
				</span>
			</div>
		</div>
		{/* <!--/hero_in--> */}
		
		<nav class="secondary_nav sticky_horizontal_2">
			<div class="container">
				<ul class="clearfix">
					<li><a href="#description" class="active">Description</a></li>
					<li><a href="#reviews">Reviews</a></li>
					<li><a href="#sidebar">Booking</a></li>
				</ul>
			</div>
		</nav>

		<div class="container margin_60_35">
				<div class="row">
					<div class="col-lg-8">
						<section id="description">
							<div class="detail_title_1">
								<h1>Da Alfredo Italian Restaurant</h1>
								<a class="address" href="https://www.google.com/maps/dir//Assistance+%E2%80%93+H%C3%B4pitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x47e66e1de36f4147:0xb6615b4092e0351f!2sAssistance+Publique+-+H%C3%B4pitaux+de+Paris+(AP-HP)+-+Si%C3%A8ge!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361">438 Rush Green Road, Romford</a>
							</div>
							<p>Per consequat adolescens ex, cu nibh commune <strong>temporibus vim</strong>, ad sumo viris eloquentiam sed. Mea appareat omittantur eloquentiam ad, nam ei quas oportere democritum. Prima causae admodum id est, ei timeam inimicus sed. Sit an meis aliquam, cetero inermis vel ut. An sit illum euismod facilisis, tamquam vulputate pertinacia eum at.</p>
							<p>Cum et probo menandri. Officiis consulatu pro et, ne sea sale invidunt, sed ut sint <strong>blandit</strong> efficiendi. Atomorum explicari eu qui, est enim quaerendum te. Quo harum viris id. Per ne quando dolore evertitur, pro ad cibo commune.</p>
							<h5 class="add_bottom_15">Amenities</h5>
							<div class="row add_bottom_30">
								<div class="col-md-6">
									<ul class="bullets">
										<li>Dolorem mediocritatem</li>
										<li>Mea appareat</li>
										<li>Prima causae</li>
										<li>Singulis indoctum</li>
									</ul>
								</div>
								<div class="col-md-6">
									<ul class="bullets">
										<li>Timeam inimicus</li>
										<li>Oportere democritum</li>
										<li>Cetero inermis</li>
										<li>Pertinacia eum</li>
									</ul>
								</div>
							</div>
							{/* <!-- /row --> */}						
							<div class="opening">
                                <div class="ribbon">
                                    <span class="open">Now Open</span>
                                </div>
                                <i class="icon_clock_alt"></i>
                                <h4>Opening Hours</h4>
                                <div class="row">
                                    <div class="col-md-6">
                                        <ul>
                                            <li>Monday <span>9 AM - 5 PM</span></li>
                                            <li>Tuesday <span>9 AM - 5 PM</span></li>
                                            <li>Wednesday <span>9 AM - 5 PM</span></li>
                                            <li>Thursday <span>9 AM - 5 PM</span></li>
                                        </ul>
                                    </div>
                                    <div class="col-md-6">
                                        <ul>
                                            <li>Friday <span>9 AM - 5 PM</span></li>
                                            <li>Saturday <span>9 AM - 5 PM</span></li>
                                            <li>Sunday <span>Closed</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- /opening --> */}
							<hr/>
							<h5>Starters</h5>
							<div class="row add_bottom_15">
                                <div class="col-lg-6 col-md-12">
                                    <ul class="menu_list">
                                        <li>
                                            <div class="thumb">
                                                <img src="/images/menu_list_1.jpg" alt=""/>
                                            </div>
                                            <h6>Imported Salmon Steak <span>$12</span></h6>
                                            <p>
                                                Salmon / Veggies / Oil
                                            </p>
                                        </li>
                                        <li>
                                            <div class="thumb">
                                                <img src="/images/menu_list_2.jpg" alt=""/>
                                            </div>
                                            <h6>Baked Potato Pizza <span>$22</span></h6>
                                            <p>
                                                Potato / Bread / Cheese
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <ul class="menu_list">
                                        <li>
                                            <div class="thumb">
                                                <img src="/images/menu_list_3.jpg" alt=""/>
                                            </div>
                                            <h6>Salted Fried Chicken <span>$18</span></h6>
                                            <p>
                                                Chicken / Olive Oil / Salt
                                            </p>
                                        </li>
                                        <li>
                                            <div class="thumb">
                                                <img src="/images/menu_list_4.jpg" alt=""/>
                                            </div>
                                            <h6>Crab With Curry Sources <span>$15</span></h6>
                                            <p>
                                                Crab / Potatoes / Rice
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- /row --> */}
                            <h5>Main Courses</h5>
                            <div class="row">
                                <div class="col-lg-6 col-md-12">
                                    <ul class="menu_list">
                                        <li>
                                            <div class="thumb">
                                                <img src="/images/menu_list_5.jpg" alt=""/>
                                            </div>
                                            <h6>Spicy Crab Ramen <span>$12</span></h6>
                                            <p>
                                                Crab / Veggie / Soup
                                            </p>
                                        </li>
                                        <li>
                                            <div class="thumb">
                                                <img src="/images/menu_list_6.jpg" alt=""/>
                                            </div>
                                            <h6>Grilled Salmon Sushi <span>$22</span></h6>
                                            <p>
                                                Rice / Salmon / Shoyu
                                            </p>
                                        </li>
                                        <li>
                                            <div class="thumb">
                                                <img src="/images/menu_list_7.jpg" alt=""/>
                                            </div>
                                            <h6>Source Mushroom <span>$22</span></h6>
                                            <p>
                                                Mushroom / Garlic / Veggies
                                            </p>
                                        </li>
                                        <li>
                                            <div class="thumb">
                                                <img src="/images/menu_list_8.jpg" alt=""/>
                                            </div>
                                            <h6>Baked Potato Pizza <span>$22</span></h6>
                                            <p>
                                                Potato / Bread / Cheese
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <ul class="menu_list">
                                        <li>
                                            <div class="thumb">
                                                <img src="/images/menu_list_9.jpg" alt=""/>
                                            </div>
                                            <h6>Fresh Crab With Lemon <span>$16</span></h6>
                                            <p>
                                                Crab / Lemon / Garlic
                                            </p>
                                        </li>
                                        <li>
                                            <div class="thumb">
                                                <img src="/images/menu_list_10.jpg" alt=""/>
                                            </div>
                                            <h6>Fried Chicken Salad <span>$22</span></h6>
                                            <p>
                                                Chicken / Butter / Veggies
                                            </p>
                                        </li>
                                        <li>
                                            <div class="thumb">
                                                <img src="/images/menu_list_11.jpg" alt=""/>
                                            </div>
                                            <h6>Fried Potatoes With Garlic <span>$22</span></h6>
                                            <p>
                                                Potatoes / Olive Oil / Garlic
                                            </p>
                                        </li>
                                        <li>
                                            <div class="thumb">
                                                <img src="/images/menu_list_12.jpg" alt=""/>
                                            </div>
                                            <h6>Crab With Curry Sources <span>$22</span></h6>
                                            <p>
                                                Crab / Potatoes / Rice
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- /row --> */}
							<hr/>
							<h3>Location</h3>
							<div id="map" class="map map_single add_bottom_45"></div>
							{/* <!-- End Map --> */}
						</section>
						{/* <!-- /section --> */}
					
						<section id="reviews">
							<h2>Reviews</h2>
							<div class="reviews-container add_bottom_30">
								<div class="row">
									<div class="col-lg-3">
										<div id="review_summary">
											<strong>8.5</strong>
											<em>Superb</em>
											<small>Based on 4 reviews</small>
										</div>
									</div>
									<div class="col-lg-9">
										<div class="row">
											<div class="col-lg-10 col-9">
												<div class="progress">
													<div class="progress-bar" role="progressbar" style={{width: "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
											<div class="col-lg-2 col-3"><small><strong>5 stars</strong></small></div>
										</div>
										{/* <!-- /row --> */}
										<div class="row">
											<div class="col-lg-10 col-9">
												<div class="progress">
													<div class="progress-bar" role="progressbar" style={{width: "95%"}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
											<div class="col-lg-2 col-3"><small><strong>4 stars</strong></small></div>
										</div>
										{/* <!-- /row --> */}
										<div class="row">
											<div class="col-lg-10 col-9">
												<div class="progress">
													<div class="progress-bar" role="progressbar" style={{width: "60%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
											<div class="col-lg-2 col-3"><small><strong>3 stars</strong></small></div>
										</div>
										{/* <!-- /row --> */}
										<div class="row">
											<div class="col-lg-10 col-9">
												<div class="progress">
													<div class="progress-bar" role="progressbar" style={{width: "20%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
											<div class="col-lg-2 col-3"><small><strong>2 stars</strong></small></div>
										</div>
										{/* <!-- /row --> */}
										<div class="row">
											<div class="col-lg-10 col-9">
												<div class="progress">
													<div class="progress-bar" role="progressbar" style={{width: 0}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
											<div class="col-lg-2 col-3"><small><strong>1 stars</strong></small></div>
										</div>
										{/* <!-- /row --> */}
									</div>
								</div>
								{/* <!-- /row --> */}
							</div>

							<div class="reviews-container">

								<div class="review-box clearfix">
									<figure class="rev-thumb"><img src="/images/avatar1.jpg" alt=""/>
									</figure>
									<div class="rev-content">
										<div class="rating">
											<i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star"></i>
										</div>
										<div class="rev-info">
											Admin – April 03, 2016:
										</div>
										<div class="rev-text">
											<p>
												Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis
											</p>
										</div>
									</div>
								</div>
								{/* <!-- /review-box --> */}
								<div class="review-box clearfix">
									<figure class="rev-thumb"><img src="/images/avatar2.jpg" alt=""/>
									</figure>
									<div class="rev-content">
										<div class="rating">
											<i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star"></i>
										</div>
										<div class="rev-info">
											Ahsan – April 01, 2016:
										</div>
										<div class="rev-text">
											<p>
												Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis
											</p>
										</div>
									</div>
								</div>
								{/* <!-- /review-box --> */}
								<div class="review-box clearfix">
									<figure class="rev-thumb"><img src="/images/avatar3.jpg" alt=""/>
									</figure>
									<div class="rev-content">
										<div class="rating">
											<i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star"></i>
										</div>
										<div class="rev-info">
											Sara – March 31, 2016:
										</div>
										<div class="rev-text">
											<p>
												Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis
											</p>
										</div>
									</div>
								</div>
								{/* <!-- /review-box --> */}
							</div>
							{/* <!-- /review-container --> */}
						</section>
						{/* <!-- /section --> */}
						<hr/>

							<div class="add-review">
								<h5>Leave a Review</h5>
								<form>
									<div class="row">
										<div class="form-group col-md-6">
											<label>Name and Lastname *</label>
											<input type="text" name="name_review" id="name_review" placeholder="" 
                                            class="form-control"/>
										</div>
										<div class="form-group col-md-6">
											<label>Email *</label>
											<input type="email" name="email_review" id="email_review" class="form-control"/>
										</div>
										<div class="form-group col-md-6">
											<label>Rating </label>
											<div class="custom-select-form">
											<select name="rating_review" id="rating_review" class="wide">
												<option value="1">1 (lowest)</option>
												<option value="2">2</option>
												<option value="3">3</option>
												<option value="4">4</option>
												<option value="5" selected>5 (medium)</option>
												<option value="6">6</option>
												<option value="7">7</option>
												<option value="8">8</option>
												<option value="9">9</option>
												<option value="10">10 (highest)</option>
											</select>
											</div>
										</div>
										<div class="form-group col-md-12">
											<label>Your Review</label>
											<textarea name="review_text" id="review_text" class="form-control" style={{height:"130px"}}></textarea>
										</div>
										<div class="form-group col-md-12 add_top_20 add_bottom_30">
											<input type="submit" value="Submit" class="btn_1" id="submit-review"/>
										</div>
									</div>
								</form>
							</div>
					</div>
					{/* <!-- /col --> */}
					
					<aside class="col-lg-4" id="sidebar">
						<div class="box_detail booking">
							<div class="price">
								<h5 class="d-inline">Book Now</h5>
								<div class="score"><span>Good<em>350 Reviews</em></span><strong>7.0</strong></div>
							</div>

							<div class="form-group" id="input-dates">
								<input class="form-control" type="text" name="dates" placeholder="When.."/>
								<i class="icon_calendar"></i>
							</div>
							
							<div class="dropdown">
								<a href="#" data-toggle="dropdown">Guests <span id="qty_total">0</span></a>
								<div class="dropdown-menu dropdown-menu-right">
									<div class="dropdown-menu-content">
										<label>Adults</label>
										<div class="qty-buttons">
											<input type="button" value="+" class="qtyplus" name="adults"/>
											<input type="text" name="adults" id="adults" value="0" class="qty"/>
											<input type="button" value="-" class="qtyminus" name="adults"/>
										</div>
									</div>
									<div class="dropdown-menu-content">
										<label>Childrens</label>
										<div class="qty-buttons">
											<input type="button" value="+" class="qtyplus" name="child"/>
											<input type="text" name="child" id="child" value="0" class="qty"/>
											<input type="button" value="-" class="qtyminus" name="child"/>
										</div>
									</div>
								</div>
							</div>
							{/* <!-- /dropdown --> */}

							<div class="form-group clearfix">
								<div class="custom-select-form">
									<select class="wide">
										<option>Time</option>	
										<option>Lunch</option>
										<option>Dinner</option>
									</select>
								</div>
							</div>
							<a href="checkout.html" class=" add_top_30 btn_1 full-width purchase">Purchase</a>
							<a href="wishlist.html" class="btn_1 full-width outline wishlist"><i class="icon_heart"></i> Add to wishlist</a>
							<div class="text-center"><small>No money charged in this step</small></div>
						</div>
						<ul class="share-buttons">
							<li><a class="fb-share" href="#0"><i class="social_facebook"></i> Share</a></li>
							<li><a class="twitter-share" href="#0"><i class="social_twitter"></i> Share</a></li>
							<li><a class="gplus-share" href="#0"><i class="social_googleplus"></i> Share</a></li>
						</ul>
					</aside>
				</div>
				{/* <!-- /row --> */}
		</div>
		{/* <!-- /container --> */}
		
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
export default DetailRestaurant;