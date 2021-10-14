
document.getElementById('left-man-icons').innerHTML = document.getElementById('icon-template').innerHTML;

document.getElementById('right-man-icons').innerHTML = document.getElementById('icon-template').innerHTML;

var Arr = [
			"ANALYTICS",
			"FOREX",
			"INVESTMENT",
			"SAVINGS",
			"REWARDS",
			"CARDS",
			"PAYMENTS",
			"LOAN",
			"SUPPORT"
		];


		var Icon = document.getElementsByClassName('icon');
		console.log(Icon.length);
		var l=9;

		var current_index = 0;
		var flag=0;
		fun();


		function fun(){
			var len = (document.getElementById('typed-text').innerHTML).length;

			if(len==0 && flag==1){
				flag=0;
				Icon[current_index].style.width='100%';
				Icon[current_index+9].style.width='100%';
				Icon[current_index+18].style.width='100%';
				Icon[current_index+27].style.width = '100%';


				current_index=(current_index+1)%l;
				Icon[current_index].style.width='120%';
				Icon[current_index+9].style.width='120%';
				Icon[current_index+18].style.width='120%';
				Icon[current_index+27].style.width = '120%';



				document.getElementById('typed-text').innerHTML="";
				setTimeout(fun, 300);
			}
			else if(len==Arr[current_index].length){
				flag=1;
				len=len-1;
				var str=Arr[current_index].substr(0,len);
				document.getElementById('typed-text').innerHTML=str;
				setTimeout(fun, 300);
			}
			else if(flag==0){
				var str=Arr[current_index].substr(0, len+1);

				document.getElementById('typed-text').innerHTML=str;
				setTimeout(fun, 300);
			}
			else{
				var str=Arr[current_index].substr(0, len-1);
				document.getElementById('typed-text').innerHTML=str;
				setTimeout(fun, 100);
			}

			
		}