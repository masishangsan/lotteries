<template>
    <div id="pay">
        <div class="head">
            <img src="../../static/img/fanhui.png" alt="" @click="$router.push('/mine')">
            <div>金豆提现</div>
        </div>
        <div class="body">
            <div class="content">
                <div class="title">请设置提现数量</div>
                <div class="box">
                    <div v-for="(item,index) in numbers" class="box_item" >
                        <div class="left" >
                            <div>{{item.number}}</div>
                            <img src="../../static/img/jindou.png" alt="">
                        </div>
                        <div class="right">
                            <div :class="[item.choose?'select':'']" @click="select(index)">{{item.numberlock}}</div>
                            <img src="../../static/img/jinbi.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="input"><input type="number" placeholder="自定义充值数量" v-model="jinbi"></div>
                <div class="close"></div>
                <mt-button size="large" type="danger" @click="topay" clas="close">提现</mt-button>
            </div>
        </div>
    </div>
</template>

<script>
	import { Button } from 'mint-ui';
	import 'swiper/dist/css/swiper.css'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import { MessageBox } from 'mint-ui';
	export default {
		data(){
			return{
				user_id:"",
				numbers:[
					{
						number:50,
						numberlock:5,
						choose:false
					},
					{
						number:100,
						numberlock:10,
						choose:false
					},
					{
						number:200,
						numberlock:20,
						choose:false
					},
					{
						number:500,
						numberlock:50,
						choose:false
					},
				],
				jieguo:0,
				jinbi:0
			}
		},
		mounted(){
			this.user_id=JSON.parse(localStorage.getItem('setings')).accountid;
		},
		methods:{
			select(index){
				var self=this
				self.jieguo=""
				var index=index
				console.log(index)
				self.numbers.forEach(function (item) {
					item.choose=false
					console.log(item)
				})
				self.numbers[index].choose=true
				self.jieguo=self.numbers[index].number
				self.jinbi=self.numbers[index].numberlock
			},
			topay(){
				var self=this
				if (self.jieguo<1){
					MessageBox.alert( '请选择正确数值金豆','提示');
				}else {
					MessageBox.confirm('确定提现'+self.jieguo+'个金豆？').then(action => {
						self.$axios.post('cash',{
							user_id:self.user_id,
							num:self.jinbi
						},(res)=>{
							console.log(res)
							if (res.msg=="success"){
								MessageBox.alert( '提现成功！','提示');
							}else if (res.ret==false){
								MessageBox.alert( res.msg,'提示');
                            }

						})
					})
				}
			}
		}
	}
</script>

<style scoped>
    #pay{
        /*background-color: #EECBAD;*/
        /*height: 100%;*/
    }
    .head{
        background-color: #e00000;
        height: 3rem;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        color: #fff;
    }
    .head img{
        width: 2rem;
        height: 2rem;
        position: absolute;
        left: 0.5rem;
        top: 0.5rem;
    }
    .content{
        /*background-color: #EECBAD;*/
        padding: 1rem 1.5rem 0.5rem;
    }
    .title{
        text-align: center;
        color: #e00000;
        font-size: 18px;
        font-weight: 700;
    }
    .box{
        flex-direction: column;
        padding: 1rem 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;
    }
    .box_item{
        width: 100%;
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        margin: 0.3rem 0;
        color: #e00000;
        height: 1.5rem;
        line-height: 1.5rem;
        border-radius: 0.3rem;
    }
    .left,.right{
        display: flex;
    }
    .right>div:nth-child(1){
        border: 1px solid #ee0000;
        color: #ee0000;
        border-radius: 0.3rem;
    }
    .left>div:nth-child(1),.right>div:nth-child(1){
        width: 3rem;
    }
    .left img,.right img{
        width: 1.2rem;
        height: 1.2rem;
        margin-left: 0.5rem;
    }
    .select{
        background-color: #e00000;
        color: #ffffff!important;
    }
    .input{
        width: 79%;
        margin: 0 auto;
        margin-top: 1rem;
        padding: 0.5rem 0.75rem;
        height: 1rem;
        border: 1px solid #ee0000;
        background-color: #fff;
        border-radius: 0.4rem;
    }
    .input input{
        width: 100%;
        height: 100%;
        border: 0;
        outline: 0;
    }
    .mint-button--danger{
        background-color: #ee0000
    }
    .close{
        margin-top: 1rem;
    }
</style>