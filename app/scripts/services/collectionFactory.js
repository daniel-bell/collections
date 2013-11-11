'use strict';

angular.module('collectionsApp')
	.factory('collectionFactory', function() {

	var factory = {};
	var collections = [];

	factory.collectionItem = function(itemName, date){
		this.itemContent = itemName;
		this.date = date;

		this.getContent = function(){
			return this.itemContent;
		}

		this.getDateCreated = function(){
			var seconds = "";
			var secondsNum = this.date.getSeconds();
			if(secondsNum < 10){
				seconds = "0" + secondsNum;
			}
			else{
				seconds = secondsNum;
			}

			var dateString = this.date.getFullYear() + "-" + this.date.getMonth() + "-" + this.date.getDate() + " " + this.date.getHours() + ":" + this.date.getMinutes() + ":" + seconds;
			return dateString;
		}
	}

	factory.collection = function(collectionName){
		this.collectionName = collectionName;
		this.items = [];

		this.getName = function(){
			return this.collectionName;
		}

		this.addItem = function(itemName){
			items.push(new collectionItem(itemName));
		}

		this.getItems = function(){
			return this.items;
		}
	}	

	factory.getCollections = function() {
		return collections;
	};

	factory.addCollection = function(newCollection){
		collections.push(new factory.collection(newCollection));
	}

	factory.deleteCollection = function(collection){
		var index = collections.indexOf(collection);
		collections.splice(index, 1);
	}
	
	return factory;
});