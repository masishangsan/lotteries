<template>
    <div class="record_select">
        <div class="head">
            <img src="../../static/img/fanhui.png" alt="" @click="$router.push('/mine')">
            <div>彩种选择</div>
        </div>
        <div class="body">
            <div class="body_item display" v-for="(item,index) in caizhong" @click="tode_record(index)">
                <div class="left display">
                    <div class="logo"><img :src="[item.logo]" alt=""></div>
                    <div class="name">{{item.name}}</div>
                </div>
                <div class="right"><img src="../assets/right.png" alt=""></div>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		data(){
			return{
				caizhong:[
                    {
                    	logo:"../../static/img/01.png",
                        name:"大乐透"
                    },
					{
						logo:"../../static/img/double.png",
						name:"双色球"
					},
                ]
            }
        },
        mounted(){

        },
        methods:{
	        tode_record(index){
	        	if (index==0){
			        this.$router.push({path: 'record_choose'})
                }if(index==1){
			        this.$router.push({path: 'record_two_tone'})
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
        margin-top: 0.5rem;
    }
    .body_item{
        background-color: #fff;
        justify-content: space-between;
        padding: 0 1.5rem 0 2rem;
        margin-bottom: 0.5rem;
        font-size: 18px;
        color: #e00000;
        font-weight: 600;

    }
    .display{
        display: flex;
        align-items: center;
    }
    .logo img{
        width: 4rem;
        height: 4rem;
        margin-right: 2rem;
    }
    .right img{
        width: 1.5rem;
        height: 1.5rem;
    }
</style>