<template>
    <full-page ref="fullpage" :options="options" id="fullpage">
        <div class="section">
        First section ...
        </div>
        <div class="section">
        Second section ...
        </div>
         <div class="section">
        Third section ...
        </div>
    </full-page>
</template>

<script>
export default {
  name: 'FullPageTest',
  data () {
      return {
          options:{
              licenseKey: '5040F97D-84574F59-952CE4FC-EAD7E65C',
              menu: '#menu',
              anchors: ['page1', 'page2', 'page3'],
              sectionsColor: ['#41b883', '#ff5f45', '#0798ec']
          }
      }
  }
}
</script>