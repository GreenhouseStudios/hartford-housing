<template>
  <div class="section">
    <h1>Housing</h1>
       <!-- <v-simple-table dark>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Name</th>
              <th class="text-left">Calories</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in desserts" :key="item.name">
              <td>{{ item.name }}</td>
              <td>{{ item.calories }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table> -->
    <div v-for="slide in slides" v-bind:key="slide" class="slide">
      <h1>{{slide}}</h1>
   
    </div>
  </div>
</template>

<script>
export default {
  name: "Housing",
  data() {
    return {
      slides: [
        "Post WWII Housing Crisis",
        "Public Housing",
        "Charter House Terrace",
        "Bellevue Square",
        "Redlining",
        "Home Ownership",
        "Slumlords Now, Slumlords Then",
        "Housing Code Violations",
        "The No More Slumlords Campaign"
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159
        },
        {
          name: "Ice cream sandwich",
          calories: 237
        },
        {
          name: "Eclair",
          calories: 262
        },
        {
          name: "Cupcake",
          calories: 305
        },
        {
          name: "Gingerbread",
          calories: 356
        },
        {
          name: "Jelly bean",
          calories: 375
        },
        {
          name: "Lollipop",
          calories: 392
        },
        {
          name: "Honeycomb",
          calories: 408
        },
        {
          name: "Donut",
          calories: 452
        },
        {
          name: "KitKat",
          calories: 518
        }
      ]
    };
  }
};
</script>