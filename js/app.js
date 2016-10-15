 (function($, owner) {
	/**
	 * 用户登录
	 **/
	owner.login = function(loginInfo, callback) {
		callback = callback || $.noop;
		loginInfo = loginInfo || {};
		loginInfo.account = loginInfo.account || '';
		loginInfo.password = loginInfo.password || '';
		if (loginInfo.account.length < 5) {
			return callback('账号最短为 5 个字符');
		}
		if (loginInfo.password.length < 6) {
			return callback('密码最短为 6 个字符');
		}  
	 	var btLogin = document.getElementById("login");
	 	var device_model = plus.device.model;
	 	var device_vendor=plus.device.vendor;
	 	var os_version=plus.os.name+plus.os.version;
	 	//console.log(device_model+device_vendor+os_version);return; 
	 	mui.ajax('http://115.28.16.183:8080/car_server/LoginServlet', {
			data: {
				CID:loginInfo.CID,
				username: loginInfo.account,
				password: loginInfo.password,
				device_model:device_model,
				device_vendor:device_vendor,
				os_version:os_version
				 
			},
			dataType: 'json', //服务器返回json格式数据
			type: 'post', //HTTP请求类型
			timeout: 5000, //超时时间设置为10秒；
			beforeSend:function(xhr) 
			{
							
				btLogin.innerText = "正在登录...";
				btLogin.setAttribute("disabled","disabled");
							
			}, 
			success: function(data) {
				btLogin.innerText = "登录";
				btLogin.removeAttribute("disabled","disabled");
						
				//alert(data.result_code)
				 
				//服务器返回响应，根据响应结果，分析是否登录成功；
				if (data.result_code == '1') { 
					return owner.createState(loginInfo.account,data.key, callback);
				} else {
					 
					return callback('用户名或密码错误');
					//return callback(data.result_code);

				}
			},
			error: function(xhr, type, errorThrown) {
				//异常处理；
				btLogin.innerText = "登录";
				btLogin.removeAttribute("disabled","disabled");
				console.log(xhr);
				console.log(type);
				if(type=="timeout")
				{ 
					mui.toast("登录超时，请检查网络是否连接！");
				}
				else if(type=="error")
				{
					mui.toast("服务器异常，请稍候再试...");
				} 
				else
				{
					mui.toast(type);
				}
			
				console.log(errorThrown);
			}
		});

	};

	owner.createState = function(name,token, callback) {
		var state = owner.getState();
		state.account = name;
		state.token = token;//"token123456789";
		console.log(JSON.stringify(state))
		owner.setState(state);
		return callback();
	};

	/**
	 * 新用户注册
	 **/
	owner.reg = function(regInfo, callback) {
		callback = callback || $.noop;
		regInfo = regInfo || {};
		regInfo.account = regInfo.account || '';
		regInfo.password = regInfo.password || '';
		if (regInfo.account.length < 5) {
			return callback('用户名最短需要 5 个字符');
		}
		if (regInfo.password.length < 6) {
			return callback('密码最短需要 6 个字符');
		}
		if (!checkEmail(regInfo.email)) {
			return callback('邮箱地址不合法');
		}
		mui.ajax('http://115.28.16.183:8080/car_server/RegisterServlet', {
			data: {
				username: regInfo.account,
				password: regInfo.password,
				email: regInfo.email
				/*username: '1111111',
				password: '1111',
				email: 'qqq@qq.com',
				phone: '13800138000',
				nick:'',
				dlnum:''*/
			},
			dataType: 'json', //服务器返回json格式数据
			type: 'post', //HTTP请求类型
			timeout: 10000, //超时时间设置为10秒；
			success: function(data) {
				 
				//服务器返回响应，根据响应结果，分析是否注册成功；
				if (data.result_code == '1') {
				 
					return callback(1);
					
				} else {
					/*plus.nativeUI.toast(data.result_code);*/
					return callback(data.result_code);
				}
			},
			error: function(xhr, type, errorThrown) {
				//异常处理；

				console.log(xhr);
				console.log(type);
				console.log(errorThrown);
				callback(type);
				 
			}
		}); 
	};

	/**
	 * 获取当前状态
	 **/
	owner.getState = function() {
		var stateText = localStorage.getItem('$state') || "{}";
		return JSON.parse(stateText);
	};

	/**
	 * 设置当前状态
	 **/
	owner.setState = function(state) {
		state = state || {};
		localStorage.setItem('$state', JSON.stringify(state));
		
		//var settings = owner.getSettings();
		//settings.gestures = '';
		//owner.setSettings(settings);
	};

	var checkEmail = function(email) {
		email = email || '';
		return (email.length > 3 && email.indexOf('@') > -1);
	};

	/**
	 * 找回密码
	 **/
	owner.forgetPassword = function(email, callback) {
		callback = callback || $.noop;
		if (!checkEmail(email)) {
			return callback('邮箱地址不合法');
		}
		return callback(null, '新的随机密码已经发送到您的邮箱，请查收邮件。');
	};

	/**
	 * 设置应用本地配置
	 **/
	owner.setSettings = function(settings) {
		settings = settings || {};
		localStorage.setItem('$settings', JSON.stringify(settings));
		//alert("setSettings:"+JSON.stringify(settings))
	}

	/**
	 * 获取应用本地配置
	 **/
	owner.getSettings = function() {
			var settingsText = localStorage.getItem('$settings') || "{}";
			//alert("getSettings"+settingsText)
			return JSON.parse(settingsText);
		}
		/**
		 * 获取本地是否安装客户端
		 **/
	owner.isInstalled = function(id) {
		if (id === 'qihoo' && mui.os.plus) {
			return true;
		}
		if (mui.os.android) {
			var main = plus.android.runtimeMainActivity();
			var packageManager = main.getPackageManager();
			var PackageManager = plus.android.importClass(packageManager)
			var packageName = {
				"qq": "com.tencent.mobileqq",
				"weixin": "com.tencent.mm",
				"sinaweibo": "com.sina.weibo"
			}
			try {
				return packageManager.getPackageInfo(packageName[id], PackageManager.GET_ACTIVITIES);
			} catch (e) {}
		} else {
			switch (id) {
				case "qq":
					var TencentOAuth = plus.ios.import("TencentOAuth");
					return TencentOAuth.iphoneQQInstalled();
				case "weixin":
					var WXApi = plus.ios.import("WXApi");
					return WXApi.isWXAppInstalled()
				case "sinaweibo":
					var SinaAPI = plus.ios.import("WeiboSDK");
					return SinaAPI.isWeiboAppInstalled()
				default:
					break;
			}
		}
	}
}(mui, window.app = {}));