// app.getCourses = function(){
// 	var khanacademy = $( this ).val();
// 		$.ajax({
// 			url: 'http://www.khanacademy.org/api/v1/exercises/',
// 			success: function( response ){
// 				var coursesNum = response.length ;
// 				$( '#response' ).text();
// 				/* $( '#response' ).text( sky ); */

// 		}
// 	});
// };


var app = { };

app.getCourses = function(){
	var coursesX = $()
		$.ajax({
			url: 'http://www.khanacademy.org/api/v1/exercises',
			success: function( khanAPI ){
				var courseList = response.length;
				$( '#courseList' ).text( temp + '°' );
		}
	});
};

document.write( Object.keys(coursesX).length );

app.init = function(){
	addCourseButton.onclick = function(getCourses) { alert("moot!"); };
}

$( document ).ready( app.init );







