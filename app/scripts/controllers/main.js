'use strict';

angular.module('collectionsApp')
	.controller('MainCtrl', function ($scope, collectionFactory) {

	init();

	function init(){
		$scope.collections = collectionFactory.getCollections();
	}

	$scope.addCollection = function(){
		var newName = $.trim($scope.collectionSearch);
		if(newName == ""){
			newName = $scope.newCollectionName();
		}

		collectionFactory.addCollection(newName);
		$scope.collectionSearch = "";
		$scope.currentCollection = $scope.collections[$scope.collections.length - 1]
	}

	$scope.changeCollection = function(newCollection){
		$scope.currentCollection = newCollection;
	}

	$scope.addItem = function(){
		var currentDate = new Date();

	function init(){
		$scope.collections = collectionFactory.getCollections();
	}
		if($scope.currentCollection != null){
			var newListItem = new collectionFactory.collectionItem($scope.newItem, currentDate);

			$scope.currentCollection.items.push(newListItem);
			$scope.newItem = "";
		}
		else{
			// Add a new collection
			var tempListName = $scope.newCollectionName();

			collectionFactory.addCollection(tempListName);
			$scope.currentCollection = $scope.collections[$scope.collections.length-1];

			var newListItem = new collectionFactory.collectionItem($scope.newItem, currentDate);
			$scope.currentCollection.getItems().push(newListItem);
		}
	}

	$scope.newCollectionName = function(){
		var num = 0;
			var tempListName = "";
			var found = false;

			while(!found){
				num++;
				tempListName = "New List " + num;
				found = true;

				if($scope.collections.length < 1){
					found = true;
				}
				else{
					for(var i = 0; i < $scope.collections.length; i++){
						if(($scope.collections[i].getName() == tempListName)){
							found = false;
						}
					}
				}
			}

		return tempListName;
	}

	$scope.deleteCollection = function(collection){
		collectionFactory.deleteCollection(collection)		

		if($scope.currentCollection == collection){
			$scope.currentCollection = null;
		}
	}

	$scope.deleteItem = function(item){
		var index = $scope.currentCollection.items.indexOf(item);
		$scope.currentCollection.items.splice(index, 1);
	}
 });