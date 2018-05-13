
function selectPack(){
    this.classList.toggle('selected');
}

var packs = document.getElementsByClassName('page-products__item-bg');
for(var i=0; i<packs.length;i++){
    if(!packs[i].classList.contains('disabled')) {
        packs[i].addEventListener('click', selectPack);
    }
}

document.querySelector('.page-products__description-after-item--link').addEventListener('click', function() {
		document.querySelector('.page-products__item-bg').classList.toggle('selected');
});