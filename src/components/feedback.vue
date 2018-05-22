<template>
    <div id="feedback">
        <div class="head">
            <img src="../../static/img/fanhui.png" alt="" @click="$router.push('/mine')">
            <div>彩种选择</div>
        </div>
        <div class="body">
            <div class="content">
                <textarea placeholder="有什么问题请在这里提交(8~200字)" v-model="content" required="required"></textarea>
            </div>
            <div class="user">
                <div class="phone text">
                    <input type="number" v-model="phone" placeholder="手机号码（可选）">
                </div>
                <div class="phone text">
                    <input type="number" v-model="QQ" placeholder="QQ号码（可选）">
                </div>
            </div>
            <mt-button size="large" type="primary" @click="sumbit">提交</mt-button>
        </div>

    </div>
</template>

<script>
	import 'swiper/dist/css/swiper.css'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import { MessageBox } from 'mint-ui';
	export default {
        data(){
        	return{
		        content:"",
		        phone:"",
                QQ:""
            }
        },
        mounted(){

        },
        methods:{
	        sumbit(){
	        	var self=this
                if (self.content==""){
	                MessageBox('提示', '问题不能为空');
                }else {
	        		self.$axios.post('sumbit',{
	        			user_id:74,
                        content:self.content,
                        qq:self.QQ,
                        phone:self.phone
                    },(res)=>{
				        MessageBox('提示', '提交成功谢谢您的反馈！');
				        self.content="";
				        self.QQ="";
				        self.phone=""
                    })
                }
            }
        }
	}
</script>

<style scoped>
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
    .body{
        padding: 0.5rem 1rem;
    }
    .content{
        width: 90%;
        margin: 0 auto;
        border: 1px solid #ccc;
        padding:  0.5rem;
        height: 7rem;
        background-color: #fff;
        border-radius: 0.5rem;
    }
    .content textarea{
        width: 100%;
        height: 100%;
        border: 0;
        outline: none;
        color: #333;
    }
    .text{
        width: 90%;
        margin: 1rem auto ;
        border: 1px solid #ccc;
        padding:  0.5rem;
        height: 1.3rem;
        background-color: #fff;
        border-radius: 0.5rem;
    }
    .text:last-child{
        margin-bottom: 2rem;
    }
    .text input{
        width: 100%;
        height: 100%;
        border: 0;
        outline: none;
        color: #333;
    }
</style>