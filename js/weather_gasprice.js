
function getLocation() {
	//获取当前设备位置信息
	plus.geolocation.getCurrentPosition(function(p) {
		//alert("Geolocation\nLatitude:" + p.coords.latitude + "\nLongitude:" + p.coords.longitude + "\nAltitude:" + p.coords.altitude);
		/*console.log(JSON.stringify(p));        
		alert(JSON.stringify(p.address));      
		alert(p.address.city); */
		console.log("打开应用时获取当前设备位置信息1")
		var city = p.address.city;
		var citymap = {
			'阿里': 'Ali',
			'日喀则': 'Rikaze',
			'喀什': 'Kashi',
			'阿图什': 'Atushi',
			'和田': 'Hetian',
			'阿拉尔': 'Alaer',
			'阿克苏': 'Akesu',
			'伊宁': 'Yining',
			'博乐': 'Bole',
			'库尔勒': 'Kuerle',
			'石河子': 'Shihezi',
			'吐鲁番': 'Tulufan',
			'乌鲁木齐': 'Wulumuqi',
			'昌吉': 'Changji',
			'五家渠': 'Wujiaqu',
			'塔城': 'Tacheng',
			'克拉玛依': 'Kelamayi',
			'阿勒泰': 'Aletai',
			'景洪': 'Jinghong',
			'西沙': 'Xisha',
			'三亚': 'Sanya',
			'乐东': 'Ledong',
			'五指山': 'Wuzhishan',
			'东方': 'Dongfang',
			'昌江': 'Changjiang',
			'白沙': 'Baisha',
			'儋州': 'Danzhou',
			'保亭': 'Baoting',
			'陵水': 'Lingshui',
			'万宁': 'Wanning',
			'琼中': 'Qiongzhong',
			'屯昌': 'Tunchang',
			'琼海': 'Qionghai',
			'文昌': 'Wenchang',
			'临高': 'Lingao',
			'崇左': 'Chongzuo',
			'防城港': 'Fangchenggang',
			'北海': 'Beihai',
			'钦州': 'Qinzhou',
			'澄迈': 'Chengmai',
			'定安': 'Dingan',
			'海口': 'Haikou',
			'湛江': 'Zhanjiang',
			'茂名': 'Maoming',
			'阳江': 'Yangjiang',
			'南沙': 'Nansha',
			'中沙': 'Wuzhishan',
			'珠海': 'Zhuhai',
			'普洱': 'Puer',
			'临沧': 'Lincang',
			'德宏': 'Dehong',
			'保山': 'Baoshan',
			'怒江': 'Nujiang',
			'大理': 'Dali',
			'香格里拉': 'Xianggelila',
			'丽江': 'Lijiang',
			'山南': 'Shannan',
			'拉萨': 'Lasa',
			'林芝': 'Linzhi',
			'那曲': 'Naqu',
			'昌都': 'Changdu',
			'玉树': 'Yushu',
			'甘孜': 'Ganzi',
			'红河': 'Honghe',
			'玉溪': 'Yuxi',
			'楚雄': 'Chuxiong',
			'昆明': 'Kunming',
			'文山': 'Wenshan',
			'百色': 'Baise',
			'兴义': 'Xingyi',
			'攀枝花': 'Panzhihua',
			'曲靖': 'Qujing',
			'凉山': 'Liangshan',
			'昭通': 'Zhaotong',
			'水城': 'Shuicheng',
			'安顺': 'Anshun',
			'贵阳': 'Guiyang',
			'毕节': 'Bijie',
			'南宁': 'Nanning',
			'贵港': 'Guigang',
			'来宾': 'Laibin',
			'河池': 'Hechi',
			'柳州': 'Liuzhou',
			'玉林': 'Yulin',
			'云浮': 'Yunfu',
			'肇庆': 'Zhaoqing',
			'梧州': 'Wuzhou',
			'桂林': 'Guilin',
			'贺州': 'Hezhou',
			'都匀': 'Duyun',
			'凯里': 'Kaili',
			'遵义': 'Zunyi',
			'铜仁': 'Tongren',
			'永州': 'Yongzhou',
			'怀化': 'Huaihua',
			'邵阳': 'Shaoyang',
			'娄底': 'Loudi',
			'雅安': 'Yaan',
			'乐山': 'Leshan',
			'眉山': 'Meishan',
			'宜宾': 'Yibin',
			'泸州': 'Luzhou',
			'自贡': 'Zigong',
			'资阳': 'Ziyang',
			'内江': 'Neijiang',
			'成都': 'Chengdu',
			'重庆': 'Chongqing',
			'遂宁': 'Suining',
			'南充': 'Nanchong',
			'广安': 'Guangan',
			'阿坝': 'Aba',
			'德阳': 'Deyang',
			'绵阳': 'Mianyang',
			'巴中': 'Bazhong',
			'武都': 'Wudu',
			'广元': 'Guangyuan',
			'恩施': 'Enshi',
			'吉首': 'Jishou',
			'张家界': 'Zhangjiajie',
			'益阳': 'Yiyang',
			'常德': 'Changde',
			'宜昌': 'Yichang',
			'荆州': 'Jingzhou',
			'达州': 'Dazhou',
			'汉中': 'Hanzhong',
			'安康': 'Ankang',
			'神农架': 'Shennongjia',
			'荆门': 'Jingmen',
			'襄阳': 'Xiangyang',
			'十堰': 'Shiyan',
			'格尔木': 'Geermu',
			'果洛': 'Guoluo',
			'海南': 'Hainan',
			'海西': 'Haixi',
			'海北': 'Haibei',
			'张掖': 'Zhangye',
			'哈密': 'Hami',
			'嘉峪关': 'Jiayuguan',
			'酒泉': 'Jiuquan',
			'合作': 'Hezuo',
			'黄南': 'Huangnan',
			'海东': 'Haidong',
			'临夏': 'Linxia',
			'兰州': 'Lanzhou',
			'天水': 'Tianshui',
			'定西': 'Dingxi',
			'白银': 'Baiyin',
			'平凉': 'Pingliang',
			'固原': 'Guyuan',
			'西宁': 'Xining',
			'武威': 'Wuwei',
			'金昌': 'Jinchang',
			'中卫': 'Zhongwei',
			'吴忠': 'Wuzhong',
			'银川': 'Yinchuan',
			'阿左旗': 'Azuoqi',
			'石嘴山': 'Shizuishan',
			'宝鸡': 'Baoji',
			'杨凌': 'Yangling',
			'西安': 'Xian',
			'咸阳': 'Xianyang',
			'铜川': 'Tongchuan',
			'渭南': 'Weinan',
			'庆阳': 'Qingyang',
			'商洛': 'Shangluo',
			'运城': 'Yuncheng',
			'三门峡': 'Sanmenxia',
			'洛阳': 'Luoyang',
			'临汾': 'Linfen',
			'延安': 'Yanan',
			'吕梁': 'Lvliang',
			'榆林': 'Yulin',
			'朔州': 'Shuozhou',
			'乌海': 'Wuhai',
			'临河': 'Linhe',
			'鄂尔多斯': 'Eerduosi',
			'包头': 'Baotou',
			'呼和浩特': 'Huhehaote',
			'江门': 'Jiangmen',
			'佛山': 'Foshan',
			'中山': 'Zhongshan',
			'广州': 'Guangzhou',
			'东莞': 'Dongguan',
			'清远': 'Qingyuan',
			'深圳': 'Shenzhen',
			'惠州': 'Huizhou',
			'河源': 'Heyuan',
			'韶关': 'Shaoguan',
			'汕尾': 'Shanwei',
			'汕头': 'Shantou',
			'揭阳': 'Jieyang',
			'潮州': 'Chaozhou',
			'梅州': 'Meizhou',
			'漳州': 'Zhangzhou',
			'厦门': 'Xiamen',
			'龙岩': 'Longyan',
			'郴州': 'Chenzhou',
			'赣州': 'Ganzhou',
			'衡阳': 'Hengyang',
			'湘潭': 'Xiangtan',
			'株洲': 'Zhuzhou',
			'萍乡': 'Pingxiang',
			'吉安': 'Jian',
			'宜春': 'Yichun',
			'新余': 'Xinyu',
			'三明': 'Sanming',
			'抚州': 'Fuzhou',
			'泉州': 'Quanzhou',
			'莆田': 'Putian',
			'南平': 'Nanping',
			'福州': 'Fuzhou',
			'宁德': 'Ningde',
			'温州': 'Wenzhou',
			'长沙': 'Changsha',
			'岳阳': 'Yueyang',
			'潜江': 'Qianjiang',
			'天门': 'Tianmen',
			'仙桃': 'Xiantao',
			'咸宁': 'Xianning',
			'黄石': 'Huangshi',
			'孝感': 'Xiaogan',
			'武汉': 'Wuhan',
			'鄂州': 'Ezhou',
			'黄冈': 'Huanggang',
			'南昌': 'Nanchang',
			'鹰潭': 'Yingtan',
			'上饶': 'Shangrao',
			'景德镇': 'Jingdezhen',
			'九江': 'Jiujiang',
			'安庆': 'Anqing',
			'池州': 'Chizhou',
			'铜陵': 'Tongling',
			'随州': 'Suizhou',
			'信阳': 'Xinyang',
			'南阳': 'Nanyang',
			'驻马店': 'Zhumadian',
			'漯河': 'Luohe',
			'周口': 'Zhoukou',
			'六安': 'Luan',
			'合肥': 'Hefei',
			'阜阳': 'Fuyang',
			'淮南': 'Huainan',
			'蚌埠': 'Bengbu',
			'宿州': 'Suzhou',
			'衢州': 'Quzhou',
			'丽水': 'Lishui',
			'金华': 'Jinhua',
			'黄山': 'Huangshan',
			'绍兴': 'Shaoxing',
			'杭州': 'Hangzhou',
			'湖州': 'Huzhou',
			'嘉兴': 'Jiaxing',
			'台州': 'Taizhou',
			'宁波': 'Ningbo',
			'舟山': 'Zhoushan',
			'宣城': 'Xuancheng',
			'芜湖': 'Wuhu',
			'马鞍山': 'Maanshan',
			'滁州': 'Chuzhou',
			'南京': 'Nanjing',
			'镇江': 'Zhenjiang',
			'苏州': 'Suzhou',
			'无锡': 'Wuxi',
			'常州': 'Changzhou',
			'南通': 'Nantong',
			'扬州': 'Yangzhou',
			'淮安': 'Huaian',
			'泰州': 'Taizhou',
			'盐城': 'Yancheng',
			'上海': 'Shanghai',
			'平顶山': 'Pingdingshan',
			'许昌': 'Xuchang',
			'济源': 'Jiyuan',
			'郑州': 'Zhengzhou',
			'开封': 'Kaifeng',
			'晋城': 'Jincheng',
			'焦作': 'Jiaozuo',
			'新乡': 'Xinxiang',
			'长治': 'Changzhi',
			'鹤壁': 'Hebi',
			'濮阳': 'Puyang',
			'安阳': 'Anyang',
			'亳州': 'Bozhou',
			'商丘': 'Shangqiu',
			'淮北': 'Huaibei',
			'徐州': 'Xuzhou',
			'枣庄': 'Zaozhuang',
			'菏泽': 'Heze',
			'济宁': 'Jining',
			'聊城': 'Liaocheng',
			'泰安': 'Taian',
			'莱芜': 'Laiwu',
			'晋中': 'Jinzhong',
			'太原': 'Taiyuan',
			'阳泉': 'Yangquan',
			'邯郸': 'Handan',
			'邢台': 'Xingtai',
			'忻州': 'Xinzhou',
			'石家庄': 'Shijiazhuang',
			'衡水': 'Hengshui',
			'德州': 'Dezhou',
			'济南': 'Jinan',
			'淄博': 'Zibo',
			'滨州': 'Binzhou',
			'保定': 'Baoding',
			'沧州': 'Cangzhou',
			'天津': 'Tianjin',
			'宿迁': 'Suqian',
			'临沂': 'Linyi',
			'连云港': 'Lianyungang',
			'日照': 'Rizhao',
			'青岛': 'Qingdao',
			'潍坊': 'Weifang',
			'东营': 'Dongying',
			'烟台': 'Yantai',
			'威海': 'Weihai',
			'大连': 'Dalian',
			'大同': 'Datong',
			'集宁': 'Jining',
			'张家口': 'Zhangjiakou',
			'廊坊': 'Langfang',
			'北京': 'Beijing',
			'承德': 'Chengde',
			'锡林浩特': 'Xilinhaote',
			'唐山': 'Tangshan',
			'秦皇岛': 'Qinhuangdao',
			'葫芦岛': 'Huludao',
			'朝阳': 'Chaoyang',
			'营口': 'Yingkou',
			'锦州': 'Jinzhou',
			'盘锦': 'Panjin',
			'阜新': 'Fuxin',
			'鞍山': 'Anshan',
			'辽阳': 'Liaoyang',
			'沈阳': 'Shenyang',
			'赤峰': 'Chifeng',
			'通辽': 'Tongliao',
			'丹东': 'Dandong',
			'本溪': 'Benxi',
			'抚顺': 'Fushun',
			'通化': 'Tonghua',
			'白山': 'Baishan',
			'铁岭': 'Tieling',
			'辽源': 'Liaoyuan',
			'四平': 'Siping',
			'长春': 'Changchun',
			'吉林': 'Jilin',
			'延吉': 'Yanji',
			'牡丹江': 'Mudanjiang',
			'乌兰浩特': 'Wulanhaote',
			'白城': 'Baicheng',
			'海拉尔': 'Hailaer',
			'松原': 'Songyuan',
			'哈尔滨': 'Haerbin',
			'大庆': 'Daqing',
			'齐齐哈尔': 'Qiqihaer',
			'绥化': 'Suihua',
			'伊春': 'Yichun',
			'大兴安岭': 'Daxinganling',
			'黑河': 'Heihe',
			'鸡西': 'Jixi',
			'七台河': 'Qitaihe',
			'佳木斯': 'Jiamusi',
			'鹤岗': 'Hegang',
			'双鸭山': 'Shuangyashan',
		};
		var citypy = city.replace(/省|自治区|壮族|市|维吾尔/g, "");
		Mylocation = new Object();
		Mylocation = {
			latitude: p.coords.latitude,
			longitude: p.coords.longitude,
			city: city,
			province: p.address.province,
			citypy: citymap[citypy],
			citypyjc:citypy
		};
		//alert(JSON.stringify(Mylocation));
		localStorage.setItem('$myLocation', JSON.stringify(Mylocation));
		console.log("打开应用时获取当前设备位置信息" + (localStorage.getItem('$myLocation')))
			//alert(citypy[city]);	 				
	}, function(e) {
		//console.log( "Geolocation error: " + e.message );
	}, {
		provider: 'baidu'
	});
}