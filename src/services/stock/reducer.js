
import * as types from "./constants";


const initialState = {
	panier_store:[],
	stock_store:[]
};


export default function reducer(state = initialState, action)
{
	switch (action.type) {

		case types.ADD_STOCK:
			var stock = state.stock_store;
			
			stock.push({
				id: Date.now(),
				nom: action.payload.nom,
				desc: action.payload.desc,
				prix: action.payload.prix,
				img: action.payload.img,
				quantite: 0
			});
			return {
				...state,
				stock_store: stock
			};
			
			break;

		case types.SUPP_STOCK:
			var stock = state.stock_store;
			var panier = state.panier_store;
			var obj = stock[action.payload];
			var index = panier.findIndex((object) => object.id = obj.id);
			stock.splice(action.payload,1);
			panier.splice(index,1);
			return {
				...state,
				stock_store: stock

			}
			break;

		case types.INCR_QUANT:
			var stock = state.stock_store;
			stock[action.payload].quantite = stock[action.payload].quantite + 1;
			return {
				...state,
				stock_store: stock
			}
			break;

		case types.DECR_QUANT: 
			var stock = state.stock_store;
			if (stock[action.payload].quantite > 0) {
				stock[action.payload].quantite = stock[action.payload].quantite - 1;
			}
			else {
				stock[action.payload].quantite = 0;
			}
			
			return {
				...state,
				stock_store: stock
			}
			break;

			case types.ADD_PANIER:
				var stock = state.stock_store;
				var panier = state.panier_store;
				var obj = stock[action.payload];
				var index = panier.findIndex((object) => object.id == obj.id );
				if (index == -1) {
					panier.push({
					id: obj.id,
					nom: obj.nom,
					desc: obj.desc,
					prix: obj.prix,
					img: obj.img,
					quantite: 1
				});
				stock[action.payload].quantite = stock[action.payload].quantite - 1;
				}
				return {
					...state,
					panier_store: panier,
					stock_store: stock
				}
				break;

			case types.INCR_PANIER:
				var stock = state.stock_store;
				var panier = state.panier_store;
				var obj = panier[action.payload];
				var index = stock.findIndex((object) => object.id == obj.id);
				if (stock[index].quantite > 0)
					if (panier[action.payload].quantite >= 0) {
						panier[action.payload].quantite = panier[action.payload].quantite + 1;
						stock[index].quantite = stock[index].quantite - 1;
					}
					else {
						panier[action.payload].quantite = 0;
					}
					
				
				return {
					...state,
					panier_store: panier,
					stock_store: stock
				}
				break;

			case types.DECR_PANIER:
				var stock = state.stock_store;
				var panier = state.panier_store;
				var obj = panier[action.payload];
				var index = stock.findIndex((object) => object.id == obj.id);
				if (panier[action.payload].quantite > 0) {
					panier[action.payload].quantite = panier[action.payload].quantite - 1;
					stock[index].quantite = stock[index].quantite + 1;
				}
				else {
					panier[action.payload].quantite = 0;
				}
				
				return {
					...state,
					panier_store: panier,
					stock_store: stock
				}
				break;

			case types.VALID_PANIER:
				
				return {
						...state,
						panier_store: []

					}

				


		default:
			return state;
		}

}


