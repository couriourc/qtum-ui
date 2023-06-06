/** @file Button */
// @ts-ignore
import '@qtum-ui/style/global.css';
import Table from './src/table.vue';

export default Table;

export function install(app) {
    app.component("q-table",Table);
}
