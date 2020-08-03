<template>
  <div>
    <div class="footer_eong">
      <ul>
        <li class="li_footer_eong">
          <button class="btn_class">
            <i class="far fa-heart"></i>
          </button>
        </li>
        <li class="li_footer_eong">
          <button class="btn_class">
            <i class="fas fa-user-circle"></i>
          </button>
        </li>
        <li class="li_footer_eong">
          <button class="btn_class">
            <i class="far fa-calendar-alt"></i>
          </button>
        </li>
        <li class="li_footer_eong">
          <button class="btn_class" @click="onSearch">
            <i class="far fa-calendar-alt"></i>
          </button>
        </li>
        <li class="li_footer_eong">
          <button class="btn_class">
            <i class="far fa-calendar-alt"></i>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onSearch() {
      this.$router.push("/search");
    }
  }
};
</script>

<style>
.footer_eong {
  border: 2px red solid;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 3rem;
}
.li_footer_eong {
  border: 2px black solid;
  float: left;
  width: 20%;
  height: 2.75rem;
  text-align: center;
}
.btn_class {
  border: 2px blue solid;
  padding-right: 10%;
  padding-left: 10%;
  width: 50%;
  height: 100%;
}
</style>