# knockout-combobox
Custom binding similar to standard option with custom user input.

# Usage

Markup:
```HTML
<link rel="stylesheet" href="./css/index.css"/>
...
<div data-bind="combobox: somevalue, comboOptions: cities" style="width:100px;">
...
<script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/knockout/3.3.0/knockout-min.js"></script>
<script src="./js/customBindings.js"></script>
<script src="./js/jquery.simulate.js"></script>
<script src="./js/index.js"></script>
```
Code:
```JavaScript
var SomeViewModel = function() {

		this.somevalue = ko.observable('lol');
		this.cities  = ko.observableArray(['Moscow', 'Paris', 'Minsk']);
}

ko.applyBindings(new SomeViewModel());
```