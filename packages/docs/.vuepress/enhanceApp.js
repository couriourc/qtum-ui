import ElementUI from '@qtum/button';

export default async ({Vue}) => {
    if (typeof process === 'undefined') {
        Vue.use(ElementUI);
    }
}
