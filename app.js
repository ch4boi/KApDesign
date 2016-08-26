 // init angular app
var app = angular.module( 'appX', [] );

app.controller( 'CourseListController', function( $scope ){
		// create some dummy data (courses)
		var courseList = this;
		courseList.courses = [
		{
			title: "Alex's Faves",
			description: "These are my absolute favorite courses on KA and they cover the type of knowledge that I think EVERYONE should enjoy :)",
			link: "http://www.khanacademy.org/exercise/subtraction_1"
		},
		{
			title: "Alex's Faves II",
			description: "These are my absolute favorite courses on KA and they cover the type of knowledge that I think EVERYONE should enjoy :)",
			link: "http://www.khanacademy.org/exercise/subtraction_1"
		},
		{
			title: "ML prerequisite math",
			description: "A list of important skills to refresh before we begin class next month...",
			link: "http://www.khanacademy.org/exercise/subtraction_1"
		},
		{
			courseTitle: "Alex's Faves",
			courseDescription: "These are my absolute favorite courses on KA and they cover the type of knowledge that I think EVERYONE should enjoy :)",
			courseLink: "http://www.khanacademy.org/exercise/subtraction_1"
		}
	];

	// add .method to create new messages and add them to the view
	courseList.addCourse = function(){
		var course = {
			courseTitle: courseList.courses.length,
			text: messageBoard.messageText,
			votes: 0
		};

		// .unshift adds this object to the front of the array (instead of .push to the front)
		courseList.courses.push( course );
		messageBoard.messageText = '';

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






