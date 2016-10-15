define(function(require, exports, module) {

	mui.init();
	mui.plusReady(function(){
				ws=plus.webview.currentWebview();
				ws.setStyle({
					scrollIndicator:"none"
				})
			})

	
});