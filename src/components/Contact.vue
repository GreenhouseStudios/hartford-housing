<template>
  <div>
    <v-container>
    <h1 class="section-header display-2 font-weight-bold mt-10">Contact</h1>
    <p class="my-5">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Aliquam etiam erat
      velit scelerisque in dictum. Sapien eget mi proin sed. Facilisi cras
      fermentum odio eu feugiat pretium nibh. Mauris rhoncus aenean vel elit
      scelerisque. Nascetur ridiculus mus mauris vitae ultricies leo integer
      malesuada nunc. Sem viverra aliquet eget sit amet tellus. Lorem mollis
      aliquam ut porttitor leo a. Enim eu turpis egestas pretium. Pretium nibh
      ipsum consequat nisl vel pretium lectus. Sed vulputate odio ut enim
      blandit volutpat maecenas volutpat blandit. Feugiat in fermentum posuere
      urna. Gravida rutrum quisque non tellus orci ac auctor augue. Et malesuada
      fames ac turpis egestas integer. Et odio pellentesque diam volutpat
      commodo sed egestas egestas fringilla.
    </p>

    <v-form>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              :counter="10"
              label="First name"
              required
            ></v-text-field>         
            <v-text-field
              v-model="lastname"
              :rules="nameRules"
              :counter="10"
              label="Last name"
              required
            ></v-text-field>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      
    </v-form>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data: () => ({
    valid: false,
    firstname: "",
    lastname: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => v.length <= 10 || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
  }),
};
</script>

<style scoped>
</style>