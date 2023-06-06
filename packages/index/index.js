import Button from '@qtum-ui/button';


export default function install(app) {
    [
        Button,
    ].forEach(component => app.use(component));
}
