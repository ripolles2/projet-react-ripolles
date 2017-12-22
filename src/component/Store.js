import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import '../App.css';






const Store = (props) => {

	return (
	<div>
		<div style = {{ fontSize: "30px"}} >
			Votre store: 
		</div>
		{
				props.stock.map((prod,index) => {
					return (
					prod.quantite > 0 ?
						<div className = "listeProduit" >
							<div> Nom: { prod.nom } </div>
							<div> Description: { prod.desc} </div>
							<div> Prix: { prod.prix } </div>
							<div> Quantite: {prod.quantite} </div>
							<img src = { prod.img } />
							<br/>
							<button className ="bouton5" onClick = {() => {
									props.addPanier(index);
									props.refresh();
								
							}} > 
								Ajouter au panier 
							</button>
						</div>
					:
						<div className = "listeProduit">
							<div> Nom: { prod.nom } </div>
							<div> Description: { prod.desc} </div>
							<div> Prix: { prod.prix } </div>
							<div> Quantite: {prod.quantite} </div>
							<img src = { prod.img } />
							<br/>
						</div>

						)
				})
			
		}
	</div>
	)
}



export default Store