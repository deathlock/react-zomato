import React, { Component } from 'react';
import axios from 'axios';

import { API_URL, ZOMATO_KEY } from '../../utils/constants.js';
import Loader from '../common/loader.js';
import CollectionComp from '../child/collections.js';

class CollectionFetcher extends Component {
	constructor(props){
		super(props);

		this.state = {
			data: null,
			loader: false
		}
	}

	async componentDidMount() {
		this.setState({ loader: true });
		try {
			const headers = {
				'user-key': ZOMATO_KEY
			};
			const collection = await axios.get(API_URL+'collections?city_id=11&count=6', { headers: headers });
			if(collection.data.collections.length > 0){
				console.log(collection.data.collections);
				this.setState({ data: collection.data.collections, loader: false  });
			}
		} catch(e) {
			console.log(e);
		}

	}

	render() {
		if(this.state.loader){
			return(
						<Loader />
				);
		}

		return(
				<CollectionComp {...this.props} {...this.state} />
		);
	}
}

export default CollectionFetcher;
