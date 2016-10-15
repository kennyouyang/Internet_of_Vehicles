/*define(function(require, exports, module) {

	mui.init();
	mui.plusReady(function() {
		ws = plus.webview.currentWebview();
		ws.setStyle({
			scrollIndicator: "none"
		})
	})
});*/

(function($, doc) {
	$.init();
	$.ready(function() {
		//普通示例
		var userPicker = new $.PopPicker();
		userPicker.setData(cardata);
		var showUserPickerButton = doc.getElementById('showUserPicker');
		//var userResult = doc.getElementById('userResult');
		showUserPickerButton.addEventListener('tap', function(event) {
			userPicker.show(function(items) {

				showUserPickerButton.innerHTML = items[0]["text"];
				//返回 false 可以阻止选择框的关闭
				//return false;
			});
		}, false);

	});
})(mui, document);