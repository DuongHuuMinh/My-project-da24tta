let soLuong = document.getElementsByClassName("sl");
let donGia = document.getElementsByClassName("dg");
let thanhtien = document.getElementsByClassName("tht");
let tong = 0;
for(let i=0 ; i<soLuong.length ; i++)
{
    thanhtien[i].innerHTML = parseInt(soLuong[i].innerHTML) * parseInt(donGia[i].innerHTML);
    tong = parseInt(tong) + parseInt(thanhtien[i].innerHTML);
};
document.getElementById("Tgt").innerHTML=tong;

