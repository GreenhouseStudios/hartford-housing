<template>  
  <div class="section">
    <v-container fluid>
      <v-row>
        <v-col cols="6">
          <Card v-bind:body="prof.body" v-bind:heading="prof.name"></Card>
        </v-col>
      </v-row>
    </div>

    <!-- <div class="section" v-for="(prof,j) in profiles" :key="j">
      <v-container fluid>
        <v-row>
          <v-col cols="6">
            <ReadMoreCard v-bind:body="prof.body" v-bind:heading="prof.name"></ReadMoreCard>
          </v-col>
          <v-col cols="6">
            <v-img :src="prof.img" max-height="500" contain></v-img>
            <v-hover v-slot:default="{ hover }">
              <v-card
                :elevation="hover ? 16 : 2"
                height="200"
                width="147"
                class="profile-map"
                @click.stop="dialog = true"
              >
                <v-img src="@/assets/joshmap.jpg" max-height="200" contain></v-img>
              </v-card>
            </v-hover>
            <v-dialog v-model="dialog">
              <v-card>
                <v-card-title
                  class="headline grey lighten-2"
                  primary-title
                >Profile Map - {{prof.name}}</v-card-title>

              <v-img src="@/assets/joshmap.jpg" max-height="600" contain></v-img>

              <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</v-card-text>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
    </v-container>
  </div> -->
</template>

<script>

