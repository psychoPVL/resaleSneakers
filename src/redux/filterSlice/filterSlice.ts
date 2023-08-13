import { TypeFilterSliceSlice } from './TypeFilterSlice.ts';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
	name: 'filterSlice',

	initialState: <TypeFilterSliceSlice>{
		filterValues: {
			valueBrand: [],
			valueModel: [],
			valueColor: [],
		},
	},

	reducers: {
		setValueBrand(state, { payload }: PayloadAction<string>) {
			if (state.filterValues.valueBrand.includes(payload)) {
				let filters = state.filterValues.valueBrand.filter((el) => el !== payload);
				state.filterValues.valueBrand = filters;
			} else {
				state.filterValues.valueBrand = [...state.filterValues.valueBrand, payload];
			}
		},
		setValueModel(state, { payload }: PayloadAction<string>) {
			if (state.filterValues.valueModel.includes(payload)) {
				let filters = state.filterValues.valueModel.filter((el) => el !== payload);
				state.filterValues.valueModel = filters;
			} else {
				state.filterValues.valueModel = [...state.filterValues.valueModel, payload];
			}
		},
		setValueColor(state, { payload }: PayloadAction<string>) {
			if (state.filterValues.valueColor.includes(payload)) {
				let filters = state.filterValues.valueColor.filter((el) => el !== payload);
				state.filterValues.valueColor = filters;
			} else {
				state.filterValues.valueColor = [...state.filterValues.valueColor, payload];
			}
		},
		setClearFilter(state) {
			state.filterValues.valueBrand = [];
			state.filterValues.valueModel = [];
			state.filterValues.valueColor = [];
		},
	},
});

export const { setValueBrand, setValueModel, setValueColor, setClearFilter } = filterSlice.actions;

export default filterSlice.reducer;
