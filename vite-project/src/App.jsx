/* eslint-disable react/jsx-key */
import Card from './components/Card';
import Nav from './components/Nav';
import data from './data';
import './App.css';

export default function App() {
    const card = data.map((item) => {
        return (
            <Card
                img={item.img}
                google={item.googleMapsUrl}
                location={item.location}
                year={item.yearOfTrip}
                description={item.description}
            />
        );
    });

    return (
        <section>
            <Nav />
            <div className="card-container">{card}</div>
        </section>
    );
}
