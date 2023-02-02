<template>
  <div className="group relative font-light">
    <button className="min-w-[250px] px-2 py-1 inline-flex justify-between bg-white rounded">
      {{ label }}{{ " " }}
      <span className="ml-1">
        <i class="fa-sharp fa-solid fa-caret-down"></i>
      </span>
    </button>
    <nav tabndex="0"
      className="z-10 bg-white invisible shadow-lg rounded w-full absolute left-0 top-full transition-all opacity-0 group-hover:visible group-hover:opacity-100 group-hover:translate-y-1">
      <ul className="py-1 px-2">
        <slot />
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
  },
};
</script>
