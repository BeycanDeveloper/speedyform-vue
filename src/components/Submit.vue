<template>
    <button :class="cssClass ? cssClass : 'btn btn-primary'" type="submit" @click.prevent="$parent.submit">
        <slot>
        </slot>
    </button>
</template>

<script>
export default {
    name: 'Submit',
    props: {
        cssClass: {
            type: String
        }
    }
}
</script>
