import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { FilterDropdown } from './utils';
import { Country } from '.';
import StyledInput from '../element/textinput';
import axios from 'axios';


const regions = [
	{
		id: 1,
		value: 'Africa',
	},
	{
		id: 2,
		value: 'America',
	},
	{
		id: 3,
		value: 'Asia',
	},
	{
		id: 4,
		value: 'Europe',
	},
	{
		id: 5,
		value: 'Oceania',
	},
];

const CountriesStyled = () => {
	const [countries, setCountries] = useState([]);
	const [input, setInput] = useState('');
	const [title, setTitle] = useState('Filter by Region');

	useEffect(() => {
		const fetchData = async () => {
			let axiosCountries = await axios.get(
				'https://restcountries.eu/rest/v2/all'
			);

			let filterData = axiosCountries.data.filter((country) => {
				return country.name !== 'United States Minor Outlying Islands';
			});


			filterData.sort((a, b) => {
				return a - b;
			});
			setCountries((countries) => countries.concat(filterData));
		};


			fetchData();
		
	}, []);

	const handleInput = (e) => {
		setInput(e.target.value);
	};

	const handleRegion = (region) => {
		setInput(region);
	};

	const handleTitle = (title) => {
		setTitle(title);
	};

	return (
		<div className='home'>
			<div className='home__row stack'>
				<StyledInput Input={handleInput} placehld='Cari Sebuah Negara Disini....' back1='0px 0px 10px 0.5px rgba(0, 0, 0, 0.75)' back2=' 0px 0px 10px 0.5px rgba(0, 120, 255, 0.7)'/>
				
			</div>

			<Fade>
				<div className='countries'>
					{countries
						.filter(
							(country) =>
								input === '' ||
								country.name.toLowerCase().includes(input.toLowerCase()) ||
								country.region.toLowerCase().includes(input.toLowerCase())
						)
						.map((country) => (
							<Country
								flag={country.flag}
								name={country.name}
								population={country.population}
								region={
									country.region === 'Americas'
										? country.region.slice(0, -1)
										: country.region
								}
								capital={country.capital}
							/>
						))}
				</div>
			</Fade>
		</div>
	);
};

export default CountriesStyled;