export default {
  name: "Profiles",
  components: {
 
  },
  data() {
    return {
      dialog: false,
      slides: ["Tenant Activists Profiles", "Historic Firsts"],
      placeholderProfile: {
        name: 'Ashley "AJ" Johnson',
        img: require("../assets/AJJohnson/PastorAJJohnson.jpg"),
        body: `When he was a young boy, Ashley “AJ” Johnson saw a diagram in his father’s office that molded his views of the role of the church. In this diagram, the church was central, a hub from which social, economic, and political activities emanated. It was a model of community engagement his father adopted with the Urban Hope Refuge Church and a legacy AJ implements in his own ministry. The history of the Johnson family is deeply intertwined with patterns of the Great Migration of African Americans to the north as well as the evolution of the African American community in the North End of Hartford. Bishop Dr. William M. Johnson and Dr. Celeste Johnson, both originally from North Carolina, resettled in New York like 6 million other Africans Americans who made a similar exodus from the South. They worked in the ministry between The Bronx, Harlem, and Hartford. AJ teases that he was a “95 North baby” because his parents split so much of their time between New York and Connecticut. The Johnson family, William and Celeste and their sons, Mylious and Ashley, split their time between New York and Hartford. Dr. William Johnson had a background in urban planning while Dr. Celeste Johnson has a background in education.
Neither their degrees nor their status in the community shielded them from discrimination. The refuge they sought in Rocky Hill proved to be a journey into eviction before the family would settle down in Manchester. AJ’s path took him to South Carolina, in some ways a refuge from some of the challenges of home. There, the community
of black people was an inspiration and he tried to identify where his passion and future lay. Would he get involved in politics? Would he be called to the ministry? He ran unsuccessfully for a seat on Hartford’s Court of Common Council and emerged from that experience with a keen understanding of politics as a tool. Since then, AJ Johnson has found his calling in both of his roles as Lead Community Organizer for the Christian Activities Council (now
the Center for Leadership and Justice) and as Senior Pastor of the Urban Hope Refuge Church in Hartford. In these dual roles, Johnson sustains the legacy of civil rights and human rights pioneers like the Rev. Richard Battles of the Mt. Olive Baptist Church, William Brown, Executive Director of the Urban League of Greater Hartford and of his father Bishop Johnson. The passion he brings to the No More Slumlords movement is duplicated in his support of entrepreneurship in the local community and his backing of a $15 minimum wage.`
      },
      profiles: new Array(5)
        .fill([
          {
            name: "Milagros Ortiz",
            img: require("../assets/MilagrosOrtiz/milagros.jpg"),
            body: `As a tenant leader in the No More Slum Lords Movement, Milagros Ortiz has become accustomed to sharing her story with the public. Dig a little further and you will be in Campanilla, Toa Baja, Puerto Rico. Here, her family grew so large and tight-knit that they started to move to houses on the same street. Her grandmother was among the first to set off for New York, one of the prime destinations for Puerto Ricans sojourners to the United States. Milagros’ paternal family and some of her maternal relatives settled in The Bronx. Milagros Ortiz the elder, eventually for Connecticut in part to get away from the fast-paced life of New York and to access the American School for the Deaf. The family settled in New Britain. She worked various jobs at CW Tools, McDonalds, and as a cleaning lady to support her family. Her father, Ramon Ortiz was a landscaper and worked across the country.
Milagros Jr remembers her childhood in New Britain being enjoyable, filled with lots of open space and parks and a strong sense of community. They held big family parties and celebrations that helped to maintain the tradition of spending time with your family. Milagros aspired to be a wrestler, making heroes of figures like Stone Cold and Steve Austin. She was active in softball, wrestling, basketball, cheerleading, gymnastics, chorus, and played numerous instruments and attended many
summer camps. Although she hoped to enlist in the military, a pregnancy foiled those plans. She moved several times between New Britain and East Hartford, including to deal with
a difficult relationship. At one time she had several dogs, three snakes, two geckos, two hamsters, two birds, and a cat, a scorpion, amongst many other animals because her autistic son, Jensy, loved animals. She eventually relocated Hartford to Clay Arsenal for larger accommodations and to be closer to family in Hartford.
After a period of good maintenance and property upkeep when she first moved to Hartford, the arrival of a new owner brought disorganization and chaos. Many tenants experienced issues with the management losing important paperwork, receipts,
and work orders. Milagros personally experienced issues with rats. She met Pastor Johnson during a meeting between tenants and the project manager, where
the landlord was a no-show. Tenants agreed to meet at a later time to discuss actionable steps moving forward, which sparked what became known as the No More Slumlords Movement.
It may take a while for Ortiz to tell you that her housing struggles were deadly for her pets, that the comfort Jensy took in these animals was one of the sacrifices she was forced to make. She continues to rebuilt that support network.`
          },
          {
            name: "Teri Morrison",
            img: require("../assets/TeriMorrison/terimorrisonmainimage.jpg"),
            body: `Teri moved to Garden street with her children and resided there for about 24 years. Mold started seeping through her walls, closets, and furniture and began impacting her children’s health. She moved several times, eventually ending up on Albany Avenue. This time it was mice that enraged her. Everyone knows her home, and especially her kitchen, as especially meticulous. She loves to cook but mice have a way of sapping the inspiration in even the most
committed person. Having moved to address the code violations
in her previous home, for which she filed an official complaint, she now had to contend with vermin. She began communicating with her neighbors and discovered that they had also been experiencing
similar problems. She teamed up with Pastor AJ Johnson and became an active member of the No Slumlords Movement in Hartford. She began using her voice to organize a powerful movement against housing conditions in the city. The main focus of organizing has been holding landlords accountable for the upkeep and maintenance of
their apartments. Education has also featured prominently, as Teri and other leaders uncovered the murky and subtle ways that the municipal housing code and the inspection system encouraged negligence rather than compliance.
Teri will be the first one to tell you that organizing people is difficult work, that sometimes its only five or six people who do the work that impacts thousands of residents. She will also be the first one to remind us that both tenants and landlords need to uphold their responsibilities to the
property and be accountable. She is a model to so many people in her stalwart commitment to making the North End livable, safe, and community-oriented.
 `
          },
          {
            name: "Joshua Serrano",
            img: require("../assets/JoshuaSerrano/JoshuaSerrano.jpg"),
            body: `The roots of Josh Serrano’s journey into community activism can be traced to his family’s history in Hartford. His mother, at around age 16, Luz Belinda Estremera moved to Hartford from Ponce, Puerto Rico along with his maternal Aunt Edith. It was a journey undertaken by several generations of Puerto Ricans before them. Luz would settle and move around in the north and south end while Edith settled permanently at Bellevue Square. She would marry Jesus Serrano and Josh was born on Enfield St, Hartford. Spurred by the opportunity to pursue a better life for her children, Luz worked in Head Start and Community Renewal Team (CRT); her husband worked as a window washer and eventually became the building superintendent where he lived. The family moved between the north and south end of Hartford, sometimes driven by hardship, in other instances moving to better accommodations. These journeys would take them to Zion, Magnolia, Garden, and Bedford Streets. Along the way, they adopted a cat, Kitty who accompanied them
on their journeys. The family moved finally to the Clay Arsenal Renaissance Apartments (CARA) when Josh was about 13 years old. Ms. Estremera eventually passed down the residency to Joshua who then became the head of household and she moved to the Blue Hills area.`
          },
          {
            name: 'Ashley "AJ" Johnson',
            img: require("../assets/AJJohnson/PastorAJJohnson.jpg"),
            body: `When he was a young boy, Ashley “AJ” Johnson saw a diagram in his father’s office that molded his views of the role of the church. In this diagram, the church was central, a hub from which social, economic, and political activities emanated. It was a model of community engagement his father adopted with the Urban Hope Refuge Church and a legacy AJ implements in his own ministry. The history of the Johnson family is deeply intertwined with patterns of the Great Migration of African Americans to the north as well as the evolution of the African American community in the North End of Hartford. Bishop Dr. William M. Johnson and Dr. Celeste Johnson, both originally from North Carolina, resettled in New York like 6 million other Africans Americans who made a similar exodus from the South. They worked in the ministry between The Bronx, Harlem, and Hartford. AJ teases that he was a “95 North baby” because his parents split so much of their time between New York and Connecticut. The Johnson family, William and Celeste and their sons, Mylious and Ashley, split their time between New York and Hartford. Dr. William Johnson had a background in urban planning while Dr. Celeste Johnson has a background in education.
Neither their degrees nor their status in the community shielded them from discrimination. The refuge they sought in Rocky Hill proved to be a journey into eviction before the family would settle down in Manchester. AJ’s path took him to South Carolina, in some ways a refuge from some of the challenges of home. There, the community
of black people was an inspiration and he tried to identify where his passion and future lay. Would he get involved in politics? Would he be called to the ministry? He ran unsuccessfully for a seat on Hartford’s Court of Common Council and emerged from that experience with a keen understanding of politics as a tool. Since then, AJ Johnson has found his calling in both of his roles as Lead Community Organizer for the Christian Activities Council (now
the Center for Leadership and Justice) and as Senior Pastor of the Urban Hope Refuge Church in Hartford. In these dual roles, Johnson sustains the legacy of civil rights and human rights pioneers like the Rev. Richard Battles of the Mt. Olive Baptist Church, William Brown, Executive Director of the Urban League of Greater Hartford and of his father Bishop Johnson. The passion he brings to the No More Slumlords movement is duplicated in his support of entrepreneurship in the local community and his backing of a $15 minimum wage.`
          }
        ])
        .flat()
    };
  },
  methods: {
    toProfile() {
      console.log("bubble1");
      this.$emit("bubble-profile");
    },
    test() {
      console.log("testing");
    },
    readMore() {
      var dots = document.getElementById("dots");
      var moreText = document.getElementById("more");
      var btnText = document.getElementById("myBtn");

      if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
      } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
      }
    }
  }
};
</script>

<style scoped>
.profile-map {
  position: relative;
  top: -100px;
  left: 100px;
}
.wrapper {
  display: grid;
  grid-template-rows: 1fr 1fr;
}
</style>