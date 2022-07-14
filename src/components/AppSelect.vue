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
            activeClass.value = !activeClass.value
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
.app-select {
    position: relative;

        &.active{
            .app-select__options{
                opacity: 1;
            }
        }

		&__header {
            font-weight: 700;
            font-size: 24px;
            margin-bottom: 12px;
		}

		&__title {
		}

		&__arrow {
		}

		&__body {
		}

		&__result {
            font-weight: 700;
            font-size: 24px;
            color: #F9A545;
		}

		&__options {
            position: absolute;
            top: 50%;
            left: 0;
            background: #E0E0E0;
            font-weight: 700;
            font-size: 24px;
            width: 275px;
            opacity: 0;
		}

		&__option {
                padding: 8px 20px;
                border-bottom: 1px solid #AAAAAA;
                cursor: pointer;
		}
}

</style>
