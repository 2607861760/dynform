export default {
    props: ['name', 'value'],

    data() {
        return {
            currentValue: this.value
        };
    },
    methods: {
        onInput(value) {
            this.$emit('input', this.name, value);
        },
        reset() {
            this.currentValue = "";
        },
    },
    watch: {
        value(val) {
            this.currentValue = val;
        }
    }
};