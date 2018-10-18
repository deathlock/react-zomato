import React from 'react';

const Collections = ({ data }) => {
	if(!data){
			return <p>No data yet...</p>
	}

	return(
		data.map(c =>
				<div className="card collection-tiles" key={c.collection.collection_id}>
				  <img className="card-img-top" src={c.collection.image_url} alt={c.collection.title} />
				  <div className="card-body">
				    <h5 className="card-title">{c.collection.title}</h5>
				    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				    <a href={c.collection.url} target="_blank" className="btn btn-primary">Find On Zomato</a>
				  </div>
				</div>
     )
		);
}

export default Collections;
