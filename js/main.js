const productList = [
    {id:"01", name: "iphone", price:"17.000.000vnđ", image:"assets/images/iphone.jpg", productLink:"product-detail.html"},
    {id:"02", name: "Samsung", price:"20.000.000vnđ", image:"assets/images/samsung.jpg", productLink:"product-detail.html"},
    {id:"03", name: "nokia", price:"350.000vnđ", image:"assets/images/nokia.jpg", productLink:"product-detail.html"},
    {id:"04", name: "oppo", price:"4.000.000vnđ", image:"assets/images/oppo.jpg", productLink:"product-detail.html"}
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
    productDiv1.appendChild(productImage);

    // LẮP RÁP KHUNG 2
    const productDiv2 = document.createElement("div");
    productDiv2.setAttribute("class", "productDiv2");

    const productId = document.createElement("p"); 
    const productIdText = document.createTextNode(maMay);
    productId.appendChild(productIdText);

    const productName = document.createElement("p");
    const productNameText = document.createTextNode(tenMay);
    productName.appendChild(productNameText);
    
    const productPrice = document.createElement("p"); 
    const productPriceText = document.createTextNode(giaTien);
    productPrice.appendChild(productPriceText);

    const productLink = document.createElement("a");
    const productLinkText = document.createTextNode("Xem chi tiết");
    productLink.appendChild(productLinkText);
    productLink.setAttribute("href", linkXemChiTiet);
    productLink.setAttribute("target", "_blank");
    productLink.style.display = "block";
    productLink.style.marginBottom = "10px";

    productDiv2.appendChild(productName);
    productDiv2.appendChild(productPrice);
    productDiv2.appendChild(productId);
    productDiv2.appendChild(productLink);

    // TẠO 2 NÚT BẤM (MUA NGAY & THÊM GIỎ HÀNG)
    const btnContainer = document.createElement("div");
    btnContainer.style.display = "flex";
    btnContainer.style.gap = "10px";
    btnContainer.style.marginTop = "10px";

    const btnBuyNow = document.createElement("button");
    const btnBuyNowText = document.createTextNode("Mua ngay");
    btnBuyNow.appendChild(btnBuyNowText);
    btnBuyNow.style.padding = "8px";
    btnBuyNow.style.backgroundColor = "#27ae60";
    btnBuyNow.style.color = "white";
    btnBuyNow.style.border = "none";
    btnBuyNow.style.borderRadius = "5px";
    btnBuyNow.style.cursor = "pointer";
    btnBuyNow.style.flex = "1";

    const btnAddCart = document.createElement("button");
    const btnAddCartText = document.createTextNode("Thêm giỏ hàng");
    btnAddCart.appendChild(btnAddCartText);
    btnAddCart.style.padding = "8px";
    btnAddCart.style.backgroundColor = "#2980b9";
    btnAddCart.style.color = "white";
    btnAddCart.style.border = "none";
    btnAddCart.style.borderRadius = "5px";
    btnAddCart.style.cursor = "pointer";
    btnAddCart.style.flex = "1";

    // Lệnh lưu vào giỏ hàng
    btnAddCart.addEventListener("click", function() {
        luuVaoGioHang(maMay, tenMay, giaTien, linkAnh);
    });

    btnContainer.appendChild(btnBuyNow);
    btnContainer.appendChild(btnAddCart);
    productDiv2.appendChild(btnContainer);

    // LẮP GHÉP TẤT CẢ VÀO HỘP TO
    productItem.appendChild(productDiv1);
    productItem.appendChild(productDiv2);

    return productItem;
}

// HÀM LƯU SẢN PHẨM VÀO LOCAL STORAGE
function luuVaoGioHang(id, name, price, image) {
    let gioHang = JSON.parse(localStorage.getItem("gioHangCuaMinh")) || [];
    let sanPhamDaCo = gioHang.find(sp => sp.id === id);

    if (sanPhamDaCo) {
        sanPhamDaCo.soLuong += 1; 
    } else {
        gioHang.push({ id: id, name: name, price: price, image: image, soLuong: 1 });
    }

    localStorage.setItem("gioHangCuaMinh", JSON.stringify(gioHang));
    alert("Đã thêm " + name + " vào giỏ hàng thành công!");
}

// HÀM XÓA SẠCH GIỎ HÀNG
function xoaGioHang() {
    localStorage.removeItem("gioHangCuaMinh");
    alert("Đã xóa toàn bộ giỏ hàng!");
    location.reload();
}
