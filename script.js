const html = document.querySelector('html');
const body = document.querySelector('body');
const main = document.createElement('main');
body.style.boxSizing = 'border-box';
body.style.margin = '0';
body.style.padding = '8px';
main.style.backgroundColor = '#804f22';
main.style.display = 'grid';
main.style.gridTemplateColumns = 'repeat(3, 200px)';
main.style.gridTemplateRows = 'repeat(3, 200px)';
main.style.width = 'min-content';
main.style.padding = '6px';

const items = {
    'apple-trees': 'https://cdn.harvesttotable.com/htt/2009/07/23182018/Apple-tree-with-fruit-1.jpg',
    'tomatoes': 'https://www.growjoy.com/store/pc/catalog/manalucie_tomato_plant_1465_detail.jpg',
    'cows': 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Cow_female_black_white.jpg',
    'corn': 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-973555096-1583765387.jpg?crop=0.669xw:1.00xh;0.333xw,0',
    'chickens': 'https://cdn.britannica.com/18/137318-050-29F7072E/rooster-Rhode-Island-Red-roosters-chicken-domestication.jpg',
    'carrots': 'https://www.ufseeds.com/dw/image/v2/BFKV_PRD/on/demandware.static/-/Sites-master-urbanfarmer/default/dw07369b9a/images/products/Imperator-58-Carrot-Seeds.jpg?sw=450&sh=450',
    'pear-trees': 'https://cdn.shopify.com/s/files/1/0059/8835/2052/products/Seckel_Pear_1_a6305f8e-495f-441c-bcdb-2e6bb7ad5008_650x.jpg?v=1615987152',
    'pigs': 'https://www.canr.msu.edu/contentAsset/image/9c8f1a21-90e3-486d-9ca0-dd4a7b4b439d/fileAsset/filter/Resize,Jpeg/resize_w/750/jpeg_q/80',
    'sunflowers': 'https://www.ufseeds.com/dw/image/v2/BFKV_PRD/on/demandware.static/-/Sites-master-urbanfarmer/default/dw6c5cbe02/images/products/Early-Black-Heart-F1-Sunflower.jpg?sw=450&sh=450',
};

for (const [key, value] of Object.entries(items)) {
	const el = document.querySelector(`.${key}`);
    el.style.display = 'flex';
    el.style.justifyContent = 'center';
    el.style.alignItems = 'center';
    const img = document.createElement('img');
    img.src = value;
    el.appendChild(img);
}

const children = body.innerHTML;
body.innerHTML = '';
body.appendChild(main);
main.innerHTML = children;

const images = document.querySelectorAll('img');
images.forEach((image) => {
    image.style.height = '100%';
    image.style.width = '100%';
});