const lucide = require('lucide');

const getSvg = (name) => {
    const icon = lucide.icons[name];
    if (!icon) return 'Not found: ' + name;

    const attrs = 'xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';

    const content = icon.map(node => {
        return `<${node[0]} ${Object.entries(node[1]).map(([k, v]) => `${k}="${v}"`).join(' ')} />`;
    }).join('');

    return `<svg class="af-trigger-icon" ${attrs}>${content}</svg>`;
}

console.log(getSvg('PersonStanding'));
