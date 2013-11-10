'use strict';

angular.module('collectionsApp')
	.factory('collectionFactory', function() {

	var collections = [{name: "Collection 1", items: ["Item 1", "Item2"]}];

	var factory = {};

	factory.getCollections = function() {
		return collections;
	};
	
	return factory;
});