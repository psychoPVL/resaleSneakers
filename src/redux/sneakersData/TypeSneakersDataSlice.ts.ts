import { TypeApi } from '../../api/TypeApi';

export type TypeFilterValues = {
	valueBrand: string[];
	valueModel: string[];
	valueColor: string[];
};

export type TypeCardItems = Omit<TypeApi, 'sizes'> & { sizes: number };

export type TypeSneakersDataSlice = {
	sneakersData: TypeApi[];
	topSellersData: TypeApi[];
	offWhiteData: TypeApi[];
	airJordanData: TypeApi[];
	randomSneakers: TypeApi[];
	recommendedSneakers: TypeApi[];
	ImageCarousel: string[];
	brand: string;
	currentSort: string;
	filterValues: TypeFilterValues;
	searchValue: string;
	cardItems: TypeCardItems[];
	size: number;
};
