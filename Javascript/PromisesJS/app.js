 function get(url) {
 	return new Promise(function(resolve, reject) {
 		var req = new XMLHttpRequest();
 		req.open('GET',url);

 		req.onload = function() {
 			if(req.status == 200) {
 				resolve(req.response);
 			}
 			else {
 				reject(Error(req.statusText));
 			}
 		};

 		req.onerror = function() {
 			reject(Error("Network Error"));
 		};

 		req.send();
 	});
 }

 function getJSON(url) {
 	return get(url).then(JSON.parse);
 }

 function addHtmlToPage(data) {
 	;
 }

 getJSON('http://en.wikipekdia.org/w/api.php?action=opensearch&search=marsala&format=json&callback=wikiCallback')
 .then(function(story) {
 	addHtmlToPage(story[0]);

 	return story.
 })


/*
asyncThing1().then(function() {
  return asyncThing2();
}).then(function() {
  return asyncThing3();
}).catch(function(err) {
  return asyncRecovery1();
}).then(function() {
  return asyncThing4();
}, function(err) {
  return asyncRecovery2();
}).catch(function(err) {
  console.log("Don't worry about it");
}).then(function() {
  console.log("All done!");
})
*/