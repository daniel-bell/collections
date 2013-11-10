'use strict';

angular.module('collectionsApp')
	.controller('MainCtrl', function ($scope, collectionFactory) {

	init();

	function init(){
		$scope.collections = [];
		$scope.collections = collectionFactory.getCollections();
		$scope.currentCollection = null;
	}

	$scope.addCollection = function(){
		$scope.collections.push({name: $scope.collectionSearch, items: []});
		$scope.collectionSearch = "";
		$scope.currentCollection = $scope.collections[$scope.collections.length - 1]
	}

	$scope.changeCollection = function(newCollection){
		$scope.currentCollection = newCollection;
	}

	$scope.addItem = function(){
		$scope.currentCollection.items.push($scope.newItem);
		$scope.newItem = "";
	}
 });