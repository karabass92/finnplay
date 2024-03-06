<script>
export default {
    name: 'login-input',
    props: {
        modelValue: [String]
    },
    data() {
        return {
            isActive: false,
            isError: false
        }
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        },
        onFocusHandler() {
            this.isActive = true
            this.isError = false
        },
        onBlurHandler() {
            if(!this.modelValue) {
                this.isError = true
                this.isActive = false
            }
        }
    }
}
</script>


<template>
    <div class="loginInputContainer" :class="{ error: isError}">
        <input
            type="text"
            :value="modelValue" 
            @input="updateInput"
            @focus="onFocusHandler" 
            @blur="onBlurHandler"
        >
        <span class="placeholder" :class="{ active: isActive}">
            Login
        </span>
        <span v-if="this.isError" class="errorMessage">
            Field is required!
        </span>
    </div>
</template>


<style scoped>
.loginInputContainer {
    position: relative;
    width: 100%;
    height: 64px;
    border-radius: 4px;
}
.loginInputContainer > input {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 100;
    padding: 16px 16px 0 16px;
    outline: none;
    border-radius: 4px;
    border: 1px solid rgba(242, 242, 242, 1);
    background: transparent;
}
.placeholder {
    position: absolute;
    left: 16px;
    top: 24px;
    z-index: 10;
    color: rgba(128, 128, 128, 1);
    transition: all ease 0.1s;
}
.active {
    position: absolute;
    font-size: 12px;
    line-height: 14.4px;
    top: 16px;
    left: 16px;
    color: rgba(128, 128, 128, 1);
    transition: all ease 0.1s;
}
.error {
    border: 1px solid #DC0B35;
}
.errorMessage {
    position: absolute;
    display: block;
    bottom: 0;
    left: 16px;
    color: #DC0B35;
    font-size: 10px;
}
</style>