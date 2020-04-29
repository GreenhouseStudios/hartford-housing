<template>
  <div class="section">
    <!-- <h1>Settlement</h1> -->
    <div v-for="item in slides" v-bind:key="item.heading" class="slide">
      <!-- <h1>{{item.heading}}</h1> -->
     <Card v-bind:heading="item.heading" v-bind:body="item.body">

     </Card>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card'
export default {
  name: "Settlement",
  components:{
    Card
  },
  data() {
    return {
      slides: [
        {
        heading: "Journeys",
        body: `Suitcases. Boxes. Trunks. Have you ever had to move to a new town, a city, state, or a country? Did you need more than a moving van? Did you also need a passport, a visa, a work permit, or a particular color of your skin to make your journey possible?
Between 1940 and 2019, thousands of African Americans, West Indians, and Puerto Ricans made Connecticut their home. These migrations, epic and mundane, redrew the landscape of major urban centers, including Hartford. Some people came for a job, to follow a loved one, to pursue their dreams, or to escape natural disasters. The decisions of their potential neighbors, courts, banks, developers, municipal government, employers, and housing authorities shaped the places where they could live, work, and attend school.
Real estate agents lied about the availability of units for rent or sale. Developers accommodated racial norms in their blueprints. Banks denied credit and mortgages while insurance companies coded maps in red to delimit where ethnic and racial minorities could purchase homes. Public housing experiments chartered a middle ground by zoning units according to race and income. White neighbors harassed and terrorized aspirant homeowners, then fled as America’s cities were engulfed by violence during the civil rights era.
 
 Despite these hurdles,
and
Hartford became a Puerto Rican majority city.
 West Indians developed high homeownership rates
 African Americans made significant political strides in making housing
a major arena for civil rights and human rights advocacy.`
        },
        {
        heading: "Georgia,Puerto Rico, Jamaica",
        body: ""
        },
        {
        heading: "African American Settlement",
        body:""
        },
        {
        heading: "West Indian Settlement",
        body:""
        },
        {
        heading: "Puerto Rican Settlement",
        body:""
        },
        {
        heading: "Headlines",
        body: ""
        }
      ]
    };
  }
};
</script>

<style scoped>
.slide{
  /* background-color: rgb(81, 159, 200); */
}
</style>