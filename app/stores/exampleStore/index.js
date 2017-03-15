import {observable, action} from 'mobx';
// import {create, persist} from 'mobx-persist';

class ExampleStore {

	/* @persist */ @observable example = 1;

	@action exampleAction = () => {
		this.example += 1;
	}

	injectStores(/* stores */) {
		// this.someStore = stores.someStore;
	}
}

// const exampleStore = persistStore('example', new ExampleStore())
const exampleStore = new ExampleStore();
export default exampleStore;
export {ExampleStore};
