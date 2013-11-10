'use strict';

angular.module('collectionsApp')
	.controller('MainCtrl', function ($scope, collectionFactory) {

	init();

	function init(){
		$scope.collections = [];
		$scope.collections = collectionFactory.getCollections();
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
		if($scope.currentCollection != null){
			$scope.currentCollection.items.push($scope.newItem);
			$scope.newItem = "";
		}
		else{
			// Add a new collection
			var num = 0;
			var tempListName = "";
			var found = false;

			while(!found){
				num++;
				tempListName = "New List " + num;

				for(var i = 0; i < $scope.collections.length; i++){
					if(!($scope.collections[i].name == tempListName)){
						found = true;
					}
				}
			}
			$scope.collections.push({name: tempListName, items: []})
			$scope.currentCollection = $scope.collections[$scope.collections.length-1];
			$scope.currentCollection.items.push($scope.newItem);
		}
	}

	$scope.deleteCollection = function(collection){
		var index = $scope.collections.indexOf(collection);
		$scope.collections.splice(index, 1);

		if($scope.currentCollection == collection){
			$scope.currentCollection = null;
		}
	}

	$scope.deleteItem = function(item){
		var index = $scope.currentCollection.items.indexOf(item);
		$scope.currentCollection.items.splice(index, 1);
	}
 });