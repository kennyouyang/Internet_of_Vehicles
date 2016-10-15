var datas;

function list() {
	data = JSON.parse('{\"resultcode\":\"200\",\"reason\":\"Successed!\",\"result\":{\"data\":[{\"id\":\"28710\",\"name\":\"漓江加油站\",\"area\":\"541111\",\"areaname\":\"广西 桂林市 临桂县\",\"address\":\"广西桂林市临桂县琴潭路与巾山路交叉处\",\"brandname\":\"不详\",\"type\":\"其他\",\"discount\":\"非打折加油站\",\"exhaust\":\"国Ⅳ\",\"position\":\"110.240918,25.26174\",\"lon\":\"110.24745092165\",\"lat\":\"25.267588184702\",\"price\":{\"E90\":\"5.24\",\"E93\":\"5.62\",\"E97\":\"6.07\",\"E0\":\"5.19\"},\"gastprice\":{\"93#\":\"5.78\",\"0#车柴\":\"5.36\"},\"fwlsmc\":\"\",\"distance\":9919},{\"id\":\"27789\",\"name\":\"五洲石油琴潭加油站\",\"area\":\"541002\",\"areaname\":\"广西 桂林市 象山区\",\"address\":\"广西桂林市象山区，翠竹路南巷与黑山路交叉处向西，路南，翠竹路南巷西端\",\"brandname\":\"社会民营\",\"type\":\"其他\",\"discount\":\"非打折加油站\",\"exhaust\":\"国Ⅳ\",\"position\":\"110.267734,25.257953\",\"lon\":\"110.2741754091\",\"lat\":\"25.26421836902\",\"price\":{\"E90\":\"5.24\",\"E93\":\"5.62\",\"E97\":\"6.07\",\"E0\":\"5.19\"},\"gastprice\":{\"93#\":\"5.78\",\"0#车柴\":\"5.36\"},\"fwlsmc\":\"\",\"distance\":7448},{\"id\":\"1803\",\"name\":\"久久加油站\",\"area\":\"541002\",\"areaname\":\"广西 桂林市 象山区\",\"address\":\"广西桂林市象山区相人山路号，相人山路与万福路交叉处向北，路东\",\"brandname\":\"社会民营\",\"type\":\"其他\",\"discount\":\"非打折加油站\",\"exhaust\":\"国Ⅳ\",\"position\":\"110.274806,25.213857\",\"lon\":\"110.28124607511\",\"lat\":\"25.220178623555\",\"price\":{\"E90\":\"5.24\",\"E93\":\"5.62\",\"E97\":\"6.07\",\"E0\":\"5.19\"},\"gastprice\":{\"93#\":\"5.78\",\"0#车柴\":\"5.36\"},\"fwlsmc\":\"\",\"distance\":9786},{\"id\":\"27790\",\"name\":\"中石化独山加油站\",\"area\":\"541003\",\"areaname\":\"广西 桂林市 秀峰区\",\"address\":\"广西省壮族自治区桂林市秀峰区飞凤路与甲山路交叉路口南\",\"brandname\":\"中石化\",\"type\":\"直营店\",\"discount\":\"非打折加油站\",\"exhaust\":\"国Ⅳ\",\"position\":\"110.2725856656,25.2812044122\",\"lon\":\"110.28591\",\"lat\":\"25.293861\",\"price\":{\"E90\":\"5.24\",\"E93\":\"5.62\",\"E97\":\"6.07\",\"E0\":\"5.19\"},\"gastprice\":{\"93#\":\"5.78\",\"0#车柴\":\"5.36\"},\"fwlsmc\":\"\",\"distance\":5831},{\"id\":\"1804\",\"name\":\"中石化桂林西环加油站\",\"area\":\"541002\",\"areaname\":\"广西 桂林市 象山区\",\"address\":\"广西壮族自治区桂林市象山区环城西一路35号,联达雅居附近\",\"brandname\":\"中石化\",\"type\":\"直营店\",\"discount\":\"非打折加油站\",\"exhaust\":\"国Ⅳ\",\"position\":\"110.2744029654,25.2384875622\",\"lon\":\"110.287116\",\"lat\":\"25.251085\",\"price\":{\"E90\":\"5.24\",\"E93\":\"5.62\",\"E97\":\"6.07\",\"E0\":\"5.19\"},\"gastprice\":{\"93#\":\"5.78\",\"97#\":\"6.24\",\"0#车柴\":\"5.36\"},\"fwlsmc\":\"加油卡,便利店,93#自助加油,柴油自助加油,97#自助加油,发卡充值网点,卫生间,银联卡充值,加油卡充值业务\",\"distance\":6985},{\"id\":\"27788\",\"name\":\"中石化桂林铁西加油站\",\"area\":\"541002\",\"areaname\":\"广西 桂林市 象山区\",\"address\":\"广西壮族自治区桂林市象山区铁西四巷与环城西二路交汇处路东\",\"brandname\":\"中石化\",\"type\":\"直营店\",\"discount\":\"打折加油站\",\"exhaust\":\"国Ⅳ\",\"position\":\"110.2740564836,25.2610877882\",\"lon\":\"110.287138\",\"lat\":\"25.273751\",\"price\":{\"E90\":\"5.24\",\"E93\":\"5.62\",\"E97\":\"6.07\",\"E0\":\"5.19\"},\"gastprice\":{\"93#\":\"5.78\",\"97#\":\"6.24\"},\"fwlsmc\":\"加油卡,便利店,93#自助加油,97#自助加油,发卡充值网点,卫生间,银联卡充值,加油卡充值业务\",\"distance\":5877},{\"id\":\"27567\",\"name\":\"八定加油站\",\"area\":\"541003\",\"areaname\":\"广西 桂林市 秀峰区\",\"address\":\"广西桂林市秀峰区定江镇莲花塘村，153乡道与166县道交叉处东侧\",\"brandname\":\"社会民营\",\"type\":\"其他\",\"discount\":\"非打折加油站\",\"exhaust\":\"国Ⅳ\",\"position\":\"110.285923,25.333391\",\"lon\":\"110.29236319945\",\"lat\":\"25.339708962472\",\"price\":{\"E90\":\"5.24\",\"E93\":\"5.62\",\"E97\":\"6.07\",\"E0\":\"5.19\"},\"gastprice\":{\"93#\":\"5.78\",\"0#车柴\":\"5.36\"},\"fwlsmc\":\"\",\"distance\":7739},{\"id\":\"1806\",\"name\":\"中石化迎宾加油站\",\"area\":\"541002\",\"areaname\":\"广西 桂林市 象山区\",\"address\":\"广西桂林市象山区凯风路与长虹西路交叉口西南角\",\"brandname\":\"中石化\",\"type\":\"其他\",\"discount\":\"非打折加油站\",\"exhaust\":\"国Ⅳ\",\"position\":\"110.287442,25.20364\",\"lon\":\"110.29387575018\",\"lat\":\"25.209946904046\",\"price\":{\"E90\":\"5.24\",\"E93\":\"5.62\",\"E97\":\"6.07\",\"E0\":\"5.19\"},\"gastprice\":{\"93#\":\"5.78\",\"97#\":\"6.24\",\"0#车柴\":\"5.36\"},\"fwlsmc\":\"加油卡,便利店,93#自助加油,柴油自助加油,97#自助加油,发卡充值网点,卫生间,银联卡充值,加油卡充值业务\",\"distance\":9994},{\"id\":\"1802\",\"name\":\"中石化捷利加油站\",\"area\":\"541002\",\"areaname\":\"广西 桂林市 象山区\",\"address\":\"广西桂林市象山区凯风路88号，南泉路与321国道交叉处向北，路东\",\"brandname\":\"中石化\",\"type\":\"其他\",\"discount\":\"非打折加油站\",\"exhaust\":\"国Ⅳ\",\"position\":\"110.287614,25.214422\",\"lon\":\"110.29405765127\",\"lat\":\"25.22072997125\",\"price\":{\"E90\":\"5.24\",\"E93\":\"5.62\",\"E97\":\"6.07\",\"E0\":\"5.19\"},\"gastprice\":{\"93#\":\"5.78\",\"0#车柴\":\"5.36\"},\"fwlsmc\":\"加油卡\",\"distance\":8964},{\"id\":\"1805\",\"name\":\"中石油长虹加油站\",\"area\":\"541002\",\"areaname\":\"广西 桂林市 象山区\",\"address\":\"广西壮族自治区桂林市象山区凯风路与长虹中路交叉口东北角\",\"brandname\":\"中石油\",\"type\":\"其他\",\"discount\":\"打折加油站\",\"exhaust\":\"国Ⅳ\",\"position\":\"110.2817164566,25.1975688618\",\"lon\":\"110.294983\",\"lat\":\"25.210588\",\"price\":{\"E90\":\"5.24\",\"E93\":\"5.62\",\"E97\":\"6.07\",\"E0\":\"5.19\"},\"gastprice\":{\"93#\":\"5.78\",\"0#车柴\":\"5.36\"},\"fwlsmc\":\"加油卡\",\"distance\":9877},{\"id\":\"27568\",\"name\":\"中石化桂林九华加油站\",\"area\":\"541001\",\"areaname\":\"广西 桂林市 叠彩区\",\"address\":\"广西壮族自治区桂林市叠彩区九华路与圣隆路交汇处向东路南\",\"brandname\":\"中石化\",\"type\":\"直营店\",\"discount\":\"非打折加油站\",\"exhaust\":\"国Ⅳ\",\"position\":\"110.2844872705,25.2961630848\",\"lon\":\"110.297549\",\"lat\":\"25.308572\",\"price\":{\"E90\":\"5.24\",\"E93\":\"5.62\",\"E97\":\"6.07\",\"E0\":\"5.19\"},\"gastprice\":{\"93#\":\"5.78\",\"0#车柴\":\"5.36\",\"E97#\":\"6.24\"},\"fwlsmc\":\"加油卡\",\"distance\":5169},{\"id\":\"27612\",\"name\":\"中国航油民航安新加油站\",\"area\":\"541002\",\"areaname\":\"广西 桂林市 象山区\",\"address\":\"广西桂林市象山区安新村，安新南路与民主路交叉处南侧\",\"brandname\":\"中国航油\",\"type\":\"其他\",\"discount\":\"非打折加油站\",\"exhaust\":\"国Ⅳ\",\"position\":\"110.292767,25.258334\",\"lon\":\"110.29920923252\",\"lat\":\"25.264594050829\",\"price\":{\"E90\":\"5.24\",\"E93\":\"5.62\",\"E97\":\"6.07\",\"E0\":\"5.19\"},\"gastprice\":{\"93#\":\"5.78\",\"0#车柴\":\"5.36\"},\"fwlsmc\":\"\",\"distance\":5144},{\"id\":\"1801\",\"name\":\"中石化瓦窑加油站\",\"area\":\"541002\",\"areaname\":\"广西 桂林市 象山区\",\"address\":\"广西壮族自治区桂林市象山区同心路与崇信路交汇处\",\"brandname\":\"中石化\",\"type\":\"直营店\",\"discount\":\"非打折加油站\",\"exhaust\":\"国Ⅳ\",\"position\":\"110.2860824631,25.2302780381\",\"lon\":\"110.299334\",\"lat\":\"25.24326\",\"price\":{\"E90\":\"5.24\",\"E93\":\"5.62\",\"E97\":\"6.07\",\"E0\":\"5.19\"},\"gastprice\":{\"93#\":\"5.78\",\"97#\":\"6.24\",\"0#车柴\":\"5.36\"},\"fwlsmc\":\"加油卡,便利店,发卡充值网点,银联卡充值\",\"distance\":6650},{\"id\":\"28603\",\"name\":\"运通加油站\",\"area\":\"541001\",\"areaname\":\"广西 桂林市 叠彩区\",\"address\":\"广西壮族自治区桂林市叠彩区中山北路与翊武路交汇处的西方，奥林峰大酒店附近\",\"brandname\":\"社会民营\",\"type\":\"其他\",\"discount\":\"非打折加油站\",\"exhaust\":\"国Ⅳ\",\"position\":\"110.294429,25.29363\",\"lon\":\"110.30085462098\",\"lat\":\"25.299866469253\",\"price\":{\"E90\":\"5.24\",\"E93\":\"5.62\",\"E97\":\"6.07\",\"E0\":\"5.19\"},\"gastprice\":{\"93#\":\"5.78\",\"0#车柴\":\"5.36\"},\"fwlsmc\":\"\",\"distance\":4494},{\"id\":\"1799\",\"name\":\"中石油南环加油站\",\"area\":\"541002\",\"areaname\":\"广西 桂林市 象山区\",\"address\":\"广西壮族自治区桂林市象山区凯风路与环城南二路交叉口向东路南\",\"brandname\":\"中石油\",\"type\":\"其他\",\"discount\":\"打折加油站\",\"exhaust\":\"国Ⅳ\",\"position\":\"110.2885230624,25.2204942063\",\"lon\":\"110.301568\",\"lat\":\"25.232987\",\"price\":{\"E90\":\"5.24\",\"E93\":\"5.62\",\"E97\":\"6.07\",\"E0\":\"5.19\"},\"gastprice\":{\"93#\":\"5.78\",\"97#\":\"6.24\",\"0#车柴\":\"5.36\"},\"fwlsmc\":\"银联卡,信用卡支付,加油卡,93#自助加油,柴油自助加油,97#自助加油,发卡充值网点,卫生间,银联卡充值,加油卡充值业务\",\"distance\":7410},{\"id\":\"1800\",\"name\":\"中石化净瓶山加油站\",\"area\":\"541002\",\"areaname\":\"广西 桂林市 象山区\",\"address\":\"广西壮族自治区桂林市象山区瓦窑东路与环城南二路交叉口向东路南\",\"brandname\":\"中石化\",\"type\":\"直营店\",\"discount\":\"非打折加油站\",\"exhaust\":\"国Ⅳ\",\"position\":\"110.2965861363,25.2218487505\",\"lon\":\"110.310006\",\"lat\":\"25.234422\",\"price\":{\"E90\":\"5.24\",\"E93\":\"5.62\",\"E97\":\"6.07\",\"E0\":\"5.19\"},\"gastprice\":{\"93#\":\"5.78\",\"97#\":\"6.24\",\"0#车柴\":\"5.36\"},\"fwlsmc\":\"加油卡,便利店,93#自助加油,柴油自助加油,发卡充值网点,卫生间,银联卡充值,加油卡充值业务\",\"distance\":6823},{\"id\":\"27565\",\"name\":\"中石化公交北门加油站\",\"area\":\"541001\",\"areaname\":\"广西 桂林市 叠彩区\",\"address\":\"广西壮族自治区桂林市叠彩区大河乡,气象路与中山北路交叉口向南路西\",\"brandname\":\"中石化\",\"type\":\"直营店\",\"discount\":\"非打折加油站\",\"exhaust\":\"国Ⅳ\",\"position\":\"110.298606405,25.3132399031\",\"lon\":\"110.311335\",\"lat\":\"25.325546\",\"price\":{\"E90\":\"5.24\",\"E93\":\"5.62\",\"E97\":\"6.07\",\"E0\":\"5.19\"},\"gastprice\":{\"93#\":\"5.78\",\"0#车柴\":\"5.36\"},\"fwlsmc\":\"加油卡\",\"distance\":5306},{\"id\":\"8472\",\"name\":\"中石化八里街加油站(自助站)\",\"area\":\"541213\",\"areaname\":\"广西 桂林市 灵川县\",\"address\":\"广西壮族自治区桂林市灵川县八里四路与灵川大道交叉口南侧路西\",\"brandname\":\"中石化\",\"type\":\"直营店\",\"discount\":\"打折加油站\",\"exhaust\":\"国Ⅳ\",\"position\":\"110.2996443656,25.3381132348\",\"lon\":\"110.312395\",\"lat\":\"25.35033\",\"price\":{\"E90\":\"5.24\",\"E93\":\"5.62\",\"E97\":\"6.07\",\"E0\":\"5.19\"},\"gastprice\":{\"93#\":\"5.78\",\"97#\":\"6.24\",\"0#车柴\":\"5.33\"},\"fwlsmc\":\"加油卡,便利店,93#自助加油,柴油自助加油,97#自助加油,发卡充值网点,卫生间,银联卡充值,加油卡充值业务\",\"distance\":7636},{\"id\":\"27564\",\"name\":\"中石化桂林乌石加油站\",\"area\":\"541001\",\"areaname\":\"广西 桂林市 叠彩区\",\"address\":\"广西壮族自治区桂林市叠彩区东二环路与中山北路交汇处路西\",\"brandname\":\"中石化\",\"type\":\"直营店\",\"discount\":\"非打折加油站\",\"exhaust\":\"国Ⅳ\",\"position\":\"110.3005182292,25.3159826706\",\"lon\":\"110.313423\",\"lat\":\"25.328205\",\"price\":{\"E90\":\"5.24\",\"E93\":\"5.62\",\"E97\":\"6.07\",\"E0\":\"5.19\"},\"gastprice\":{\"93#\":\"5.78\",\"97#\":\"6.24\",\"0#车柴\":\"5.36\"},\"fwlsmc\":\"加油卡,便利店,发卡充值网点,银联卡充值\",\"distance\":5424},{\"id\":\"27566\",\"name\":\"加油站（北辰路）\",\"area\":\"541001\",\"areaname\":\"广西 桂林市 叠彩区\",\"address\":\"广西壮族自治区桂林市叠彩区北辰路与金河路交叉口北行，路东侧\",\"brandname\":\"不详\",\"type\":\"其他\",\"discount\":\"非打折加油站\",\"exhaust\":\"国Ⅳ\",\"position\":\"110.307122,25.331071\",\"lon\":\"110.31362126886\",\"lat\":\"25.337123130571\",\"price\":{\"E90\":\"5.24\",\"E93\":\"5.62\",\"E97\":\"6.07\",\"E0\":\"5.19\"},\"gastprice\":{\"93#\":\"5.78\",\"0#车柴\":\"5.36\"},\"fwlsmc\":\"\",\"distance\":6264}],\"pageinfo\":{\"pnums\":20,\"current\":1,\"allpage\":2}},\"error_code\":0}');
	var str = '';
	var data0 = data.result.data;
	var dataOrder = JsonSort(data0, 'distance'); //按距离排序

	var waitingwv = plus.nativeUI.showWaiting("正在加载，请等待...", {
		style: "black",
		color: "#000",
		background: "rgba(0,0,0,0)",
		loading: {
			/*icon:"../images/loading/car2.gif"    */
		}
	});

	for (var i = 0; i < dataOrder.length; i++) {

		var prices = dataOrder[i]['gastprice'];
		var str_type = '';
		var str_prices = '';
		for (var pricesOtype in prices) {
			/*alert(pricesOtype);  
			alert(prices[pricesOtype]);  */
			str_type += '<td><p class=\"hotel-color-orange  detailp\">' + pricesOtype + '</p></td>';
			str_prices += '<td><p style=\"color:#8f8f94\">￥' + prices[pricesOtype] + '</p></td>';
		}

		var brabdname = dataOrder[i]['brandname'];
		var pic = "../images/brand/yzpp_buxiang_map.9.png";
		if (brabdname == "中石化") {
			pic = "../images/brand/yzpp_zsh_map.9.png";
		} else if (brabdname == "中石油") {
			pic = "../images/brand/yzpp_zsy_map.9.png";
			//pic="CNPC.png";
		} else if (brabdname == "社会民营") {
			pic = "../images/brand/yzpp_minying_map.9.png";
		} else if (brabdname == "中国航油") {
			pic = "../images/brand/yzpp_zghy_map.9.png";
		} else if (brabdname == "国企") {
			pic = "../images/brand/yzpp_guoqi_map.9.png";
		} else if (brabdname == "壳牌") {
			pic = "../images/brand/yzpp_qiaopai_map.9.png";
		} else if (brabdname == "中化道达尔") {
			pic = "../images/brand/yzpp_daodaer_map.9.png";
		} else if (brabdname == "中海油") {
			pic = "../images/brand/yzpp_zhy_map.9.png";
		} else if (brabdname == "中油BP") {
			pic = "../images/brand/yzpp_zhongyoubp_map.9.png";
		} else if (brabdname == "加德士") {
			pic = "../images/brand/yzpp_jiadeshi_map.9.png";
		}

		str += '<li class=\"mui-table-view-cell mui-media\" data-url=\"./hotel-detail.html\">' +
			'<input type=\"hidden\" class="idd" id=\"' + i + '\" value=\"' + i + '\" />' +
			'<img class=\"mui-media-object mui-pull-left hetol-placeholder\" src=\"../images/' +
			pic + '\"><div class=\"mui-media-body\">' +
			dataOrder[i]['name'] +
			'<p class=\"mui-ellipsis\">正常营业<span class=\"hotel-away\">' +
			dataOrder[i]['distance'] + '米</span></p><p class=\"mui-ellipsis\">品牌：' +
			dataOrder[i]['brandname'] +
			'<i class=\"fa fa-gift hotel-gift\"></i></p><table width=\"100%\" style=\"margin:1em 2em .5em 0\"><tr>' +
			str_type + //'<td><p class=\"hotel-color-orange\">' +'E90' +'</p></td><td><p class=\"hotel-color-orange\">E93</p></td><td><p class=\"hotel-color-orange\">E97</p></td>'+
			'<tr>' +
			str_prices +
			/*'<td><p style=\"color:#8f8f94\">￥' +
			dataOrder[i]['price']['E90'] +
			'</p></td><td><p style=\"color:#8f8f94\">￥' + dataOrder[i]['price']['E93'] +
			'</p></td><td><p style=\"color:#8f8f94\">￥' +
			dataOrder[i]['price']['E97'] +
			'</p></td>'+*/
			'</tr></table></div></li>';

	}
	/*mui.toast("加载成功");*/

	var respnoseEl = document.getElementById("innerlist");

	respnoseEl.innerHTML = str;

	waitingwv.close();

	//alert(str);

}

