<template>
    <div id="double">
        <swiper :options="swiperOption" ref="mySwiper" class="swiper">
            <swiper-slide v-for="item in banner" :key="item.url">
                <a  @click="toLink(item.id)"><div class="banner" :style="{backgroundImage: 'url('+item.img+')'}"></div></a>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
        <div class="box">
            <div class="left">
                <img src="../assets/01.png" alt="">
            </div>
            <div class="right">
                <div class="up">
                    <div>投注截至</div>
                    <div>
                        <div>{{dlt_hour}}</div>
                        <div>：</div>
                        <div>{{dlt_minute}}</div>
                        <div>：</div>
                        <div>{{dlt_second}}</div>
                    </div>
                </div>
                <div class="center" >
                    <div class="red" v-for="itemR in red" :key="itemR">{{itemR}}</div>
                    <div class="blue" v-for="itemB in blue" :key="itemB">{{itemB}}</div>
                </div>
                    <div class="down">
                        <div class="down_left" @click="reelect">
                            <img src="../assets/flush.png" alt="">
                            <div>换号码</div>
                        </div>
                        <div class="down_center">
                            2金豆下注
                        </div>
                        <div class="down_right" @click="toChoose(1)">
                            <div>去选号</div>
                            <img src="../assets/right.png" alt="">
                        </div>
                    </div>
              </div>
        </div>

        <div class="box">
            <div class="left">
                <img src="../assets/double.png" alt="">
            </div>
            <div class="right">
                <div class="up">
                    <div>投注截至</div>
                    <div>
                        <div>{{ssq_hour}}</div>
                        <div>：</div>
                        <div>{{ssq_minute}}</div>
                        <div>：</div>
                        <div>{{ssq_second}}</div>
                    </div>
                </div>
                <div class="center" >
                    <div class="red" v-for="itemR in red1" :key="itemR">{{itemR}}</div>
                    <div class="blue" v-for="itemB in blue1" :key="itemB">{{itemB}}</div>
                </div>
                <div class="down">
                    <div class="down_left" @click="reelects">
                        <img src="../assets/flush.png" alt="">
                        <div>换号码</div>
                    </div>
                    <div class="down_center">
                        2金豆下注
                    </div>
                    <div class="down_right" @click="toChoose(2)">
                        <div>去选号</div>
                        <img src="../assets/right.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="race">
            <div class="race_title">

                竞彩大比拼&nbsp&nbsp&nbsp幸运就在你双手
            </div>
            <div class="race_content">
                <div class="race_content_item" @click="toactivity_dlt">
                    <img src="../assets/01.png" alt="">
                    <div class="race_content_item_name">大乐透</div>
                    <div class="status">
                        <div class="weican" v-if="iscan_dlt==false" @click="applys_dlt($event)">您未参与比赛，点击进行报名</div>
                        <div class="yican" v-else>您已报名，快去投注吧！</div>
                    </div>
                </div>
                <div class="race_content_item" @click="toactivity_ssq">
                    <img src="../assets/double.png" alt="">
                    <div class="race_content_item_name">双色球</div>
                    <div class="status">
                        <div class="weican" v-if="iscan_ssq==false" @click="applys_ssq">您未参与比赛，点击进行报名</div>
                        <div class="yican" v-else>您已报名，快去投注吧！</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	import 'swiper/dist/css/swiper.css'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import { MessageBox } from 'mint-ui';
    export default {
        data(){
            return {

            	user_id:"",
	            token:"",
	            gameid:"",
                red:[],
                blue:[],
                dlt_hour:"00",
	            dlt_minute:"00",
	            dlt_second:"00",
                ssq_hour:"00",
	            ssq_minute:"00",
	            ssq_second:"00",
                red1:[],
                blue1:[],
	            swiperOption:{
                	notNextTick: true,
		            autoplay: true,
		            pagination : '.swiper-pagination',
                },
                banner: JSON.parse(localStorage.getItem('banner')) ? JSON.parse(localStorage.getItem('banner')) : [],//首页banner图
                iscan_dlt:false,
                iscan_ssq:false,
                dlt_act_id:"",//大乐透活动id
	            ssq_act_id:"",//双色球活动id
            }
        },

        mounted(){
        	if (this.$route.query.accountid){
		        localStorage.setItem('setings',JSON.stringify(this.$route.query))
            }
		        var setings=JSON.parse(localStorage.getItem('setings'))
		        this.user_id=setings.accountid;
		        this.token=setings.token;
		        this.gameid=setings.gameid;

	        var self=this
	        this.getIndexMessage();
            this.take(this.red);
            this.takes(this.blue);
	        this.take1(this.red1);
	        this.takes1(this.blue1)
            // window.setInterval(function () {
            //   self.ShowCountDown(2017,11,12,'countdown')
            // },1000)
        },
        methods:{
            take(arr){
                for(let i = 0; i< 5; i++){   //循环执行取数操作15次
                    if(this.getRandom(arr, 35)){    //数据存在则推入，不存在则取消操作
                         arr.push(this.getRandom(arr, 35))
                    }
                }
                console.log(arr)
          },
            takes(arr){
                for(let i = 0; i< 2; i++){   //循环执行取数操作15次
                    if(this.getRandom(arr, 12)){    //数据存在则推入，不存在则取消操作
                        arr.push(this.getRandom(arr, 12))
                    }
                }
                console.log(arr)
            },
	        take1(arr){
		        for(let i = 0; i< 6; i++){   //循环执行取数操作15次
			        if(this.getRandom(arr, 33)){    //数据存在则推入，不存在则取消操作
				        arr.push(this.getRandom(arr, 33))
			        }
		        }
		        console.log(arr)
	        },
	        takes1(arr){
		        for(let i = 0; i< 1; i++){   //循环执行取数操作15次
			        if(this.getRandom(arr, 16)){    //数据存在则推入，不存在则取消操作
				        arr.push(this.getRandom(arr, 16))
			        }
		        }
		        console.log(arr)
	        },
            getRandom(arr,len){
                if (arr.length>=len){
                    console.log('已经取完了所有的随机数')
                    return
                }
                else {
                    let num = Math.ceil(Math.random()*len);
                    if (num<10){
                        num= '0' + num;
                        num.toString()
                    }
                    while(arr.some(val => val === num)){ //如果有重复的，就重新选.用到了some方法和箭头函数
                        console.log(num)
                        num = Math.ceil(Math.random()*len);
                    }
                    return num
                }
          },
            reelect(){
                this.red=[];
                this.blue=[];
                this.take(this.red);
                this.takes(this.blue)
          },
            reelects(){
                this.red1=[];
                this.blue1=[];
                this.take1(this.red1);
                this.takes1(this.blue1)
            },
            toChoose(id){
                if (id==1){
                    this.$router.push({path: 'choose'})
                }else if (id==2){
                    this.$router.push({path: 'two_tone'})
                }
          },
            ShowCountDown(year,month,day){
                var now=new Date();
                var endDate = new Date(year, month, day);
                var leftTime=endDate.getTime()-now.getTime();
                var dd = parseInt(leftTime / 1000 / 60 / 60 / 24, 10);//计算剩余的天数
                var hh = parseInt(leftTime / 1000 / 60 / 60 % 24, 10);//计算剩余的小时数
                var mm = parseInt(leftTime / 1000 / 60 % 60, 10);//计算剩余的分钟数
                var ss = parseInt(leftTime / 1000 % 60, 10);//计算剩余的秒数
                dd = this.checkTime(dd);
                hh = this.checkTime(hh);
                mm = this.checkTime(mm);
                ss = this.checkTime(ss);//小于10的话加0
                var cc = ''
                cc = "距离" + year + "年" + month + "月" + day + "日还有：" + dd + "天" + hh + "小时" + mm + "分" + ss + "秒";
                console.log(cc)
            },
            checkTime(i){
                if(i<10){
                    i='0'+i
                }
                return i
            },
            getIndexMessage(){
                var self=this
                self.$axios.get('getIndexessage',{user_id:self.user_id,token:self.token, game_id:self.gameid},(res)=>{
                	console.log(res)
                    self.banner=res.data.banner;

                	localStorage.setItem('banner', JSON.stringify(self.banner));
                	self.iscan_dlt=res.data.is_dlt;
                	self.iscan_ssq=res.data.is_ssq;
                	self.dlt_act_id=res.data.dlt_act.id;
	                self.ssq_act_id=res.data.ssq_act.id;
	                setInterval(function () {
		                var time=res.data.dlt
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
                            if(s<10){
			                	s='0'+s
                            }
			                self.dlt_hour=h;
			                self.dlt_minute=m;
			                self.dlt_second=s;
		                }else {
			                self.dlt_hour='00';
			                self.dlt_minute='00';
			                self.dlt_second='00';
		                }
	                },1000);
	                setInterval(function () {
		                var time=res.data.ssq
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
			                if(s<10){
				                s='0'+s
			                }
			                self.ssq_hour=h;
			                self.ssq_minute=m;
			                self.ssq_second=s;
		                }else {
			                self.ssq_hour='00';
			                self.ssq_minute='00';
			                self.ssq_second='00';
		                }
	                },1000)
                })
            },
	        applys_dlt(e){
		        e.stopPropagation();
		        MessageBox.confirm('确定支付200金币报名?').then(action => {
                    var self=this;
                    console.log(self.dlt_act_id)
                    self.$axios.post('dlt_apply',{
	                    act_id:self.dlt_act_id,
                        user_id:self.user_id,
                    },(res)=>{
			        	if (res.msg=='success'){
					        MessageBox('提示', '报名成功！');
					        self.iscan_dlt=true
                        }else {
					        MessageBox('提示', '报名失败！');
				        }
                    })
		        });
            },
	        applys_ssq(e){
		        e.stopPropagation();
		        MessageBox.confirm('确定支付200金币报名?').then(action => {
			        var self=this;
			        console.log(self.dlt_act_id)
			        self.$axios.post('ssq_apply',{
				        act_id:self.ssq_act_id,
				        user_id:self.user_id
			        },(res)=>{
				        if (res.msg=='success'){
					        MessageBox('提示', '报名成功！');
					        self.iscan_ssq=true
				        }else {
				        	alert('aaa')
					        MessageBox('提示', '报名失败！');
                        }
			        })
		        });
            },
            toactivity_dlt(){
            	var self=this
            	if (self.iscan_dlt){
		            self.$router.push({path: '/activity_choose'});
                }else{
		            MessageBox('提示', '请先报名！');
                }
            },
	        toactivity_ssq(){
		        var self=this
		        if (self.iscan_ssq){
			        self.$router.push({path: '/activity_two_tone'});
		        }else{
			        MessageBox('提示', '请先报名！');
		        }
	        },
	        toLink(id){
		        this.$router.push({ path: '/link', query: {id: id } })
            }
        }
    }
