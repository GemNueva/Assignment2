import { Link } from "react-router-dom";


const Card = ({ regionId, regionName, ImageUrl }) => (


	<div className="card col-4 mb-2" style={{ width: 18 + 'rem' }} >

		<img src={ImageUrl} className="card-img-top" alt={"Image of" + regionName} />

		<div className="card-body">

			<h5 className="card-title">{regionName}</h5>

			<p className="card-text">{regionId}</p>

			<Link to={"/CountriesList/" + regionId} className="btn btn-primary"> View Countries</Link>
		</div>

	</div>

)


export default Card;