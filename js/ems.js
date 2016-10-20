/*csd*/
/**
 * emsjs v1.3.3
 * 作者：侯锋
 * 邮箱：admin@xhou.net
 * 网站：http://houfeng.net , http://houfeng.net/ems
 *
 * emsjs 是一个符合 AMD 规范的浏览器端 JavaScript 模块加载器，兼容主流浏览器。
 **/
(function(p) {
	var M = (p.ems = function(aa, Z, Y) {
		return M.require(aa, Z, Y);
	});
	M.version = "v1.3.3";
	M.author = "Houfeng";
	M.tool = {};

	function A(Y) {
		return (Y === null) || (typeof Y === "undefined");
	}

	function x(Y) {
		if (A(Y)) {
			return false;
		}
		var Z = Object.prototype.toString.call(Y) === "[object Array]";
		var aa = Y instanceof Array;
		var ab = !C(Y) && B(Y.length) && z(Y.splice);
		var ac = !C(Y) && B(Y.length) && Y[0];
		return Z || aa || ab || ac;
	}

	function B(Y) {
		if (A(Y)) {
			return false;
		}
		return typeof Y === "number" || Y instanceof Number;
	}

	function z(Y) {
		return !A(Y) && typeof(Y) === "function";
	}

	function C(Y) {
		return !A(Y) && typeof(Y) === "string";
	}

	function n(ab, Y) {
		if (!ab || !Y) {
			return;
		}
		if (x(ab)) {
			var ac = ab.length;
			for (var Z = 0; Z < ac; Z++) {
				if (A(ab[Z])) {
					continue;
				}
				var ad = Y.call(ab[Z], Z, ab[Z]);
				if (!A(ad)) {
					return ad;
				}
			}
		} else {
			for (var aa in ab) {
				if (A(ab[aa])) {
					continue;
				}
				var ae = Y.call(ab[aa], aa, ab[aa]);
				if (!A(ae)) {
					return ae;
				}
			}
		}
	}

	function U(Y, Z) {
		return !A(Y) && !A(Z) && Y.indexOf(Z) === 0;
	}

	function i(Y, Z) {
		return !A(Y) && !A(Z) && Y.indexOf(Z) > -1;
	}

	function P(Y, Z, aa) {
		if (A(Y)) {
			return Y;
		}
		return Y.replace(new RegExp(Z, "g"), aa);
	}

	function f(Y) {
		return setTimeout(Y, 0);
	}

	function X(Y) {
		if (A(Y)) {
			return [];
		}
		if ((typeof Y) == "string") {
			Y = [Y];
		}
		return Y;
	}

	function O(Y) {
		return Y.replace(/(?:^|\n|\r)\s*\/\*[\s\S]*?\*\/\s*(?:\r|\n|$)/g, "\n").replace(/(?:^|\n|\r)\s*\/\/.*(?:\r|\n|$)/g, "\n");
	}

	function H(ab) {
		ab = ab.replace(/\/\*[\w\W]*?\*\//gm, ";").replace(/^\/\/.*/gi, ";");
		ab = O(ab);
		var Y = [];
		var aa = /require\s*\(\s*[\"|\'](.+?)[\"|\']\s*\)\s*[;|,|\n|\}|\{|\[|\]|\.|\)|\(|\||\&|\+|\-|\*|\/|\<|\>|\=|\?|\:|\%|\$|\_|\!|\"|\'|\~|\^]/gm;
		var Z = null;
		while (Z = aa.exec(ab)) {
			if (Z && Z[1] && !i(Z[1], '"') && !i(Z[1], "'")) {
				Y.push(Z[1]);
			}
		}
		return Y;
	}
	M.tool.matchRequire = H;

	function k(Z) {
		var Y = document.createElement("script");
		Y.src = Z;
		Y.async = true;
		Y.defer = true;
		Y.type = "text/javascript";
		return Y;
	}

	function l(Z) {
		var Y = document.createElement("link");
		Y.href = Z;
		Y.type = "text/css";
		Y.rel = "stylesheet";
		return Y;
	}

	function t() {
		return document.getElementsByTagName("script");
	}

	function r() {
		var Y = t();
		return n(Y, function() {
			return this.getAttribute("data-main");
		});
	}

	function q() {
		var Y = t();
		return n(Y, function() {
			if (this.readyState === "interactive") {
				return this;
			}
		});
	}
	var o = null;

	function d(Y) {
		if (!o) {
			o = document.getElementsByTagName("head");
			o = o && o[0] ? o[0] : document.body;
			o = o || o.parent;
		}
		o.appendChild(Y);
	}

	function g(Y, aa, Z) {
		if (Y.addEventListener) {
			Y.addEventListener(aa, Z);
		} else {
			if (Y.attachEvent) {
				Y.attachEvent("on" + aa, Z);
			}
		}
	}

	function h(Y, Z) {
		if (!Y || !Z) {
			return;
		}
		if ((typeof HTMLLinkElement !== "undefined") && (Y instanceof HTMLLinkElement)) {
			f(function() {
				Z.apply(Y, [{}]);
			});
			return;
		}
		var aa = Y.attachEvent ? "readystatechange" : "load";
		g(Y, aa, function() {
			var ab = Y.readyState || "loaded";
			if (ab == "loaded" || ab == "interactive" || ab == "complete") {
				Z.apply(Y, arguments || []);
			}
		});
	}
	var L = M.options = {};
	L.extension = ".js";
	L.maxLoadTime = 10000;
	L.disabledCircularDependency = false;
	L.settings = {};
	var c = M.alias = M.paths = L.alias = L.paths = {};
	var N = M.packages = L.packages = {};
	var S = M.shim = L.shim = {};
	var T = {};
	var K = M.modules = {
		"require": {
			id: "require",
			loading: true,
			saved: true,
			loaded: true,
			executed: true,
			exports: {}
		},
		"exports": {
			id: "exports",
			loading: true,
			saved: true,
			loaded: true,
			executed: true,
			exports: {}
		},
		"module": {
			id: "module",
			loading: true,
			saved: true,
			loaded: true,
			executed: true,
			exports: {}
		}
	};
	M.config = function(Y) {
		if (Y === null) {
			return L;
		}
		Y = Y || {};
		Y.alias = Y.alias || Y.paths || {};
		n(Y.alias, function(aa, ab) {
			var Z = ab.name || aa;
			c[Z] = ab;
		});
		Y.shim = Y.shim || {};
		n(Y.shim, function(aa, ab) {
			var Z = ab.name || aa;
			S[Z] = ab;
		});
		Y.packages = Y.packages || [];
		n(Y.packages, function(aa, ab) {
			var Z = ab.name || aa;
			N[ab.name] = ab;
		});
		Y.settings = Y.settings || {};
		n(Y.settings, function(aa, ab) {
			var Z = ab.name || aa;
			L.settings[ab.name] = ab;
		});
		L.extension = L.extension || Y.extension;
		L.baseUri = L.baseUri || Y.baseUri || Y.baseUrl;
		L.maxLoadTime = L.maxLoadTime || Y.maxLoadTime;
		L.disabledCircularDependency = Y.disabledCircularDependency;
	};

	function D(Y) {
		return (Y == "require" || Y == "exports" || Y == "module");
	}

	function W(aa) {
		if (U(aa, "http://") || U(aa, "https://") || U(aa, "file://")) {
			return true;
		} else {
			var Y = /^\S+?:\//ig;
			var Z = /^\S+?:\\/ig;
			return Y.test(aa) || Z.test(aa);
		}
	}

	function V(Y) {
		return U(Y, "/") || U(Y, "\\");
	}

	function b(ab, Z) {
		if (A(ab) || A(Z) || W(ab) || V(ab) || D(ab)) {
			return ab;
		}
		ab = P(ab, "\\\\", "/");
		Z = P(Z, "\\\\", "/");
		Z = Z.split("?")[0].split("#")[0];
		var Y = Z.substring(0, Z.lastIndexOf("/"));
		var ad = ab.split("#")[0].split("/");
		var ac = ab.split("#")[1];
		var aa = Y.length > 0 ? Y.split("/") : [];
		n(ad, function(ae, af) {
			if (af == "..") {
				aa.pop();
			} else {
				if (af == ".") {} else {
					aa.push(af);
				}
			}
		});
		return aa.join("/") + (ac ? "#" + ac : "");
	}

	function Q(Y, Z, aa) {
		if (A(Y) || A(Z)) {
			return Y;
		}
		var ac = Y.split("!");
		var ab = [];
		n(ac, function(ad, ae) {
			var af = u(ae);
			af = w(af);
			af = b(af, Z);
			if (!aa) {
				af = v(af);
			}
			ab.push(af);
		});
		return ab.join("!");
	}

	function u(aa) {
		if (A(aa) || D(aa)) {
			return aa;
		}
		var Y = c[aa] || aa;
		Y = Y.uri || Y || aa;
		var Z = S[aa];
		if (Z != null) {
			var Y = Z.uri || Y;
			T[Y] = Z;
		}
		return Y;
	}

	function v(aa) {
		if (A(aa) || D(aa)) {
			return aa;
		}
		var Y = aa.substring(aa.lastIndexOf("/") + 1, aa.length);
		var Z = A(Y) || Y === "";
		if (Z) {
			return aa;
		}
		if (!i(aa, "?") && !i(aa, "#") && !i(Y, ".")) {
			aa += L.extension;
		}
		return aa;
	}

	function w(ab) {
		if (D(ab)) {
			return ab;
		}
		var Y = ab.indexOf("/");
		if (Y < 0) {
			Y = ab.length;
		}
		var Z = ab.substr(0, Y);
		var aa = ab.substr(Y + 1, ab.length);
		n(N, function(ac, ad) {
			if (Z == ad.name) {
				Z = ad.location || Z;
				aa = aa || ad.main || "";
				if (Z[Z.length - 1] == "/") {
					Z = Z.substring(0, Z.lastIndexOf("/"));
				}
				if (aa[0] == "/") {
					aa = aa.substring(1, aa.length);
				}
				ab = Z + "/" + aa;
			}
		});
		return ab;
	}

	function m(aa, Z) {
		Z = Z || L.baseUri || location.href;
		aa = X(aa);
		var Y = [];
		n(aa, function(ac, ab) {
			var ad = Q(ab, Z);
			Y.push(ad);
		});
		return Y;
	}

	function e(Z, Y) {
		Z.id = Y.id || Z.id;
		Z.deps = Y.deps || Z.deps;
		Z.factory = Y.factory || Z.factory || function() {};
		Z.factoryDeps = Y.factoryDeps || Z.factoryDeps;
		Z.executed = false;
		Y = null;
		return Z;
	}

	function R(aa, Y) {
		var Z = K[aa];
		if (A(Z)) {
			return;
		}
		e(Z, Y);
		Z.saved = true;
		Z.execute = function() {
			if (!Z.executed && z(Z.factory)) {
				Z.executed = true;
				var ad = Z.depModules;
				var ab = [];
				for (var ae = 0; ae < ad.length; ae++) {
					var ac = ad[ae];
					if (ac.id == "require") {
						ab.push(Z.require);
					} else {
						if (ac.id == "exports") {
							ab.push(Z.exports);
						} else {
							if (ac.id == "module") {
								ab.push(Z);
							} else {
								ac.execute();
								ab.push(ac.exports);
							}
						}
					}
				}
				ab.push(Z.require);
				ab.push(Z.exports);
				ab.push(Z);
				var af = Z.factory.apply(p, ab);
				Z.exports = af || Z.exports;
			}
			return Z.exports;
		};
		Z.load(Z.deps, function() {
			Z.depModules = arguments || [];
			Z.load(Z.factoryDeps, function() {
				Z.factoryDepModules = arguments || [];
				if (Z.timer) {
					clearTimeout(Z.timer);
				}
				if (M.onLoad && z(M.onLoad)) {
					M.onLoad(Z);
				}
				Z.loaded = true;
				n(Z.loadCallbacks, function(ac, ab) {
					if (z(ab)) {
						ab(Z);
					}
				});
				Z.loadCallbacks = null;
			});
		});
	}

	function a(ab, Z, Y) {
		if (A(ab)) {
			throw "路径 '" + ab + "' 存在错误.";
		}
		K[ab] = K[ab] || new I(ab);
		var aa = K[ab];
		if (!A(aa) && aa.loaded && z(Z)) {
			Z(aa);
			return;
		}
		if (y(ab, Y) && z(Z)) {
			Z(aa);
			return;
		}
		if (!A(aa) && x(aa.loadCallbacks)) {
			aa.loadCallbacks.push(Z);
			return;
		}
		aa.loadCallbacks = [];
		aa.loadCallbacks.push(Z);
		aa.element = i(ab, ".css") ? l(ab) : k(ab);
		if (L.maxLoadTime > 0) {
			aa.timer = setTimeout(function() {
				throw "加载 " + ab + ' 超时,可能原因: "1.无法处理的循环依赖; 2.资源不存在; 3.脚本错误; 4.其它未知错误;".';
			}, L.maxLoadTime);
		}
		h(aa.element, function() {
			if (!aa.loaded && !aa.saved) {
				var ac = E.shift();
				if (!A(ac)) {
					R(ab, ac);
				} else {
					if (!A(T[ab])) {
						ac = T[ab];
						if (z(ac.exports) || z(ac.init)) {
							var ad = ac.init || ac.exports || ac.factory;
							ac.factory = ad;
						} else {
							if (C(ac.exports)) {
								var ae = ac.exports;
								ac.factory = function() {
									return p[ae];
								};
							}
						}
						ac.id = ab;
						R(ab, ac);
					} else {
						R(ab, {});
					}
				}
			}
		});
		aa.loading = true;
		d(aa.element);
		return;
	}

	function F(ae, Z, Y) {
		if (A(ae)) {
			throw "路径 '" + ae + "' 存在错误.";
		}
		if (!i(ae, "!")) {
			return a(ae, Z, Y);
		} else {
			var ad = ae.lastIndexOf("!");
			var ac = ae.substring(0, ad);
			var ab = ae.substring(ad + 1);
			if (ac == "" || ab == "") {
				throw "路径 '" + ae + "' 存在错误.";
			}
			var aa = K[ab];
			if (!A(aa) && aa.loaded) {
				if (z(Z)) {
					Z(aa);
				}
				return aa;
			}
			return F(ac, function(ai) {
				if (A(ai)) {
					throw "插件 '" + ac + "' 存在错误.";
				}
				if (z(ai.execute)) {
					ai.execute();
				}
				var ah = ai.exports;
				if (A(ah) || !z(ah.load)) {
					throw "插件 '" + ac + "' 存在错误.";
				}
				var af = function(aj) {
					var ak = K[ab] = {
						exports: aj,
						executed: true,
						loaded: true,
						loading: true,
						saved: true
					};
					if (z(Z)) {
						Z(ak);
					}
				};
				af.fromText = af;
				af.error = af;
				var ag = K[Y] || ai || M;
				ah.load(ab, ag.require, af, M.config());
			});
		}
	}
	M.load = function(aa, Z, Y) {
		var ad = m(aa, Y);
		var ac = s(ad);
		var ab = 0;
		if (ad && ad.length > 0) {
			n(ad, function(ae, af) {
				F(af, function() {
					ab++;
					if (ab < ad.length) {
						return;
					}
					ac = s(ad) || ac;
					if (z(Z)) {
						Z.apply(p, ac);
					}
				}, Y);
			});
		} else {
			if (z(Z)) {
				Z.apply(p, ac);
			}
		}
		return ac;
	};

	function y(ad, Y) {
		var ac = false;
		Y = Y || L.baseUri || location.href;
		if (A(Y) || A(ad)) {
			ac = false;
		}
		if (ad == Y) {
			ac = true;
		}
		if (!ac) {
			var ab = K[ad];
			if (!A(ab)) {
				if (!ac && ab.deps && ab.deps.length > 0) {
					var Z = m(ab.deps, ab.uri);
					n(Z, function(af, ae) {
						if (ae == Y || y(ae, Y)) {
							ac = true;
							return;
						}
					});
				}
				if (!ac && ab.factoryDeps && ab.factoryDeps.length > 0) {
					var aa = m(ab.factoryDeps, ab.uri);
					n(aa, function(af, ae) {
						if (ae == Y || y(ae, Y)) {
							ac = true;
							return;
						}
					});
				}
			} else {
				ac = false;
			}
		}
		if (L.disabledCircularDependency && ac) {
			throw '已检测到"' + ad + '"和"' + Y + '"或其上层依赖存在循环依赖';
		}
		return ac;
	}
	M.unload = M.undef = function(Z, Y) {
		var aa = m(Z, Y);
		n(aa, function(ab, ad) {
			var ac = K[ad];
			if (ac) {
				if (ac.element && ac.element.parentNode) {
					ac.element.parentNode.removeChild(ac.element);
				}
				ac.element = null;
				ac = null;
				K[ad] = null;
			}
		});
	};

	function J(Z) {
		var Y = [];
		n(Z, function(aa, ab) {
			if (A(ab)) {
				Y.push(null);
			} else {
				if (z(ab.execute)) {
					ab.execute();
				}
				Y.push(ab.exports);
			}
		});
		return Y;
	}
	M.require = function(aa, Z, Y) {
		var ac = M.load(aa, function() {
			var ae = arguments;
			var ad = J(ae);
			if (z(Z)) {
				Z.apply(p, ad);
			}
		}, Y);
		var ab = J(ac);
		return (ab && ab.length == 1) ? ab[0] : ab;
	};

	function s(Z) {
		var Y = [];
		n(Z, function(aa, ad) {
			var ac = ad.split("!")[1] || ad || "";
			var ab = K[ac];
			Y.push(ab);
		});
		return Y;
	}

	function I(aa) {
		var Z = this;
		var Y = Z.uri = Z.id = aa || "/";
		Z.resovleUri = function(ab, ac, ad) {
			return Q(ab, ac || Y, ad);
		};
		Z.load = function(ac, ab) {
			return M.load(ac, ab, aa);
		};
		Z.unload = Z.undef = function(ab) {
			return M.unload(ab, aa);
		};
		Z.require = function(ac, ab) {
			return M.require(ac, ab, aa);
		};
		Z.require.toUrl = Z.require.resovleUri = function(ab, ac, ad) {
			return Z.resovleUri(ab, ac, ad);
		};
		Z.require.defined = function(ab) {
			return K[ab].loaded;
		};
		Z.require.specified = function(ab) {
			return K[ab].loaded || !A(K[ab].loadCallbacks);
		};
		Z.require.module = Z;
		Z.exports = {};
		Z.factory = null;
		Z.deps = null;
		Z.factoryDeps = null;
		Z.loading = false;
		Z.loaded = false;
		Z.executed = false;
		Z.saved = false;
	}
	var E = [];

	function j(aa, Y, Z) {
		var ab = null;
		if (Y && Z) {
			ab = {
				"id": aa,
				"deps": Y,
				"factory": Z
			};
		} else {
			if (aa && Y) {
				ab = {
					"deps": aa,
					"factory": Y
				};
			} else {
				if (aa && Z) {
					ab = {
						"id": aa,
						"deps": Y,
						"factory": Z
					};
				} else {
					if (aa) {
						ab = {
							"factory": aa
						};
					}
				}
			}
		}
		return ab;
	}
	M.define = function(ad, aa, ab) {
		var Z = j(ad, aa, ab);
		if (!A(Z)) {
			if (!z(Z.factory)) {
				var af = Z.factory;
				Z.factory = function() {
					return af;
				};
			}
			var Y = Z.factory.toString();
			var ac = H(Y);
			if (x(ac) && ac.length > 0) {
				Z.factoryDeps = ac;
			}
			var ae = q();
			if (!A(ae)) {
				var ag = ae.getAttribute("src");
				R(ag, Z);
			} else {
				E.push(Z);
			}
		}
	};
	M.resovleUri = function(aa, Y, Z) {
		return Q(aa, Y || L.baseUri || location.href, Z);
	};
	M.require.toUrl = M.resovleUri;
	M.define.amd = {};
	M.define.amd.jQuery = true;
	var G = r();
	if (!A(G) && G !== "") {
		M.require(G);
	}
	p.define = M.define;
})(this);