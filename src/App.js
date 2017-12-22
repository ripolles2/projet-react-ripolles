import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import { add_stock, supp_stock, incr_quant, decr_quant, add_panier, incr_panier, decr_panier, valid_panier } from "./services/stock/actions"

import Stock from "./component/Stock"
import Store from "./component/Store"
import Panier from "./component/Panier"



class App extends Component {

	

	state = {
		text:"",
		nomStoreOk:false,
		textNom:"",
		textDesc:"",
		intPrix:"",
		textImg:""
	}

	refresh = () => {
		this.setState({})
	}
	

	render() {
		return (
			<div className="App">
				<header className="App-header">
					
					
					
				</header>


			{
				this.state.nomStoreOk ?
				<div style = {{ display: "flex" }}>
				<div style = {{ width: "100%", border: "2px solid red", padding: "10px" }}> 
					<div style = {{ fontSize: "50px", color: "black", margin: "50px", border: "solid gray 5px", padding: "10px", backgroundColor: "#FF5E4D" }}> { this.state.text } </div>
					<input className ="input"  type = "text" value = {this.state.textNom} placeholder = "Entrer le nom de votre produit" onChange = {(e) => {
																																			this.setState({textNom: e.target.value})
																																		}} 
					/>
					<input  className ="input" type = "text" value = {this.state.textDesc	} placeholder = "Entrer la description de votre produit" onChange = {(e) => {
																																			this.setState({textDesc: e.target.value})
																																		}} 
					/>
					<input  className ="input" type = "number" min = "0" value = {this.state.intPrix} placeholder = "Entrer le prix de votre produit" onChange = {(e) => {
																																			this.setState({intPrix: e.target.value})
										 																								}} 
					/>
					<input  className ="input" type = "text" value = {this.state.textImg} placeholder = "Entrer l'image de votre produit" onChange = {(e) => {
																																			this.setState({textImg: e.target.value})
																																		}} 
					/>
					<br/>
					<br/>
				
				<button className = "bouton5" onClick = {() => { 
					if (this.state.textNom.length != 0 && this.state.textDesc.length != 0 && this.state.textImg.length != 0) {
						this.props.add_stock({
						nom: this.state.textNom,
						desc: this.state.textDesc,
						prix: this.state.intPrix,
						img: this.state.textImg
					});
					this.refresh();
					}
					else {
						alert("Vous n'avez pas entré tous les champs");
					}
					

				}}>
					Valider
				</button>

			
			
				<Stock 
					stock = {this.props.stock}
					suppStock = {this.props.supp_stock.bind(this)}
					incrQuant = {this.props.incr_quant.bind(this)}
					decrQuant = {this.props.decr_quant.bind(this)}
					refresh = {this.refresh.bind(this)}
				/>
				

			</div>
			<div style = {{ width: "100%", border: "2px solid red", padding: "2px" }} >  
				<Store 
					panier = {this.props.panier}
					stock = {this.props.stock}
					refresh = {this.refresh.bind(this)}
					addPanier = {this.props.add_panier.bind(this)}
				/>
			</div>
			<div style = {{ width: "100%", border: "2px solid red", padding: "2px" }} >  
				<Panier 
					panier = {this.props.panier}
					stock = {this.props.stock}
					refresh = {this.refresh.bind(this)}
					incrPanier = {this.props.incr_panier.bind(this)}
					decrPanier = {this.props.decr_panier.bind(this)}
					validPanier = {this.props.valid_panier.bind(this)}
				/>
			</div>
		</div>
				:
				<div>
					<div style = {{ fontSize: "40px"}}>
						Entrer le nom de votre store: 
					</div>
					<input
						style = {{width: "500px"}}
						type='text'
						value={this.state.text}
						onChange={(e) => this.setState({ text: e.target.value })}
					/>	
				<div>
					<button className = "bouton5"
						onClick={() => 
							this.state.text.length != 0
							?
								this.setState({
									nomStoreOk:true
								})
							:
								alert("Vous n'avez pas entré un nom de store")

							}
					>
						Valider
					</button>
				</div>
				</div>
			}
			</div>
		);
	}

}


const mapStateToProps = (state) => ({
	stock: state.stock.stock_store,
	panier: state.stock.panier_store
});


const mapActionsToProps = (dispatch) => ({
	add_stock: bindActionCreators(add_stock, dispatch),
	supp_stock: bindActionCreators(supp_stock,dispatch),
	incr_quant: bindActionCreators(incr_quant,dispatch),
	decr_quant: bindActionCreators(decr_quant,dispatch),
	add_panier: bindActionCreators(add_panier,dispatch),
	incr_panier: bindActionCreators(incr_panier,dispatch),
	decr_panier: bindActionCreators(decr_panier,dispatch),
	valid_panier: bindActionCreators(valid_panier,dispatch)
});


export default connect(mapStateToProps, mapActionsToProps)( App );
