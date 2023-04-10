import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getThemeIsDark = (state: State): boolean => state[NameSpace.user].themeIsDark;
