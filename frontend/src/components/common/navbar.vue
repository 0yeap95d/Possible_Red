<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            <b-nav-item href="#">Link</b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items --> 
        <b-navbar-nav class="ml-auto">
            <b-nav-form>
                <b-dropdown-item> 
                    <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                    <b-button size="sm" class="my-2 my-sm-0 searchbutton" type="submit"><i class="fas fa-search"></i></b-button>
                </b-dropdown-item>
            </b-nav-form>
        </b-navbar-nav>
        
        </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .searchbutton{
        color:white;
        height:30px;
    }
</style>