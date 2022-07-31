// viewAll function start
function viewAll(){
    const ov = document.getElementById('home_table_overlay');
    const va = document.getElementById('view_all');
    const vl = document.getElementById('view_less');
    const div = document.getElementById('recently_minded_table_div');
    ov.style.display = 'none'
    va.style.display = 'none'
    vl.style.display = 'block'
    div.style.height = 'auto'
    div.style.overflowY = 'initial'
} 

function viewLess(){
    const ov = document.getElementById('home_table_overlay');
    const va = document.getElementById('view_all');
    const vl = document.getElementById('view_less');
    const div = document.getElementById('recently_minded_table_div');
    ov.style.display = 'block'
    va.style.display = 'block'
    vl.style.display = 'none'
    div.style.height = '500px'
    div.style.overflowY = 'hidden'
}
// viewAll function end