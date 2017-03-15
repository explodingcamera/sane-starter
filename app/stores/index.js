import exampleStore from './exampleStore';

const stores = {
	exampleStore
};

for (const [, store] of Object.entries(stores)) {
	if (store.injectStores) {
		store.injectStores(stores);
	}
}

export default {
	exampleStore
};
