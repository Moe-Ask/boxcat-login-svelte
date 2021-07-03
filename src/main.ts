import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: '盒猫先生'
	}
});

export default app;