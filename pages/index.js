import Head from "next/head";
import React, { Component} from "react";
import Header from '../components/header';
import SignInModal from '../components/signInModal';
import Footer from "../components/footer";

class Home extends Component {
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
	
	<main className="pattern">
		<section className="hero_single version_2">
			<div className="wrapper">
				<div className="container">
					<h3>Find what you need!</h3>
					<p>Discover top rated hotels, shops and restaurants around the world</p>
					<form method="post" action="grid-listings-filterscol">
						<div className="row no-gutters custom-search-input-2">
							<div className="col-lg-4">
								<div className="form-group">
									<input className="form-control" type="text" placeholder="What are you looking for..."/>
									<i className="icon_search"></i>
								</div>
							</div>
							<div className="col-lg-3">
								<div className="form-group">
									<input className="form-control" type="text" placeholder="Where"/>
									<i className="icon_pin_alt"></i>
								</div>
							</div>
							<div className="col-lg-3">
								<select className="wide">
									<option>All Categories</option>	
									<option>Shops</option>
									<option>Hotels</option>
									<option>Restaurants</option>
									<option>Bars</option>
									<option>Events</option>
									<option>Fitness</option>
								</select>
							</div>
							<div className="col-lg-2">
								<input type="submit" value="Search"/>
							</div>
						</div>
					</form>
				</div>
			</div>
		</section>
		<div className="main_categories">
			<div className="container">
				<ul className="clearfix">
					<li>
						<a href="/grid-listings-filterscol">
							<i className="icon-shop"></i>
							<h3>Shops</h3>
						</a>
					</li>
					<li>
						<a href="/grid-listings-filterscol">
							<i className="icon-lodging"></i>
							<h3>Hotels</h3>
						</a>
					</li>
					<li>
						<a href="/grid-listings-filterscol">
							<i className="icon-restaurant"></i>
							<h3>Restaurants</h3>
						</a>
					</li>
					<li>
						<a href="/grid-listings-filterscol">
							<i className="icon-bar"></i>
							<h3>Bars</h3>
						</a>
					</li>
					<li>
						<a href="/grid-listings-filterscol">
							<i className="icon-dot-3"></i>
							<h3>Tour</h3>
						</a>
					</li>
					<li>
						<a href="/grid-listings-filterscol">
							<i className="icon-lodging"></i>
							<h3>Events</h3>
						</a>
					</li>

