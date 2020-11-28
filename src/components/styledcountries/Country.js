import CardInfo from "../Card/card";

const Country = ({ flag, name, population, region, capital }) => {
	return (
    <a href={'/country/' + name} className='country'>
    <div>
      <CardInfo li1='Populasi' li2='Region' li3='Ibukota' pop={population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} tit={name} reg={region} cap={capital} src={flag}/>
    </div>
    </a>
	);
};

export default Country;
