document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.products-container .product');
    const previews = document.querySelectorAll('.product-preview .preview');
    const closeIcons = document.querySelectorAll('.product-preview .close-preview');
  
    products.forEach((product) => {
      product.addEventListener('click', () => {
        const name = product.getAttribute('data-name');
        previews.forEach((preview) => {
          if (preview.getAttribute('data-target') === name) {
            document.querySelector('.products-preview').style.display = 'flex';
            preview.classList.add('active');
          }
        });
      });
    });
  
    closeIcons.forEach((icon) => {
      icon.addEventListener('click', () => {
        document.querySelector('.products-preview').style.display = 'none';
        previews.forEach((preview) => preview.classList.remove('active'));
      });
    });
  });
  