import React, { Component } from 'react';
import logo from './assets/logo.svg';
import './css/App.css';
import './css/bootstrap.min.css';
import './css/new-age.css';
import './css/new-age.min.css';

import Combo from 'react-combo'
import 'react-combo/index.css'

const data = [
    { id: 35, label: 'Bombo 2' },
    { id: 36, label: 'Bombo 1' },
    { id: 37, label: 'Batida no Aro' },
		{ id: 38, label: 'Tarola 1 Pele' },
		{ id: 39, label: 'Palmas' },
		{ id: 40, label: 'Tarola 2 Aro' },
		{ id: 41, label: 'Timbalão grave 2' },
		{ id: 42, label: 'Pratos de choque fechados' },
		{ id: 43, label: 'Timbalão grave 1' },
		{ id: 44, label: 'Pratos de choque fechados pedal' },
		{ id: 45, label: 'Timbalão médio 2' },
		{ id: 46, label: 'Pratos de choque abertos' },
		{ id: 47, label: 'Timbalão médio 1' },
		{ id: 48, label: 'Timbalão agudo 2' },
		{ id: 49, label: 'Prato de ataque crash 1' },
		{ id: 50, label: 'Timbalão agudo 1' },
		{ id: 51, label: 'Prato de condução 1' },
		{ id: 52, label: 'Prato de ataque china' },
		{ id: 53, label: 'Prato de condução' },
		{ id: 54, label: 'Pandeirola' },
		{ id: 55, label: 'Prato de ataque splash' },
		{ id: 56, label: 'Caneca' },
		{ id: 57, label: 'Prato de ataque crash 2' },
		{ id: 58, label: 'Vibraslap' },
		{ id: 59, label: 'Prato de condução 2' },
		{ id: 60, label: 'Bongo agudo' },
		{ id: 61, label: 'Bongo grave' },
		{ id: 62, label: 'Conga aguda abafada' },
		{ id: 63, label: 'Conga aguda' },
		{ id: 64, label: 'Conga grave' },
		{ id: 65, label: 'Timbale agudo' },
		{ id: 66, label: 'Timbale grave' },
		{ id: 67, label: 'Agogô' },
		{ id: 68, label: 'Agogô grave' },
		{ id: 69, label: 'Afoxé' },
		{ id: 70, label: 'Maracas' },
		{ id: 71, label: 'Apito curto' },
		{ id: 72, label: 'Apito longo' },
		{ id: 73, label: 'Reco-reco curto' },
		{ id: 74, label: 'Reco-reco longo' },
		{ id: 75, label: 'Clavas' },
		{ id: 76, label: 'Bloco de madeira agudo' },
		{ id: 77, label: 'Bloco de madeira grave' },
		{ id: 78, label: 'Cuíca abafada' },
		{ id: 79, label: 'Cuíca' },
		{ id: 80, label: 'Triângulo abafado' },
		{ id: 81, label: 'Triângulo' }
  ]
   
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Arduino MIDI Drums</h2>
        </div>
        
        <div class="container">
        <div class="row">
          <div class="col-md-8 mx-auto">
							
				<form class="form-horizontal">
					<fieldset>

					<legend>Configuração de Preset</legend>

					<div class="form-group">
					  <label class="12 control-label" for="selectbasic">Selecione o instrumento 1</label>
					  <div class="col-md-12">
						<Combo dataSource={data} idProperty="idInstrumento1" displayProperty="label"/>
					  </div>
					</div>



					<div class="form-group">
						<label class="12 control-label" for="selectbasic">Selecione o instrumento 2</label>
						<div class="col-md-12">
						<Combo dataSource={data} idProperty="idInstrumento2" displayProperty="label"/>
						</div>
					</div>

					<div class="form-group">
						<label class="12 control-label" for="selectbasic">Selecione o instrumento 3</label>
						<div class="col-md-12">
						<Combo dataSource={data} idProperty="idInstrumento3" displayProperty="label"/>
						</div>
					</div>

					<div class="form-group">
						<label class="12 control-label" for="selectbasic">Selecione o instrumento 4</label>
						<div class="col-md-12">
						<Combo dataSource={data} idProperty="idInstrumento4" displayProperty="label"/>
						</div>
					</div>

					<div class="form-group">
						<label class="12 control-label" for="selectbasic">Selecione o instrumento 5</label>
						<div class="col-md-12">
						<Combo dataSource={data} idProperty="idInstrumento5" displayProperty="label"/>
						</div>
					</div>

					<div class="form-group">
					  <label class="col-md-12 control-label" for="singlebutton">Deseja carregar o preset para a bateria?</label>
					  <div class="col-md-12">
						<button id="singlebutton" name="singlebutton" class="btn btn-outline btn-xl js-scroll-trigger">Confirmar</button>
					  </div>
					</div>

					</fieldset>
					</form>
					
          </div>
        </div>
      </div>
           
      </div>
    );
  }
}

export default App;
