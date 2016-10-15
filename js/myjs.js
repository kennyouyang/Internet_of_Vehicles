



mui.init();
      	mui.plusReady(function(){
      		document.getElementById("back").addEventListener('tap',function(){
      			mui.openWindow({
      				url:'index.html',
      				id:'back',
      				waiting:{
      					autoShow:false,
      				}
      			});
      		});
      	})