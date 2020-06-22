<template>
  <div>
    <h3>Edit the User</h3>
    <p>Locale: {{ $route.query.locale }}</p>
    <p>Analytics: {{ $route.query.q }}</p>
    <hr />
    <button class="btn btn-primary" @click="consfirmed = !consfirmed">
      Confirm
    </button>
    <div style="height: 700px;"></div>
    <p id="data">Some extra data</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      consfirmed: false,
    };
  },
  methods: {},
  beforeRouteLeave(to, from, next) {
    // perform if we are allowed to leave
    // We have access to component data and other method
    if (this.consfirmed) {
      next();
    } else {
      if (confirm('Are you sure')) {
        next();
      } else {
        next(false);
      }
    }
  },
};
</script>
