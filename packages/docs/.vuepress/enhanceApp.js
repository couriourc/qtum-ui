import QButton from '@qtum/button';

export default async ({Vue}) => {
    if (typeof process === 'undefined') {
        Vue.component("q-button",QButton);
    }
}
