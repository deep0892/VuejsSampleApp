export const ComputedText = {
    data() {
        return {
            computedText: "Text",
        };
    },
    computed: {
        toComputeTextCount() {
            return this.computedText + " (" + this.computedText.length + ")";
        },
    },
};