import QButton from '@qtum-ui/button';

export default async ({Vue}) => {
    if (typeof process === 'undefined') {
        Vue.component("q-button",QButton);
    }
}
