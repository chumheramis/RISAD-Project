// Node Modules
var range = require('ipv4-range');
var request = require('ajax-request');

// Important Variables

var router_pattern = [
  /ZyXEL P-660HN-T1A/i,
];


var start = '112.201.151.0';

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



