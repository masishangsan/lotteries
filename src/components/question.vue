<template>
    <div id="question">
        <div class="head">
            <img src="../../static/img/fanhui.png" alt="" @click="$router.push('/mine')">
            <div>常见问题</div>
        </div>
        <div class="body">
            <div class="body_item">
                <p>
                    一.何时开奖？&nbsp竞彩赚金游戏开奖时间与国家竞彩中心同步。如无特殊情况，每日9：00至21：00内结束的比赛，将在结束后2小时内完成开奖，21：00以后结束的比赛将在次日9：00进行开奖。过关玩法是以订单中最晚一场比赛结束时间为标准进行开奖。
                </p>
                <p>
                    二.竞彩赚金券如何使用？&nbsp单张竞彩赚金券等同于相同面值的金币，仅用于在竞彩赚金游戏，可进入个人中心进行查看，在竞彩进行投注时会自动有限使用竞彩赚金券。
                </p>
                <p>
                    三.如何撤单？&nbsp竞彩赚金暂不支持撤单功能，请您先确认好再下注
                </p>
                <p>
                    四.返奖失败如何处理？&nbsp我们会定时对返奖失败的订单进行核对，对确未返奖的订单，进行即使补发奖金并私信通知玩家。
                </p>
                <p>
                    五.何时开奖？&nbsp竞彩赚金游戏开奖时间与国家竞彩中心同步。如无特殊情况，每日9：00至21：00内结束的比赛，将在结束后2小时内完成开奖，21：00以后结束的比赛将在次日9：00进行开奖。过关玩法是以订单中最晚一场比赛结束时间为标准进行开奖。
                </p>
                <p>
                    六.竞彩赚金券如何使用？&nbsp单张竞彩赚金券等同于相同面值的金币，仅用于在竞彩赚金游戏，可进入个人中心进行查看，在竞彩进行投注时会自动有限使用竞彩赚金券。
                </p>
                <p>
                    七.如何撤单？&nbsp竞彩赚金暂不支持撤单功能，请您先确认好再下注
                </p>
                <p>
                    八.返奖失败如何处理？&nbsp我们会定时对返奖失败的订单进行核对，对确未返奖的订单，进行即使补发奖金并私信通知玩家。
                </p>
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
    #question{
        background-color: #CDB38B;
    }
    .body{
        padding: 0.5rem 1.5rem;
    }
    .body_item {
        font-size: 16px;
        color: #333;
        font-weight: 600;
    }
</style>