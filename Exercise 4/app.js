new Vue({
    el: "#exercise",
    data: {
        showEffect: "",
        isRed: true,
        border: "bd",
        cust_class: "empty",
        user_class: "",
        is_Class2: "",
        color: "gray",
        widthL: 0,
        height: "20px",
    },
    computed: {
        attachClass2: function() {
            return {
                class2: this.is_Class2 == "true" ? true : false,
            };
        },
        divClasses: function() {
            return {
                red: this.isRed,
            };
        },
    },
    methods: {
        startEffect: function() {
            var vm = this;
            setInterval(function() {
                vm.showEffect = vm.showEffect == "highlight" ? "shrink" : "highlight";
            }, 500);
        },
        showProgress: function() {
            var vm = this;
            setInterval(function() {
                vm.widthL = vm.widthL >= 100 ? 100 : vm.widthL + 10;
            }, 500);
        },
    },
});