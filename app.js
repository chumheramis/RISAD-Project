// Node Modules
var range = require('ipv4-range');
var request = require('ajax-request');

// Important Variables

/**
 * NOTE
 * If you know a router pattern other than the pattern i put there please let me know.
 * I need this to be able to search more router patterns to be effective.
 * HOW TO ADD PATTERN
 * If you are in a router login, look at your developer mode and search for the brand name in the code
 * if it is inside a tag, get it aswell if needed. then add it in the array below [router_pattern].
 * you can add it below like /Cisco something/i where "Cisco something" is the pattern if you don't know
 * how to do the following, please tell me instead.
 */

var router_pattern = [
  /ZyXEL P-660HN-T1A/i,
];


var start = '192.168.1.1';

// Program Start
var ip_addresses = range(start,255);


ip_addresses.forEach(function(ip_address){
	host = 'http:\/\/' + ip_address;
	console.log('Checking ' + host);
	request({
		url:host,
		method:'GET'
	},function(err,res,body){
		if(err){
			//console.log('error')
			//console.log(err)
		}else{
			console.log(ip_address + ' is up');
			//console.log(body)
			router_pattern.forEach(function(pattern){
				var result = body.search(pattern);
				if(result != -1){
					console.log('pattern found');
					console.log('pattern: ' + pattern);
					console.log('host: ' + ip_address);
				}
				console.log();
			});
		}
	});
});

/**
 * @param string pattern the patter to search in the string
 * @param string strSearch the string in which the pattern is searched
 */
var patternSearch =function(pattern,strSearch){
  return strSearch.search(pattern);

}
//var res = patternSearch(router_pattern[0],str);
//if(res){
//  console.log('pattern found');
//}



