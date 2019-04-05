<template>

    <div class="login">
        <div class="login-content">
            <div class="login-columns">
                <div class="login-form">
                    <h3 class="title is-size-4 has-text-centered">Login</h3>
                    <form @submit.prevent="login">
                        <div class="form-container login-form-controls">
                            <div class="control login-control">
                                <img class="input-image" src="../assets/email.svg">
                                <input class="input login-input" type="text" placeholder="Login">
                            </div>
                            <div class="control password-control">
                                <img class="input-image" src="../assets/star.svg">
                                <input class="input password-input" type="text" placeholder="Password">
                            </div>
                            <form>
                                <input type="checkbox"> Remember me
                            </form>
                        </div>
                        <div class="has-text-centered">
                            <button type="submit"
                                    class="button is-primary">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>


</template>

<script lang="ts">
export default {};

</script>

<style scoped>
    body {
        /*width: 100%;*/
        /*height: 100%;*/
        /*font-family: Arial;*/
        /*padding: 0;*/
        /*margin: 0;*/

        background-color: white;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 3;
    }

    .columns {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .login-columns {
        color: gray;
        padding: 2px 6px;
        border: 1px solid #aaa;
        border-radius: 4px;
        display: inline-flex;
        text-align: center;
    }

    .login-columns {
        margin-top: 100px;
        margin-bottom: 100px;
        margin-right: 150px;
        margin-left: 80px;
    }
    .input-image{
        padding: 2px 7px;
        height: 10px;
        position: absolute;
        top: 6px;
    }
    .control{
        position: relative;
        margin-bottom:18px;
    }
    .input{
        padding: 5px 5px 5px 20px;
        border-style: solid;
        border-color: #aaa;
        border-radius:4px;
        border-width: 1px;


    }




    .button {
        text-align: center;
        width: 50%;
        background-color: #0b24ff;
        border: none;
        border-radius: 4px;
        color: #fff;
        font-size: 16px;
        padding: 5px 24px;
        height: 30px;
        margin-top: 10px;
        cursor: pointer;
    }


</style>