</script>

<style scoped>
  .left img{
    width: 4rem;
    height: 4rem;
  }
  .box{
    background-color: #fff;
    height: 7rem;
    padding: 1rem 0.4rem;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
      box-shadow: 0 2px 6px 0 rgba(0,0,0,0.26);
  }
  .left{
    flex: 2;
  }
  .right{
    flex: 8;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .right>div{
    margin-left: 1rem;
  }
  .right .up{
    display: flex;
    align-items: center;
  }
  .up>div:nth-child(2){
    margin-left: 10px;
    display: flex;
    align-items: center;
  }
  .up>div:nth-child(2) div{
    padding: 3px;
  }
  .up>div:nth-child(2) div:nth-child(even){
     border: 0;
   }
  .up>div:nth-child(2) div:nth-child(odd){
    border: 1px solid #8a8a8a;
    border-radius: 7px;
    color: #333;
  }
  .up>div:nth-child(2) div:nth-child(2){
    /*margin: 0 10px;*/
  }
  .right .up:nth-child(1){
    font-size: 17px;
    color: #8a8a8a;
  }
  .right .center{
    display: flex;
    justify-content: space-around;
  }
  .center div{
    width: 2rem;
    height: 2rem;
    text-align: center;
    line-height: 2rem;
    border-radius: 50px;
    color: #fff;
  }
  .center .red{
    background-color: #EE0000;
  }
  .center .blue{
    background-color: #1C86EE;
  }
  .right .down{
    display: flex;
    justify-content: space-between;
  }
  .down img{
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 5px;
  }
  .down_left{
    display: flex;
    color: #8a8a8a;
  }
  .down_center{
    color:#EE0000;
    padding: 0 10px;
    border: 1px solid #EE0000;
    border-radius: 20px;
    margin: 0 5px;
  }
  .down_right{
    display: flex;
    align-items: center;
    color: #8a8a8a;
  }
  .down_right img{
    width: 1.2rem;
    height: 1.2rem;
  }
    .swiper{
        height: 220px;
        margin-bottom: 1rem;
    }
    .banner{
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        height: 220px;
    }
    .race{
        background-color: #fff;
        /*margin-bottom: 4rem;*/
    }
    .race_title{
        font-size: 18px;
        font-weight: bold;
        color: #e00000;
        text-align: center;
        height: 4.2rem;
        line-height: 4.2rem;
        border-bottom: 1px solid #F0F0F0;
    }
    .race_content{
        display: flex;
        border-bottom: 1px solid #F0F0F0;
        padding-bottom: 4rem;
    }
    .race_content_item{
        flex: 1;
        box-sizing: border-box;
        border-right: 1px solid #F0F0F0;
        padding: 1rem;
    }
    .race_content_item:last-child{
        border-right: 0;
    }
    .race_content_item img{
        width: 4rem;
        height: 4rem;
        display: block;
        margin: 0.5rem auto 0;
    }
    .race_content_item_name{
        color: #e00000;
        font-size: 14px;
        margin: 0.6rem 0;
        font-weight: 600;
        text-align: center;
    }
    .weican{
        font-size: 14px;
        color: #8a8a8a;
        text-align: center;
        text-decoration:underline
    }
    .yican{
        font-size: 14px;
        text-align: center;
        color: #e00000;
        font-weight: 700;
    }
</style>
