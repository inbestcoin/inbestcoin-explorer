/*var api = window.location.protocol + '//' + window.location.hostname;
if(window.location.port !== undefined || window.location.port.length > 0) {
    api += ':' + window.location.port;
}*/
var api = 'http://explorer.coin.inbest.cloud:27175';
var blockTargetInterval = 240;
var totalCoinsI = 18446744073709551615;
var coinUnits = 1000000000000;
var symbol = 'INC';
var refreshDelay = 30000;
// pools stats by MainCoins
var networkStat = {
    "INC": [
		//["turtlepool.space", "http://eu.turtlepool.space:8117"],
    ]
};
