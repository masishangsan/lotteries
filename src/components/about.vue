<template>
    <div id="about">
        <div class="head">
            <img src="../../static/img/fanhui.png" alt="" @click="$router.push('/mine')">
            <div>关于我们</div>
        </div>
        <div class="body">
            <div class="top">
                <div class="title">竞彩赚金粉丝交流群</div>
                <div>
                    <span>竞彩赚金粉丝交流群1群：</span><span>65746565</span>
                </div>
                <div>
                    <span>竞彩赚金粉丝交流群2群：</span><span>35356465</span>
                </div>
            </div>
            <div class="bottom">
                <div>
                    <span>微信公众号：</span><span>AA竞彩赚金</span>
                </div>
                <div class="erwei">
                    <img src="../../static/img/erwei.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		data(){
			return{

            }
        },
        mounted(){

        },
        methods:{

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
    .top{
        background-color: #fff;
        padding: 0.5rem 1rem;
    }
    .bottom{
        background-color: #fff;
        padding: 0.5rem 1rem;
        margin-top: 2rem;
    }
    .top>div{
        border-bottom: 1px solid #c0e0e0;
        height: 3rem;
        line-height: 3rem;
    }
    .top>div:last-child{
        border: 0;
    }
    .top>div span:nth-child(1){
          color: #8a8a8a;
      }
    .top>div span:nth-child(2){
        color: #333333;
    }
    .bottom>div span:nth-child(1){
        color: #8a8a8a;
    }
    .bottom>div span:nth-child(2){
        color: #333333;
    }
    .erwei{
        margin-top: 1rem;
        padding: 0.5rem;
    }
</style>