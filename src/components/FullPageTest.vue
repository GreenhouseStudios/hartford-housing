<template>
  <full-page ref="fullpage" :options="options" id="fullpage">
    <div class="section">
      <h1>Home</h1>
    </div>
    <div class="section">
      <h1>About</h1>
    </div>
    <div class="section">
      <h1>Introduction</h1>
      <div class="slide">
        <h3>Some Section</h3>
      </div>
      <div class="slide">Some Slide</div>
      <div class="slide">Slide 3</div>
    </div>
    <div class="section">
      <h1>Maps</h1>
    </div>
    <div class="section">
      <h1>Settlement</h1>
    </div>
    <div class="section">
      <h1>Housing</h1>
    </div>
    <div class="section">
      <h1>Profiles</h1>
    </div>
  </full-page>
</template>

<script>
export default {
  name: "FullPageTest",
  data() {
    return {
      options: {
        licenseKey: "5040F97D-84574F59-952CE4FC-EAD7E65C",
        menu: "#menu",
        navigation: true,
        navigationPosition: "left",
        anchors: ["page1", "page2", "page3"],
        sectionsColor: [
          "#D6D93B",
          "#2EA1CC",
          "#5EBF99",
          "#D6D93B",
          "#2EA1CC",
          "#5EBF99",
          "#D6D93B",
          "#2EA1CC",
          "#5EBF99"
        ]
      }
    };
  }
};
</script>

<style scoped>
h1 {
  position: relative;
  top: 100px;
}
</style>