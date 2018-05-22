<template>
    <div id="app">
    <router-view/>
        <div class="table" v-if="$route.meta.nav">
            <div v-for="(item,index) in tab"  @click="choose(index)">
                <img :src="[current == index ? item.srcs : item.src]" alt="" class="img">
                <div :class="[ current == index ? on : '' ]">{{item.name}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
    	return{
		    current: 0,
		    on: 'on',
		    tab:[
			    {
				    name:"彩票",
				    checked:false,
				    src:"../static/img/caipiao.png",
				    srcs:"../static/img/caipiaos.png",
			    },
			    {
				    name:"排行榜",
				    checked:false,
				    src:"../static/img/paihang.png",
				    srcs:"../static/img/paihangs.png"
			    },
			    {
				    name:"我的",
				    checked:false,
				    src:"../static/img/mine.png",
				    srcs:"../static/img/mines.png",
			    },
		    ]
        }
    },
    mounted(){
	    this.choose(0);
    },
    methods:{
	    choose(index){
		    this.current = index
		    console.log(index)
		    if (index==0) {
			    this.$router.push({path: '/'})
		    }else if (index==1) {
			    this.$router.push({path: 'rank'})
		    }else if (index==2) {
			    this.$router.push({path: 'mine'})
		    }
	    }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #FAFAFA;
}
.on{
  color:#e00000;
}
.img{
  width: 2rem;
  height: 2rem;
  display: inline;
}
#app{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.table{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  height: 4rem;
  border-top: 1px solid #eee;
  justify-content: center;
  align-items: center;
  background-color: #fff;
    box-shadow: 0 2px 6px 0 rgba(0,0,0,0.36);
}
.table>div{
  flex: 1;
  text-align: center;
  color: #8a8a8a;
  /*height: 5rem;
  line-height: 7rem;
  box-sizing: border-box;*/
}
</style>
