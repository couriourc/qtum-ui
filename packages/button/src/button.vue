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
  name: 'q-button',
  props: {
    type: {
      type: String,
      default: () => '',
    },
    size: {
      type: String,
      default: () => '',
    },
    isBlock: {
      type: Boolean,
      default: () => false,
    },
    disabled: {
      type: Boolean,
      default: () => false,
    },
    circle: {
      type: Boolean,
      default: () => false,
    },
  },
  methods: {},
};
</script>
<style lang="scss">
.u-button {

}

</style>
