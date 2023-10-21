import {reactive} from 'vue';

export const store = reactive ({
  isActive: {},
  getUpperCase(text) {
    text = text.toUpperCase();
  },
  lorem: 'Far far away, behind the the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Separated they live in Bookmarksgrove.'
})