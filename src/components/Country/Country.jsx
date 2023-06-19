import './Country.css'

const Country = (props) => {
    // console.log(props.country);
    const { name, population, region, flags } = props.country;
    return (
        <div className="country">
            <img className='country-image' src={flags.png} alt="Country Flag" />
            <h2>{name.common}</h2>
            <h3>Population: {population}</h3>
            <h3>Region: {region}</h3>
        </div>
    );
};

export default Country;