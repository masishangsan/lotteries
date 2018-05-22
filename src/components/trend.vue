<template>
    <div class="trend">
        <div class="action">
            <img src="../assets/back.png" alt="" @click="back">
            <div>双色球投注参考</div>
        </div>
        <div class="head">
            <div v-for="(item,index) in head" @click="choose(index)" :class="[item.flag?'on':'']">{{item.name}}</div>
        </div>
        <div class="content_first" v-if="head[0].flag">
             <div class="content_first_title">
                  <div>期号</div>
                  <div>红球号码</div>
                  <div>蓝球号码</div>
             </div>
              <div class="content_first_content">
                  <div v-for="item in message" class="content_first_content_item">
                      <div>{{item.num}}期</div>
                      <div>
                          <div v-for="item1 in item.redBall">{{item1}}</div>
                      </div>
                      <div>
                          <div>{{item.blueBall}}</div>
                      </div>
                  </div>
              </div>
        </div>
        <div class="content_second" v-if="head[1].flag">
            <div class="content_second_title" id="content_second_title" >
                <div>
                    <div class="qishu">期数</div>
                    <div v-for="item in number" class="onece">{{item.value}}</div>
                </div>
            </div>
            <div class="content_second_content" >
                <div v-for="item in arr">
                    <div  class="qishu">{{item.issue}}期</div>
                    <div v-for="item2 in item.num" class="onece" ><div :class="[item2.isChecked ? 'checked':'']">{{item2.number}}</div></div>
                </div>
            </div>
            <div class="content_second_footer_num">
                <div class="flex">
                    <div class="qishu beat">出现次数</div>
                    <div v-for="item in rnum" class="onece beat">{{item}}</div>
                </div>
            </div>
            <div class="content_second_footer_avg">
                <div class="flex">
                    <div class="qishu beats">平均遗漏</div>
                    <div v-for="item in ravg" class="onece beats">{{item}}</div>
                </div>
            </div>
            <div class="content_second_footer_max">
                <div class="flex">
                    <div class="qishu beat">最大遗漏</div>
                    <div v-for="item in rmax" class="onece beat">{{item}}</div>
                </div>
            </div>
            <div class="content_second_footer_max_s">
                <div class="flex">
                    <div class="qishu beats">最大连出</div>
                    <div v-for="item in rmax_s" class="onece beats">{{item}}</div>
                </div>
            </div>
        </div>
        <div class="content_third" v-if="head[2].flag">
            <div class="content_second_title"  >
                <div>
                    <div class="qishu">期数</div>
                    <div v-for="item in blueBall" class="onece">{{item.value}}</div>
                </div>
            </div>
            <div class="content_second_content" >
                <div v-for="item in barr">
                    <div  class="qishu">{{item.issue}}期</div>
                    <div v-for="item2 in item.num" class="onece" ><div :class="[item2.isChecked ? 'checked':'']">{{item2.number}}</div></div>
                </div>
            </div>
            <div class="content_second_footer_num">
                <div class="flex">
                    <div class="qishu beat">出现次数</div>
                    <div v-for="item in bnum" class="onece beat">{{item}}</div>
                </div>
            </div>
            <div class="content_second_footer_avg">
                <div class="flex">
                    <div class="qishu beats">平均遗漏</div>
                    <div v-for="item in bavg" class="onece beats">{{item}}</div>
                </div>
            </div>
            <div class="content_second_footer_max">
                <div class="flex">
                    <div class="qishu beat">最大遗漏</div>
                    <div v-for="item in bmax" class="onece beat">{{item}}</div>
                </div>
            </div>
            <div class="content_second_footer_max_s">
                <div class="flex">
                    <div class="qishu beats">最大连出</div>
                    <div v-for="item in bmax_s" class="onece beats">{{item}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	data(){
        return{
            head:[
                {
                    name:"开奖信息",
                    flag:false
                },
                {
                    name:"红球走势",
                    flag:true
                },
                {
                    name:"蓝球走势",
                    flag:false
                },
              ],
            message:[],
            number:[],//红球号码
            blueBall:[],//蓝球号码
            arr:[],
            rnum:[],//出现次数
            ravg:[],//平均遗漏
            rmax:[],//最大遗漏
            rmax_s:[],//最大连出
	        searchBarFixed:true,
	        barr:[],
	        bnum:[],//出现次数
	        bavg:[],//平均遗漏
	        bmax:[],//最大遗漏
	        bmax_s:[],//最大连出
        }
    },
    mounted(){
        this.numbers(this.number);
        this.numberBs(this.blueBall);
        this.getTwo_message();
	    this.getTwo_R();
	    this.getTwo_B();
	    // window.addEventListener('scroll', this.handleScroll)
      },
    methods:{
	    handleScroll () {
		    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
		    // console.log(scrollTop)
		    var offsetTop = document.querySelector('#content_second_title').offsetTop
		    if (scrollTop > offsetTop) {
			    this.searchBarFixed = true
		    } else {
			    this.searchBarFixed = false
		    }
	    },
        choose(index){
            this.head.forEach(function (item) {
                item.flag=false
            });
            this.head[index].flag=true
        },
        numbers(arr){
            for (var i=1;i<=33;i++){
                var a=i;
                arr.push({
                    value:a
                })
            }
            // console.log(arr)
        },
        numberBs(arr){
	    	for (var i=1;i<=16;i++){
	    		var a=i;
	    		arr.push({
                    value:a
                })
            }
        },
        back(){
            this.$router.push({path: 'two_tone'});
        },
        getTwo_message(){
        	var self = this
            self.$axios.post('tow_tone_getMessage',{},res=>{
                res.data.forEach(function (item) {
	                self.message.push({
		                num:item.expect,
		                redBall:item.opencode,
                        blueBall:item.bno1
	                });
                });
                // console.log(self.message)
            })
        },
        getTwo_R(){
        	var self=this
            self.$axios.post('tow_tone_getR',{},(res)=>{
            	console.log(res)
                let data = JSON.parse(JSON.stringify(res.data))
	            data.red.forEach((item, index)=>{
		            item.num.forEach((item1, index1)=>{
			            if (item1 == 0){
				            item.num[index1] = {
				            	number: index1 < 9 ? '0'+ (index1 + 1) : (index1 + 1).toString(),
                                isChecked: true
                            }
                        }else {
				            item.num[index1] = {
					            number: item1,
					            isChecked: false
                            }
                        }
                    })
                });
            	console.log(data)
                self.arr=data.red
                self.rnum=data.cat.num
	            self.ravg=data.cat.avg
	            self.rmax=data.cat.max
	            self.rmax_s=data.cat.max_s
            })
        },
	    getTwo_B(){
		    var self=this
		    self.$axios.post('tow_tone_getB',{},(res)=>{
			    console.log(res,'sss')
			    let data = JSON.parse(JSON.stringify(res.data))
			    data.blue.forEach((item, index)=>{
				    item.num.forEach((item1, index1)=>{
					    if (item1 == 0){
						    item.num[index1] = {
							    number: index1 < 9 ? '0'+ (index1 + 1) : (index1 + 1).toString(),
							    isChecked: true
						    }
					    }else {
						    item.num[index1] = {
							    number: item1,
							    isChecked: false
						    }
					    }
				    })
			    });
			    // console.log(data)
			    self.barr=data.blue
			    self.bnum=data.cat.num
			    self.bavg=data.cat.avg
			    self.bmax=data.cat.max
			    self.bmax_s=data.cat.max_s
		    })
        }
    }
}
</script>

