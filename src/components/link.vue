<template>
    <div id="links">
        <div class="content">
            <div class="head" :style="{backgroundImage: 'url('+img+')'}">
            </div>
            <div class="links_title">{{title}}</div>
            <div class="data" v-html="data"></div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
	            data:"",
                img:"",
                title:""
            }
        },
        mounted(){
            this.getData();

        },
        methods:{
	        getData(){
		        let self = this;
		        var id=this.$route.query.id;
		        self.$axios.get('getlinkData', {id:id}, (res) => {
			        console.log(res);
			        if (res.ret) {
				        self.data = res.data.content;
				        self.img = res.data.img;
				        self.title = res.data.name;
			        }
		        })
	        },
        }
    }
</script>

<style >
    #links .content{


        color: #333;
    }
    #links .head{
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        height: 200px;
    }
    #links .data{
        padding: 0.5rem 1rem;
    }
    #links .data img{
        display: block;
        margin: 0 auto;
        max-width: 100%;
    }
    #links .links_title{
        text-align: center;
        font-size: 26px;
        margin: 1rem 0;
    }
</style>
