import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({

    theme: {
        themes: {
          light: {
            primary: '#34b4ad',
            secondary: '#b0bec5',
            accent: '#8c9eff',
            error: '#b71c1c',
            darkBlack: "#1a1919",
            lightBlack: '#414240',
            green: '#d1d35e',
            teal: '#72b591',
            blue: '#519ec8',
            white: '#FFFFFF'
          },
        },
      },
});
