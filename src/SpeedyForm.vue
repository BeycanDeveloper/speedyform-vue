<template>
    <form ref="form" :action="action" :enctype="multipart ? 'multipart/form-data': null">
        <slot>
        </slot>
    </form>
</template>

<script>
import axios from 'axios';

export default {
    name: 'SpeedyForm',
    props: {
        multipart: {
            type: Boolean
        },
        action: {
            type: String,
            required: true
        },
        complete: {
            type: Function,
            required: true
        },
        before: {
            type: Function,
            default: function () {
                return;
            }
        }
    },
    data: () => ({
        formData: null
    }),
    methods: {
        async submit() {
            await this.before();

            this.formData = new FormData(this.$refs.form);
            
            axios.post(this.action, this.formData)
            .then((response) => {
                this.complete(response, null);
            })
            .catch((error) => {
                this.complete(error.response, error);
            });
        }
    }
}
</script>
