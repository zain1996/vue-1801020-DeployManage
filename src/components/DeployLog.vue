<template>
  <div class="view">
      <div class="title">服务名称:{{name}}</div>
      <ul>
        <li v-for="(item, index) in result">
          部署地址:{{item.address}}
          <i v-bind:class="item.class_"></i>
        </li>
      </ul>
  </div>
</template>
<style>
  *{
    padding: 0;
    margin:0;
  }
  i{
    margin-left:10px; 
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
      name: '',
      title:'',
      result:[],
      classObject: []
    }
  },
  mounted(){//事件执行
    let getValue = JSON.parse(this.$route.query.getVal);
    
    this.name = getValue.name
    
    getValue.selected.forEach((val)=>{
      this.result.push({
        address: val,
        class_: "el-icon-caret-right"
      });

    })

    this.deployLoop(this.result)
  },
  methods:{
    async deployLoop(items) {

      for(let item of items) {
        item.class_ = "el-icon-loading"
        try {
          let response = await this.$http.get('/apis/v1/builder/deploy',{
            params: {
              name: this.name,
              address:item.address
            }})
          var data = response.data;
          if(data.code == 0){
            item.class_ = "el-icon-check"
          }else{
            item.class_ = "el-icon-close"
          }
        }catch(e) {
          item.class_ = "el-icon-close"
          console.log(e);
        }

      }
    },
  }
}
</script>