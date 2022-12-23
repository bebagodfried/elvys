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