<template>
    <div id="rank">
        <div class="head">
            <div v-for="(item,index) in head" @click="choose(index)" :class="[item.flag?'on':'']">{{item.name}}</div>
        </div>
        <div class="dlt" v-if="head[0].flag&&ctr_dlt">
            <div class="first"  >
                <div class="rank">
                    <span>NO. 1</span>
                </div>
                <div class="first_content">
                    <div class="avatar" :style="{'background-image': 'url('+ first_dlt.user_img +')'}">
                        <div class="name">{{first_dlt.user_name}}</div>
                        <div class="crown"></div>
                    </div>
                    <div class="gold">
                        <img src="../../static/img/gold.png" alt="">
                        <span>{{first_dlt.money}}</span>
                    </div>
                </div>
            </div>
            <div class="else">
                <div class="else_item display" v-for="(item,index) in user_dlt">
                    <div class="item_left">NO. {{index+2}}</div>
                    <div class="else_right display">
                        <div class="else_right_left" :style="{'background-image': 'url('+ item.user_img +')'}">
                        </div>
                        <div class="else_right_right ">
                            <div>{{item.user_name}}</div>
                            <div class="golds">
                                <img src="../../static/img/gold.png" alt="">
                                <span>{{item.money}}</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div v-if="head[0].flag"><div v-if="ctr_dlt==false"><img src="../../static/img/wu.png" alt="" class="wu"></div></div>
        <div class="ssq" v-if="head[1].flag&&ctr_ssq">
            <div class="first"  >
                <div class="rank">
                    <span>NO. 1</span>
                </div>
                <div class="first_content">
                    <div class="avatar" :style="{'background-image': 'url('+ first_ssq.user_img +')'}">
                        <div class="name">{{first_ssq.user_name}}</div>
                        <div class="crown"></div>
                    </div>
                    <div class="gold">
                        <img src="../../static/img/gold.png" alt="">
                        <span>{{first_ssq.money}}</span>
                    </div>
                </div>
            </div>
            <div class="else">
                <div class="else_item display" v-for="(item,index) in user_ssq">
                    <div class="item_left">NO. {{index+2}}</div>
                    <div class="else_right display">
                        <div class="else_right_left" :style="{'background-image': 'url('+ item.user_img +')'}">
                        </div>
                        <div class="else_right_right ">
                            <div>{{item.user_name}}</div>
                            <div class="golds">
                                <img src="../../static/img/gold.png" alt="">
                                <span>{{item.money}}</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div v-if="head[1].flag"><div v-if="ctr_ssq==false"><img src="../../static/img/wu.png" alt="" class="wu"></div></div>
    </div>
</template>

<script>
	export default {
		data(){
            return{
	            head:[
		            {
			            name:"大乐透排行榜",
			            flag:true,
		            },
		            {
			            name:"双色球排行榜",
			            flag:false,
		            },
	            ],
                first_dlt:{
                },
	            first_ssq:{
	            },

	            user_dlt:[
                    {
                    	src:"../../static/img/lp.jpg",
                        name:"某某某人",
                        gold:"1800"
                    },
		            {
			            src:"../../static/img/lp.jpg",
			            name:"某某某人",
			            gold:"1800"
		            },
		            {
			            src:"../../static/img/lp.jpg",
			            name:"某某某人",
			            gold:"1800"
		            },
                ],
	            user_ssq:[],
                ctr_dlt:false,
	            ctr_ssq:false,
            }
        },
        mounted(){
            this.rank_dlt();
	        this.rank_ssq();
        },
        methods:{
	        choose(index){
		        this.head.forEach(function (item) {
			        item.flag=false
		        });
		        this.head[index].flag=true
	        },
            rank_dlt(){
	        	var self=this
	        	self.$axios.post('dlt_rank',{},(res)=>{
                    if (res.data.length>0){
	        			self.ctr_dlt=true
	                    self.first_dlt = res.data.shift();
	                    self.user_dlt = res.data;
                    }
                })
            },
	        rank_ssq(){
		        var self=this
		        self.$axios.post('ssq_rank',{},(res)=>{
		        	if(res.data.length>0){
				        self.ctr_ssq=true;
				        self.first_ssq = res.data.shift();
				        self.user_ssq = res.data;
				        console.log(self.first_ssq,self.user_ssq)
                    }
		        })
            }
        }
	}
</script>

<style scoped>
    .on{
        color: #e00000!important;
        border-bottom: 2px solid #e00000!important;
    }
    .head{
        display: flex;
        background-color: #fff;
    }
    .head>div{
        height: 4rem;
        line-height: 4rem;
        font-size: 18px;
        flex: 1;
        border-bottom: 2px solid #ccc;
        text-align: center;
        box-sizing: border-box;
        color: #333;
    }
    .first{
        position: relative;
        padding: 0.5rem 0;
        background-color: #fff;
        border-bottom: 1px solid #EBEBEB;
    }
    .first .rank{
        position: absolute;
        top: 54%;
        left: 0;
        height: 1.2rem;
        line-height: 1.2rem;
        padding: 0 1rem;
        background-color: red;
        border-radius: 0 1rem 1rem 0;
        transform: translate(0, -50%);
        color: #fff;
        font-size: .8rem;
    }
    .first_content{
        position: relative;
        background-image: url("../../static/img/ce.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        width: 9rem;
        height: 7rem;
        margin: 0 auto -2rem auto;
        padding: 2rem 0;
        text-align: center;
        line-height: 7rem;
    }
    .avatar .name{
        position: absolute;
        bottom: -.6rem;
        left: -.7rem;
        height: 1rem;
        line-height: 1rem;
        color: #fff;
        width: 5.4rem;
        /*background-color: red;*/
        background-image: url("../../static/img/name.png");
        text-overflow: ellipsis;
        font-size: 12px;
    }
    .avatar{
        position: relative;
        display: inline-block;
        height: 4rem;
        width: 4rem;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        border-radius: 50%;
    }
    .crown{
        position: absolute;
        top: -1.4rem;
        left: 0;
        right: 0;
        margin: 0 auto;
        width: 3rem;
        height: 1.8rem;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-image: url("../../static/img/huangguan .png");
    }
    .gold{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 2.6rem;
        line-height: 1;
        text-align: center;
        margin: 0 auto;
    }
    .gold img{
        width: 1rem;
        height: 1rem;
        margin-right: 0.4rem;
    }
    .gold span{
        color: #e00000;
        font-size: .8rem;
    }
    .display{
        display: flex;
        align-items: center;
    }
    .else_right_left{
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
    .else_item{
        padding: 0.5rem 1rem;
        background-color: #fff;
        border-bottom: 1px solid #EBEBEB;
    }
    .golds img{
        width: 1rem;
        height: 1rem;
    }
    .golds span{
        color: #e00;
        font-size: .8rem;
    }
    .item_left{
        font-size: 17px;
        color: #e00;
        margin-right: 2.5rem;
    }
    .else_right_right{
        margin-left: 2rem;
    }
    .else_right_right>div:nth-child(1){
        margin-bottom: 0.5rem;
        color: #333;
        font-size: 14px;
        font-weight: 500;
    }
    .wu{
        width: 20rem;
        height: 20rem;
        display: block;
        margin: 0 auto;
    }
</style>