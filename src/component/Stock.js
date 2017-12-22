import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import '../App.css';





const Stock = (props) => {

	


	return (
		<div>	
			<div style = {{fontSize: "30px"}} >
				Votre stock: 
			</div>
			{ 	
				props.stock.map((prod,index) => {
					return (
						<div className = "listeProduit" >
							<div> Nom: { prod.nom } </div>
							<div> Description: { prod.desc} </div>
							<div> Prix: { prod.prix } </div>
							<div> Quantite: {prod.quantite} </div>
							<img src = { prod.img } style = {{margin: "5px"}}/>
							<br/>
							<button className = "bouton5" onClick = {() => {
								props.suppStock(index)
								props.refresh()
							}}>  
								Supprimer
							</button>
							<button className = "bouton5" onClick = {() => {
								props.incrQuant(index)
								props.refresh()
							}}> 
								Ajouter
							</button>
							<button className = "bouton5" onClick = {() => {
								props.decrQuant(index)
								props.refresh()
							}} >
								Enlever
							</button>
						</div>
							)
					})
			}



		</div>			
	)
}





export default Stock;






