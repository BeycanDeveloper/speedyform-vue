<template>
    <SpeedyForm action="https://httpbin.org/post" :complete="complete">
        <input type="text" name="naber">

        <Submit>Submit</Submit>
    </SpeedyForm>
</template>

<script>
import SpeedyForm from '../src/SpeedyForm.vue';
import Submit from '../src/components/Submit.vue';

export default {
    name: 'App',
    components: {
        SpeedyForm,
        Submit
    },
    methods: {
        complete(response, error) {
            console.log(response, error);
        }
    }
}
</script>

<style lang="scss">
</style>
