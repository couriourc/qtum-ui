/** @file Button */
// @ts-ignore
import '@qtum-ui/style/global.css';
import Button from './src/button.vue';

export default Button;

export function install(app) {
    app.component("q-button",Button);
}
