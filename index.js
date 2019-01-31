const block = document.querySelector('#myBlock');
block.addEventListener('mousedown', (e)=>{
    moving(e);
    block.addEventListener('mousemove', moving )

});

block.addEventListener('mouseup', ()=>block.removeEventListener('mousemove', moving))

function moving(e) {
    e.target.style.left = e.pageX - e.target.offsetWidth / 2 + 'px';
    e.target.style.top = e.pageY - e.target.offsetHeight / 2 + 'px'
}
