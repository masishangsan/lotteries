export default{
    url(u){
        let t = this;
        return t.baseURL.trim() + t[u.trim()];
    },

    // baseURL: "http://39.107.98.246",
    baseURL: "",
	getIndexessage:'/index/index/get',//获取首页用户信息
	getuserInfo:'/index/user_bank/getuserinfo',//我的页面获取户信息
	dlt_apply:'/index/dlt_activity/add',//大乐透报名参加活动
	ssq_apply:'/index/ssq_activity/add',//双色球报名参加活动
	sumbit:'/index/feedback/add',//提交反馈
	pay:'/index/user_bank/recharge',//充值
	cash:'/index/user_bank/cash',//提现



    tow_tone_getNo:'/index/leak/ssqleak',//双色球选号页面缺号
	tow_tone_getNo_Re:'/index/ssq_record',//双色球选号页面数据更新
	tow_tone_getMessage:'/index/reference/ssqcodemessage',//双色球获取中奖号码
    tow_tone_getR:'/index/reference/ssqredwalk',//双色球获取红球趋势
	tow_tone_getB:'/index/reference/ssqbluewalk',//双色球获取蓝球趋势
	tow_tone_getEndtime:'/index/ssq_record/ssqendtime',//双色球开奖截至时间
	tow_tone_bet:'/index/ssq_order/add',//双色球投注
	ssq_rank:"/index/ssq_activity/rank",//双色球排行榜
	ssq_order:"/index/ssq_order/message",//双色球投注记录

	choose_getNo:'/index/leak/dltleak',//大乐透选号页面缺号
	choose_getNoRe:'/index/dlt_record',//大乐透选号页面数据更新
	choose_getMessage:'/index/reference/dltcodemessage',//大乐透获取中奖号码
	choose_getR:'/index/reference/dltredwalk',//大乐透获取红球趋势
	choose_getB:'/index/reference/dltbluewalk',//大乐透获取蓝球趋势
	choose_getEndtime:'/index/dlt_record/dltendtime',//大乐透开奖截至时间
	choose_bet:'/index/dlt_order/add',//大乐透投注

	dlt_rank:"/index/dlt_activity/rank",//大乐透排行榜
	dlt_order:"/index/dlt_order/message",//大乐透投注记录

	getlinkData:"/admin/banner/content",//获取外链信息
	// qiniu,
    qiniu: "/api/tools/getToken",
}
