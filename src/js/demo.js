import { cube } from './math'

export default function component(x = 3) {
    var element = document.createElement('div');

    element.innerHTML = 'Hello Webpack5.  ' + cube(x);

    element.className = 'hello webpack'

    return element;
}