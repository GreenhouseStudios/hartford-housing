<template>
    <div>
<v-app-bar app fixed color="darkBlack" dark hide-on-scroll>
      <router-link to="/" id="site-title">
        <v-toolbar-title>Hartford Bound</v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>

      <!-- Desktop nav -->
      <v-toolbar-items class="d-none d-lg-block">
        <v-menu
          v-for="(section, sectionNum) in sections"
          :open-on-hover="true"
          :offset-y="true"
          :key="section.title"
        >
          <template v-slot:activator="{ on }">
            <v-btn text @click="$emit('move-to-section',sectionNum)" dark v-on="on">{{
              section.title
            }}</v-btn>
          </template>
          <v-list v-if="sections[sectionNum].slides.length">
            <v-list-item
              v-for="(item, subSectionNum) in section.slides"
              @click="$emit('move-to-section',sectionNum, subSectionNum)"
              :key="subSectionNum"
            >
              <v-list-item-title>{{ item }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>

      <!-- Mobile Nav -->
      <v-menu min-width="100%" :offset-y="true" tile>
        <template v-slot:activator="{ on, attrs }">
          <v-app-bar-nav-icon
            class="d-flex d-lg-none ma-1"
            color="white"
            @click="drawer"
            v-bind="attrs"
            v-on="on"
          ></v-app-bar-nav-icon>
        </template>
        <v-list class="centertext">
          <v-list-item
            v-for="(section, j) in sections"
            :key="section.title"
            @click="$emit('move-to-section',j)"
          >
            <v-list-item-title>{{ section.title }}</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item>
            <router-link
              to="/People"
              class="pr-4 footer-link centertext teal--text"
              >Credits</router-link
            >
          </v-list-item>
          <v-list-item>
            <router-link
              to="/Contact"
              class="pr-4 footer-link centertext blue--text"
              >Contact</router-link
            >
          </v-list-item>
          <v-list-item>
            <router-link
              to="/Methodology"
              class="pr-4 footer-link centertext green--text"
              >Methodology</router-link
            >
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    </div>
</template>

<script>
    export default {
        props: {
            sections: {
                type: Array,
                default: []
            },
        },
        data() {
            return {
                drawer: false,
            }
        },
    }
</script>
