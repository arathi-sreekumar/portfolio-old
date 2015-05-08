var semantico = semantico || {};
if (semantico.loaded) {
	throw 'Error semantico.loaded already exists';
} else {
	semantico.loaded = (function () {
	var loaded = 0,
	pub = {},
	bar = document.getElementById('load-progress');
	return function (change) {	
		loaded += change.plus;
		loaded = (loaded > 100) ? 100 : loaded;
		bar.style.width = '' + loaded + '%';
	};
})();
}
setTimeout(function () {
	semantico.loaded({plus: 20});
	setTimeout(function () {
		semantico.loaded({plus: 30});
		setTimeout(function () {
			semantico.loaded({plus: 70});
		}, 1000);
	}, 1000);
}, 1000);