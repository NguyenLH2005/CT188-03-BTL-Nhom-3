/*
Clone item with js
Author: Tran Anh Vu
*/

const itemList = [
  {
    id: 'vot1',
    img: "./assets/images/anhsanpham/vot1.jpg",
    nameItem: "Vợt cầu lông Yonex Nanoflare 700 Pro 2024",
    costItem: "4.309.000 ₫"
  },
  {
    id: 'vot2',
    img: "./assets/images/anhsanpham/vot2.jpg",
    nameItem: "Vợt Cầu Lông Victor Thruster Ryuga Metallic CPS",
    costItem: "3.950.000 ₫"
  },
  {
    img: "./assets/images/anhsanpham/vot3.jpg",
    nameItem: "Vợt cầu lông Lining Halbertec 3000",
    costItem: "1.390.000 ₫"
  },
  {
    img: "./assets/images/anhsanpham/vot4.jpg",
    nameItem: "Vợt cầu lông Mizuno Fortius 11 Quick",
    costItem: "4.289.000 ₫"
  },
  {
    img: "./assets/images/anhsanpham/vot5.jpg",
    nameItem: "Vợt cầu lông VNB V200 Xanh chính hãng",
    costItem: "529.000 ₫"
  },
  {
    img: "./assets/images/anhsanpham/giay1.jpg",
    nameItem: "Giày cầu lông Yonex SHB 65X4 2025",
    costItem: "1.809.000 ₫"
  },
  {
    img: "./assets/images/anhsanpham/giay2.jpg",
    nameItem: "Giày cầu lông Victor P-UTM A",
    costItem: "1.800.000 ₫"
  },
  {
    img: "./assets/images/anhsanpham/giay3.jpg",
    nameItem: "Giày cầu lông Lining AYTU025-1 chính hãng",
    costItem: "1.325.000 ₫"
  },
  {
    img: "./assets/images/anhsanpham/giay4.jpg",
    nameItem: "Giày cầu lông Victor Doraemon P-DRM A",
    costItem: "1.850.000 ₫"
  },
  {
    img: "./assets/images/anhsanpham/giay5.jpg",
    nameItem: "Giày cầu lông Lining AYAU007-4",
    costItem: "2.500.000 ₫"
  },

  {
    img: "./assets/images/anhsanpham/ao1.jpg",
    nameItem: "Áo cầu lông Yonex A293 nam - Trắng",
    costItem: "130.000 ₫"
  },
  {
    img: "./assets/images/anhsanpham/ao2.jpg",
    nameItem: "Áo cầu lông Victor 2115 Nam - Trắng xanh",
    costItem: "160.000 ₫"
  },
  {
    img: "./assets/images/anhsanpham/ao3.jpg",
    nameItem: "Áo cầu lông Lining 25005 nam - Đen",
    costItem: "160.000 ₫"
  },
  {
    img: "./assets/images/anhsanpham/ao4.jpg",
    nameItem: "Áo cầu lông Lining 25001 nữ - Tím hồng",
    costItem: "160.000 ₫"
  },
  {
    img: "./assets/images/anhsanpham/ao5.jpg",
    nameItem: "Áo cầu lông Yonex TRM2883 chính hãng",
    costItem: "189.000 ₫"
  },

  {
    img: "./assets/images/anhsanpham/vay1.jpg",
    nameItem: "Váy cầu lông Yonex 26118EX - Đen chính hãng",
    costItem: "500.000 ₫"
  },
  {
    img: "./assets/images/anhsanpham/vay2.jpg",
    nameItem: "Váy cầu lông Yonex 062 - Đỏ",
    costItem: "150.000 ₫"
  },
  {
    img: "./assets/images/anhsanpham/vay3.jpg",
    nameItem: "Váy cầu lông Lining 035 - Trắng",
    costItem: "150.000 ₫"
  },
  {
    img: "./assets/images/anhsanpham/vay4.jpg",
    nameItem: "Váy cầu lông Victor 7053 - Trắng đen",
    costItem: "150.000 ₫"
  },
  {
    img: "./assets/images/anhsanpham/vay5.jpg",
    nameItem: "Váy cầu lông Victor 7053 - Đen trắng",
    costItem: "150.000 ₫"
  },

  {
    img: "./assets/images/anhsanpham/quan1.jpg",
    nameItem: "Quần cầu lông Yonex TSM2910 chính hãng",
    costItem: "149.000 ₫"
  },

  {
    img: "./assets/images/anhsanpham/quan2.jpg",
    nameItem: "Quần cầu lông Victor 628 - Xanh biển",
    costItem: "130.000 ₫"
  },


  {
    img: "./assets/images/anhsanpham/quan3.jpg",
    nameItem: "Quần cầu lông Lining 967 - Trắng",
    costItem: "130.000 ₫"
  },


  {
    img: "./assets/images/anhsanpham/quan4.jpg",
    nameItem: "Quần cầu lông Lining 92009 - Xanh ngọc",
    costItem: "130.000 ₫"
  },


  {
    img: "./assets/images/anhsanpham/quan5.jpg",
    nameItem: "Quần cầu lông Yonex TSM2911 hính hãng",
    costItem: "149.000 ₫"
  },



]

var itemContainer = document.querySelector('.content');
var item = document.querySelector('.item');

itemList.forEach(function (data) {
  const clone = item.cloneNode(true);
  clone.style.display = "block";
  clone.querySelector('img').src = data.img;
  clone.querySelector('.nameItem').textContent = data.nameItem;
  clone.querySelector('.costItem').textContent = data.costItem;
  itemContainer.appendChild(clone);
}
)

