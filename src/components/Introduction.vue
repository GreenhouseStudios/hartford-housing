<template>
  <div class="section" id="intro-section">
    <v-container fluid >
      <v-row align="center">
        <v-col>
          <h1 class="d-none d-md-block section-header display-3 font-weight-bold">Introduction</h1>
          <h1 class="d-md-none section-header display-1 font-weight-bold">Introduction</h1>
          <div id="trigger3"></div>
          <div v-for="(item,index) in sections" class="slide" v-bind:key="index">
            <Card v-bind:heading="item.heading" v-bind:body="item.body" id= "revealscale"></Card>
            <!-- <v-img :src="item.img"></v-img> -->
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Card from "@/components/Card";
import CardImage from "@/components/CardImage";
export default {
  name: "Introduction",
  components: {
    Card,
    CardImage,
  },
  data() {
    return {
      sections: [
        {
          heading: "“And the Migrants Kept Coming”",
          body:
            "Jacob Lawrence concluded his magisterial 60-panel mosaic, The Migration Series, with a defiant and hopeful scene of African American men, women, and children on a railway platform. Bound for destinations like Harlem, San Francisco, Philadelphia, Chicago, and Hartford, migrants voted with their feet to pursue a better life.  “And the migrants kept coming,” panel 60, was the 1941 coda to Lawrence’s profound visual statement about the Great Migration of African Americans from the South. Yet panel 60 can conjure any epoch in American history. Lawrence’s visual panorama resonates with the generation of West Indians and Puerto Ricans who would undertake their own journeys—both epic and mundane—to find employment and make a new home in American cities. Hartford was one terminus for several generations of these migrants.",
            img: "~@/assets/Lawrence/MOMA_PANEL60_900.jpg"
        },
        {
          heading: "African American Settlement",
          body:
            "In what journalist Isabel Wilkerson calls a “silent pilgrimage” and others harken to a Biblical exodus, African Americans left the South. By foot, train, cars, and buses, they fled violence, poverty, the suppression of their vote, political disenfranchisement, and the stunted life chances of their children. By 1970, six million African Americans had embarked on the Great Migration to major urban centers, the largest mass movement of peoples of African descent after the trans-Atlantic slave trade. Like the centuries of involuntary migration that preceded it, the Great Migration would reshape American cities. By 1920, forty percent of the African American population in Hartford identified their original home as Georgia, outpacing the local population. Fifteen percent originated from the Carolinas and Virginia. Americus, Plains, Ellaville, and other Georgian locales kindled a long pattern of chain migration to Hartford that would register profoundly in the residential makeup of the North End of Hartford."
        },
        {
          heading: "Puerto Rican Settlement",
          body:
            "Between 1950 and 1960, 470,000 people, or approximately one-fifth of Puerto Rico’s population, relocated to the United States. The Jones Act of 1917 granted Puerto Ricans U.S. citizenship, making relocation to the mainland far easier in principle than other groups impacted by the restrictive immigration policies that closed US borders for the next four decades. New York attracted the vast majority of these sojourners. Some embarked on a secondary migration to explore other residential and employment opportunities and to join family members. Farm labor programs offering employment also played an important role in facilitating the initial transportation to the United States. These programs recruited 421,238 Puerto Ricans workers between 1948 and 1990, the second largest mobilization of seasonal laborers after the Mexican Bracero program. These migratory and labor flows have transformed Hartford into a Puerto Rican city, with shifting concentrations in the North and South End."
        },
        {
          heading: "West Indian Settlement",
          body:
            "Caribbean residents participated in a long tradition of what scholars call circum-Caribbean migration that brought them to Costa Rica, Cuba, and Panama between the 1870-1920s. New York featured prominently as the primary port of entry and residence for the first major enclave of West Indian migrants in the United States in the twentieth-century. When World War II ushered in new opportunities to hire foreign guest workers, twenty-four states recruited British West Indians for industrial and agricultural work. New York, Florida, and Connecticut drew the most recruits and relied consistently on them throughout and after the war, while other states used them intermittently. These diasporas established post-emancipation traditions of mobility and created new spaces for black men and women to recast and renegotiate their labor and their identities. From a few hundred people in the 1950s, West Indians became the largest population of foreign-born immigrants in Connecticut in 2010, a demographic profile that shaped Hartford as a Caribbean city."
        }
      ]
    };
  },
  mounted() {
    const scene3 = this.$scrollmagic
      .scene({
        // ID of element where animation starts
        triggerElement: "#trigger3",
        // {0,0.5,1} - animations starts from {top,center,end} of window
        triggerHook: 0.7,
        // Duration of animation
        duration: "110%"
      }) // Declaration of animation and attaching to element
      .setClassToggle("#revealscale", "visible");
    // Helpful tags for orientation on the screen
    // .addIndicators({ name: "2 (duration: 300)" });
    // Add Scene to controller
    this.$scrollmagic.addScene(scene3);
  }
};
</script>
<style>
#intro-section{
  background-image: url("~@/assets/Lawrence/MOMA_PANEL60_900.jpg");
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  margin: 0 auto;
}
</style>