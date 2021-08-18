<template>
  <div>
    <v-container fluid>
      <h1 class="section-header display-2 font-weight-bold mt-10">
        <span class="l-slant-green">Funding</span>
      </h1>
        <div class="boxwrapper">
          <div v-for="(funder, index) in funders"
            v-bind:key="index"
            class="pa-1 foundercard"
            style="display:inline-block;">
          <a class="font-weight-bold" :href="funder.link">
            <v-card tile class="pa-5" :color="tileColor()">
              <v-responsive :aspect-ratio="1">
                <v-img class="cardimg" v-bind:src="funder.image"></v-img>
              </v-responsive>
            </v-card>
          </a>
          </div>
        </div>

      <h1 class="section-header display-2 font-weight-bold mt-10">
        <span class="r-slant-green">
          People
        </span>
      </h1>
      <div class="boxwrapper">
        <div
          v-for="(person, index) in people"
          v-bind:key="index"
          class="pa-1 foundercard"
          style="display:inline-block;"
        >   
          <a :href="person.link">       
          <v-card tile class="pa-5" :color="tileColor()">
            <v-responsive :aspect-ratio="1">
              <div style="  position: relative;
                top: 50%;
                transform: translateY(-50%);">
                <div class="font-weight-bold persontitle">
                  {{person.name}}
                </div>
                <div class="personrole">
                  {{person.role}}
                </div>
              </div>
            </v-responsive>
          </v-card>
          </a>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "PEOPLE",
  data() {
    return {
      colorIndex: 1,
      cardColors: ["green", "teal", "blue"],
      people: [
        {
          name: "DR. FIONA VERNAL",
          link: "https://greenhousestudios.uconn.edu/person/fiona-vernal//",
          role: "PI",
        },
        { name: "LAURA BEDOYA", role: "Research", },
        { name: "MALACHI BRIDGES", role: "Research", },
        { name: "GEORGIA BROWN", role: "Research", },
        { name: "AALIYAH CAMPBELL", role: "Research", },
        {
          name: "JAMES KOLB",
          link: "https://greenhousestudios.uconn.edu/person/james-kolb/",
          role: "PI, Map Design",
        },
        { 
          name: "STEPHANIE ORTS", 
          link: "https://www.stephanieorts.com/", 
          role: "Graphic Design", 
        },
        {
          name: "TOM LEE",
          link: "https://greenhousestudios.uconn.edu/person/tom-lee/",
          role: "Web Development",
        },
        {
          name: "MACKENZIE FOX",
          link: "https://greenhousestudios.uconn.edu/person/mackenzie-fox/",
          role: "Web Development, Illustration",
        },
        {
          name: "CARLY WANNER-HYDE",
          link: "https://greenhousestudios.uconn.edu/person/carly-wanner-hyde/",
          role: "Layout Design",
        },
      ],
      funders: [
        {
          name: "GREENHOUSE STUDIOS",
          image: require('../assets/Logos/green_house_studios.png'),
          link: "http://www.greenhousestudios.uconn.edu",
        },
        {
          name: "AFRICANA STUDIES INSTITUTE (ASI)",
          image: require('../assets/Logos/africana_studies_institue.png'),
          link: "https://africana.uconn.edu/",
        },
        {
          name:
            "COLLEGE OF LIBERAL ARTS AND SCIENCES (CLAS), OFFICE OF THE DEAN",
          image: require('../assets/Logos/college_of_liberal_arts_and_sciences.png'),
          link: "https://clas.uconn.edu/",
        },
        {
          name:
            "EL INSTITUTO: INSTITUTE OF LATINA/O, CARIBBEAN, AND LATIN AMERICAN STUDIES (ELIN)",
          image: require('../assets/Logos/el_instituto.png'),
          link: "https://elin.uconn.edu/",
        },
        {
          name: "HARTFORD STAGE HISTORY DEPARTMENT",
          image: require('../assets/Logos/hartford_stage.png'),
          link: "https://www.hartfordstage.org/",
        },
        {
          name: "HUMAN RIGHTS INSTITUTE",
          image: require('../assets/Logos/human_rights_institute.png'),
          link: "https://humanrights.uconn.edu/",
        },
        {
          name: "OFFICE OF DIVERSITY AND INCLUSION (ODI)",
          image: require('../assets/Logos/diversity_and_inclusion.png'),
          link: "https://diversity.uconn.edu/",
        },
        {
          name: "PUERTO RICAN AND LATIN AMERICAN CULTURAL CENTER",
          image: require('../assets/Logos/prlacc.png'),
          link: "https://latinx.uconn.edu/",
        },
        {
          name:
            "THE THOMAS J. DODD RESEARCH CENTER URBAN AND COMMUNITY STUDIES",
          image: require('../assets/Logos/human_rights_dodd_impact.png'),
          link: "https://dodd.uconn.edu/",
        },
      ],
    };
  },
  methods: {
    tileColor(){
      if(this.colorIndex == 2){
        this.colorIndex = 0;
      }else{
      this.colorIndex++;
      }
      return this.cardColors[this.colorIndex];
    }
  },
};
</script>

<style scoped>
/* On large screens that are 993px or more, make 5 columns */
.foundercard {
  margin: auto;
  width:  25%;
  height: auto;
}
.boxwrapper {
  padding: 2% 15%; 
}

/* On screens that are 992px or less, make 4 columns */
@media screen and (max-width: 992px) {
    .foundercard {
      width:  25%;
    }
    .boxwrapper {
      padding: 2% 5%;
    }
}

/* On screens that are 600px or less, make 2 columns */
@media screen and (max-width: 600px) {
    .foundercard {
      width:  50%;
    }
    .boxwrapper {
      padding: 2% 0;
    }
}

v-container{
  padding-bottom: 50px;
}
.outline {
  outline-style: solid;
  outline-color: #72b591;
  outline-width: 3px;
}
.cardimg {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
.persontitle{
  font-weight: bold;
  text-align: center;
  color: white;
  text-decoration: underline;
}
.personrole{
  color: white;
  text-align: center;
  font-style: italic;
}
</style>