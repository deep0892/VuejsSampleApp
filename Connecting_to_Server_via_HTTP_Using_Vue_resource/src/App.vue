<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http</h1>
        <div class="form-group">
          <label for="">Username</label>
          <input type="text" class="form-control" v-model="user.username" />
        </div>
        <div class="form-group">
          <label for="">Mail</label>
          <input type="text" class="form-control" v-model="user.email" />
        </div>
        <button class="btn tbn-primary" @click="submit">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
import FIREBASE_URL from '../config';
export default {
  data() {
    return {
      user: {
        username: '',
        email: '',
      },
    };
  },
  methods: {
    submit() {
      this.$http
        .post(FIREBASE_URL.firebaseUrl, this.user)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style></style>
