 // init angular app
var app = angular.module( 'appX', [] );

app.controller( 'MessageBoardController', function( $scope ){
	// create some dummy data (messages)
	var messageBoard = this;
	messageBoard.messages = [
		{
			id: 0, 
			text: 'message 1 text here',
			votes: 0
		},
		{
			id: 1,
			text: 'message 2 text here',
			votes: 8
		},
		{
			id: 1, 
			text: 'message 3 text here',
			votes: 4
		}
	];
	// add .method to create new messages and add them to the view
	messageBoard.addMessage = function(){
		var message = {
			id: messageBoard.messages.length,
			text: messageBoard.messageText,
			votes: 0
		};
		// .unshift adds this object to the front of the array (instead of .push to the front)
		messageBoard.messages.unshift( message );
		messageBoard.messageText = '';
	}
	// upvote messages // downvote messages // delete messages
	messageBoard.upvote = function( msg ){
		msg.votes++;
	};
});

 
 // create a controller to add the data to the view
 

 // count the number of messages
 // count the number of votes
 // provide details of empty state






