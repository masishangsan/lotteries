<template>
    <div class="choose" @click="menu=false">
        <div class="action">
            <div ><img src="../assets/back.png" alt="" @click="back"></div>
            <div >金币双色球</div>
            <div class="action_right">
                <img src="../assets/file.png" alt="" @click="$router.push('/record_two_tone')">
                <img src="../assets/menu.png" alt=""  @click="stopMenu($event)">
            </div>
        </div>
        <div class="menu" v-if="menu">
            <div @click="menuChooseF(index)" v-for="(item,index) in menuChoose">{{item.name}}</div>
        </div>
        <div class="forehead">
            <div class="forehead_left">
                <div>距离{{message.periods}}期截止</div>
                <div v-model="message.surplus">{{message.surplus}}</div>
            </div>
            <div class="forehead_right">
                <div>奖池滚存</div>
                <div>
                    <div v-if="message.money!=''">{{message.money}}</div>
                    <div v-else>奖池暂空</div>
                    <!--<div><img :src="[unfold?'../assets/up.png':'../assets/up.png']" alt=""></div>-->
                    <div><img src="../assets/up.png" alt=""></div>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="head">
                <div class="head_left" @click="shake">
                    <img src="../assets/yao.png" alt="">
                    <div>随机摇一摇</div>
                </div>
                <div class="head_right">
                    <div>请至少选择6个红球1个蓝球</div>
                </div>
            </div>
            <div class="body">
                <div class="item_box">
                    <div class="item" v-for="(item,index) in ball">
                        <div class="ball" :class="[item.select?'on':'set']"  @click="select(index)">{{item.ball}}</div>
                        <div class="seep" v-if="seeps">{{item.seep}}</div>
                    </div>
                </div>
                <div class="item_box">
                    <div class="item1" v-for="(item,index) in balls">
                        <div class="ball" :class="[item.select?'ons':'sets']" @click="selects(index)">{{item.ball}}</div>
                        <div class="seep" v-if="seeps">{{item.seep}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="footer_left" @click="clear">清除</div>
            <div class="footer_center">
                <div class="footer_center_up" v-model="stake">共{{stake}}注</div>
                <!--<div class="footer_center_down">您的金币不足</div>-->
                <div class="screen" v-if="stake>=5" @click="ash_boxs">筛选</div>
            </div>
            <div class="footer_right" @click="bet">投注</div>
        </div>
        <div class="ash_box" :class="{'ash_boxY': ash_box}" @click="closeash_box">
            <div class="screen_box" @click="stop($event)">
                <div class="screen_box_title">筛选条件</div>
                <div class="screen_box_content">
                    <div class="tuo">
                        <div style="color: #FF0000;margin-bottom: 0.5rem">请选择胆码（最多选择5个）</div>
                        <div class="redBall">
                            <div class="item" v-for="(item,index) in redtuo">
                                <div class="ball" :class="[item.select?'on':'set']"  @click="tuoselect(index)">{{item.ball}}</div>
                            </div>
                        </div>
                        <div class="tuozhu">
                            <!--<mt-button size="small" type="primary" style="margin: 0.5rem auto 0;" @click="touzhubtn">确定</mt-button>-->
                            <div class="danzhu" v-if="danzhu">共计算出{{danzhu.length}}注</div>
                        </div>
                    </div>
                    <div class="line">
                        <mt-switch v-model="checkbox1"></mt-switch>
                        <div class="line_item">
                            <select name="" v-model="oddvalue1" :disabled="!checkbox1">
                                <option value="">点击选择</option>
                                <option :value="index+1" v-for="(item,index) in oddoption">{{index+1}}</option>
                            </select>
                            ≦<span :class="{colorg : !checkbox1}">单号个数</span>≦
                            <select name="" v-model="oddvalue2" :disabled="!checkbox1">
                                <option value="">点击选择</option>
                                <option :value="index+1" v-for="(item,index) in oddoption">{{index+1}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="line">
                        <mt-switch v-model="checkbox2"></mt-switch>
                        <div class="line_item">
                            <select name="" v-model="maxvalue1" :disabled="!checkbox2">
                                <option value="">点击选择</option>
                                <option :value="index+1" v-for="(item,index) in maxoption">{{index+1}}</option>
                            </select>
                            ≦<span :class="{colorg : !checkbox2}">大号个数</span>≦
                            <select name="" v-model="maxvalue2" :disabled="!checkbox2">
                                <option value="">点击选择</option>
                                <option :value="index+1" v-for="(item,index) in maxoption">{{index+1}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="line">
                        <mt-switch v-model="checkbox3"></mt-switch>
                        <div class="line_item">
                            <select name="" v-model="addvalue1" :disabled="!checkbox3">
                                <option value="">点击选择</option>
                                <option :value="index" v-for="(item,index) in 200" v-if="index>20">{{index}}</option>
                            </select>
                            ≦<span :class="{colorg : !checkbox3}">号码和值</span>≦
                            <select name=""  v-model="addvalue2" :disabled="!checkbox3">
                                <option value="">点击选择</option>
                                <option :value="index" v-for="(item,index) in 200" v-if="index>20">{{index}}</option>
                            </select>
                        </div>
                    </div>
                    <mt-button size="large" @click="tocreen" class="tocreens">筛选</mt-button>
                    <div class="danzhu" v-if="zuizhong" style="margin: 0.5rem 0">筛选得{{zuizhong.length}}注</div>
                    <mt-button size="large" type="primary" @click="bet_screen">投注</mt-button>
                    <div class="close"></div>
                    <mt-button size="large" type="danger" @click="closeash_box" clas="close">取消</mt-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	import stake from './stake_tow_tone.js'
	import screen from './screen_tow_tone.js'
	import dantuo from './dantuo_tow_tone.js'
	import { MessageBox } from 'mint-ui';
	export default {
		data(){
			return{
				user_id:"",
				data:[
					{
						ball:"",
						select:false,
						seep:"2"
					}
				],
				message:{
					periods:"",
					surplus:"",
					money:""
				},
				unfold:false,
				ball:[
					{
						ball:"01",
						select:false,
						seep:"2"
					},
					{
						ball:"02",
						select:false,
						seep:"2"
					},
					{
						ball:"03",
						select:false,
						seep:"2"
					},
					{
						ball:"04",
						select:false,
						seep:"2"
					},
					{
						ball:"05",
						select:false,
						seep:"2"
					},
					{
						ball:"06",
						select:false,
						seep:"2"
					},
					{
						ball:"07",
						select:false,
						seep:"2"
					},
					{
						ball:"08",
						select:false,
						seep:"2"
					},
					{
						ball:"09",
						select:false,
						seep:"2"
					},
					{
						ball:"10",
						select:false,
						seep:"2"
					},
					{
						ball:"11",
						select:false,
						seep:"2"
					},
					{
						ball:"12",
						select:false,
						seep:"2"
					},
					{
						ball:"13",
						select:false,
						seep:"2"
					},
					{
						ball:"14",
						select:false,
						seep:"2"
					},
					{
						ball:"15",
						select:false,
						seep:"2"
					},
					{
						ball:"16",
						select:false,
						seep:"2"
					},
					{
						ball:"17",
						select:false,
						seep:"2"
					},
					{
						ball:"18",
						select:false,
						seep:"2"
					},
					{
						ball:"19",
						select:false,
						seep:"2"
					},
					{
						ball:"20",
						select:false,
						seep:"2"
					},
					{
						ball:"21",
						select:false,
						seep:"2"
					},
					{
						ball:"22",
						select:false,
						seep:"2"
					},
					{
						ball:"23",
						select:false,
						seep:"2"
					},
					{
						ball:"24",
						select:false,
						seep:"2"
					},
					{
						ball:"25",
						select:false,
						seep:"2"
					},
					{
						ball:"26",
						select:false,
						seep:"2"
					},
					{
						ball:"27",
						select:false,
						seep:"2"
					},
					{
						ball:"28",
						select:false,
						seep:"2"
					},
					{
						ball:"29",
						select:false,
						seep:"2"
					},
					{
						ball:"30",
						select:false,
						seep:"2"
					},
					{
						ball:"31",
						select:false,
						seep:"2"
					},
					{
						ball:"32",
						select:false,
						seep:"2"
					},
					{
						ball:"33",
						select:false,
						seep:"2"
					},
					// {
					// 	ball:"34",
					// 	select:false,
					// 	seep:"2"
					// },
					// {
					// 	ball:"35",
					// 	select:false,
					// 	seep:"2"
					// },
				],
				balls:[
					{
						ball:"01",
						select:false,
						seep:"5"
					},
					{
						ball:"02",
						select:false,
						seep:"5"
					},
					{
						ball:"03",
						select:false,
						seep:"5"
					},
					{
						ball:"04",
						select:false,
						seep:"5"
					},
					{
						ball:"05",
						select:false,
						seep:"5"
					},
					{
						ball:"06",
						select:false,
						seep:"5"
					},
					{
						ball:"07",
						select:false,
						seep:"5"
					},
					{
						ball:"08",
						select:false,
						seep:"5"
					},
					{
						ball:"09",
						select:false,
						seep:"5"
					},
					{
						ball:"10",
						select:false,
						seep:"5"
					},
					{
						ball:"11",
						select:false,
						seep:"5"
					},
					{
						ball:"12",
						select:false,
						seep:"5"
					},
					{
						ball:"13",
						select:false,
						seep:"5"
					},
					{
						ball:"14",
						select:false,
						seep:"5"
					},
					{
						ball:"15",
						select:false,
						seep:"5"
					},
					{
						ball:"16",
						select:false,
						seep:"5"
					},
				],
				menu:false,//控制菜单隐藏显示
				menuChoose:[
					{
						name:"显示遗漏"
					},
					{
						name:"趋势图"
					},
					{
						name:"玩法介绍"
					},
				],
				seeps:true,
				stake:"1",
				push1:[],
				push2:[],
				push3:[],
				push4:[],

				redtuo:[],//红球胆拖号池
				bluetuo:[],//蓝球具体数字

				combination:"1",//计算结果
				ash_box:false ,//控制筛选界面显示
				endtime:'',


				checkbox1:false,//奇数条件筛选开关
				oddvalue1:'',//奇数最小个数
				oddvalue2:'',//奇数最大个数
				oddoption:[1,2,3,4,5,6,7],

				checkbox2:false,//最大数条件筛选开关
				maxvalue1:'',//最大数 最小个数
				maxvalue2:'',//最大数 最大个数
				maxoption:[1,2,3,4,5,6,7],

				checkbox3:false,//号码和值条件筛选开关
				addvalue1:'',//号码和值最小数
				addvalue2:'',//号码和值最大数

				dan:[],//胆码具体数字
				tuo:[],//托码具体数字
				danzhu:'',//胆式投注算出的注数

				zuizhong:[],//最终算出的结果

				touzhu:[],//最终投注的数组
			}
		},
		mounted(){
			var self=this;
			self.user_id=JSON.parse(localStorage.getItem('setings')).accountid;
			this.shake();
			self.ball.forEach(function (item) {
				if (item.select==true){
					self.push1.push(item)
				}
			});
			self.balls.forEach(function (item) {
				if (item.select==true){
					self.push2.push(item)
				}
			});
			self.ball.forEach(function (item) {
				if (item.select==true){
					self.push3.push(item.ball)
				}
			});
			self.balls.forEach(function (item) {
				if (item.select==true){
					self.push4.push(item.ball)
				}
			});
			var contarr=screen.wonder(self.push3,self.push4);
			contarr.forEach(function (item,index) {
				self.touzhu[index]=item.split(",")
			})
			console.log(self.touzhu)
			this.getTwo_N();
			this.getEndtime();
		},
		methods:{
			select(index){
				// console.log(index)
				var self=this;
				self.push1 = [];
				self.push3 = [];
				self.touzhu=[];
				self.ball[index].select=!self.ball[index].select;
				self.ball.forEach(function (item) {
					if (item.select==true){
						self.push1.push(item)
					}
				});
				self.ball.forEach(function (item) {
					if (item.select==true){
						self.push3.push(item.ball)
					}
				});
				// console.log(stake.rander(self.push1,self.push2))
				if (self.push1.length>=6 && self.push2.length>=1){
					self.stake=stake.rander(self.push3,self.push4);
					// console.log(screen.wonder(self.push3,self.push4));
					var arr=screen.wonder(self.push3,self.push4)
					arr.forEach(function (item,index) {
						self.touzhu[index]=item.split(",")
					})
					console.log(self.touzhu)
				}else {
					self.stake=0
				}
				// console.log(self.push1);
				// console.log(self.ball[index])
			},
			selects(index){
				var self=this;
				self.push2 = [];
				self.push4 = [];
				self.touzhu=[];
				self.balls[index].select=!self.balls[index].select;
				self.balls.forEach(function (item) {
					if (item.select==true){
						self.push2.push(item)
					}
				});
				self.balls.forEach(function (item) {
					if (item.select==true){
						self.push4.push(item.ball)
					}
				});
				// self.stake=stake.rander(self.push1,self.push2)
				if (self.push1.length>=6 && self.push2.length>=1){
					self.stake=stake.rander(self.push3,self.push4);
					// console.log(screen.wonder(self.push3,self.push4));
					var arr=screen.wonder(self.push3,self.push4)
					arr.forEach(function (item,index) {
						self.touzhu[index]=item.split(",")
					})
					console.log(self.touzhu)
				}else {
					self.stake=0
				}
				// console.log(this.push1)
				// console.log(this.push2)
			},
			getRandomArray(arr,count){
				var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
				while (i-- > min) {
					index = Math.floor((i + 1) * Math.random());
					temp = shuffled[index];
					shuffled[index] = shuffled[i];
					shuffled[i] = temp;
				}
				return shuffled.slice(min);
			},
			shake(){
				var shakeArr=this.getRandomArray(this.ball, 6);
				this.ball.forEach(function (item) {
					item.select=false;
					shakeArr.forEach(function (item1) {
						item1.select=true
					});
				});
				this.push1 = shakeArr;
				///////////////////////////////////////////////
				var shakeArr1=this.getRandomArray(this.balls, 1);
				this.balls.forEach(function (item) {
					item.select=false;
					shakeArr1.forEach(function (item1) {
						item1.select=true
					})
				});
				this.push2 = shakeArr1;
				// self.stake=stake.rander(shakeArr,shakeArr1);
				this._stake();

				// console.log(screen.wonder(this.push3,this.push4));
			},
			_stake(){

				this.stake=stake.rander(this.push1,this.push2);
			},
			menuChooseF(index){
				if (index == 0){
					if (this.seeps==true){
						this.seeps=false;
						this.menu=false
					}else {
						this.seeps=true;
						this.menu=false
					}
				}else if (index==1){
					this.$router.push({path: 'trend'});
					this.menu=false
				}else if(index==2){
					this.$router.push({path: 'rule_select'});
					this.menu=false
				}
			},
			clear(){
				this.ball.forEach(function (item) {
					item.select=false
				});
				this.balls.forEach(function (item) {
					item.select=false
				});
				var thiz = this;

				thiz.push1=[];
				thiz.push2=[];
				thiz.stake="0";


			},
			back(){
				this.$router.push({path: '/'});
			},
			stop(e){
				e.stopPropagation()
			},
			receive(e){
				console.log(e.value)
			},
			demoC(value){
				console.log(value)
				console.log(this.value.a);
			},
			count(){
				var arr=screen.wonder();
				console.log(arr)
			},
			getTwo_N(){
				var self = this;
				self.$axios.post('tow_tone_getNo_Re',{},(res)=>{
					if (res.msg=='success'){
						self.$axios.post('tow_tone_getNo',{},(res)=>{
							res.data.red.forEach(function (item,index) {
								self.ball[index].seep=item
							})
							res.data.blue.forEach(function (item,index) {
								self.balls[index].seep=item
							})
						})
					}
				})
			},
			getEndtime(){
				var self=this
				self.$axios.post('tow_tone_getEndtime',{},(res)=>{
					var totalmoney=res.data.totalmoney
					self.message.money = parseFloat(totalmoney).toLocaleString()
					self.message.periods=res.data.issues
					self.endtime=res.data.end_time
					console.log(self.endtime)
					if (res.msg=='success'){
						setInterval(function () {
							var time=self.endtime
							var date = new Date();
							var now = date.getTime();
							//设置截止时间
							var endDate = new Date(time);
							var end = endDate.getTime();
							//时间差
							var leftTime = end-now;
							//定义变量 d,h,m,s保存倒计时的时间
							var d,h,m,s;
							if (leftTime>=0){
								h=Math.floor(leftTime/1000/60/60);
								m=Math.floor(leftTime/1000/60%60);
								s=Math.floor(leftTime/1000%60);
								if (h<10){
									h='0'+h
								}
								if (m<10){
									m='0'+m
								}
								if (s<10){
									s='0'+s
								}
								self.message.surplus=h+':'+m+':'+s;
							}else {
								self.message.surplus='停止购买'
							}
						},1000)
					}
				})
			},
			ash_boxs(){//打开筛选界面
				this.ash_box=true;
				var self=this;
				var red=[];//红球号码池
				var blue=[];//蓝球号码池
				self.ball.forEach(function (item,index) {
					if (item.select==true){
						// item.select=false
						red.push({
							select: false,
							ball: item.ball
						})
					}
				});
				self.balls.forEach(function (item) {
					if (item.select==true){
						// item.select=false
						self.bluetuo.push(item.ball)
					}
				});
				console.log(red);
				red.forEach(function (item) {
					item.select=false
				})
				self.redtuo=red;
				// console.log(red,blue);
			},
			closeash_box(){
				var self=this
				self.ash_box=!self.ash_box;
				//关闭开关
				self.checkbox1=false;
				self.checkbox2=false;
				self.checkbox3=false
				//
				self.oddvalue1="";
				self.oddvalue2="";
				self.maxvalue1="";
				self.addvalue1="";
				self.addvalue2="";
				self.danzhu="";
				self.redtuo=[];
				self.bluetuo=[];
				self.zuizhong="";
			},
			tuoselect(index){//红球胆拖选择
				var self=this
				var num = 0;
				this.redtuo.forEach(function (item,index) {
					if (item.select) {
						num++;
					}
				})
				if (num < 5) {
					this.redtuo[index].select=!this.redtuo[index].select
				}else{
					if (this.redtuo[index].select) {
						this.redtuo[index].select=!this.redtuo[index].select
					}else{
						alert('最多选择5个胆号')
					}
				}
			},
			touzhubtn(){//进行胆托排列组合
				var self=this;
				self.dan=[];
				self.tuo=[];
				self.zuizhong=[];
				self.redtuo.forEach(function (item) {
					if (item.select){
						self.dan.push(item.ball)
					}else {
						self.tuo.push(item.ball)
					}
				});
				// console.log(self.tuo,self.dan)
				var jieguo=[];
				// console.log(dantuo.dan(self.tuo,self.bluetuo,self.dan));
				jieguo=dantuo.dan(self.tuo,self.bluetuo,self.dan);
				// self.bluetuo=[];
				console.log(jieguo)
				self.danzhu=jieguo
				self.danzhu.forEach(function (item,index) {
					self.danzhu[index]=item.split(",")
				})
				self.zuizhong=self.danzhu
			},
			getOddNum(arr){
				var oddArr = arr.filter((n)=>{
					return n%2 !== 0;
				});
				return oddArr.length;
			},
			getBigNum(arr){
				var bigArr = arr.filter((n)=>{
					return n > 17;
				});
				return bigArr.length;
			},
			getAddNum(arr){
				var total = 0;
				arr.forEach((n)=>{
					total = Number(n)+total;
				});
				return total;
			},
			tocreen(){//开始筛选
				var self = this;
				this.touzhubtn();
				var Minoddnumber=this.oddvalue1;//单数筛选最小 个数
				var Maxoddnumber=this.oddvalue2;//单数筛选最大 个数
				var Mindanumber=this.maxvalue1;//大数筛选最小 个数
				var Maxdanumber=this.maxvalue2;//大数筛选最大 个数
				var Minaddnumber= this.addvalue1;//和数筛选 最 小 数
				var Maxaddnumber= this.addvalue2;//和数筛选 最 大 数

				console.log(this.danzhu);
				if (!self.danzhu){
					alert('请点击确定计算注数')
				}else {
					if( self.checkbox1==true || self.checkbox2==true || self.checkbox3==true){
						if(Minoddnumber>0 || Mindanumber>0 || Minaddnumber>0 ){
							var result = [];
							if (this.checkbox1) {
								if (Maxoddnumber==''){
									Maxoddnumber=7
								}
								result = this.danzhu.filter((item)=>{
									var n = self.getOddNum(item);
									console.log(n);
									return Minoddnumber <= n && n <= Maxoddnumber;
								});
							}else{
								result = this.danzhu;
							}
							console.log(result);

							var result1 = [];
							if (this.checkbox2) {
								if (Maxdanumber==''){
									Maxdanumber=7
								}
								result1 = result.filter((item)=>{
									var n = self.getBigNum(item)
									console.log(n);
									return Mindanumber <= n && n <= Maxdanumber;
								});
							}else{
								result1 = result;
							}
							console.log(result1);

							var result2 = [];
							if (this.checkbox3) {
								if (Maxaddnumber==''){
									Maxaddnumber=199
								}
								result2 = result1.filter((item)=>{
									var n = self.getAddNum(item)
									console.log(n);
									return Minaddnumber <= n && n <= Maxaddnumber;
								});
							}else{
								result2 = result1;
							}
							console.log(result2);
							self.zuizhong=result2;
						}else {
							alert('请选择筛选条件')
						}
					}else{
						alert('请选择筛选条件')
					}
				}
			},
			bet(){
				var self = this;
				MessageBox.confirm('确定投注？').then(action => {
					if(self.touzhu.length<1){
						MessageBox.alert('不足一注无法下注', '提示');
						return
					}
					if (!self.message.periods){
						MessageBox.alert('已经停止投注', '提示');
					}else {
						self.$axios.post('tow_tone_bet',{
							issue:self.message.periods,
							user_id:self.user_id,
							wager:self.touzhu,
							type:1
						},(res)=>{
							var msg='';
							if (res.msg=='success'){
								MessageBox.alert('恭喜下注成功', '提示');
							}else {
								msg=res.msg
								MessageBox.alert(msg, '提示');
							}
						})
					}
                });
			},
			bet_screen(){
				var self=this
				console.log(self.zuizhong);
				MessageBox.confirm('确定投注？').then(action => {
					if (self.zuizhong.length<1){
						MessageBox.alert('不足一注无法投注', '提示');
					}else {
						if (!self.message.periods){
							MessageBox.alert('已经停止投注', '提示');
						}else {
							self.$axios.post('tow_tone_bet',{
								issue:self.message.periods,
								user_id:self.user_id,
								type:1,
								wager:self.zuizhong
							},(res)=>{
								var msg='';
								if (res.msg=='success'){
									MessageBox.alert('恭喜下注成功', '提示');
								}else {
									msg=res.msg
									MessageBox.alert(msg, '提示');
								}
							})
						}
					}
                });
			},
			stopMenu(e){
				e.stopPropagation();
				this.menu=!this.menu
			}
		}
	}

</script>

<style scoped>
    .tocreens{
        background-color: #fff;
        color:  #26a2ff;
        border: 1px solid #26a2ff;
    }
    a,img,button,input,select,textarea{-webkit-tap-highlight-color:rgba(255,255,255,0);}
    .action{
        /*position: relative;*/
        display: flex;
        background-color: #FF4500;
        color: #fff;
        font-size: 18px;
        height: 3rem;
        justify-content: space-between;
        align-items: center;
        padding: 0 1rem;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
    }
    .screen_box_content .line select{
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        padding: .4rem .6rem;
        background-color: #f5f5f5;
        border: 1px solid #e8e8e8;
    }
    .action img{
        width: 2rem;
        height: 2rem;
    }
    .action_right img:nth-child(1){
        margin-right: 0.5rem;
    }
    .forehead_right img {
        width: 1.2rem;
        height: 1.2rem;
    }
    .forehead_right div:nth-child(2){
        display: flex;
        align-items: center;
    }
    .forehead{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 4rem;
        position: fixed;
        left: 0;
        right: 0;
        top: 3rem;
        background-color: #ffffff;
        box-shadow: 0 2px 6px 0 rgba(0,0,0,0.26);
    }
    .forehead>div{
        text-align: center;
        width: 50%;
        height: 4rem;
        line-height: 2rem;
        /*border-bottom: 1px solid #8a8a8a;*/
    }
    .forehead>div:nth-child(1){
        border-right: 1px dashed 	#CFCFCF;
        box-sizing: border-box;
    }
    .forehead_right>div:nth-child(2){
        margin: 0 auto;
        width: 7.5rem;
    }
    .forehead_left div:nth-child(2),.forehead_right div:nth-child(2){
        color: #EE0000;
    }
    .forehead_left div:nth-child(2){
        font-size: 25px;
    }
    .forehead_right div:nth-child(2){
        font-size: 18px;
    }
    .content{
        margin-top: 7rem;
        background-color: #EAEAEA;
    }
    .head{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 1rem;
    }
    .head_left{
        align-items: center;
        display: flex;
        color: #EE0000;
    }
    .head_left img{
        width: 2rem;
        height: 2rem;
    }
    .body{
        /*display: flex;*/
        /*flex-wrap: wrap;*/
        /*justify-content: space-around;*/
        /*margin-top: 1rem;*/
    }
    .body>div:nth-child(1){
        border-bottom: 1px solid #8a8a8a;
    }
    /*.body>div{*/
    /*display: flex;*/
    /*flex-wrap: wrap;*/
    /*!*justify-content: space-around;*!*/
    /*!*margin-top: 1rem;*!*/
    /*justify-content: flex-start;*/
    /*margin: 1rem auto 0;*/
    /*}*/
    .body>div:nth-child(2){
        padding-bottom: 5rem;
    }
    .item_box{
        display: flex;
        flex-wrap: wrap;
        justify-content: start;
    }
    .body .item{
        width: 20%;
        height: 4.5rem;
        text-align: center;
    }
    .item1{
        width: 20%;
        height: 4.5rem;
        text-align: center;
    }
    .ball {
        margin: 0 auto;
        width: 3rem;
        height: 3rem;
        border: 1px solid #eee;

        border-radius: 50px;
        line-height: 3rem;
        font-size: 20px;
    }
    .seep{
        font-size: 13px;
        color: #8a8a8a;
    }
    .on{
        background-color: #EE0000;
        color: #fff;
    }
    .set{
        background-color: #fff;
        color: #EE0000;
    }
    .ons{
        background-color: #1C86EE;
        color: #fff;
    }
    .sets{
        background-color: #fff;
        color: #1C86EE;
    }
    .menu{
        width: 6rem;
        height: 8.5rem;
        color: #fff;
        background-color: rgba(0,0,0,0.8);
        position: absolute;
        top: 3rem;
        right: 0.5rem;
        border-radius: 10px;
        padding: 0.5rem 1rem;
        z-index: 1;
    }
    .menu div{
        height: 3rem;
        text-align: center;
        line-height: 3rem;
        border-bottom: 1px solid #8a8a8a;
    }
    .menu div:last-child{
        border: 0;
    }
    .footer{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #000;
        display: flex;
        justify-content: space-between;
        padding: 10px;
        /*height: 4.5rem;*/
        align-items: center;
        background-color: rgba(0,0,0,0.85);
    }
    .footer .footer_left{
        background-color: #595959;
        /*height: 2.5rem;*/
        padding: 0.4rem 1.5rem;
        margin-left: 1rem;
        font-size: 20px;
        color: #EE9A00;
    }
    .footer .footer_right{
        background-color: #595959;
        padding: 0.4rem 1.5rem;
        margin-right: 1rem;
        font-size: 20px;
        color: #fff;
    }
    .footer .footer_center{
        color: #EE0000;
        text-align: center;
        font-size: 14px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        /*height: 4rem;*/
    }
    .footer .screen{
        color: #fff;
        background-color: darkorange;
        height: 1.5rem;
        line-height: 1.5rem;
        border-radius: 5px;
        margin: 0.4rem auto 0;
        width: 3rem;
    }
    .ash_box{
        position: fixed;
        top: 0;
        bottom: 0rem;
        left: 0;
        right: 0;
        background-color: rgba(0,0,0,.6);
        display: flex;
        align-items: center;
        justify-content: center;
        transform: translateY(100%);
        transition: all .3s ease ;
    }
    .ash_boxY{
        transform: translateY(0);
    }
    .ash_box .screen_box{
        width: 100%;
        height: 100%;
        background-color: #fff;
        padding: 3rem 1rem;
        box-sizing: border-box;
    }
    .screen_box .screen_box_title{
        font-size: 20px;
        font-weight: 700;
        text-align: center;
    }
    .screen_box_content select,.screen_box_content option{
        outline: 0;
    }
    .screen_box_content .line{
        display: flex;
        align-items: center;
        margin-bottom: 2rem;
    }
    .line_item{
        margin-left: 2rem;
    }
    .line_item span{
        margin: 0 10px;
        font-size: 14px;
        color: #333;
    }
    .colorg{
        color: gray!important;
    }
    .tuo{
        margin: 0.5rem 0 1.5rem;
    }
    .tuo .redBall{
        display: flex;
        flex-wrap: wrap;
    }
    .tuo .ball{
        text-align: center;
        width: 2rem;
        height: 2rem;
        line-height: 2rem;
        font-size: 16px;
    }
    .danzhu{
        font-size: 15px;
        font-weight: 700;
    }
    .close{
        margin-top: 0.5rem;
    }
</style>

