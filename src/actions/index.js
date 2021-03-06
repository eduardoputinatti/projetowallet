// Coloque aqui suas actions
import { currrenciesApi, coinsFilter } from '../components/ApiRequisition';

export const USER_EMAIL = 'USER_EMAIL';
export const saveEmail = (email) => ({
  type: USER_EMAIL,
  email,
});

export const COINS_OPTION = 'COINS_OPTION';
export const coinsOption = (currencies) => ({
  type: COINS_OPTION,
  currencies,
});

export const REQUEST_API = 'REQUEST_API';
export const requestApi = () => ({
  type: REQUEST_API,
});

export const coinsThunk = () => async (dispatch) => {
  const changeApi = await currrenciesApi();
  const filterCoins = coinsFilter(changeApi);
  dispatch(coinsOption(filterCoins));
};

export const SEND_EXPENSE_STORE = 'SEND_EXPENSE_STORE';
export const sendExpenseStore = (payload) => ({
  type: SEND_EXPENSE_STORE,
  payload,
});

export const REMOVE_ITEM = 'REMOVE_ITEM';
export const removeItem = (payload) => ({
  type: REMOVE_ITEM,
  payload,
});
