ko.bindingHandlers.combobox = {

	init: function(element, valueAccessor){


	    var $input = $('<input type="text"/>');
	    var $button = $('<button type="button">V</button>');
	    var $select = $('<select></select>');

	    var $element = $(element);
		$element.addClass('combobox');
		$element.append($input);
		$element.append($button);
		$element.append($select);
		    
	    $button.click(function(){

	        $select.simulate('mousedown');
		});

		$select.change(function(){

			var newValue = $select.val();

			$input.val(newValue);

			var modelProperty = valueAccessor();
			modelProperty(newValue);
		});

		$input.change(function(){

			var newValue = $input.val();

			$select.val(newValue);
			
			var modelProperty = valueAccessor();
			modelProperty(newValue);
		});

		


	},

	update: function(element, valueAccessor){
		
		var $element = $(element);
		var $input = $element.find('input');
		var $select = $element.find('select');

		var value = valueAccessor()();
		$input.val(value);
		$select.val(value);
	}		
}


ko.bindingHandlers.comboOptions = {

	init: function(element, valueAccessor, allBindings){

		var $select = $(element).find('select');
		var selectValues = valueAccessor()();

		$select.empty();
		$.each(selectValues, function(key, value){
			$select
				.append($('<option/>')
							.val(value)
							.text(value));
		});
	},

	update: function(element, valueAccessor){

		var $select = $(element).find('select');
		var newSelectValues = valueAccessor()();

		$select.empty();
		$.each(newSelectValues, function(key, value){
			$select
				.append($('<option/>')
							.val(value)
							.text(value));
		});
	}
}