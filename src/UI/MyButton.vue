<template>
    <button class="btn" :class="type" :disabled="disabled">
        <slot name="text">
            Click here
        </slot>
    </button>
</template>

<script>
export default {
    name:'my-button',
    props: {
        type: String,
        disabled: Boolean,
    }
}
</script>

<style lang="scss" scoped>
    @import '@/scss/global.scss';
    .btn {
        font-size: 18px;

        padding: 10px 30px;

        color: $light;

        cursor: pointer;

        border: 1px solid $accent-light;
        border-radius: 10px;

        background-color: $secondary-dark-color;

        &-big {
            padding: 20px 35px;
        }

        &-medium {
            padding: 15px 20px;
        }

        &-small {
            padding: 5px 15px;
        }

    }
</style>