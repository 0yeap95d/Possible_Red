<template>
  <div>
    <b-navbar type="dark" variant="dark" style="width:100%;">
      <b-navbar-nav>
        <b-nav-item href="#">Nickname</b-nav-item>

        <!-- Navbar dropdowns -->
        <b-nav-item-dropdown text="User">
          <b-dropdown-item @click="onAccount">Account</b-dropdown-item>
          <b-dropdown-item href="#">Settings</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
    name: "ProfileHeader",
    methods: {
    onAccount() {
      this.$router.push("/changeuser");
    }
  }
}
</script>

<style>
</style>