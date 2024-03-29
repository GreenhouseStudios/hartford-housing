<template>
  <div class="section nav-section tall" >
    <v-container fluid>
      <v-row justify="center">
        <h1 class="d-none d-md-block section-header display-2 font-weight-bold" id="settlement-section">
          Settlement
        </h1>
        <h1 class="d-md-none section-header display-1 font-weight-bold" id="settlement-section">
          Settlement
        </h1>
      </v-row>

      <v-row align="center">
        <!-- <v-col cols="1"></v-col> -->
        <v-col align-self="center">
          <div id="trigger3"></div>
          <div
            v-for="(item, index) in sections"
            class="slide"
            v-bind:key="index"
          >
            <Card
              v-bind:heading="item.heading"
              v-bind:body="item.body"
              id="revealscale"
            ></Card>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Card from "@/components/Card";
export default {
  name: "Settlement",
  components: {
    Card,
  },
  data() {
    return {
      sections: [
        {
          heading: "African American Settlement",
          body: "In what journalist Isabel Wilkerson calls a “silent pilgrimage” and others harken to a Biblical exodus, African Americans left the South. By foot, train, cars, and buses, they fled violence, poverty, the suppression of their vote, political disenfranchisement, and the stunted life chances of their children. By 1970, six million African Americans had embarked on the Great Migration to major urban centers, the largest mass movement of peoples of African descent after the trans-Atlantic slave trade. Like the centuries of involuntary migration that preceded it, the Great Migration would reshape American cities. By 1920, forty percent of the African American population in Hartford identified their original home as Georgia, outpacing the local population. Fifteen percent originated from the Carolinas and Virginia. Americus, Plains, Ellaville, and other Georgian locales kindled a long pattern of chain migration to Hartford that would register profoundly in the residential makeup of the North End of Hartford.",
        },
        {
          heading: "Puerto Rican Settlement",
          body: "Between 1950 and 1960, 470,000 people, or approximately one-fifth of Puerto Rico’s population, relocated to the United States. The Jones Act of 1917 granted Puerto Ricans U.S. citizenship, making relocation to the mainland far easier in principle than other groups impacted by the restrictive immigration policies that closed US borders for the next four decades. New York attracted the vast majority of these sojourners. Some embarked on a secondary migration to explore other residential and employment opportunities and to join family members. Farm labor programs offering employment also played an important role in facilitating the initial transportation to the United States. These programs recruited 421,238 Puerto Ricans workers between 1948 and 1990, the second largest mobilization of seasonal laborers after the Mexican Bracero program. These migratory and labor flows have transformed Hartford into a Puerto Rican city, with shifting concentrations in the North and South End.",
        },
        {
          heading: "West Indian Settlement",
          body: "Caribbean residents participated in a long tradition of what scholars call circum-Caribbean migration that brought them to Costa Rica, Cuba, and Panama between the 1870-1920s. New York featured prominently as the primary port of entry and residence for the first major enclave of West Indian migrants in the United States in the twentieth-century. When World War II ushered in new opportunities to hire foreign guest workers, twenty-four states recruited British West Indians for industrial and agricultural work. New York, Florida, and Connecticut drew the most recruits and relied consistently on them throughout and after the war, while other states used them intermittently. These diasporas established post-emancipation traditions of mobility and created new spaces for black men and women to recast and renegotiate their labor and their identities. From a few hundred people in the 1950s, West Indians became the largest population of foreign-born immigrants in Connecticut in 2010, a demographic profile that shaped Hartford as a Caribbean city.",
        },
      ],
      slides: [
        {
          heading: "Journeys",
          body1: `Suitcases. Boxes. Trunks. Have you ever had to move to a new town, a city, state, or a country? Did you need more than a moving van? Did you also need a passport, a visa, a work permit, or a particular color of your skin to make your journey possible?
Between 1940 and 2019, thousands of African Americans, West Indians, and Puerto Ricans made Connecticut their home. `,
          body2: `These migrations, epic and mundane, redrew the landscape of major urban centers, including Hartford. Some people came for a job, to follow a loved one, to pursue their dreams, or to escape natural disasters. The decisions of their potential neighbors, courts, banks, developers, municipal government, employers, and housing authorities shaped the places where they could live, work, and attend school.
Real estate agents lied about the availability of units for rent or sale. Developers accommodated racial norms in their blueprints. Banks denied credit and mortgages while insurance companies coded maps in red to delimit where ethnic and racial minorities could purchase homes. Public housing experiments chartered a middle ground by zoning units according to race and income. White neighbors harassed 
and terrorized aspirant homeowners, then fled as America’s cities were engulfed by violence during the civil rights era.`,

          body3: `Despite these hurdles,
and
Hartford became a Puerto Rican majority city.
 West Indians developed high homeownership rates
 African Americans made significant political strides in making housing
a major arena for civil rights and human rights advocacy.`,
          image: require("../assets/pubhousingmap.jpg"),
        },
        {
          heading: "Georgia, Puerto Rico, Jamaica",
          body1: `Correlation technology; scalable we must stand up collective impact granular. We must stand up and; movements gender 
        rights state of play think tank mobilize. Social entrepreneur do-gooder optimism data natural resources humanitarian. 
        Paradigm society empower justice sustainable, capacity building program areas. Co-create society strategy inspire human-centered. 
        To radical data human-centered leverage inspire.`,
          body2: `Parse empathetic state of play her body her rights effective social entrepreneur 
        effective relief. Optimism, ideate to impact then grit. Program area optimism radical shine inclusion, her body her rights scale 
        and impact commitment social entrepreneur. To energize to expose the truth then revolutionary her body her rights. Because shared 
        unit of analysis green space invest entrepreneur do-gooder accessibility. Correlation technology; scalable we must stand up collective impact granular. We must stand up and; movements gender 
        rights state of play think tank mobilize. Social entrepreneur do-gooder optimism data natural resources humanitarian. 
        Paradigm society empower justice sustainable, capacity building program areas. Co-create society strategy inspire human-centered. 
        To radical data human-centered leverage inspire. A, game-changer segmentation parse improve the world 
        blended value NGO ideate optimism. Challenges and opportunities strategize empower uplift, strategize impact investing change-makers. 
        Relief; emerging or, movements, youth academic thought leader. Blended value relief; support; black lives matter technology empathetic.`,
        },
        {
          heading: "African American Settlement",
          body1: `“Disfranchisement, peonage, the abuses of the chain-gang, the leasing of prisoners as laborers, the easy surrender of
prisoners by sheriffs to the leaders of mobs, the lynchings without trial, the Jim Crow cars where the ordinary decencies
of life are not respected:” These were among the litany of offenses that The Crisis, published by the National Association
for the Advancement of Colored People (NAACP) identified in its November 1923 issue as some of the push factors
propelling African Americans to leave to the South. By 1970, six million African Americans had embarked on the Great
Migration for new lives in Northeastern, Midwestern, and Western States.
Besides the trans-Atlantic slave trade, this was the largest mass movement of peoples of African descent. Like the
centuries of involuntary migration that preceded it, the Great Migration would reshape American cities. By 1930, forty
percent of the African American population in Hartford identified their original home as Georgia. Another 15 percent
originated from the Carolinas and Virginia. Americus, Plains, Ellaville, and other Georgian locales kindled a long pattern
of chain migration to Hartford that would register profoundly in the residential makeup of the North End of Hartford and
especially in the public housing projects of the 1940s.`,
        },
        {
          heading: "West Indian Settlement",
          body1: `The 1950 census identified about 245
West Indians in Connecticut, many of
them men who had come to the United
States in the 1940s to contribute to the
war effort.

By 2010, West Indians surpassed all other ethnic groups to become the largest population of foreign-born immigrants in Connecticut. This
demographic trend was seven decades in the making, with the original kernel of this population arriving as guest workers in the Hartford
region in the 1940s through bilateral labor agreements between British West Indian colonies and the United States. The vast majority were
Jamaicans, but there were also Trinidadians and Barbadians as well.
By the time these war-time labor opportunities appeared, a significant West Indian population had settled in New York, a population that
had already reached 54,000 by the 1930s. In Connecticut, the draw was primarily the tobacco industry which benefited from the labor
distributed through the industrial and agricultural concessions made for war-time. The diaspora of West Indian laborers established a post-
emancipation labor tradition that created new spaces to recast and renegotiate the labor of black men and later, women.`,
        },
        {
          heading: "Puerto Rican Settlement",
          body1: `Between 1950 and 1960,
470,000 people, or approximately
one-fifth of Puerto Rico’s population,
relocated to the United States. New York attracted the vast majority of these sojourners who settled in manufacturing, service, maintenance, and
domestic jobs. Like other ethnic groups before and in concert with them, Puerto Ricans sought better economic
opportunities in their cities of first entry before moving out to nearby cities like Philadelphia, Chicago, Bridgeport and
Hartford, to join family or pursue other opportunities.
The Jones Act of 1917 granted Puerto Ricans U.S. citizenship, making relocation to the mainland far easier in principle than
other groups impacted by the restrictive immigration policies that closed US borders for the next four decades. Yet farm
labor programs offering employment also played an important role in facilitating the initial transportation to the United
States. These programs recruited 421,238 Puerto Ricans workers between 1948 and 1990, the second largest mobilization
of seasonal labors after the Mexican Bracero program.`,
        },
        {
          heading: "Headlines",
          body1: `Slumlords. Urban blight. Black mold. Rodent
infestations and numerous other housing codeviolations. Recent Hartford Courant headlines
continue to document the enduring legacies ofsegregated housing and poverty in Hartford.
“Hartford has the Highest Rate of Urban Dwellers Living in Economically Troubled Neighborhoods,”
a June 2018 Courant headline reads. These headlines are disturbingly timeless for many of the ethnic and
racial minorities who call the city their home. They could have described any decade between the 1930s
and 2010s as poverty limited housing options and poor housing created or exacerbated poverty. Even middle
income families facing poor housing choices can have their health and job prospects ruined when they have
to spend emotional and financial capital addressing horrendous living conditions.`,
        },
      ],
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
        duration: "110%",
      }) // Declaration of animation and attaching to element
      .setClassToggle("#revealscale", "visible");
    // Helpful tags for orientation on the screen
    // .addIndicators({ name: "2 (duration: 300)" });
    // Add Scene to controller
    this.$scrollmagic.addScene(scene3);
  },
};
</script>

<style scoped>
.slide {
  /* background-color: rgb(81, 159, 200); */
}
.align-center {
  margin: auto;
}
.tall {
  /* height: 1350px !important; */
}
</style>