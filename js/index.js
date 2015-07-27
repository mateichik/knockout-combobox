$(document).ready(function() {

	
	var SomeViewModel = function() {

		this.somevalue = ko.observable('lol');
		this.somevalue2 = ko.observable('kek');
		this.cities  = ko.observableArray(['Moscow', 'Paris', 'Minsk']);
	}

	ko.applyBindings(new SomeViewModel());
});

