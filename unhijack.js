document.body.addEventListener('keypress', function (e) {
	if (e.altKey && (0x31 <= e.charCode && e.charCode <= 0x33)) {
		e.stopPropagation();
	}
}, true)
