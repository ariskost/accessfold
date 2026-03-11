const lucide = require('lucide');

const getSvg = (name) => {
    const icon = lucide.icons[name];
    if (!icon) return 'Not found: ' + name;

    const attrs = 'xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';

    const content = icon.map(node => {
        return `<${node[0]} ${Object.entries(node[1]).map(([k, v]) => `${k}="${v}"`).join(' ')} />`;
    }).join('');

    return `<svg ${attrs}>${content}</svg>`;
}

const names = [
    'Sun', 'Moon', 'Droplet', 'PaintRoller', 'Highlighter', 'Type', 'Pipette'
];

names.forEach(n => {
    console.log(`==== ${n} ====`);
    console.log(getSvg(n));
});
