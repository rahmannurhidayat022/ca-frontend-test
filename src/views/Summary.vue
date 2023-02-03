<template>
  <div class="w-full flex flex-col lg:flex-row gap-4">
    <div class="w-full">
      <div class="flex gap-2 items-center bg-blue-50 p-2 text-sm text-gray-700">
        <i class="fa-solid fa-eye"></i>
        Scan Status
      </div>
      <div class="py-4 flex gap-2 items-center justify-center">
        <BadgeOutline title="Total" :value="summaryData.scanStatus.total" color="border-pl-blue text-pl-blue" />
        <BadgeOutline title="Unique" :value="summaryData.scanStatus.unique"
          color="border-pl-blue-dark text-pl-blue-dark" />
        <BadgeOutline title="Status" :value="summaryData.scanStatus.status" color="border-cyan-400 text-cyan-400" />
        <BadgeOutline title="Errors" :value="summaryData.scanStatus.errors" color="border-red-400 text-red-400" />
      </div>
    </div>
    <div class="w-full">
      <div class="flex gap-2 items-center bg-blue-50 p-2 text-sm text-gray-700">
        <i class="fa-solid fa-info"></i>
        Correlation
      </div>
      <div class="py-4 flex gap-2 items-center justify-center">
        <BadgeFill title="High" :value="summaryData.correlations.HIGH" color="bg-red-500 text-white" />
        <BadgeFill title="Medium" :value="summaryData.correlations.MEDIUM" color="bg-yellow-500 text-white" />
        <BadgeFill title="Low" :value="summaryData.correlations.LOW" color="bg-blue-500 text-white" />
        <BadgeFill title="Info" :value="summaryData.correlations.INFO" color="bg-green-500 text-white" />
      </div>
    </div>
  </div>
  <div class="w-full">
    <div class="flex gap-2 items-center bg-blue-50 p-2 text-sm text-gray-700">
      <i class="fa-solid fa-chart-simple"></i>
      Percentage of Unique Elements
    </div>
    <div></div>
  </div>
</template>

<script>
import BadgeOutline from "../components/BadgeOutline.vue";
import BadgeFill from "../components/BadgeFill.vue";
import DataJSON from "../temp/data.json";

const { data } = DataJSON;
export default {
  components: {
    BadgeOutline,
    BadgeFill,
  },
  data() {
    return {
      summaryData: {},
    };
  },
  created() {
    this.summaryData.scanStatus = {
      total: data.result.obj.status.found_total,
      unique: data.result.obj.status?.unique || 0,
      status: data.result.obj.status.state,
      errors: data.result.obj.status?.error || 0,
    };
    this.summaryData.correlations = data.result.obj.status.severity;
    this.summaryData.percentages = data.result.obj.summary.map(
      (item, index) => {
        return {
          id: index,
          name: item.name,
          totalElement: item.total_element,
        };
      }
    );
  },
  mounted() {
    console.log(this.summaryData);
  },
};
</script>
