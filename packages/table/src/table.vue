<template>
  <div class="u-table">
    <div class="u-table-main">
      <el-table
          :data="tableData"
          header-row-class-name="u-table-header"
          row-class-name="u-table-row"
          @selection-change="handleSelectionChange"
          @row-click="handleRowClick"
      >
        <el-table-column width="55" v-if="isRadio">
          <template slot-scope="scope">
            <el-radio v-model="tableRadio"
                      :label="scope.row[radioVal] "
                      @change.native="changeRadio(scope.row)"></el-radio>
          </template>
        </el-table-column>
        <el-table-column type="selection" width="80" v-if="isSelect"> </el-table-column>
        <el-table-column type="index" width="100" label="序号" v-if="isIndex"></el-table-column>
        <el-table-column
            :prop="item.prop"
            :label="item.label"
            :width="item.width"
            :sortable="item.sortable"
            v-for="(item, index) in tableHeader"
            :key="index"
        >
          <template slot-scope="scope">
            <slot
                :name="item.prop ? item.prop : 'default'"
                :row="scope.row"
                :value="scope.row[item.prop]"
                v-if="item.isSlot"
            ></slot>
            <div class="u-table-cell" v-else>{{ scope.row[item.prop] }}</div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="u-pages flex-all" v-show="!noPage">
      <el-pagination
          layout="prev, pager, next, sizes, jumper"
          background
          :page-size="pageSize"
          :current-page.sync="page"
          :page-sizes="pageSizes"
          :total="total"
          @size-change="changeSize"
          @current-change="changePage"
      >
      </el-pagination>
      <div class="u-pages-total">共<span>{{total}}</span>条数据</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: this.currentPage,
      tableRadio: ""
    };
  },
  props: {
    tableData: Array,
    tableHeader: Array,
    pageSizes: {
      default: () => [10, 20, 30, 50]
    },
    pageSize: {
      default: 10
    },
    total: Number,
    isSelect: Boolean,
    noPage: Boolean,
    isIndex: Boolean,
    currentPage: Number,
    isRadio: Boolean,
    radioVal: {
      default: "id"
    }
  },
  watch: {
    currentPage(newVal, oldVal) {
      this.page = newVal;
    },
  },
  methods: {
    changePage(val) {
      this.$emit("changePage", val);
    },
    changeSize(val) {
      this.$emit("changeSize", val);
    },
    handleSelectionChange(val) {
      this.$emit("changeSelection", val);
    },
    handleRowClick(row) {
      this.$emit("rowClick", row);
    },
    changeRadio(row) {
      this.$emit("changeRadio", row);
    }
  },
};
</script>

<style lang="less" scoped>
.u-table {
  width: 100%;
  height: 100%;
  ::v-deep .u-table-main {
    // height: calc(100% - 56px);
    margin-bottom: 24px;
    // overflow: auto;
    .el-table {
      background-color: transparent;
    }
    .el-table::before {
      display: none;
    }
    .el-table__header-wrapper {
      margin-bottom: 8px;
    }
    .el-table__body-wrapper {
      border: none;
    }

    .el-table tr {
      background-color: transparent;
    }

    .el-checkbox__inner {
      background: transparent;
      border-color: #999;
    }
    .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
      background-color: #2D5CF6;
      border-color: transparent;
    }
    tr.u-table-header {
      background-color: #ECF0FF;
      border-radius: 24px;
      th.el-table__cell {
        height: 56px;
        padding: 0 24px;
        font-weight: bold;
        color: #000000;
        background-color: transparent;
        border-bottom: none;
        &:first-child {
          border-radius: 24px 0 0 24px;
        }
        &:nth-last-of-type(2) {
          border-radius: 0 24px 24px 0;
        }
        .cell {
          padding: 0;
        }
      }
    }
    .el-table .cell {
      text-overflow: clip;
    }
    .u-table-row .el-table__cell {
      padding: 0;
      padding-bottom: 8px;
      color: #333;
      border: none;
      background-color: transparent;
      .cell {
        height: 56px;
        padding: 0 24px;
        line-height: 56px;
        background-color: #F4F4F4;
      }
      &:first-child {
        .cell {
          border-radius: 24px 0 0 24px;
        }
      }
      &:last-child {
        .cell {
          border-radius: 0 24px 24px 0;
        }
      }
    }
    .u-table-cell {
      max-width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .el-radio__label {
      font-size: 0;
    }
    .el-radio__inner {
      width: 16px;
      height: 16px;
      background-color: transparent;
      border: 1px solid #999;
      &:after {
        content: "";
        position: absolute;
        top: 1px;
        left: 5px;
        width: 3px;
        height: 7px;
        border: 1px solid #fff;
        border-left: 0;
        border-top: 0;
        border-radius: 0;
        background: transparent;
        transform: rotate(45deg) scaleY(0);
      }
    }
    .el-radio__input.is-checked .el-radio__inner {
      background: #2D5CF6;
      border-color: transparent;
      &::after {
        transform: rotate(45deg) scaleY(1);
      }
    }
  }

  .u-pages-total {
    margin-left: 16px;
    span {
      color: #2D5CF6;
    }
  }
}
</style>
