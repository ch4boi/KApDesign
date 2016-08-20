app.getWeather = function(){
	var cityId = $( this ).val();
		$.ajax({
			url: 'https://api.edx.org/api/courses/v1/courses/2YotnFZFEjr1zCsicMWpAA',
			success: function( response ){
				var temp = (Math.floor(response.main.temp - 273.15)*9/5)+32 ;
				$( '#response' ).text( '°' + temp + ' ' + 'and ' +  '  ' + sky + '  ' + 'wind speed = ' + wind);
				/* $( '#response' ).text( sky ); */

		}
	});
};

/*
{
       "access_token":"2YotnFZFEjr1zCsicMWpAA",
       "token_type":"example",
       "expires_in":3600,
       "refresh_token":"tGzv3JOkF0XG5Qx2TlKWIA",
       "example_parameter":"example_value"
     }
*/