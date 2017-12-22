import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import FloatingActionButtonExampleSimple from "./FloatingActionButtonExampleSimple"

import '../App.css';

const style = {
  marginRight: 20,
};


const Panier = (props) => {
	var somme= 0;
	for (var i = 0; i < props.panier.length; i++) {
		somme = somme + props.panier[i].prix*props.panier[i].quantite;
	}

	return (
	<div>
		<div style = {{ fontSize: "30px"}} >
			Votre panier: 
		</div>
		<div style = {{ fontSize: "25px" }} >
			Le prix du panier est : {somme}€
		</div>
		<button className = "bouton5" onClick = {() => {
								props.validPanier()
								props.refresh()
							}}
		>
			Valider
		</button>
		
			<div>	
				{ 
					props.panier.map((prod,index) => {
						return (
							<div  className = "listeProduit">
								<div> Nom: { prod.nom } </div>
								<div> Description: { prod.desc} </div>
								<div> Prix: { prod.prix } </div>
								<div> Quantite: {prod.quantite} </div>
								<img src = { prod.img } />
								<br/>
								<button className = "bouton5" onClick = {() => {
									props.incrPanier(index);
									props.refresh();
								}} >
									Ajouter
								</button>
								<button className = "bouton5" onClick = {() => {
									props.decrPanier(index);
									props.refresh();
								}}>
									Enlever
								</button>
							</div>
								)
						})
				}
			
			</div>
			
				
		
	</div>		
	)
}


export default Panier