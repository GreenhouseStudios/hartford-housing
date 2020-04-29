<template>
  <div>
    <div class="section">
      <h1>Profiles</h1>
      <v-row>
        <v-col cols="12" sm="6" offset-sm="3">
          <v-container fluid>
            <!-- <h3>{{slide}}</h3> -->
            <v-row>
              <v-col v-for="n in 6" :key="n" class="d-flex child-flex" cols="4">
                <ProfileCard></ProfileCard>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </div>
    <div class="section" v-for="prof in profiles" :key="prof">
      <v-row >
        <v-col>
          {{prof}}
          <v-img :src="require('../assets/mariacolonsanchez.jpg')" max-height="500" contain></v-img>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import ProfileCard from "@/components/ProfileCard";
export default {
  name: "Profiles",
  components: {
    ProfileCard
  },
  data() {
    return {
      slides: ["Tenant Activists Profiles", "Historic Firsts"],
      profiles: [
        "Milagros Ortiz",
        "Teri Morrison",
        "Joshua Serrano",
        "Ashley Johnson"
      ]
    };
  }
};
</script>