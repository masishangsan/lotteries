export default {
	rander:function (array1,array2) {
		function stakeR(arr) {
			var num=arr.length;
			getR(num);
			// console.log(arr);
			return getR(num)
		}
		function stakeB(arr) {
			var num=arr.length;
			getB(num);
			return getB(num)
		}
		function getR(num) {

			var $c1  = 1;
			var $c2  = 720;
			for (var $i = 1; $i < num + 1; $i++) {
				$c1 = $i * $c1;
			}
			for (var $i = 1; $i < num - 5; $i++) {
				$c2 = $i * $c2;
			}
			// console.log($c1 / $c2)
			return $c1 / $c2;
		}
		stakeR(array1);
		function getB(num) {

			var $c1  = 1;
			var $c2  = 1;
			for (var $i = 1; $i < num + 1; $i++) {
				$c1 = $i * $c1;
			}
			for (var $i = 1; $i < num - 0; $i++) {
				$c2 = $i * $c2;
			}
			// console.log($c1 / $c2)
			return $c1 / $c2;
		}
		stakeB(array2);
		function add() {
			var R=stakeR(array1);
			var B=stakeB(array2);
			var adds=R*B;
			return adds
			// console.log(add)
		}
		return(add());
	}
}
