import { NameSpace } from '../../const';
import { LastDayPrice } from '../../types/last-day-price';
import { State } from '../../types/state';

export const getCompanies = (state: State): LastDayPrice[] => state[NameSpace.data].stocks;
export const getIsLoading = (state: State): boolean => state[NameSpace.data].isLoading;
