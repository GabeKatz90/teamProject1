const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://hotels4.p.rapidapi.com/locations/v3/search?q=london&locale=en_UK&langid=1033&siteid=300000001",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "f73b328648mshb951bb7e2b043b9p1f299ajsnd32e56f7470f",
		"X-RapidAPI-Host": "hotels4.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});

// const settings2 = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://the-fork-the-spoon.p.rapidapi.com/restaurants/v2/list?queryPlaceValueCityId=461789&pageSize=10&pageNumber=1",
// 	"method": "GET",
// 	"headers": {
// 		"X-RapidAPI-Key": "f73b328648mshb951bb7e2b043b9p1f299ajsnd32e56f7470f",
// 		"X-RapidAPI-Host": "the-fork-the-spoon.p.rapidapi.com"
// 	}
// };

// $.ajax(settings2).done(function (response) {
// 	console.log(response);
// });
var city = "london"
var url = "https://the-fork-the-spoon.p.rapidapi.com/locations/v2/auto-complete?text="+city



const settings3 = {
	"async": true,
	"crossDomain": true,
	"url": url,
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "f73b328648mshb951bb7e2b043b9p1f299ajsnd32e56f7470f",
		"X-RapidAPI-Host": "the-fork-the-spoon.p.rapidapi.com"
	}
};

$.ajax(settings3).done(function (response) {
	console.log(response);
});