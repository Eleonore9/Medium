it("calls validateName function on form btn click", function () {
	nameFromForm = document.getElement('.first form input[name=name]').val();
	spyOn myobject.functions, "validateName"
	spyOnEvent($('.first form .btn'), 'click')
	$('.first form btn')trigger('click')
	expect(myobject.functions.validateName).toHaveBeenCalledWith($(nameFromForm));
});
