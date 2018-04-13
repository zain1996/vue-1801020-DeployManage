<template>
  <div>
      <div class="title">服务名称:{{name}}</div>
      <div class="title">
        {{title}}
        <i v-bind:class="classObject"></i>
      </div>
      <ul>
        <li v-for="(item, index) in result">
          {{index}}.{{item}}
        </li>
      </ul>
  </div>
</template>
<style>
  *{
    padding: 0;
    margin:0;
  }
  .title{
    margin-bottom: 10px;
  }

  body{
    margin: 15px;
  }
  li{
    padding: 5px;
    list-style-type:none;
    border-left:1px solid #ccc;
    border-bottom:1px solid #ccc;
  }

  ul{
    border-top:1px solid #ccc;
    border-right:1px solid #ccc;
  }

</style>
<script>
export default {
  name: 'ApiList',
  data(){
    return {
      title:'编译中',
      result:[],
      classObject: 'el-icon-loading',
      name: ''
    }
  },
  mounted(){//事件执行
    let getValue = JSON.parse(this.$route.query.getVal);

    this.name = getValue.name

    this.build({
      name:getValue.name
    });
  },
  methods:{
    build(val){//编译事件
      this.$http.get('/apis/v1/builder/build',
      {
        params:val
      })
      .then( (response) => {
          var data = response.data;
          if(data.code == 0){
            this.result = data.data.logs
            this.i=false;
            this.title = '编译完成';
            this.classObject = 'el-icon-check'; 
          }
      })
      .catch( (error) => {
        console.log(error);
      });
    }
  }
}
</script>