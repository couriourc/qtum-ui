# Select 选择器

当选项过多时，使用下拉菜单展示并选择内容。

## 基本用法

适用广泛的基础单选

::: demo 适用广泛的基础单选

```html
<template>
 <q-button></q-button>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: ' 选项 1',
          label: ' 黄金糕 '
        }, {
          value: ' 选项 2',
          label: ' 双皮奶 '
        }],
        value: ''
      }
    }
  }
</script>
```(注意：需要去掉前面的‘\’！！！)
:::



