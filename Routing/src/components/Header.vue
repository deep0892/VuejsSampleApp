<template>
  <ul class="nav nav-pills">
    <router-link to="/" tag="li" active-class="active" exact
      ><a>Home</a></router-link
    >
    <router-link to="/user/1" tag="li" active-class="active"
      ><a>User1</a></router-link
    >
    <router-link to="/user/2" tag="li" active-class="active"
      ><a>User2</a></router-link
    >
    <router-link to="/user/:id" tag="li" active-class="active" props="true"
      ><a>User2</a></router-link
    >
  </ul>
</template>
