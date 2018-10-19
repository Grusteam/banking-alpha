/*styles*/
import './styles/styles.css';

/*tools*/
import _ from 'lodash';

/*react*/
import React, { Component, PureComponent, createElement } from 'react';
import ReactDOM, { render, createPortal } from 'react-dom';

/*components*/
import ReduxApp from './react-app/ReduxApp.js';

const
	planeAppRoot = document.getElementById('plane-app'),
	reactRoot = document.getElementById('react-root'),
	activationButton = document.getElementById('react-activation');
	
const
	onClick = (e) => {
		planeAppRoot.style="opacity: 0.2; background-color: rgba(0, 255, 0, 0.2)";
		
		activationButton.removeEventListener("click", onClick);
		render(<ReduxApp/>, reactRoot);
	};
	
activationButton.addEventListener("click", onClick);
	


// render(createElement('span', {className: 'test'}), reactRoot);