define(function(require, exports, module) {
	var pageHepler = require('../common/page-helper');
	var priceDetail = require("../controls/price-detail/main");
	var bookingDate = require('../controls/booking-date/main');

	var self = exports;

	self.setArrivalTime = function() {
		if (!self.atPicker) {
			self.atPicker = new mui.PopPicker();
			self.atPicker.setData([{
				text: "23点前"
			}, {
				text: "22点前"
			}]);
		}
		self.atPicker.show(function() {});
	};	

	self.showPriceDetail = function() {
		priceDetail.show();
	};
	
	self.setBookingDate = function() {
		bookingDate.show();
	};

	pageHepler.init({
		handler: self
	});
});