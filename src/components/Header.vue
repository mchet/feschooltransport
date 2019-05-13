<template xmlns="http://www.w3.org/1999/html" xmlns="http://www.w3.org/1999/html">
    <div>
        <p>Header</p>
        <router-link to="login">login</router-link>
        <router-link to="Find Routes">ViewFindRoute</router-link>
        <router-link to="Routes List">ViewRouteList</router-link>
        <router-link :to="{name:'ViewStopsList'}">ViewStopsList</router-link>
        <router-link to="Transports List">ViewTransportList</router-link>

        <header class="header">
            <div class="container">
                <div class="inner">
                    <img class="header-image" src="../assets/bar-header.svg">
                    <div>
                        <Search/>
                    </div>
                    <div class="header-logo"/>
                </div>
            </div>
        </header>


    </div>

</template>

<script>
    import Search from "./Search";
    export default {
        name: "Header",
        components: {Search}
    }
</script>

<style scoped lang="scss">
    @import '../styles/variables';


    .header {

        .inner {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: $size-7;
            justify-content: space-between;
        }

        .header-image {
            width: $size-5;
            height: $size-5;
        }

        .header-logo {
            width: $size-2;
            height: $size-2;
            background: center /cover url('../assets/icon-header.png') no-repeat;
        }
    }

</style>
