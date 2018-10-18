import React from 'react';
import bannerImage from '../../../public/image/food-dishes-header.jpg';

const Banner = () => {
	return(
			<div className="banner-image">
				<img src={bannerImage} alt="banner" />
				<div className="banner-overlay">
					<p className="text-center my-auto white-color banner-text">Search here, Order on Zomato.</p>
					<div className="col-md-12 search-wrapper">
						<input className="form-control mr-sm-2 search-input search-city" type="search" placeholder="Search City.." aria-label="Search" />
						<input className="form-control mr-sm-2 search-input search-rest" type="search" placeholder="Search for restaurant or cuisine..." aria-label="Search" />
					</div>
				</div>
			</div>
		);
}

export default Banner;
