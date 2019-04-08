<template>
    <div class="search">
        <div class="control">

            <img class="input-image" src="../assets/search.svg">
            <input type="text" class="search-input" name="Search" placeholder="Search">
        </div>

        <div class="autocomlete">Autocomlete</div>
    </div>

</template>

<script>
    export default {
        name: "Search"
    }
</script>

<style scoped lang="scss">
    @import '../styles/variables';
.search{
    width: 450px;
}
    .search-input {
        padding: 5px 5px 5px 20px;
        width: 100%;
        border-style: solid;
        border-color: #aaa;
        border-radius: 4px;
        border-width: 1px;
    }


</style>
