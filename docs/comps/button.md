# Button 按钮

一堆很不错的按钮
## 基本用法



::: demo 按钮

```html

<template>
	<q-button v-for="option in options" :key="option.type"
        :type="option.type"
    >Button</q-button>
</template>

<script>
	export default {
		data() {
			return {
				options: [
					{
						type: "primary",
						isBlock:false,
						circle: false,
						size: "small"
					},
                    {
					    type: "danger",
                        isBlock:false,
                        circle: false,
                        size: "big"
                    },
					{
						type: "gradient",
						isBlock:false,
						circle: false,
						size: "big"
					} 
				],
			};
		},
	};
</script>
```