function ajax_list(lat, lon) {
	var str = '';
	var waitingwv = plus.nativeUI.showWaiting("正在加载，请等待...", {
				style: "black",
				color: "#000",
				background: "rgba(0,0,0,0)",
				loading: {
					/*icon:"../images/loading/car2.gif"    */
				}
			});
	mui.ajax('http://apis.juhe.cn/oil/local?lon=' + lon + '&lat=' + lat + '&r=6000&page=&format=&key=695d599d1174e806d3f308fdc5c463a1', {
		dataType: 'json', //服务器返回json格式数据
		type: 'get', //HTTP请求类型
		timeout: 10000, //超时时间设置为10秒；
		success: function(data) {
			if(data.result==null||data.reason=="EMPTY!")
			{
				document.getElementById("map_gasStation-inner").setAttribute("hidden","hidden");
				document.getElementById("tip").innerText="您附近暂时没有加盟的加油站";
				document.getElementById("nomore").removeAttribute("hidden","hidden");
				waitingwv.close();
				return;
			}
			
			datas=data;
			var data0 = data.result.data;
			var dataOrder = JsonSort(data0, 'distance'); //按距离排序

			

			for (var i = 0; i < dataOrder.length; i++) {

				var prices = dataOrder[i]['gastprice'];
				var str_type = '';
				var str_prices = '';
				for (var pricesOtype in prices) {
					/*alert(pricesOtype);  
					alert(prices[pricesOtype]);  */
					str_type += '<td><p class=\"hotel-color-orange  detailp\">' + pricesOtype + '</p></td>';
					str_prices += '<td><p style=\"color:#8f8f94\">￥' + prices[pricesOtype] + '</p></td>';
				}

				var brabdname = dataOrder[i]['brandname'];
				var pic = "../images/brand/yzpp_buxiang_map.9.png";
				if (brabdname == "中石化") {
					pic = "../images/brand/yzpp_zsh_map.9.png";
				} else if (brabdname == "中石油") {
					pic = "../images/brand/yzpp_zsy_map.9.png";
					//pic="CNPC.png";
				} else if (brabdname == "社会民营") {
					pic = "../images/brand/yzpp_minying_map.9.png";
				} else if (brabdname == "中国航油") {
					pic = "../images/brand/yzpp_zghy_map.9.png";
				} else if (brabdname == "国企") {
					pic = "../images/brand/yzpp_guoqi_map.9.png";
				} else if (brabdname == "壳牌") {
					pic = "../images/brand/yzpp_qiaopai_map.9.png";
				} else if (brabdname == "中化道达尔") {
					pic = "../images/brand/yzpp_daodaer_map.9.png";
				} else if (brabdname == "中海油") {
					pic = "../images/brand/yzpp_zhy_map.9.png";
				} else if (brabdname == "中油BP") {
					pic = "../images/brand/yzpp_zhongyoubp_map.9.png";
				} else if (brabdname == "加德士") {
					pic = "../images/brand/yzpp_jiadeshi_map.9.png";
				}

				str += '<li class=\"mui-table-view-cell mui-media\" data-url=\"./hotel-detail.html\">' +
					'<input type=\"hidden\" class="idd" id=\"' + i + '\" value=\"' + i + '\" />' +
					'<img class=\"mui-media-object mui-pull-left hetol-placeholder\" src=\"../images/' +
					pic + '\"><div class=\"mui-media-body\">' +
					dataOrder[i]['name'] +
					'<p class=\"mui-ellipsis\">正常营业<span class=\"hotel-away\">' +
					dataOrder[i]['distance'] + '米</span></p><p class=\"mui-ellipsis\">品牌：' +
					dataOrder[i]['brandname'] +
					'<i class=\"fa fa-gift hotel-gift\"></i></p><table width=\"100%\" style=\"margin:1em 2em .5em 0\"><tr>' +
					str_type + //'<td><p class=\"hotel-color-orange\">' +'E90' +'</p></td><td><p class=\"hotel-color-orange\">E93</p></td><td><p class=\"hotel-color-orange\">E97</p></td>'+
					'<tr>' +
					str_prices +
					/*'<td><p style=\"color:#8f8f94\">￥' +
					dataOrder[i]['price']['E90'] +
					'</p></td><td><p style=\"color:#8f8f94\">￥' + dataOrder[i]['price']['E93'] +
					'</p></td><td><p style=\"color:#8f8f94\">￥' +
					dataOrder[i]['price']['E97'] +
					'</p></td>'+*/
					'</tr></table></div></li>';

			}
			/*mui.toast("加载成功");*/

			var respnoseEl = document.getElementById("innerlist");

			respnoseEl.innerHTML = str;

			waitingwv.close();
		},
		error: function(xhr, type, errorThrown) {
			waitingwv.close();
			//异常处理；
			console.log(type);
			mui.toast(type); 
		}
	});

	//data = JSON.parse('{\"resultcode\":\"200\",\"reason\":\"Successed!\",\"result\":{\"data\":[{\"id\":\"28710\",\"name\":\"漓江加油站\",\"area\":\"541111\",\"areaname\":\"广西 桂林市 临桂县\",\"address\":\"广西桂林市临桂县琴潭路与巾山路交叉处\",\"brandname\":\"不详\",\"type\":\"其他\",\"discount\":\"非打折加油站\",\"exhaust\":\"国Ⅳ\",\"position\":\"110.240918,25.26174\",\"lon\":\"110.24745092165\",\"lat\":\"25.267588184702\",\"price\":{\"E90\":\"5.24\",\"E93\":\"5.62\",\"E97\":\"6.07\",\"E0\":\"5.19\"},\"gastprice\":{\"93#\":\"5.78\",\"0#车柴\":\"5.36\"},\"fwlsmc\":\"\",\"distance\":9919},{\"id\":\"27789\",\"name\":\"五洲石油琴潭加油站\",\"area\":\"541002\",\"areaname\":\"广西 桂林市 象山区\",\"address\":\"广西桂林市象山区，翠竹路南巷与黑山路交叉处向西，路南，翠竹路南巷西端\",\"brandname\":\"社会民营\",\"type\":\"其他\",\"discount\":\"非打折加油站\",\"exhaust\":\"国Ⅳ\",\"position\":\"110.267734,25.257953\",\"lon\":\"110.2741754091\",\"lat\":\"25.26421836902\",\"price\":{\"E90\":\"5.24\",\"E93\":\"5.62\",\"E97\":\"6.07\",\"E0\":\"5.19\"},\"gastprice\":{\"93#\":\"5.78\",\"0#车柴\":\"5.36\"},\"fwlsmc\":\"\",\"distance\":7448},{\"id\":\"1803\",\"name\":\"久久加油站\",\"area\":\"541002\",\"areaname\":\"广西 桂林市 象山区\",\"address\":\"广西桂林市象山区相人山路号，相人山路与万福路交叉处向北，路东\",\"brandname\":\"社会民营\",\"type\":\"其他\",\"discount\":\"非打折加油站\",\"exhaust\":\"国Ⅳ\",\"position\":\"110.274806,25.213857\",\"lon\":\"110.28124607511\",\"lat\":\"25.220178623555\",\"price\":{\"E90\":\"5.24\",\"E93\":\"5.62\",\"E97\":\"6.07\",\"E0\":\"5.19\"},\"gastprice\":{\"93#\":\"5.78\",\"0#车柴\":\"5.36\"},\"fwlsmc\":\"\",\"distance\":9786},{\"id\":\"27790\",\"name\":\"中石化独山加油站\",\"area\":\"541003\",\"areaname\":\"广西 桂林市 秀峰区\",\"address\":\"广西省壮族自治区桂林市秀峰区飞凤路与甲山路交叉路口南\",\"brandname\":\"中石化\",\"type\":\"直营店\",\"discount\":\"非打折加油站\",\"exhaust\":\"国Ⅳ\",\"position\":\"110.2725856656,25.2812044122\",\"lon\":\"110.28591\",\"lat\":\"25.293861\",\"price\":{\"E90\":\"5.24\",\"E93\":\"5.62\",\"E97\":\"6.07\",\"E0\":\"5.19\"},\"gastprice\":{\"93#\":\"5.78\",\"0#车柴\":\"5.36\"},\"fwlsmc\":\"\",\"distance\":5831},{\"id\":\"1804\",\"name\":\"中石化桂林西环加油站\",\"area\":\"541002\",\"areaname\":\"广西 桂林市 象山区\",\"address\":\"广西壮族自治区桂林市象山区环城西一路35号,联达雅居附近\",\"brandname\":\"中石化\",\"type\":\"直营店\",\"discount\":\"非打折加油站\",\"exhaust\":\"国Ⅳ\",\"position\":\"110.2744029654,25.2384875622\",\"lon\":\"110.287116\",\"lat\":\"25.251085\",\"price\":{\"E90\":\"5.24\",\"E93\":\"5.62\",\"E97\":\"6.07\",\"E0\":\"5.19\"},\"gastprice\":{\"93#\":\"5.78\",\"97#\":\"6.24\",\"0#车柴\":\"5.36\"},\"fwlsmc\":\"加油卡,便利店,93#自助加油,柴油自助加油,97#自助加油,发卡充值网点,卫生间,银联卡充值,加油卡充值业务\",\"distance\":6985},{\"id\":\"27788\",\"name\":\"中石化桂林铁西加油站\",\"area\":\"541002\",\"areaname\":\"广西 桂林市 象山区\",\"address\":\"广西壮族自治区桂林市象山区铁西四巷与环城西二路交汇处路东\",\"brandname\":\"中石化\",\"type\":\"直营店\",\"discount\":\"打折加油站\",\"exhaust\":\"国Ⅳ\",\"position\":\"110.2740564836,25.2610877882\",\"lon\":\"110.287138\",\"lat\":\"25.273751\",\"price\":{\"E90\":\"5.24\",\"E93\":\"5.62\",\"E97\":\"6.07\",\"E0\":\"5.19\"},\"gastprice\":{\"93#\":\"5.78\",\"97#\":\"6.24\"},\"fwlsmc\":\"加油卡,便利店,93#自助加油,97#自助加油,发卡充值网点,卫生间,银联卡充值,加油卡充值业务\",\"distance\":5877},{\"id\":\"27567\",\"name\":\"八定加油站\",\"area\":\"541003\",\"areaname\":\"广西 桂林市 秀峰区\",\"address\":\"广西桂林市秀峰区定江镇莲花塘村，153乡道与166县道交叉处东侧\",\"brandname\":\"社会民营\",\"type\":\"其他\",\"discount\":\"非打折加油站\",\"exhaust\":\"国Ⅳ\",\"position\":\"110.285923,25.333391\",\"lon\":\"110.29236319945\",\"lat\":\"25.339708962472\",\"price\":{\"E90\":\"5.24\",\"E93\":\"5.62\",\"E97\":\"6.07\",\"E0\":\"5.19\"},\"gastprice\":{\"93#\":\"5.78\",\"0#车柴\":\"5.36\"},\"fwlsmc\":\"\",\"distance\":7739},{\"id\":\"1806\",\"name\":\"中石化迎宾加油站\",\"area\":\"541002\",\"areaname\":\"广西 桂林市 象山区\",\"address\":\"广西桂林市象山区凯风路与长虹西路交叉口西南角\",\"brandname\":\"中石化\",\"type\":\"其他\",\"discount\":\"非打折加油站\",\"exhaust\":\"国Ⅳ\",\"position\":\"110.287442,25.20364\",\"lon\":\"110.29387575018\",\"lat\":\"25.209946904046\",\"price\":{\"E90\":\"5.24\",\"E93\":\"5.62\",\"E97\":\"6.07\",\"E0\":\"5.19\"},\"gastprice\":{\"93#\":\"5.78\",\"97#\":\"6.24\",\"0#车柴\":\"5.36\"},\"fwlsmc\":\"加油卡,便利店,93#自助加油,柴油自助加油,97#自助加油,发卡充值网点,卫生间,银联卡充值,加油卡充值业务\",\"distance\":9994},{\"id\":\"1802\",\"name\":\"中石化捷利加油站\",\"area\":\"541002\",\"areaname\":\"广西 桂林市 象山区\",\"address\":\"广西桂林市象山区凯风路88号，南泉路与321国道交叉处向北，路东\",\"brandname\":\"中石化\",\"type\":\"其他\",\"discount\":\"非打折加油站\",\"exhaust\":\"国Ⅳ\",\"position\":\"110.287614,25.214422\",\"lon\":\"110.29405765127\",\"lat\":\"25.22072997125\",\"price\":{\"E90\":\"5.24\",\"E93\":\"5.62\",\"E97\":\"6.07\",\"E0\":\"5.19\"},\"gastprice\":{\"93#\":\"5.78\",\"0#车柴\":\"5.36\"},\"fwlsmc\":\"加油卡\",\"distance\":8964},{\"id\":\"1805\",\"name\":\"中石油长虹加油站\",\"area\":\"541002\",\"areaname\":\"广西 桂林市 象山区\",\"address\":\"广西壮族自治区桂林市象山区凯风路与长虹中路交叉口东北角\",\"brandname\":\"中石油\",\"type\":\"其他\",\"discount\":\"打折加油站\",\"exhaust\":\"国Ⅳ\",\"position\":\"110.2817164566,25.1975688618\",\"lon\":\"110.294983\",\"lat\":\"25.210588\",\"price\":{\"E90\":\"5.24\",\"E93\":\"5.62\",\"E97\":\"6.07\",\"E0\":\"5.19\"},\"gastprice\":{\"93#\":\"5.78\",\"0#车柴\":\"5.36\"},\"fwlsmc\":\"加油卡\",\"distance\":9877},{\"id\":\"27568\",\"name\":\"中石化桂林九华加油站\",\"area\":\"541001\",\"areaname\":\"广西 桂林市 叠彩区\",\"address\":\"广西壮族自治区桂林市叠彩区九华路与圣隆路交汇处向东路南\",\"brandname\":\"中石化\",\"type\":\"直营店\",\"discount\":\"非打折加油站\",\"exhaust\":\"国Ⅳ\",\"position\":\"110.2844872705,25.2961630848\",\"lon\":\"110.297549\",\"lat\":\"25.308572\",\"price\":{\"E90\":\"5.24\",\"E93\":\"5.62\",\"E97\":\"6.07\",\"E0\":\"5.19\"},\"gastprice\":{\"93#\":\"5.78\",\"0#车柴\":\"5.36\",\"E97#\":\"6.24\"},\"fwlsmc\":\"加油卡\",\"distance\":5169},{\"id\":\"27612\",\"name\":\"中国航油民航安新加油站\",\"area\":\"541002\",\"areaname\":\"广西 桂林市 象山区\",\"address\":\"广西桂林市象山区安新村，安新南路与民主路交叉处南侧\",\"brandname\":\"中国航油\",\"type\":\"其他\",\"discount\":\"非打折加油站\",\"exhaust\":\"国Ⅳ\",\"position\":\"110.292767,25.258334\",\"lon\":\"110.29920923252\",\"lat\":\"25.264594050829\",\"price\":{\"E90\":\"5.24\",\"E93\":\"5.62\",\"E97\":\"6.07\",\"E0\":\"5.19\"},\"gastprice\":{\"93#\":\"5.78\",\"0#车柴\":\"5.36\"},\"fwlsmc\":\"\",\"distance\":5144},{\"id\":\"1801\",\"name\":\"中石化瓦窑加油站\",\"area\":\"541002\",\"areaname\":\"广西 桂林市 象山区\",\"address\":\"广西壮族自治区桂林市象山区同心路与崇信路交汇处\",\"brandname\":\"中石化\",\"type\":\"直营店\",\"discount\":\"非打折加油站\",\"exhaust\":\"国Ⅳ\",\"position\":\"110.2860824631,25.2302780381\",\"lon\":\"110.299334\",\"lat\":\"25.24326\",\"price\":{\"E90\":\"5.24\",\"E93\":\"5.62\",\"E97\":\"6.07\",\"E0\":\"5.19\"},\"gastprice\":{\"93#\":\"5.78\",\"97#\":\"6.24\",\"0#车柴\":\"5.36\"},\"fwlsmc\":\"加油卡,便利店,发卡充值网点,银联卡充值\",\"distance\":6650},{\"id\":\"28603\",\"name\":\"运通加油站\",\"area\":\"541001\",\"areaname\":\"广西 桂林市 叠彩区\",\"address\":\"广西壮族自治区桂林市叠彩区中山北路与翊武路交汇处的西方，奥林峰大酒店附近\",\"brandname\":\"社会民营\",\"type\":\"其他\",\"discount\":\"非打折加油站\",\"exhaust\":\"国Ⅳ\",\"position\":\"110.294429,25.29363\",\"lon\":\"110.30085462098\",\"lat\":\"25.299866469253\",\"price\":{\"E90\":\"5.24\",\"E93\":\"5.62\",\"E97\":\"6.07\",\"E0\":\"5.19\"},\"gastprice\":{\"93#\":\"5.78\",\"0#车柴\":\"5.36\"},\"fwlsmc\":\"\",\"distance\":4494},{\"id\":\"1799\",\"name\":\"中石油南环加油站\",\"area\":\"541002\",\"areaname\":\"广西 桂林市 象山区\",\"address\":\"广西壮族自治区桂林市象山区凯风路与环城南二路交叉口向东路南\",\"brandname\":\"中石油\",\"type\":\"其他\",\"discount\":\"打折加油站\",\"exhaust\":\"国Ⅳ\",\"position\":\"110.2885230624,25.2204942063\",\"lon\":\"110.301568\",\"lat\":\"25.232987\",\"price\":{\"E90\":\"5.24\",\"E93\":\"5.62\",\"E97\":\"6.07\",\"E0\":\"5.19\"},\"gastprice\":{\"93#\":\"5.78\",\"97#\":\"6.24\",\"0#车柴\":\"5.36\"},\"fwlsmc\":\"银联卡,信用卡支付,加油卡,93#自助加油,柴油自助加油,97#自助加油,发卡充值网点,卫生间,银联卡充值,加油卡充值业务\",\"distance\":7410},{\"id\":\"1800\",\"name\":\"中石化净瓶山加油站\",\"area\":\"541002\",\"areaname\":\"广西 桂林市 象山区\",\"address\":\"广西壮族自治区桂林市象山区瓦窑东路与环城南二路交叉口向东路南\",\"brandname\":\"中石化\",\"type\":\"直营店\",\"discount\":\"非打折加油站\",\"exhaust\":\"国Ⅳ\",\"position\":\"110.2965861363,25.2218487505\",\"lon\":\"110.310006\",\"lat\":\"25.234422\",\"price\":{\"E90\":\"5.24\",\"E93\":\"5.62\",\"E97\":\"6.07\",\"E0\":\"5.19\"},\"gastprice\":{\"93#\":\"5.78\",\"97#\":\"6.24\",\"0#车柴\":\"5.36\"},\"fwlsmc\":\"加油卡,便利店,93#自助加油,柴油自助加油,发卡充值网点,卫生间,银联卡充值,加油卡充值业务\",\"distance\":6823},{\"id\":\"27565\",\"name\":\"中石化公交北门加油站\",\"area\":\"541001\",\"areaname\":\"广西 桂林市 叠彩区\",\"address\":\"广西壮族自治区桂林市叠彩区大河乡,气象路与中山北路交叉口向南路西\",\"brandname\":\"中石化\",\"type\":\"直营店\",\"discount\":\"非打折加油站\",\"exhaust\":\"国Ⅳ\",\"position\":\"110.298606405,25.3132399031\",\"lon\":\"110.311335\",\"lat\":\"25.325546\",\"price\":{\"E90\":\"5.24\",\"E93\":\"5.62\",\"E97\":\"6.07\",\"E0\":\"5.19\"},\"gastprice\":{\"93#\":\"5.78\",\"0#车柴\":\"5.36\"},\"fwlsmc\":\"加油卡\",\"distance\":5306},{\"id\":\"8472\",\"name\":\"中石化八里街加油站(自助站)\",\"area\":\"541213\",\"areaname\":\"广西 桂林市 灵川县\",\"address\":\"广西壮族自治区桂林市灵川县八里四路与灵川大道交叉口南侧路西\",\"brandname\":\"中石化\",\"type\":\"直营店\",\"discount\":\"打折加油站\",\"exhaust\":\"国Ⅳ\",\"position\":\"110.2996443656,25.3381132348\",\"lon\":\"110.312395\",\"lat\":\"25.35033\",\"price\":{\"E90\":\"5.24\",\"E93\":\"5.62\",\"E97\":\"6.07\",\"E0\":\"5.19\"},\"gastprice\":{\"93#\":\"5.78\",\"97#\":\"6.24\",\"0#车柴\":\"5.33\"},\"fwlsmc\":\"加油卡,便利店,93#自助加油,柴油自助加油,97#自助加油,发卡充值网点,卫生间,银联卡充值,加油卡充值业务\",\"distance\":7636},{\"id\":\"27564\",\"name\":\"中石化桂林乌石加油站\",\"area\":\"541001\",\"areaname\":\"广西 桂林市 叠彩区\",\"address\":\"广西壮族自治区桂林市叠彩区东二环路与中山北路交汇处路西\",\"brandname\":\"中石化\",\"type\":\"直营店\",\"discount\":\"非打折加油站\",\"exhaust\":\"国Ⅳ\",\"position\":\"110.3005182292,25.3159826706\",\"lon\":\"110.313423\",\"lat\":\"25.328205\",\"price\":{\"E90\":\"5.24\",\"E93\":\"5.62\",\"E97\":\"6.07\",\"E0\":\"5.19\"},\"gastprice\":{\"93#\":\"5.78\",\"97#\":\"6.24\",\"0#车柴\":\"5.36\"},\"fwlsmc\":\"加油卡,便利店,发卡充值网点,银联卡充值\",\"distance\":5424},{\"id\":\"27566\",\"name\":\"加油站（北辰路）\",\"area\":\"541001\",\"areaname\":\"广西 桂林市 叠彩区\",\"address\":\"广西壮族自治区桂林市叠彩区北辰路与金河路交叉口北行，路东侧\",\"brandname\":\"不详\",\"type\":\"其他\",\"discount\":\"非打折加油站\",\"exhaust\":\"国Ⅳ\",\"position\":\"110.307122,25.331071\",\"lon\":\"110.31362126886\",\"lat\":\"25.337123130571\",\"price\":{\"E90\":\"5.24\",\"E93\":\"5.62\",\"E97\":\"6.07\",\"E0\":\"5.19\"},\"gastprice\":{\"93#\":\"5.78\",\"0#车柴\":\"5.36\"},\"fwlsmc\":\"\",\"distance\":6264}],\"pageinfo\":{\"pnums\":20,\"current\":1,\"allpage\":2}},\"error_code\":0}');

	//alert(str);

}

function JsonSort(json, key) {
	//console.log(json);
	for (var j = 1, jl = json.length; j < jl; j++) {
		var temp = json[j],
			val = temp[key],
			i = j - 1;
		while (i >= 0 && json[i][key] > val) {
			json[i + 1] = json[i];
			i = i - 1;
		}
		json[i + 1] = temp;

	}
	//console.log(json);
	return json;
}
function locate_error(){
	document.getElementById("map_gasStation-inner").setAttribute("hidden","hidden");
	document.getElementById("tip").innerText="定位失败，请重试";
	document.getElementById("nomore").removeAttribute("hidden","hidden");
	
}
