function inBangCC(){
    let myForm = document.forms["forminCC"];
    let num = myForm.eletment[0].innerHTML;
}

const productList = [
    {id:"01", name: "iphone", price:"17.000.000vnđ", image:"../assets/images/iphone.jpg", productLink:"product-detail.html"},
    {id:"02", name: "Samsung", price:"20.000.000vnđ", image:"../assets/images/samsung.jpg", productLink:"product-detail.html"},
    {id:"03", name: "nokia", price:"350.000vnđ", image:"../assets/images/nokia.jpg", productLink:"product-detail.html"},
    {id:"04", name: "oppo", price:"4.000.000vnđ", image:"../assets/images/oppo.jpg", productLink:"product-detail.html"},
    {id:"04", name: "oppo", price:"4.000.000vnđ", image:"../assets/images/oppo.jpg", productLink:"product-detail.html"},
    {id:"04", name: "oppo", price:"4.000.000vnđ", image:"../assets/images/oppo.jpg", productLink:"product-detail.html"},
    {id:"04", name: "oppo", price:"4.000.000vnđ", image:"../assets/images/oppo.jpg", productLink:"product-detail.html"}
];


function taoSanPham(maMay, tenMay, giaTien, linkAnh, linkXemChiTiet) {
    // TẠO HỘP TO NGOÀI CÙNG
    const productItem = document.createElement("div");
    productItem.setAttribute("class", "productItem");


    // LẮP RÁP KHUNG 1 (CHỨA ẢNH)
    const productDiv1 = document.createElement("div");
    productDiv1.setAttribute("class", "productDiv1");

    const productImage = document.createElement("img");
    productImage.setAttribute("src", linkAnh);
    productImage.setAttribute("alt", tenMay);

    // Gắn ảnh vào khung 1
    productDiv1.appendChild(productImage);

    // LẮP RÁP KHUNG 2
    const productDiv2 = document.createElement("div");
    productDiv2.setAttribute("class", "productDiv2");

        // Tạo phần Mã máy
    const productId = document.createElement("p"); 
    const productIdText = document.createTextNode(maMay);
    productId.appendChild(productIdText);

    // Tạo phần Tên máy
    const productName = document.createElement("p");
    const productNameText = document.createTextNode(tenMay);
    productName.appendChild(productNameText);
    
    // Tạo phần Giá tiền
    const productPrice = document.createElement("p"); 
    const productPriceText = document.createTextNode(giaTien);
    productPrice.appendChild(productPriceText);

    // Tạo mô tả 
    const productLink = document.createElement("a");
    const productLinkText = document.createTextNode("Xem chi tiết");
    productLink.appendChild(productLinkText);
    productLink.setAttribute("href", linkXemChiTiet);
    productLink.setAttribute("target", "_blank");

    // Gắn tên và giá vào khung 2
    productDiv2.appendChild(productName);
    productDiv2.appendChild(productPrice);
    productDiv2.appendChild(productId);
    productDiv2.appendChild(productLink);

    // LẮP GHÉP TẤT CẢ VÀO HỘP TO

    productItem.appendChild(productDiv1);
    productItem.appendChild(productDiv2);

    // thêm vào body
    return productItem;
}



