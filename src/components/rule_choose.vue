<template>
    <div id="question">
        <div class="head">
            <img src="../../static/img/fanhui.png" alt="" @click="$router.push('/mine')">
            <div>大乐透玩法介绍</div>
        </div>
        <div class="body">
            <div class="body_item">
                <p>
                    一.开奖时间：&nbsp每周二，四，日21：15开奖（与国家福彩中心同步）。
                </p>
                <p>
                    二.投注截止时间：&nbsp每周二，四，日19：45截止当期投注。
                </p>
                <p>
                    三.玩法规则&nbsp100金币起投；与国家发行彩种玩法及开奖结果一致，固定奖金额提高150%，独家增发特别奖和安慰奖，返奖率高达90%
                </p>
                <p>
                    四.奖项设置：&nbsp奖池总奖金为当期奖金（即当期投注总额的90%）与上期奖池滚存奖金之和。当期投注额的10%用于调节资金
                </p>
                <p>一等奖：总奖金为（当期奖金·当期固定将总额）*75%与滚存奖金之和，单注奖金按注均分，封顶5000万金币</p>
                <p>二等奖：总奖金为（当期奖金·当期固定将总额）*25%与滚存奖金之和，单注奖金按注均分，封顶5000万金币</p>
                <p>三等奖至六等奖：固定额奖金如下表：</p>
                <div><img class="form"  src="../../static/img/dlt_g.png" alt=""></div>
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
		mounted() {

		},
		methods:{

		}
	}
</script>

<style scoped>
    #question{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
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
    .body{
        background-color: #CDB38B;
        padding: 0.5rem 1.5rem;
    }
    .body_item {
        font-size: 16px;
        color: #333;
        font-weight: 600;
    }
    .form{
        display: block;
        margin: 0 auto;
    }
</style>