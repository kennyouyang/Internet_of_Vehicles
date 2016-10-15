define(function(require, exports, module) {

	mui.plusReady(function() {
		ws = plus.webview.currentWebview();
		ws.setStyle({
			scrollIndicator: "none"
		});

		///获取父页面的值
		//console.log(ws.parent().datas); 
		//alert(ws.parent().datas['name']); 
		var stastion_name = document.getElementById("stastion_name");
		var stastion_add = document.getElementById("stastion_add");
		var stastion_brand = document.getElementById("stastion_brand");
		var stastion_type = document.getElementById("stastion_type");
		var stastion_discount = document.getElementById("stastion_discount");
		var stastion_exhaust = document.getElementById("stastion_exhaust");
		var stastion_fwlsmc = document.getElementById("stastion_fwlsmc");

		stastion_name.innerHTML = ws.parent().datas['name'];
		stastion_add.innerHTML = ws.parent().datas['address'];
		stastion_brand.innerHTML = ws.parent().datas['brandname'];
		stastion_type.innerHTML = ws.parent().datas['type'];
		stastion_discount.innerHTML = ws.parent().datas['discount'];
		stastion_exhaust.innerHTML = ws.parent().datas['exhaust']; 
		if(ws.parent().datas['fwlsmc']==""||ws.parent().datas['fwlsmc']==null||ws.parent().datas['fwlsmc']==undefined)
		{
			stastion_fwlsmc.innerHTML ="暂无";
		}
		else
		{
			stastion_fwlsmc.innerHTML = ws.parent().datas['fwlsmc'];
		}
		

		var prices = ws.parent().datas['gastprice'];
		var str_type = '';
		var str_prices = '';
		for (var pricesOtype in prices) {
			/*alert(pricesOtype);  
			alert(prices[pricesOtype]);  */
			str_type += '<td><p class=\"hotel-color-orange\">' + pricesOtype + '</p></td>';
			str_prices += '<td><p style=\"color:#8f8f94\">￥' + prices[pricesOtype] + '</p></td>';
		}
		var oil_type = document.getElementById("oil_type");
		var oil_price = document.getElementById("oil_price");
		oil_type.innerHTML = str_type;
		oil_price.innerHTML = str_prices;

		var brandimg = document.getElementById("brandimg");
		var brandname = ws.parent().datas['brandname'];

		/*if (brandname == "中石化") {
				brandimg.src="../images/brand/yzpp_zsh_map.9.png";
		} 		
		else if(brandname == "中石油")
		{
				brandimg.src="../images/brand/yzpp_zsy_map.9.png";
			 
		}
		else if(brandname == "社会民营"){
					brandimg.src="../images/brand/yzpp_minying_map.9.png"; 
		}
		else if(brandname == "中国航油"){
					brandimg.src="../images/brand/yzpp_zghy_map.9.png"; 
		}
		else{
				brandimg.src="../images/brand/yzpp_buxiang_map.9.png";
		}*/

		var pic = "../images/brand/yzpp_buxiang_map.9.png";
		if (brandname == "中石化") {
			pic = "../images/brand/yzpp_zsh_map.9.png";
		} else if (brandname == "中石油") {
			pic = "../images/brand/yzpp_zsy_map.9.png";
			//pic="CNPC.png";
		} else if (brandname == "社会民营") {
			pic = "../images/brand/yzpp_minying_map.9.png";
		} else if (brandname == "中国航油") {
			pic = "../images/brand/yzpp_zghy_map.9.png";
		} else if (brandname == "国企") {
			pic = "../images/brand/yzpp_guoqi_map.9.png";
		} else if (brandname == "壳牌") {
			pic = "../images/brand/yzpp_qiaopai_map.9.png";
		} else if (brandname == "中化道达尔") {
			pic = "../images/brand/yzpp_daodaer_map.9.png";
		} else if (brandname == "中海油") {
			pic = "../images/brand/yzpp_zhy_map.9.png";
		} else if (brandname == "中油BP") {
			pic = "../images/brand/yzpp_zhongyoubp_map.9.png";
		} else if (brandname == "加德士") {
			pic = "../images/brand/yzpp_jiadeshi_map.9.png";
		}
		brandimg.src = pic;

		/*if (brandname == "中石化") {
			brandimg.src="../images/zhongshihua.png"; 
			 
		} 
		else if(brandname == "中石油")
		{
			brandimg.src="../images/CNPC.png";
		}
		else {
			brandimg.src="../images/other.png";
			 
		}*/

	});
});