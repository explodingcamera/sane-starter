import React from 'react';
import {observer} from 'mobx-react';
// import {observer, inject} from 'mobx-react';

import css from 'css/appComponent.css';

/* @inject('exampleStore') */ @observer class App extends React.Component {
	render() {
		// const {exampleStore} = this.props;
		return (
			<div className={css.main}>
				{this.props.children}
			</div>
		);
	}
}

App.propTypes = {
	children: React.PropTypes.element
	// exampleStore: React.PropTypes.object
};

export default App;
