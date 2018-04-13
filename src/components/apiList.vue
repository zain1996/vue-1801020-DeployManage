<template>
  <div>
  {{title}}
    <el-table
      :data="tableData"
      border
      style="width: 100%">
        <el-table-column
          label="序号"
          width="180">
          <template scope="scope">
            {{ scope.$index + 1 }}
          </template>
        </el-table-column>
        <el-table-column
          label="名称"
          width="180">
          <template scope="scope">
              <div slot="reference" class="name-wrapper">
                <el-tag>{{ scope.row.name }} </el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="选择">
          <template scope="scope">
          <el-select v-model="scope.row.selected" multiple placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template scope="scope">
            <el-button
              size="small"
              @click="btnBuild(scope.row)">编译</el-button>
            <el-button
              size="small"
              type="danger"
              @click="btnDeploy(scope.row)">部署</el-button>
          </template>
        </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'ApiList',
  data() {
    return {
      tableData: [],
      title:'',
      options: [], 
      deposit:[]
    }
  },
  created(){
     this.request();
  },
  methods:{
    request(){
      this.$http.get('/apis/v1/builder/project')
      .then( (response) => {

        let data = response.data.data;

        let address = ['10.5.1.162','10.5.1.165','10.5.1.167'];

        let table = [];

        data.services.forEach( (service) => {
          if(service.name==='builder'){
            return
          }

          table.push({
            name : service.name,
            selected : address
          })

        })

        this.tableData = table;

        this.title = data.project;

        this.options = [
          {
            value: '10.5.1.162',
            label: '162'
          }, {
            value: '10.5.1.165',
            label: '165'
          }, {
            value: '10.5.1.167',
            label: '167'
          }, {
            value: '10.5.1.211',
            label: '211'
          }, {
            value: '10.5.1.185',
            label: '185'
          }
        ]
      })
      .catch( (error) => {
        console.log(error);
      });
    },
    btnBuild(row){//事件:执行编译
      let url = this.$route.path + '#BuildLog?getVal=' + JSON.stringify(row);
      window.open(url);
    },
    btnDeploy(row){//事件:执行部署
      let url = this.$route.path + '#DeployLog?getVal=' + JSON.stringify(row);
      window.open(url);
    }
  }
}

</script>
