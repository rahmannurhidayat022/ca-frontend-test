<template>
  <div :class="color" class="w-[100px] h-[60px] overflow-hidden flex flex-col gap-1 justify-center items-center">
    <span class="font-semibold">{{ title }}</span>
    <p>{{ value }}</p>
  </div>
</template>

<script>
export default {
  props: ["title", "value", "color"],
};
</script>
