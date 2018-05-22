<template>
    <div id="record">
        <div class="back"><img src="../../static/img/fanhui.png" alt="" @click="$router.push('/mine')"></div>
        <div class="head">
            <div class="tab" @click="choose(index)" v-for="(item,index) in head" :class="[item.flag?'on':'']">{{item.name}}</div>
        </div>
        <div class="content daikai" v-if="head[0].flag">
            <div class="daikai_item" v-for="item in daikai">
                <div class="daikai_item_top display">
                    <div class="ball red" v-for="item1 in item.red">{{item1}}</div>
                    <div class="ball blue">{{item.blue}}</div>
                </div>
                <div class="daikai_item_bottom">
                    <div>
                        第&nbsp<span>{{item.issue}}</span><span>期</span>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="head[0].flag"><div v-if="daikai.length<1"><img src="../../static/img/wu.png" alt="" class="wu"></div></div>
        <div class="content yikai" v-if="head[1].flag">
            <div class="daikai_item" v-for="item in yikai">
                <div class="daikai_item_top display">
                    <div class="ball red" v-for="item1 in item.red">{{item1}}</div>
                    <div class="ball blue">{{item.blue}}</div>
                </div>
                <div class="daikai_item_bottom">
                    <div>
                        第&nbsp<span>{{item.issue}}</span><span>期</span>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="head[1].flag"><div v-if="yikai.length<1"><img src="../../static/img/wu.png" alt="" class="wu"></div></div>
        <div class="content zhongjiang" v-if="head[2].flag">
            <div class="item_zhongjiang" v-for="item in yizhong">
                <div class="item_zhongjiang_top display">
                    <div class="ball red" v-for="item1 in item.red">{{item1}}</div>
                    <div class="ball blue">{{item.blue}}</div>
                </div>
                <div class="item_zhongjiang_bottom display">
                    <div class="item_zhongjiang_bottom_left">
                        <div>
                            第&nbsp<span>{{item.issue}}</span><span>期</span>
                        </div>
                    </div>
                    <div class="item_zhongjiang_bottom_right display">
                        <div class="jiangci" v-if="item.rank"><span>{{item.rank}}</span><span>等奖！</span></div>
                        <div class="jiangjin"><span>奖金：</span><span>{{item.money}}</span>&nbsp豆</div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="head[2].flag"><div v-if="yizhong.length<1"><img src="../../static/img/wu.png" alt="" class="wu"></div></div>
    </div>
</template>

<script>
	export default {
		data(){
			return{
				user_id:"",
				head:[
					{
						name:"待开奖",
						flag:false
					},
					{
						name:"已开奖",
						flag:false
					},
					{
						name:"已中奖",
						flag:true
					},
				],
				yizhong:[],
				daikai:[],
				yikai:[]
			}
		},
		mounted(){
			this.user_id=JSON.parse(localStorage.getItem('setings')).accountid;
			this.getmessage();
		},
		methods:{
			choose(index){
				this.head.forEach(function (item) {
					item.flag=false
				});
				this.head[index].flag=true
			},
			getmessage(){
				var self=this;
				self.$axios.post('ssq_order',{user_id:this.user_id},(res)=>{
					console.log(res.data.is_start)
                    if (res.data.is_code){
	                    res.data.is_code.forEach(function (item) {
		                    self.yizhong.push({
			                    red:item.red_code,
			                    blue:item.bno1,
			                    issue:item.issue,
			                    money:item.money,
			                    rank:item.rank
		                    });
	                    })
                    }
					if (res.data.no_start){
						res.data.no_start.forEach(function (item) {
							self.daikai.push({
								red:item.red_code,
								blue:item.bno1,
								issue:item.issue,
							})
						})
                    }
					if (res.data.is_start){
						res.data.is_start.forEach(function (item) {
							self.yikai.push({
								red:item.red_code,
								blue:item.bno1,
								issue:item.issue,
							})
						})
                    }
				})
			}
		}
	}
</script>

<style scoped>
    .display{
        display: flex;
        align-items: center;
    }
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
    .back img{
        width: 2rem;
        height: 2rem;
        margin-left: 0.5rem;
    }
    .back{
        background-color: #e00000;
        height: 3rem;
        display: flex;
        align-items: center;
    }
    .item_zhongjiang{
        background-color: #fff;
        padding: 0.5rem 2rem;
        margin-bottom: 0.5rem;
        background-image: url("../../static/img/caizhong.png");
        /*height: 200px;*/
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
    .red{
        background-color: #e00000;
    }
    .blue{
        background-color: #1C86EE;;
    }
    .ball{
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        text-align: center;
        line-height: 2rem;
        color: #fff;
        margin: 0 0.4rem;
    }
    .ball:nth-child(1){
        margin: 0;
    }
    .item_zhongjiang_top{
        margin: 0.5rem 0;
        justify-content: center;
    }

    .item_zhongjiang_bottom{
        justify-content: space-between;
        height: 3rem;
        line-height: 3rem;
    }
    .item_zhongjiang_bottom_left>div>span:nth-child(1){
        margin-right: 0.5rem;
        color: #e00000;
    }
    .item_zhongjiang_bottom_left>div{
        color: #5a5a5a;
    }
    .jiangci{
        margin-right: 1rem;
    }
    .jiangci>span:nth-child(1){
        margin-right: 0.5rem;
        color: #e00000;
        font-size: 18px;
        font-weight: 700;
    }
    .jiangci>span:nth-child(2){
        font-size: 13px;
    }
    .jiangjin{
        font-size: 13px;
    }
    .jiangjin span:nth-child(2){
        font-size: 17px;
        color: #e00000;
        font-weight: 700;
    }
    .daikai_item_top{
        margin: 0.5rem 0;
        justify-content: center;
    }
    .daikai_item{
        background-color: #fff;
        padding: 0.5rem 2rem;
        margin-bottom: 0.5rem;
    }
    .daikai_item_bottom>div>span:nth-child(1){
        margin-right: 0.5rem;
        color: #e00000;
        font-size: 18px;
        font-weight: 700;
    }
    .wu{
        width: 7rem;
        height: 7rem;
        display: block;
        margin: 10rem auto;
    }
</style>