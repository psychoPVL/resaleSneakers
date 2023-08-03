import { TypeApi } from '../../api/TypeApi';

export type TypeFiltersValue = {
	valueBrand: string[];
	valueModel: string[];
	valueColor: string[];
};

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
	filterValues: TypeFiltersValue;
	searchValue: string;
};
