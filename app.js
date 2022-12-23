/**
 * @package: elvys - SCSS file
 * @link   : https://github.com/bebagodfried/elvys.git
 * @version: 1.0.0
 * @license: CC BY 4.0, MIT
 */
// package informations
let design = selectId('fwk')
    design.innerHTML = `elvys`

// navigation
const nav = select('nav a', true)
      nav.forEach(item => {
        if (item.href == $_('url')) {
             item.style.color = 'red';
        }
      });

echo(date('Y'), '#copyright')