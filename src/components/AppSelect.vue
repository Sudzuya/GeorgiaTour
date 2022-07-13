<template>
    <div class="app-select" :class="{'active': activeClass}">
        <div class="app-select__header" v-if="title" @click="setActiveSelect">
            <div class="app-select__title">{{title}}</div>
            <div class="app-select__arrow"></div>
        </div>
        <div class="app-select__body">
            <div class="app-select__result">
                {{result}}
            </div>
            <div class="app-select__options">
                <div class="app-select__option"
                    v-for="option of options"
                    :key="option"
                    @click="selectOptions(option)"
                >
                    {{option.title}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'

export default {
    props: {
        options: {
            type: Array,
            required: true
        },
        modelValue: {
            type: String,
            required: false
        },
        title: {
            type: String,
            required: true
        }
    },
    setup(props, {emit}) {
        // consts
        const activeClass = ref(false)
        const result = ref(null)


        //functions
        const setActiveSelect = () => {
            activeClass.value = !activeClass.value
        }

        const selectOptions = (option) => {
            result.value = option.title

            emit('update:modelValue', option.value)
        }

        return {
            activeClass,
            result,
            setActiveSelect,
            selectOptions,
        }
    }
}
</script>

<style lang="scss">
 div {
        color: #040813;
 }
</style>
