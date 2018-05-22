import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import double from '@/components/double'
import choose from '@/components/choose'
import trend from '@/components/trend'
import two_tone from '@/components/two_tone'
import trend_choose from '@/components/trend_choose'
import rank from '@/components/rank'
import mine from '@/components/mine'
import record_choose from '@/components/record_choose'
import record_two_tone from '@/components/record_two_tone'
import record_select from '@/components/record_select'
import activity_choose from '@/components/activity_choose'
import activity_two_tone from '@/components/activity_two_tone'
import question from '@/components/question'
import rule_select from '@/components/rule_select'
import rule_choose from '@/components/rule_choose'
import rule_two_tone from '@/components/rule_two_tone'
import feedback from '@/components/feedback'
import about from '@/components/about'
import pay from '@/components/pay'
import withdraw from '@/components/withdraw'
import link from '@/components/link'
Vue.use(Router)

export default new Router({
  routes: [
      {
        path:'/',
        name:"double",
        component:double,
	    meta: {
        	nav: true
	    }
      },
      {
        path:'/choose',
        name:"choose",
        component:choose
      },
      {
        path:'/trend',
        name:"trend",
        component:trend
      },
      {
        path:'/two_tone',
        name:"two_tone",
        component:two_tone
      },
	  {
		  path:'/trend_choose',
		  name:"trend_choose",
		  component:trend_choose
	  },
	  {
		  path:'/activity_choose',
		  name:"activity_choose",
		  component:activity_choose
	  },
	  {
	  	  path:'/activity_two_tone',
		  name:"activity_two_tone",
		  component:activity_two_tone
	  },
	  {
		  path:'/rank',
		  name:"rank",
		  component:rank,
		  meta: {
			  nav: true
		  }
	  },
	  {
		  path:'/mine',
		  name:"mine",
		  component:mine,
		  meta: {
			  nav: true
		  }
	  },
	  {
		  path:'/record_choose',
		  name:"record_choose",
		  component:record_choose
	  },
	  {
		  path:'/record_two_tone',
		  name:"record_two_tone",
		  component:record_two_tone
	  },
	  {
		  path:'/record_select',
		  name:"record_select",
		  component:record_select
	  },
	  {
		  path:'/rule_select',
		  name:"rule_select",
		  component:rule_select
	  },
	  {
		  path:'/rule_choose',
		  name:"rule_choose",
		  component:rule_choose
	  },
	  {
		  path:'/rule_two_tone',
		  name:"rule_two_tone",
		  component:rule_two_tone
	  },
	  {
		  path:'/question',
		  name:"question",
		  component:question
	  },
	  {
		  path:'/feedback',
		  name:"feedback",
		  component:feedback
	  },
	  {
		  path:'/about',
		  name:"about",
		  component:about
	  },
	  {
		  path:'/pay',
		  name:"pay",
		  component:pay
	  },
	  {
	  	  path:'/withdraw',
		  name:"withdraw",
		  component:withdraw
	  },
    {
      path:'/link',
      name:"link",
      component:link
    }
  ]
})
