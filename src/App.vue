<template>
  <header class="w-full relative flex justify-between py-2 bg-gradient-to-r from-pl-blue-dark to-pl-blue">
    <div class="flex gap-2">
      <img class="bg-cover object-center mx-6 lg:mx-12" src="./assets/images/logo-helium-white2.png" width="120"
        alt="brand logo" loading="lazy" />
      <div class="hidden lg:flex lg:gap-2">
        <Dropdown :label="data.workspaceName">
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
    <div className="group relative font-light pr-6">
      <button className="px-2 py-1 font-semibold inline-flex justify-between bg-white rounded">
        P
        <span className="ml-2">
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
  </header>
  <div class="min-h-screen flex bg-slate-100">
    <Sidebar />
    <main class="flex-1 p-3 md:p-4 lg:p-6 w-full">
      <div class="min-h-screen w-full bg-white rounded-sm p-4 overflow-x-auto">
        <h2 class="text-lg">Intelligence Gathering Summary</h2>
        <hr class="my-2" />
        <div class="my-4">
          <h3 class="font-semibold text-pl-blue mb-4">Scan information:</h3>
          <table class="mb-6">
            <tbody>
              <tr>
                <td class="min-w-[150px] py-1">Task Name</td>
                <td class="min-w-[20px]">:</td>
                <td>{{ data.scanInformation?.taskName }}</td>
              </tr>
              <tr>
                <td class="min-w-[150px] py-1">Taget</td>
                <td class="min-w-[20px]">:</td>
                <td>{{ data.scanInformation?.target }}</td>
              </tr>
              <tr>
                <td class="min-w-[150px] py-1">Start Time</td>
                <td class="min-w-[20px]">:</td>
                <td>{{ data.scanInformation?.startTime }}</td>
              </tr>
              <tr>
                <td class="min-w-[150px] py-1">Status</td>
                <td class="min-w-[20px]">:</td>
                <td class="text-pl-blue font-semibold">
                  {{
                    data.scanInformation?.status === "SUCCESS"
                      ? "Completed"
                      : data.scanInformation.status
                  }}
                </td>
              </tr>
            </tbody>
          </table>
          <div class="w-full py-1 rounded-sm text-center bg-pl-blue text-white font-semibold">
            {{
              data.scanInformation?.status === "SUCCESS"
                ? "Completed"
                : data.scanInformation.status
            }}
          </div>
          <h3 class="font-semibold text-pl-blue mb-4 mt-6">Scan Result</h3>
          <div class="flex flex-row flex-wrap mb-2">
            <button v-for="(item, index) in tabs" :key="index" @click="selected = item.name"
              :class="{ 'tab-active': selected == item.name }" class="py-3 px-5 flex justify-center items-center gap-2">
              <i class="fa-solid" :class="item.icon"></i>
              {{ item.name }}
            </button>
          </div>
          <component :is="selected"></component>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Dropdown from "./components/Dropdown.vue";
import DropdownItem from "./components/DropdownItem.vue";
import Sidebar from "./components/Sidebar.vue";

import Summary from "./views/Summary.vue";
import Correlation from "./views/Correlation.vue";
import Browse from "./views/Browse.vue";

import DataJSON from "./temp/data.json";

const { data } = DataJSON;

export default {
  components: {
    Dropdown,
    DropdownItem,
    Sidebar,
    Summary,
    Correlation,
    Browse,
  },
  data() {
    return {
      tabs: [
        { name: "Summary", icon: "fa-eye" },
        { name: "Correlation", icon: "fa-info" },
        { name: "Browse", icon: "fa-list" },
      ],
      selected: "Summary",
      data: {
        workspaceName: "",
        scanInformation: {},
        summary: {
          scanStatus: {},
          correlations: {},
          percentages: [],
        },
        correlation: [],
      },
    };
  },
  created() {
    this.data.workspaceName = data.workspace.name;
    this.data.scanInformation = {
      taskName: data.project_name,
      target: data.target,
      startTime: data.result.obj.status.started_at,
      status: data.state,
    };
    this.data.summary.scanStatus = {
      total: data.result.obj.status.found_total,
      unique: data.result.obj.status?.unique || 0,
      status: data.result.obj.status.state,
      errors: data.result.obj.status?.error || 0,
    };
    this.data.summary.correlations = data.result.obj.status.severity;
    this.data.summary.percentages = data.result.obj.summary.map(
      (item, index) => {
        return {
          id: index,
          name: item.name,
          totalElement: item.total_element,
        };
      }
    );
    this.data.correlation = data.result.obj.correlation;
  },
};
</script>
