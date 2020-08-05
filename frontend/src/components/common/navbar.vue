<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
        
        <b-navbar-nav>
            <b-nav-item>
                <img src="../../assets/images/펭수프로필.jpg" alt="" class="pengsu" v-b-toggle.sidebar-footer>
            </b-nav-item>
        </b-navbar-nav>
        
    </b-navbar>
    <b-sidebar id="sidebar-footer" aria-label="Sidebar with custom footer" no-header shadow>
        <template v-slot:footer="{ hide }">
        <div class="d-flex bg-dark text-light align-items-center px-3 py-2">
            <strong class="mr-auto">쌒편한세상</strong>
            <b-button size="sm" @click="hide">Close</b-button>
        </div>
        </template>
        <div class="px-3 py-2">
            <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            </p>
            <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
        </div>
    </b-sidebar>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .searchbutton{
        color:white;
        height:30px;
    }
    .pengsu{
        width:50px;
        height:40px;
        margin-top:5px;
        margin-bottom:5px;
    }
    .btn{
        padding:0.125rem 0.25rem;
    }
</style>