const Header = () => {
    return (
<header className="header menu_fixed">
		<div id="logo">
			<a href="/index" title="Sparker - Directory and listings template">
				<img src="/images/logo.svg" width="165" height="35" alt="" className="logo_normal"/>
				<img src="/images/logo_sticky.svg" width="165" height="35" alt="" className="logo_sticky"/>
			</a>
		</div>
		<ul id="top_menu">
			<li><a href="/account" className="btn_add">Add Listing</a></li>
			<li><a href="/#sign-in-dialog" id="sign-in" className="login" title="Sign In">Sign In</a></li>
			<li><a href="/wishlist" className="wishlist_bt_top" title="Your wishlist">Your wishlist</a></li>
		</ul>
		<a href="/#menu" className="btn_mobile">
			<div className="hamburger hamburger--spin" id="hamburger">
				<div className="hamburger-box">
					<div className="hamburger-inner"></div>
				</div>
			</div>
		</a>
		<nav id="menu" className="main-menu">
		    <ul>
		        <li><span><a href="/#0">Home</a></span>
		            <ul>
		                <li><a href="/index">Home version 1</a></li>
		                <li><a href="/index-2">Home version 2</a></li>
		                <li><a href="/index-3">Home version 3</a></li>
		                <li><a href="/index-4">Home version 4</a></li>
		                <li><a href="/index-5">Home version 5</a></li>
		                <li><a href="/index-6">Home version 6 (GDPR)</a></li>
		                <li><a href="/index-7">Src Address Autocomplete</a></li>
		            </ul>
		        </li>
		        <li><span><a href="/#0">Listings</a></span>
		            <ul>
		                <li>
		                    <span><a href="/#0">Grid Layout</a></span>
		                    <ul>
		                        <li><a href="/grid-listings-filterscol-search-aside">Sidebar+Search mobile 1</a></li>
		                        <li><a href="/grid-listings-filterstop-search-aside">Full+Search mobile 1</a></li>
		                        <li><a href="/grid-listings-filterscol">Sidebar+Search mobile 2</a></li>
		                        <li><a href="/grid-listings-filterstop">Full+Search mobile 2</a></li>
		                        <li><a href="/grid-listings-isotope">Full+Isotope filter</a></li>
		                    </ul>
		                </li>
		                <li>
		                    <span><a href="/#0">Row Layout</a></span>
		                    <ul>
		                        <li><a href="/row-listings-filterscol-search-aside">Sidebar+Search mobile 1</a></li>
		                        <li><a href="/row-listings-filterstop-search-aside">Full+Search mobile 1</a></li>
		                        <li><a href="/row-listings-filterscol">Sidebar+Search mobile 2</a></li>
		                        <li><a href="/row-listings-filterstop">Full+Search mobile 2</a></li>
		                        <li><a href="/row-listings-isotope">Full+Isotope filter</a></li>
		                    </ul>
		                </li>
		                <li><a href="/listing-map">Listing Map</a></li>
		                 <li>
		                    <span><a href="/#0">Open Street Map</a></span>
		                    <ul>
								<li><a href="/grid-listings-filterscol-search-aside-openstreetmap">Sidebar+Search mobile 1</a></li>
								<li><a href="/grid-listings-filterstop-search-aside-openstreetmap">Full+Search mobile 1</a></li>
								<li><a href="/grid-listings-filterscol-openstreetmap">Sidebar+Search mobile 2</a></li>
								<li><a href="/grid-listings-filterstop-openstreetmap">Full+Search mobile 2</a></li>
								<li><a href="/grid-listings-isotope-openstreetmap">Full+Isotope filter</a></li>
								<li><a href="/row-listings-filterscol-search-aside-openstreetmap">Sidebar+Search mobile 1</a></li>
								<li><a href="/row-listings-filterstop-search-aside-openstreetmap">Full+Search mobile 1</a></li>
								<li><a href="/row-listings-filterscol-openstreetmap">Sidebar+Search mobile 2</a></li>
								<li><a href="/row-listings-filterstop-openstreetmap">Full+Search mobile 2</a></li>
								<li><a href="/row-listings-isotope-openstreetmap">Full+Isotope filter</a></li>
								<li><a href="/detail-hotel-openstreetmap">Detail page 1</a></li>
								<li><a href="/listing-map-openstreetmap">Listing Map</a></li>
							</ul>
		                </li>
		               <li>
		                    <span><a href="/#0">Detail pages</a></span>
		                    <ul>
		                        <li><a href="/detail-hotel">Detail page 1</a></li>
		                        <li><a href="/detail-restaurant">Detail page 2</a></li>
		                        <li><a href="/detail-shop">Detail page 3</a></li>
		                        <li><a href="/detail-carousel">Detail page Carousel 1</a></li>
		                        <li><a href="/detail-carousel-2">Detail page Carousel 2</a></li>
		                    </ul>
		                </li>
		                <li><a href="/bookings">Bookings - Purchases</a></li>
		                <li><a href="/checkout">Checkout</a></li>
		                <li><a href="/confirm">Confirm</a></li>
		            </ul>
		        </li>
		        <li><span><a href="/#0">Pages</a></span>
		            <ul>
		                <li><a href="/admin_section/index">Admin section</a></li>
		                <li><a href="/blog">Blog</a></li>
		                <li><a href="/account">Account</a></li>
		                <li><a href="/help">Help Section</a></li>
		                <li><a href="/faq">Faq Section</a></li>
		                <li><a href="/wishlist">Wishlist page</a></li>
		                <li><a href="/contacts">Contacts</a></li>
		                <li>
		                    <span><a href="/#0">Icon Packs</a></span>
		                    <ul>
		                        <li><a href="/icon-pack-1">Icon pack 1</a></li>
		                        <li><a href="/icon-pack-2">Icon pack 2</a></li>
		                        <li><a href="/icon-pack-3">Icon pack 3</a></li>
		                        <li><a href="/icon-pack-4">Icon pack 4</a></li>
		                    </ul>
		                </li>
		                <li><a href="/about">About</a></li>
		                <li><a href="/media-gallery">Media gallery</a></li>
		            </ul>
		        </li>
		        <li><span><a href="/#0">Extra</a></span>
		            <ul>
		                <li><a href="/404">404 page</a></li>
		                <li><a href="/contacts-2">Contacts 2</a></li>
		                <li><a href="/pricing-tables">Pricing tables</a></li>
		                <li><a href="/login">Login</a></li>
		                <li><a href="/register">Register</a></li>
		                <li><a href="/menu-options">Menu Options</a></li>
		                <li><a href="/invoice">Invoice</a></li>
		                <li><a href="/coming_soon/index">Coming Soon</a></li>
		            </ul>
		        </li>
		        <li><span><a href="/thingstodo">Things to do</a></span></li>
		    </ul>
		</nav>
	</header>
    );
}
export default Header;
