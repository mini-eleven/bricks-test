<template>
    <component :is="tag" :style="styleProps" class="l-text-component" @click="handleClick">
        {{ text }}</component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useComponentCommon from '@/hooks/useComponentCommon'
import { transformToComponentProps, textDefaultProps, textStylePropNames } from '@/defaultProps'
const defaultProps = transformToComponentProps(textDefaultProps)
export default defineComponent({
    name: 'l-text',
    props: {
        tag: {
            type: String,
            default: 'div'
        },
        ...defaultProps,
    },
    setup(props) {
        const { styleProps, handleClick } = useComponentCommon(props, textStylePropNames)
        return {
            styleProps,
            handleClick
        }
    }
})
</script>

<style scoped>
.l-text-component {
    position: relative !important;
}
</style>