let vm = {
    el: '#app',
    count: 10,
    init: function () {
        return () => {
            return this.count;
        };
    },
};
let getCount = vm.init();
let count = getCount();
console.log(count);
