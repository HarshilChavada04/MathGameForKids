import{c as a,Q as s}from"./confetti.module.7890298a.js";import{Q as u}from"./QBtn.000ce7e1.js";import{Q as r}from"./QPage.e7122409.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";import{C as m,E as p,F as f,G as h,K as e,Y as o,L as i}from"./index.66a2f53f.js";import"./render.fb9d86c6.js";const c=m({name:"MultiplicationPage",data(){return{intRandomNum1:0,intRandomNum2:0,intResult:null}},methods:{generateRandomNumber(){this.intRandomNum1=Math.floor(Math.random()*10)+1,this.intRandomNum2=Math.floor(Math.random()*10)+1},handleSubmit(){if(this.intRandomNum1*this.intRandomNum2==this.intResult){const t=this.$refs.clapSound;t.play(),setTimeout(()=>{t.pause(),t.currentTime=0},2e3),a({particleCount:100,spread:70,origin:{y:.6}}),this.intResult=null,this.generateRandomNumber()}else this.store.decrementScore(1),this.intResult=null,this.$refs.wrongSound.play()}},beforeMount(){this.generateRandomNumber()}}),R={class:"row justify-center"},g={class:"flex flex-center"},v={ref:"clapSound",src:"/MathGameForKids/applauseSound.mp3"},N={ref:"wrongSound",src:"/MathGameForKids/wrongAnswer.mpeg"};function _(t,n,b,M,S,y){return p(),f(r,null,{default:h(()=>[n[4]||(n[4]=e("div",{class:"flex flex-center"},[e("span",null,"Multiplication Page")],-1)),e("div",R,[e("div",null,o(t.intRandomNum1),1),n[2]||(n[2]=e("div",null,"*",-1)),e("div",null,o(t.intRandomNum2),1),n[3]||(n[3]=e("div",null,"=",-1)),e("div",null,[i(s,{flat:"",dense:"",outlined:"",modelValue:t.intResult,"onUpdate:modelValue":n[0]||(n[0]=l=>t.intResult=l),type:"number",placeholder:"Enter result"},null,8,["modelValue"])])]),e("div",g,[i(u,{label:"Submit",disable:t.intResult==null,class:"bg-primary text-white q-mt-md",dense:"",onClick:n[1]||(n[1]=l=>t.handleSubmit())},null,8,["disable"]),e("audio",v,null,512),e("audio",N,null,512)])]),_:1})}var x=d(c,[["render",_],["__scopeId","data-v-4934f823"]]);export{x as default};