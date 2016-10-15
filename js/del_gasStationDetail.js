define(function(require, exports, module) {

	mui.init();
 

	var self = exports;

	self.createInnerList = function() {
		mui.plusReady(function() {
			plus.webview.currentWebview().append(plus.webview.create('map_gasStationDetail-inner.html', 'gasStationDetail-inner', {
				top: "44px",
				bottom: "0px"
			}));
			
/*			//传值
			console.log(plus.webview.currentWebview().name);
			console.log(plus.webview.currentWebview().id);*/
			
			
		});
	};
	self.createInnerList();

});