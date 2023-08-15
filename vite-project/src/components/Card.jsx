/* eslint-disable react/prop-types */
export default function Card(props) {
    return (
        <section className="card">
            <img src={props.img} alt="" className="card--img" />
            <div className="location-wrapper">
            <h3 className="location">{props.location}</h3>
            <a className="maps" href={props.google}>
                Google Maps
            </a>
            </div>
            <p className="year">Year to plan trip: <span>{props.year}</span></p>
            <p className="description">{props.description}</p>
        </section>
    );
}
