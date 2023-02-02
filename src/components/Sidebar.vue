<template>
  <aside class="flex-none bg-white px-5 py-3">
    <ul>
      <li v-for="(item, index) in links" :key="index" :class="{
        'min-w-[180px]': isSidebarActive,
        'min-w-min': !isSidebarActive,
      }" class="flex flex-row gap-8 py-2 items-center text-pl-blue-dark">
        <i class="text-2xl" :class="item.icon"></i>
        <span :class="{ hidden: !isSidebarActive }">{{ item.title }}</span>
      </li>
    </ul>
    <hr class="border-1 my-5 border-slate-300" />
    <div class="flex justify-center items-center">
      <button @click="toggleSidebar" type="button">
        <i class="fa-solid text-3xl text-pl-blue" :class="{
          'fa-circle-chevron-left': isSidebarActive,
          'fa-circle-chevron-right': !isSidebarActive,
        }"></i>
      </button>
    </div>
  </aside>
</template>

<script>
import { ref } from "vue";

export default {
  data() {
    return {
      isSidebarActive: ref(true),
      links: [
        {
          id: 1,
          icon: "fa-solid fa-table-columns",
          title: "Dashboard",
          link: "",
        },
        {
          id: 2,
          icon: "fa-solid fa-crosshairs",
          title: "Targets",
          link: "",
        },
        {
          id: 3,
          icon: "fa-solid fa-fingerprint",
          title: "Scans",
          link: "",
        },
        {
          id: 4,
          icon: "fa-solid fa-users-viewfinder",
          title: "Attack Surface",
          link: "",
        },
        {
          id: 5,
          icon: "fa-solid fa-file-signature",
          title: "Reports",
          link: "",
        },
        {
          id: 6,
          icon: "fa-solid fa-gear",
          title: "Settings",
          link: "",
        },
      ],
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarActive = !this.isSidebarActive;
    },
  },
};
</script>
