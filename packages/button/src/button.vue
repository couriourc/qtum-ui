<template>
  <button
      type="button"
      :disabled="disabled"
      :class="[
            'u-button',
            type,
            size,
            {
                isBlock,
                circle,
            },
        ]"
      @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: String,
    size: String,
    isBlock: Boolean,
    disabled: Boolean,
    circle: Boolean,
  },
};
</script>

<style lang="less" scoped>
.u-button {
  height: 40px;
  padding: 0 24px;
  font-size: 14px;
  color: #fff;
  background: #2d5cf6;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background-color: #75a7fd;
  }
  &:active {
    color: #fff;
    background-color: #4486f8;
  }
  & + .u-button {
    margin-left: 24px;
  }

  // 大小
  &.big {
    height: 60px;
    font-size: 20px;
    border-radius: 30px;
  }

  &.small {
    height: 32px;
    border-radius: 16px;
    & + &.small {
      margin-left: 16px;
    }
  }

  // type
  &.gradient {
    background: linear-gradient(90deg, #67b5fd 0%, #4b6ffe 100%);
  }
  &.danger {
    background-color: #f24e40;
    &:hover {
      background: rgb(234, 65, 65);
    }
    &:active {
      background: rgb(209, 40, 40);
    }
  }
  &.noraml {
    color: #999;
    background-color: #fff;
    border: 1px solid #e6e6e6;
    &:hover {
      background-color: #f2f6fe;
      border-color: #75a7fd;
      color: #75a7fd;
    }
    &:active {
      color: #fff;
      background-color: rgb(58, 114, 211);
    }
  }
  &.primary-text {
    color: #2d5cf6;
    background: transparent;
    border: 1px solid #2d5cf6;
    &:hover {
      background-color: #f2f6fe;
      border-color: #75a7fd;
      color: #75a7fd;
    }
    &:active {
      color: #fff;
      background-color: #2d5cf6;
    }
  }
  &.circle {
    width: 40px;
    padding: 0;
    border-radius: 50%;
    text-align: center;
  }

  &.isBlock {
    display: block;
    width: 100%;
  }

  // 是否禁用
  &[disabled] {
    color: #fff;
    background-color: #c0c0c0;
    border-color: #c0c0c0;
    cursor: no-drop;
  }

  &.text {
    height: auto;
    padding: 0;
    color: #2d5cf6;
    background: transparent;
  }
}
</style>
