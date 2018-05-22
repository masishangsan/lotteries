<template>
    <div id="mine">
        <div class="header">
            <div class="header_left">
                <div v-if="userinfo.headersrc" class="headbox"><img :src="[userinfo.headersrc]" alt=""></div>
                <div class="headbox" v-else><img src="../../static/img/default_head.png" alt=""></div>
            </div>
            <div class="header_right">
                <div class="username" v-if="userinfo.username">{{userinfo.username}}</div>
                <div class="username" v-else>来宾：{{defaults.username}}</div>
                <div class="gold" v-if="userinfo.gold">金豆:{{userinfo.gold}}</div>
                <div class="gold" v-else>金豆:{{defaults.gold}}</div>
            </div>
        </div>
        <div class="body">
            <div class="body_item display" v-for="(item,index) in bodys" @click="jump(index)">
                <div class="body_item_left display">
                    <img :src="[item.icon]" alt="">
                    <div>{{item.name}}</div>
                </div>
                <div class="body_item_right display">
                    <img src="../../static/img/right.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		data(){
			return{
				user_id:"",
				userinfo:{
                    headersrc:'',
					username:'',
					gold:''
                },
                defaults:{
                    // username:"",
	                // gold:'200'
                },
				bodys:[
                    {
                    	icon:'../../static/img/jilu.png',
                        name:"投注记录",
                    },
					{
						icon:'../../static/img/guize.png',
						name:"规则介绍",
					},
					{
						icon:'../../static/img/question.png',
						name:"常见问题",
					},
					{
						icon:'../../static/img/kefu.png',
						name:"客服反馈",
					},
					{
						icon:'../../static/img/women.png',
						name:"关于我们",
					},
					{
						icon:'../../static/img/chongzhi.png',
						name:"充值",
					},
					{
						icon:'../../static/img/tixian.png',
						name:"提现",
					}
                ],
            }
        },
        mounted(){
	        this.user_id=JSON.parse(localStorage.getItem('setings')).accountid;
			this.getuserInfo();
            this.random();
        },
        methods:{
            random(){
            	var self =this
	            let finalNum = '';
	            for(let i = 0 ; i< 9 ; i++){
		            finalNum += Math.floor(Math.random()*10);
	            }
	            console.log(finalNum);
	            self.defaults.username=finalNum
            },
	        jump(index){
            	if (index==0){
		            this.$router.push({path: 'record_select'})
                }else if (index==1){
		            this.$router.push({path: 'rule_select'})
	            }else if (index==2){
		            this.$router.push({path: 'question'})
                }else if (index==3){
		            this.$router.push({path: 'feedback'})
	            }else if (index==4){
		            this.$router.push({path: 'about'})
	            }else if (index==5){
		            this.$router.push({path: 'pay'})
	            }else if (index==6){
		            this.$router.push({path: 'withdraw'})
	            }
            },
            getuserInfo(){
            	var self=this
                self.$axios.get('getuserInfo',{user_id:self.user_id},(res)=>{
                	// if (res)
                	console.log(res)
	                if(res.data.user_name){
		                self.userinfo.username=res.data.user_name;
	                }
	                if(res.data.money){
		                self.userinfo.gold=res.data.money;
	                }
                    if (res.data.user_img){
	                    self.userinfo.headersrc=res.data.user_img;
                    }
	                console.log( self.userinfo)
                })
            }
        }
	}
</script>

<style scoped>
    .header{
        background-image: url("../../static/img/minesss.png");
        height: 200px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .header_left img{
        border-radius: 50%;
        height: 100%;
        width: 100%;
    }
    .headbox{
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 50%;
        border: 5px solid #fff;
    }
    .header_right{
        margin-top: 1rem;
    }
    .gold{
        color: rgba(214,187,137,1);
        font-size: 16px;
        text-align: center;
    }
    .username{
        color: #fff;
        font-size: 18px;
        font-weight: 400;
        text-align: center;
        margin-bottom: 0.7rem;
    }
    .display{
        display: flex;
        align-items: center;
    }
    .body_item_left img{
        width: 2rem;
        height: 2rem;
        margin-right: 0.7rem;
    }
    .body_item_right img{
        width: 1rem;
        height: 1rem;
    }
    .body_item{
        justify-content: space-between;
        padding: 0 1.2rem;
        height: 4rem;
        background-color: #fff;
        border-bottom: 1px solid #F0F0F0;
    }
    .body{
        margin-top: 1.5rem;
        padding-bottom: 4rem;
    }
</style>