<template>
    <div>
        <el-table :data="tableData" height="550" border style="width: 100%">
          <el-table-column
            :prop="item.prop"
            :label="item.label"
            v-for="(item,index) in tablecol"
            :key="index"
          >
            <template slot-scope="scope">
              <div v-></div>
            </template>
          </el-table-column>
        </el-table>
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="pageSize"
            :current-page="current"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
          ></el-pagination>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
