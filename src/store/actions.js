import axios from 'axios';

const resource = axios.create({
  baseURL: 'http://localhost/api/v1',
  params:{
    api_key: '19268149bbbd6ab148b5a6a6eabd2fce',
    language:'tr-TR'
  }
});

export default {
  async test({ commit }) {
   
  },
};