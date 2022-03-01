import SpeedyForm from "./SpeedyForm.vue";

const SpeedyFormPlugin = {
    install(Vue) {
        Vue.component("SpeedyForm", SpeedyForm);
    }
};

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(SpeedyFormPlugin);
}

export default SpeedyFormPlugin;
export {SpeedyForm};