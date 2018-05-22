/**
 * Created by luotao on 2017/12/19.
 */

//
export default {
	wonder:function(array1,array2){

		var result =getCombinationToString(array1, 6);
		var result1 =getCombinationToString(array2,1);
		var arr=[];
		result.forEach(function (item){
			result1.forEach(function (item1) {
				arr.push(item+','+item1)
			})
		})
		// console.log(arr,'arr');
		// console.log(arr.length)
		return arr;
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
