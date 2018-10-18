import React, { Component } from "react";
import "babel-polyfill";
import {hot} from "react-hot-loader";
import $ from 'jquery';

/************* Custom *************/
import Header from './common/header.js';
import Footer from './common/footer.js';
import Loader from './common/loader.js';
import Banner from './common/banner.js';
import Collection from './parent/collectionFetcher.js';

/************* Bootstrap *************/
import "popper.js/dist/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

/************* Stylesheets *************/
import "../../public/css/App.css";

class App extends Component {
	constructor() {
		super();
	}

	render() {
		return (
				<div className="App">
					<Header />
					<Banner />
						<div className="container wrapper">
							<div className="row">
								<Collection />
							</div>
						</div>
					<Footer />
				</div>
			);
	}
}


export default hot(module)(App);
