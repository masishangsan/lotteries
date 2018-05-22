export default {
	dan:function (red , blue, danList) {
		var _red = red.concat([]);
		var danLen = danList.length;
		var reRed,reBlue,danStr;

		danList.forEach((num)=>{
			_red.some((item,idx,arr)=>{
				if(item==num){
					arr.splice(idx,1);
					return true;
				}
				return false;
			})
		});

		reRed = getCombinationToString(_red,5-danLen);
		reBlue = getCombinationToString(blue,2);
		danStr = danLen?danList.join(",")+",":"";

		var result=[];
		reRed.forEach(function (item){
			reBlue.forEach(function (item1) {

				result.push(danStr+item+','+item1)
			});
		});
		// console.log(arr,'arr');
		// console.log(arr.length)
		return result;
		function getCombinationToString(arr, m) {
			var result = [];
			if (m == 1) {
				return arr;
			}
			if (m == arr.length) {//当取出的个数等于数组的长度，就是只有一种组合，即本身
				result.push( arr.toString());
				return result;
			}
			var temp_firstelement = arr[0];
			arr= arr.slice(1);
			// console.log(arr);return false;
			console.log();
			var temp_first1 = getCombinationToString(arr, m - 1);
			temp_first1.forEach(function (item) {
				item = temp_firstelement + ',' + item;
				result.push(item);
			})
			var temp_first2 = getCombinationToString(arr, m);
			temp_first2.forEach(function (item) {
				result.push(item);
			})
			return result;
		}
	}
}