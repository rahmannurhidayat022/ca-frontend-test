<template>
  <div class="w-full">
    <div class="w-full mt-4 overflow-hidden">
      <DataTable :data="data" :columns="columns" class="display" style="width: '100%'"></DataTable>
    </div>
  </div>
</template>

<script>
import DataTable from "datatables.net-vue3";
import Select from "datatables.net-select";
import DataJSON from "../temp/data.json";

DataTable.use(Select);

const { data } = DataJSON;
export default {
  components: {
    DataTable,
  },
  data() {
    return {
      data: [],
      columns: [
        {
          title: "Type",
          data: "name",
          render: function (data, _type, row, _meta) {
            /**
              clickable not work
            **/
            return `<router-link :to="{ name: "browse.detail", params: { id: ${row.id} }}" class="text-pl-blue cursor-pointer">${data}</router-link>`;
          },
        },
        { title: "Unique Data Elements", data: "unique_element" },
        { title: "Total Element", data: "total_element" },
        { title: "Last Data Element", data: "last_data_element" },
      ],
    };
  },
  methods: {
    test() {
      console.log("hii");
    },
  },
  created() {
    this.data = data.result.obj.summary.map((item, index) => {
      return {
        id: index + 1,
        ...item,
      };
    });
  },
  onupdated() {
    console.log(this.links);
  },
};
</script>
