import { NameSpace } from '../../const';
import { LastDayPrice } from '../../types/last-day-price';
import { CompanyNews, State } from '../../types/state';

export const getCompanies = (state: State): LastDayPrice[] => state[NameSpace.data].companies;
