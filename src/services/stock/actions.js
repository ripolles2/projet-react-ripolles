
import * as types from "./constants";

export function add_stock(payload) {
	return (dispatch, state) => {

		dispatch({
			type: types.ADD_STOCK,
			payload: payload
		});


	}
}

export function supp_stock(payload) {
	return (dispatch, state) => {

		dispatch({
			type: types.SUPP_STOCK,
			payload: payload
		});


	}
}

export function incr_quant(payload) {
	return (dispatch, state) => {

		dispatch({
			type: types.INCR_QUANT,
			payload: payload
		});


	}
}

export function decr_quant(payload) {
	return (dispatch, state) => {

		dispatch({
			type: types.DECR_QUANT,
			payload: payload
		});


	}
}

export function add_panier(payload) {
	return (dispatch, state) => {

		dispatch({
			type: types.ADD_PANIER,
			payload: payload
		});


	}
}

export function incr_panier(payload) {
	return (dispatch, state) => {

		dispatch({
			type: types.INCR_PANIER,
			payload: payload
		});


	}
}

export function decr_panier(payload) {
	return (dispatch, state) => {

		dispatch({
			type: types.DECR_PANIER,
			payload: payload
		});


	}
}

export function valid_panier(payload) {
	return (dispatch, state) => {

		dispatch({
			type: types.VALID_PANIER,
			payload: payload
		});


	}
}
