import axios from 'axios';
import { useEffect } from 'react';
import { TypeApi } from './TypeApi';
import { useDispatch } from 'react-redux';
import { setSneakersData } from '../redux/sneakersSlice/sneakersSlice';

export const api = (): void => {
	const dispatch = useDispatch();

	const URL_DATA: string = `https://646cb4927b42c06c3b2bd66e.mockapi.io/sneakersData`;

	useEffect(() => {
		axios
			.get<TypeApi[]>(URL_DATA)
			.then((response) => {
				const data: TypeApi[] = response.data;
				dispatch(setSneakersData(data));
			})
			.catch((error) => console.error('Error fetching data:', error));
	}, []);
};
