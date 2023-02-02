<script setup>
import { RouterLink, RouterView } from "vue-router";
import Dropdown from "./components/Dropdown.vue";
import DropdownItem from "./components/DropdownItem.vue";
import Sidebar from "./components/Sidebar.vue";
</script>

<template>
  <header class="relative flex justify-between py-2 bg-gradient-to-r from-pl-blue-dark to-pl-blue">
    <div class="flex gap-2">
      <img class="bg-cover object-center mx-12" src="./assets/images/logo-helium-white2.png" width="120"
        alt="brand logo" loading="lazy" />
      <div class="hidden lg:flex lg:gap-2">
        <Dropdown label="My Workspace">
          <DropdownItem>Item 1</DropdownItem>
          <DropdownItem>Item 2</DropdownItem>
          <DropdownItem>Item 3</DropdownItem>
        </Dropdown>
        <Dropdown label="VAPT Tools">
          <DropdownItem>Item 1</DropdownItem>
          <DropdownItem>Item 2</DropdownItem>
          <DropdownItem>Item 3</DropdownItem>
        </Dropdown>
      </div>
    </div>
    <div>
      <div className="group relative font-light pr-6">
        <button className="px-2 py-1 font-semibold inline-flex justify-between bg-white rounded">
          P{{ " " }}
          <span className="ml-1">
            <i class="fa-sharp fa-solid fa-caret-down"></i>
          </span>
        </button>
        <nav tabndex="0"
          className="z-10 bg-white invisible shadow-lg rounded min-w-min absolute right-0 top-full transition-all opacity-0 group-hover:visible group-hover:opacity-100 group-hover:translate-y-1">
          <ul className="py-1 px-2">
            <DropdownItem>Keluar</DropdownItem>
          </ul>
        </nav>
      </div>
    </div>
  </header>
  <div class="min-h-screen flex bg-slate-100">
    <Sidebar />
    <main class="flex-1">content</main>
  </div>
</template>
