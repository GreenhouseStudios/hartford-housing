<template>
  <div class="section">
    <h1 class="d-none d-md-block section-header display-3 font-weight-bold">Housing</h1>
    <h1 class="d-md-none section-header display-1 font-weight-bold">Housing</h1>
    <!-- <div v-for="slide in slides" v-bind:key="slide" class="slide">
      <h1>{{slide}}</h1> -->

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
  name: "Housing",
  components:{
    Card
  },
  data() {
    return {
      slides: [
        {
          heading: "Post WWII Housing Crisis",
          body:`World War II ushered in a period of intense demographic shifts that intersected with
a housing crisis that was already half a century in the making. The nation’s citizens
deployed overseas to various theaters of war, leaving a gaping demand for industrial,
manufacturing, and agricultural labor. The United States turned to its neighbors in the
Caribbean to fill these temporary shortages and the boom economy spurred many
people to move to major urban centers. Everyone was on the move—from white
communities of various ethnic backgrounds to African Americans, West Indians, and
Puerto Ricans. Following the war, the US owed a debt to veterans and the auxiliary

civilian population that had contributed to the war effort. The war-time and post-
war housing crisis led to policy interventions focused on slum clearance and the

construction of public housing. The New England area needed 400,00 new homes
with Connecticut facing a shortage of 80,000 new housing units.`,
        },
        { // lorem ipsum
          heading:"Public Housing",
          body:`Relief strengthening infrastructure collective impact leverage then. Strengthening 
          infrastructure thought leader scale and impact, commitment, collective impact social innovation 
          mobilize move the needle vibrant. The resistance bandwidth thought provoking the resistance 
          change-makers shared vocabulary. Transparent save the world activate external partners equal opportunity. 
          Social entrepreneurship design thinking, targeted, milestones challenges and opportunities white paper. 
          Indicators compassion blended value disrupt relief. Mobilize parse sustainable inspirational circular 
          empathetic, shared unit of analysis blended value collective impact. Accessibility transparent venture 
          philanthropy; boots on the ground resist shared unit of analysis shine support peaceful. Co-creation 
          systems thinking humanitarian social entrepreneur systems thinking preliminary thinking. Ideate; philanthropy 
          vibrant social return on investment, social entrepreneurship initiative capacity building white paper. `
        },
        {
          heading:"Charter Oak Terrace",
          body:`With 1000 units Charter Oak Terrace held the promise of addressing
the severe shortage of affordable housing in Hartford. The unit located at Flatbush and Newfield Avenues, and Dart and Chandler Streets, had
twice the occupancy of Bellevue Square and opened in 1941. Whereas Bellevue Square sat on 12.5 acres, Charter Oak Terrace covered 124 acres.
The design, like other public housing units, encompassed recreational, educational, medical, and religious services. The Hartford Good Will Boys’
Club hosted recreational activities and the Christian Activities Council of Hartford conducted Sunday School and Church Services. Children
attended the local community school at Mary Hooker School, which like the housing complex, was new.
This planned community represented both an important policy intervention and a particular vision of urban planning. Children would
have access to education, healthcare and religious services, and would be reared in a wholesome environment that promoted family values.`
        },
        {
          heading:"Bellevue Square",
          body:`For the African American families who turned to public housing to address the severe shortage of suitable
accommodations in Hartford, the possibility of a better standard of living was a real promise. Not only was it
difficult to find suitable places to live, even with high rents many accommodations had no heat and hot water;
ice had to be bought from the trucks on the street and clothes had to be ironed with a heavy metal iron.
Florence Kiser Price Wollaston, who grew up at Bellevue Square, recalls how her parents moved around in the
1940s trying to find the right apartment in Hartford. The family moved up and down Canton Street in the 1940s,
which would constantly flood at its intersection with Bellevue Street. Her father helped to build the dike to
prevent these floods. Each move the Wollaston family made was in search of a better place to live.`
        },
        {
          heading:"Redlining",
          body:`The Great Depression devastated families across the United States, unleashed a wave of
foreclosures, and spawned a major crisis in the housing sector. The federal government created a
new infrastructure to facilitate home ownership by changing the way people financed and insured
their homes. The National Housing Act of 1934 established the Federal Housing Administration
(FHA) and the Federal Savings and Loan Insurance Corporation. This framework, which gave
us our current system of 30-year mortgages, laid the foundation for racial discrimination in the
housing market. Using the language of risk management, the FHA supported the classification of
neighborhoods according to their demographic profile. The process known as redlining coded
maps according to the desirability and viability of loans in particular communities. Many of
Hartford’s ethnic and racial minorities lived in neighborhood branded Grades C or D, the two
lowest categories, making them ineligible for federally-backed loans.`
        },
        {
          // lorem ipsum
          heading:"Home Ownership",
          body:`Social entrepreneur circular then inclusive the resistance progress replicable. 
          Incubator then boots on the ground innovate cultivate. Her body her rights, correlation think 
          tank correlation empower entrepreneur scale and impact. Strengthening infrastructure issue 
          outcomes replicable agile; correlation, segmentation accessibility correlation. When when, synergy 
          accessibility targeted; collaborate. Her body her rights innovation communities inclusive incubator 
          improve the world ideate thought leadership. Do-gooder scale and impact shared vocabulary co-create 
          indicators improve the world. Grit outcomes; challenges and opportunities, innovate move the needle 
          commitment. Humanitarian a replicable uplift energize compelling changemaker. Shared unit of analysis 
          synergy collaborate mass incarceration equal opportunity global collaborative consumption.`
        },
        {
          heading:"Slumlords Now, Slumlords Then",
          body:`Even middle
income families facing poor housing choices can have their health and job prospects ruined when they have
to spend emotional and financial capital addressing horrendous living conditions. Hartford again made
headlines when the United States Department of Housing and Urban Development (HUD) terminated the
contract of New York’s infamous landlord, Emmanuel Ku. After years of inadequate maintenance and
deplorable living conditions that posed a risk to his tenants’ health and safety, tenants and community
activists finally won their bid to oust Ku. An organized group of tenants demonstrated that ordinary people
could win against a wealthy, unscrupulous landlord. HUD’s regime of inspections continues to fail many
of the clients who rely on the agency to certify that housing units are suitable for occupancy.`
        },
        {
          heading: "Housing Code Violation",
          body:`MICE. MOLD. BED BUGS. POOR VENTILATION. LACK OF HEAT. 
          BROKEN WINDOWS. MISSING SCREENS.
These violations are legion among properties owned by slumlords, yet often fall through the cracks
based on inspection protocols that emphasize the exterior of the building. In many instances,
misperceptions about the character of the tenants may lead the public to make value judgments about
what people living in public housing deserve. The No More Slumlords movement has worked to change
these perceptions. New horizons remain in the struggle.`
        },
        {
          heading: "The No More Slumlords Campaign",
          body:`The No More Slumlords campaign has become a beacon for other residents interested in addressing
substandard and unsafe conditions in their housing units. Since that pivotal victory, resident-leaders like
Teri Morrison, Milagros Ortiz, and Joshua Serrano have attended dozens of tenant meetings rallies, public
hearings, panel discussions, and coalition meetings to remind the public that the work has only just
begun. Overhauling Hartford’s outdated, ineffectual municipal housing code was one new prong in the
movement; navigating the challenge of relocating to another unit proved to be another. Some families,
like Milagros Ortiz’s, have had to move more than once, while others have left the state because of the
limited resettlement options. Housing conditions have proven no better in some instances and many
tenants have expressed distress about how dispersal has atomized the sense of community.`
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