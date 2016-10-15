define(function(require, exports, module) {

	mui.init();
	var dis = document.getElementById("distance");
	dis.innerHTML = "距离：当前位置";

	var self = exports;

	self.createInnerList = function() {
		mui.plusReady(function() {
			plus.webview.currentWebview().append(plus.webview.create('./map_gasStation-inner.html', 'gasStation-inner', {
				top: "77px",
				bottom: "0px"
			}));
		});
	};
	self.createInnerList();

});