<style scoped>
    .checked{
        border-radius: 50%;
        background-color: red!important;
        color: #fff;
    }
    .isFixed{
        position: fixed;
        background-color: #fff;
    }
  body{
    position: relative;
  }
  .action{
    position: fixed;
    top: 0;
    display: flex;
    background-color: #FF4500;
    color: #fff;
    font-size: 18px;
    height: 3rem;
    /*justify-content: space-between;*/
    align-items: center;
    padding: 0 1rem;
    text-align: center;
    left: 0;
    right: 0;
  }
  .action img{
    display: block;
    width: 2rem;
    height: 2rem;
    line-height: 2rem;
  }
  .action div:nth-child(2){
    text-align: center;
    width: 100%;
  }
  .head{
    display: flex;
    border-bottom: 1px solid #ccc;
    position: fixed;
    top: 3rem;
    left: 0;
    right: 0;
  }
  .head>div{
    flex: 1;
    text-align: center;
    height: 2rem;
    line-height: 2rem;
    border-right: 1px solid #ccc;
    box-sizing: border-box;
      background-color: #fff;
  }
  .head>div:last-child{
    border-right: 0;
  }
  .on{
    color: #EE0000;
    border-bottom: 2px solid #ee0000;
  }
  .content_first{
    margin-top: 5rem;
  }
  .content_first_title{
    display: flex;
    border-bottom: 1px solid #ccc;
    color: #aaa;
  }
  .content_first_title>div:nth-child(odd){
    flex: 2;
    text-align: center;
  }
  .content_first_title>div:nth-child(even){
    flex: 6;
    text-align: center;
  }
  .content_first_title div{
    height: 1.7rem;
    line-height: 1.7rem;
    border-right: 1px solid #ccc;
    box-sizing: border-box;
  }
  .content_first_title>div:last-child{
    border: 0;
  }
  .content_first_content_item{
    display: flex;
    border-bottom: 1px solid #ccc;
  }
  .content_first_content_item:nth-child(odd){
    background-color: #DEDEDE;
  }
  .content_first_content_item>div{
    border-right: 1px solid #ccc;
    box-sizing: border-box;
  }
  .content_first_content_item>div:last-child{
    border: 0;
  }
  .content_first_content_item>div:nth-child(2){
    color: #ee0000;
  }
  .content_first_content_item>div:nth-child(3){
    color: #1C86EE;
  }
  .content_first_content_item>div:nth-child(odd){
    flex: 2;
    text-align: center;
    height: 1.7rem;
    line-height: 1.7rem;
  }
  .content_first_content_item>div:nth-child(even){
    flex: 6;
    text-align: center;
    display: flex;
    justify-content: center;
    height: 1.7rem;
    line-height: 1.7rem;
  }
  .content_first_content_item>div:nth-child(2) div:nth-child(even){
    margin: 0 0.5rem;
  }

  .content_second{
      margin-top: 5rem;
      overflow: auto;
  }
    .content_second_title>div{
        display: flex;
        align-items: center;
    }
    .content_second_title>div div{
        text-align: center;
        border-right: 1px solid #ccc;
        width: 1.75rem;
        height: 1.75rem;
        line-height: 1.75rem;
        border-bottom: 1px solid #ccc;

    }
    .qishu{
        flex-shrink: 0;

        width: 5rem!important;
    }
    .onece{
        flex-shrink: 0;
    }
    .content_second_content>div{
        display: flex;
    }
  .content_second_content>div:nth-child(odd) div{
      background-color: #DEDEDE;
  }
  .content_second_content>div div{
      text-align: center;
      border-right: 1px solid #ccc;
      width: 1.75rem;
      height: 1.75rem;
      line-height: 1.75rem;
      border-bottom: 1px solid #ccc;
  }
    .flex{
        display: flex;
    }
    .beat{
        text-align: center;
        border-right: 1px solid #ccc;
        width: 1.75rem;
        height: 1.75rem;
        line-height: 1.75rem;
        border-bottom: 1px solid #ccc;
        background-color: #dedede;
    }
    .beats{
        text-align: center;
        border-right: 1px solid #ccc;
        width: 1.75rem;
        height: 1.75rem;
        line-height: 1.75rem;
        border-bottom: 1px solid #ccc;
    }
    .content_second_footer_num>div div{
        color: blue;
    }
    .content_second_footer_avg>div div{
        color: #00CD00;
    }
    .content_second_footer_max>div div{
        color: #8B008B;
    }
    .content_second_footer_max_s>div div{
        color: #CD8500;
    }
    .content_third{
        margin-top: 5rem;
        overflow: auto;
    }
</style>
