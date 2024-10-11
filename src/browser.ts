import { add } from './logic/maths.js';

export function initializeBrowser()
{
    const element = document.createElement('p');
    element.innerText = add(2, 15).toString();
    document.body.append(element);
}