					<li>
						<a href="/grid-listings-filterscol">
							<i className="icon-dot-3"></i>
							<h3>More</h3>
						</a>
					</li>
				</ul>
			</div>
		</div>
		<div className="container margin_60_35">
			<div className="main_title_3">
				<span></span>
				<h2>Famous Shops</h2>
				<p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
				<a href="/grid-listings-filterscol">See all</a>
			</div>
			<div className="row add_bottom_30">
				<div className="col-lg-3 col-sm-6">
					<a href="/detail-shop" className="grid_item small">
						<figure>
							<images src="images/shop_1.jpg" alt=""/>
							<div className="info">
								<h3>Victoria Secretes</h3>
							</div>
						</figure>
					</a>
				</div>
				<div className="col-lg-3 col-sm-6">
					<a href="/detail-shop" className="grid_item small">
						<figure>
							<images src="images/shop_2.jpg" alt=""/>
							<div className="info">
								<h3>Louis Vuitton</h3>
							</div>
						</figure>
					</a>
				</div>
				<div className="col-lg-3 col-sm-6">
					<a href="/detail-shop" className="grid_item small">
						<figure>
							<images src="images/shop_3.jpg" alt=""/>
							<div className="info">
								<h3>Burberry</h3>
							</div>
						</figure>
					</a>
				</div>
				<div className="col-lg-3 col-sm-6">
					<a href="/detail-shop" className="grid_item small">
						<figure>
							<images src="images/shop_4.jpg" alt=""/>
							<div className="info">
								<h3>Pinko</h3>
							</div>
						</figure>
					</a>
				</div>
			</div>
			<div className="main_title_3">
				<span></span>
				<h2>Popular Hotels</h2>
				<p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
				<a href="/grid-listings-filterscol">See all</a>
			</div>
			<div className="row add_bottom_30">
				<div className="col-lg-3 col-sm-6">
					<a href="/detail-hotel" className="grid_item small">
						<figure>
							<images src="images/hotel_1.jpg" alt=""/>
							<div className="info">
								<div className="cat_star"><i className="icon_star"></i><i className="icon_star"></i>
                                <i className="icon_star"></i><i className="icon_star"></i></div>
								<h3>Hotel Mariott</h3>
							</div>
						</figure>
					</a>
				</div>
				<div className="col-lg-3 col-sm-6">
					<a href="/detail-hotel" className="grid_item small">
						<figure>
							<images src="images/hotel_2.jpg" alt=""/>
							<div className="info">
								<div className="cat_star"><i className="icon_star"></i><i className="icon_star"></i>
                                <i className="icon_star"></i><i className="icon_star"></i></div>
								<h3>Hotel Concorde</h3>
							</div>
						</figure>
					</a>
				</div>
				<div className="col-lg-3 col-sm-6">
					<a href="/detail-hotel" className="grid_item small">
						<figure>
							<images src="images/hotel_3.jpg" alt=""/>
							<div className="info">
								<div className="cat_star"><i className="icon_star"></i><i className="icon_star"></i><i className="icon_star"></i><i className="icon_star"></i></div>
								<h3>Hotel La Defanse</h3>
							</div>
						</figure>
					</a>
				</div>
				<div className="col-lg-3 col-sm-6">
					<a href="/detail-hotel" className="grid_item small">
						<figure>
							<images src="images/hotel_4.jpg" alt=""/>
							<div className="info">
								<div className="cat_star"><i className="icon_star"></i><i className="icon_star"></i><i className="icon_star"></i><i className="icon_star"></i></div>
								<h3>Hotel Carlton</h3>
							</div>
						</figure>
					</a>
				</div>
			</div>
			<div className="main_title_3">
				<span></span>
				<h2>Top Restaurants</h2>
				<p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
				<a href="/grid-listings-filterscol">See all</a>
			</div>
			<div className="row ">
				<div className="col-lg-3 col-sm-6">
					<a href="/detail-restaurant" className="grid_item small">
						<figure>
							<images src="images/restaurant_1.jpg" alt=""/>
							<div className="info">
								<h3>Da Alfredo</h3>
							</div>
						</figure>
					</a>
				</div>
				<div className="col-lg-3 col-sm-6">
					<a href="/detail-restaurant" className="grid_item small">
						<figure>
							<images src="images/restaurant_2.jpg" alt=""/>
							<div className="info">
								<h3>Bistroter</h3>
							</div>
						</figure>
					</a>
				</div>
				<div className="col-lg-3 col-sm-6">
					<a href="/detail-restaurant" className="grid_item small">
						<figure>
							<images src="images/restaurant_3.jpg" alt=""/>
							<div className="info">
								<h3>Da Luigi</h3>
							</div>
						</figure>
					</a>
				</div>
				<div className="col-lg-3 col-sm-6">
					<a href="/detail-restaurant" className="grid_item small">
						<figure>
							<images src="images/restaurant_4.jpg" alt=""/>
							<div className="info">
								<h3>Marco King</h3>
							</div>
						</figure>
					</a>
				</div>
			</div>
		</div>
		<div className="call_section">
			<div className="wrapper">
				<div className="container margin_80_55">
					<div className="main_title_2">
						<span><em></em></span>
						<h2>How it Works</h2>
						<p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
					</div>
					<div className="row">
						<div className="col-md-4">
							<div className="box_how">
								<i className="pe-7s-search"></i>
								<h3>Search Locations</h3>
								<p>An nec placerat repudiare scripserit, temporibus complectitur at sea, vel ignota fierent eloquentiam id.</p>
								<span></span>
							</div>
						</div>
						<div className="col-md-4">
							<div className="box_how">
								<i className="pe-7s-info"></i>
								<h3>View Location Info</h3>
								<p>An nec placerat repudiare scripserit, temporibus complectitur at sea, vel ignota fierent eloquentiam id.</p>
								<span></span>
							</div>
						</div>
						<div className="col-md-4">
							<div className="box_how">
								<i className="pe-7s-like2"></i>
								<h3>Book, Reach or Call</h3>
								<p>An nec placerat repudiare scripserit, temporibus complectitur at sea, vel ignota fierent eloquentiam id.</p>
							</div>
						</div>
					</div>
					<p className="text-center add_top_30 wow bounceIn" data-wow-delay="0.5s"><a href="/account" className="btn_1 rounded">Register Now</a></p>
				</div>
				<canvas id="hero-canvas" width="1920" height="1080"></canvas>
			</div>
		</div>
		<div className="container margin_80_55">
			<div className="main_title_2">
				<span><em></em></span>
				<h2>Sparker App Available</h2>
				<p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
			</div>
			<div className="row justify-content-center text-center">
				<div className="col-md-6">
					<images src="images/mobile.svg" alt="" className="images-fluid add_bottom_45"/>
					<div className="app_icons">
						<a href="/#0" className="pr-lg-2"><images src="images/app_android.svg" alt=""/></a>
						<a href="/#0" className="pl-lg-2"><images src="images/app_apple.svg" alt=""/></a>
					</div>
					<div className="add_bottom_15"><small>*An eum dolores tractatos, aeterno menandri deseruisse ut eum.</small></div>
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
	<script src="js/animated_canvas_min.js"></script>
        {/* <style global jsx>{`
          body {
            background: #fff;
          }
        `}</style> */}
      </div>
    );
  }
}
export default Home;
