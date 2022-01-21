<template>
  <div class="mx-12">
    <select
      @change="onChange"
      v-model="selected"
      class="form-select mt-10 block border p-3 rounded w-full px-auto"
    >
      <option value="0">Select Country</option>
      <option
        v-for="country in countries"
        :value="country.ID"
        :key="country.ID"
      >
        {{ country.Country }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "CountrySelect",
  props: ["countries", "stats"],
  data() {
    return {
      selected: 0,
    };
  },
  methods: {
    onChange() {
      const country = this.countries.find((item) => item.ID === this.selected);
      console.log(country);
      this.$emit("get-country", country);
    },
  },
};
</script>
