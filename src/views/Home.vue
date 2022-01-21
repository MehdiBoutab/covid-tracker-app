<template>
  <main v-if="!loading" class="flex flex-col h-screen">
    <DataTitle :text="titre" :dataDate="dataDate" />
    <DataBoxes :stats="stats" />
    <CountrySelect
      @get-country="getCountryData"
      :countries="countries"
      :stats="stats"
    />
    <div>
      <button
        @click="ClearCountryData"
        v-if="stats.Country"
        class="bg-green-700 mx-12 text-white rounded p-3 mt-10 focus:outine-none hover:bg-green-600"
      >
        Clear Country
      </button>
    </div>
  </main>
  <main v-else class="flex flex-col align-center justify-center text-center">
    <div class="text-gray-500 text-3xl mt-10 mb-6"></div>
    <img :src="loadingImage" class="w-24 m-auto" alt="loadingImage" />
  </main>
</template>

<script>
import DataTitle from "@/components/DataTitle";
import DataBoxes from "@/components/DataBoxes";

import CountrySelect from "@/components/CountrySelect";
const API_URL = "https://api.covid19api.com/summary";
export default {
  name: "Home",
  components: {
    DataTitle,
    DataBoxes,
    CountrySelect,
  },
  data() {
    return {
      loading: true,
      titre: "Global",
      dataDate: "",
      stats: {},
      countries: [],
      loadingImage: require("../assets/hourglass.gif"),
    };
  },
  methods: {
    async fetchCovidData() {
      const response = await fetch(API_URL);
      const data = await response.json();
      return data;
    },
    getCountryData(country) {
      this.stats = country;
      this.titre = country.Country;
    },
    async ClearCountryData() {
      this.loading = true;
      const data = await this.fetchCovidData();
      this.titre = "Global";
      this.state = data.Global;
      this.loading = false;
    },
  },

  async created() {
    const data = await this.fetchCovidData();
    this.dataDate = data.dataDate;
    this.stats = data.Global;
    this.countries = data.Countries;
    this.loading = false;
  },
};
</script>
