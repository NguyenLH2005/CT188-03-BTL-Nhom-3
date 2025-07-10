/*
Clone item with js
Author: Tran Anh Vu
*/

const itemList = [
  {
    class:'racket moreThan3M yonex',
    img: "./assets/images/anhsanpham/vot1.jpg",
    nameItem: "Vợt cầu lông Yonex Nanoflare 700 Pro 2024",
    costItem: "4.309.000 ₫"
  },
  {
    class:'racket moreThan3M victor',
    img: "./assets/images/anhsanpham/vot2.jpg",
    nameItem: "Vợt Cầu Lông Victor Thruster Ryuga Metallic CPS",
    costItem: "3.950.000 ₫"
  },
  {
    class:'racket from1MTo2M lining',
    img: "./assets/images/anhsanpham/vot3.jpg",
    nameItem: "Vợt cầu lông Lining Halbertec 3000",
    costItem: "1.390.000 ₫"
  },
  {
    class:'racket moreThan3M mizuno',
    img: "./assets/images/anhsanpham/vot4.jpg",
    nameItem: "Vợt cầu lông Mizuno Fortius 11 Quick",
    costItem: "4.289.000 ₫"
  },
  {
    class:'racket from500To1M vnb',
    img: "./assets/images/anhsanpham/vot5.jpg",
    nameItem: "Vợt cầu lông VNB V200 Xanh chính hãng",
    costItem: "529.000 ₫"
  },
  {
    class:'shoes from1MTo2M yonex',
    img: "./assets/images/anhsanpham/giay1.jpg",
    nameItem: "Giày cầu lông Yonex SHB 65X4 2025",
    costItem: "1.809.000 ₫"
  },
  {
    class:'shoes from1MTo2M victor',
    img: "./assets/images/anhsanpham/giay2.jpg",
    nameItem: "Giày cầu lông Victor P-UTM A",
    costItem: "1.800.000 ₫"
  },
  {
    class:'shoes from1MTo2M lining',
    img: "./assets/images/anhsanpham/giay3.jpg",
    nameItem: "Giày cầu lông Lining AYTU025-1 chính hãng",
    costItem: "1.325.000 ₫"
  },
  {
    class:'shoes from1MTo2M victor',
    img: "./assets/images/anhsanpham/giay4.jpg",
    nameItem: "Giày cầu lông Victor Doraemon P-DRM A",
    costItem: "1.850.000 ₫"
  },
  {
    class:'shoes from2MTo3M lining',
    img: "./assets/images/anhsanpham/giay5.jpg",
    nameItem: "Giày cầu lông Lining AYAU007-4",
    costItem: "2.500.000 ₫"
  },

  {
    class:'shirt lessThan500 yonex',
    img: "./assets/images/anhsanpham/ao1.jpg",
    nameItem: "Áo cầu lông Yonex A293 nam - Trắng",
    costItem: "130.000 ₫"
  },
  {
    class:'shirt lessThan500 victor',
    img: "./assets/images/anhsanpham/ao2.jpg",
    nameItem: "Áo cầu lông Victor 2115 Nam - Trắng xanh",
    costItem: "160.000 ₫"
  },
  {
    class:'shirt lessThan500 lining',
    img: "./assets/images/anhsanpham/ao3.jpg",
    nameItem: "Áo cầu lông Lining 25005 nam - Đen",
    costItem: "160.000 ₫"
  },

  {
    class:'shirt lessThan500 lining',
    img: "./assets/images/anhsanpham/ao4.jpg",
    nameItem: "Áo cầu lông Lining 25001 nữ - Tím hồng",
    costItem: "160.000 ₫"
  },
  {
    class:'shirt lessThan500 yonex',
    img: "./assets/images/anhsanpham/ao5.jpg",
    nameItem: "Áo cầu lông Yonex TRM2883 chính hãng",
    costItem: "189.000 ₫"
  },

  {
    class:'dress from500To1M yonex',
    img: "./assets/images/anhsanpham/vay1.jpg",
    nameItem: "Váy cầu lông Yonex 26118EX - Đen chính hãng",
    costItem: "500.000 ₫"
  },
  {
    class:'dress lessThan500 yonex',
    img: "./assets/images/anhsanpham/vay2.jpg",
    nameItem: "Váy cầu lông Yonex 062 - Đỏ",
    costItem: "150.000 ₫"
  },
  {
    class:'dress lessThan500 lining',
    img: "./assets/images/anhsanpham/vay3.jpg",
    nameItem: "Váy cầu lông Lining 035 - Trắng",
    costItem: "150.000 ₫"
  },
  {
    class:'dress lessThan500 victor',
    img: "./assets/images/anhsanpham/vay4.jpg",
    nameItem: "Váy cầu lông Victor 7053 - Trắng đen",
    costItem: "150.000 ₫"
  },
  {
    class:'dress lessThan500 victor',
    img: "./assets/images/anhsanpham/vay5.jpg",
    nameItem: "Váy cầu lông Victor 7053 - Đen trắng",
    costItem: "150.000 ₫"
  },

  {
    class:'trouser lessThan500 yonex',
    img: "./assets/images/anhsanpham/quan1.jpg",
    nameItem: "Quần cầu lông Yonex TSM2910 chính hãng",
    costItem: "149.000 ₫"
  },

  {
    class:'trouser lessThan500 victor',
    img: "./assets/images/anhsanpham/quan2.jpg",
    nameItem: "Quần cầu lông Victor 628 - Xanh biển",
    costItem: "130.000 ₫"
  },


  {
    class:'trouser lessThan500 lining',
    img: "./assets/images/anhsanpham/quan3.jpg",
    nameItem: "Quần cầu lông Lining 967 - Trắng",
    costItem: "130.000 ₫"
  },


  {
    class:'trouser lessThan500 lining',
    img: "./assets/images/anhsanpham/quan4.jpg",
    nameItem: "Quần cầu lông Lining 92009 - Xanh ngọc",
    costItem: "130.000 ₫"
  },


  {
    class:'trouser lessThan500 yonex',
    img: "./assets/images/anhsanpham/quan5.jpg",
    nameItem: "Quần cầu lông Yonex TSM2911 hính hãng",
    costItem: "149.000 ₫"
  },



]

var itemContainer = document.querySelector('.content');
var item = document.querySelector('.item');

itemList.forEach(function (data) {
  const clone = item.cloneNode(true); 
  let classArray = data.class.split(" ");
  for(let i=0; i < classArray.length; i++)
  {
    clone.classList.add(classArray[i]);
  }
  clone.style.display = "block";
  clone.querySelector('img').src = 
  data.img;
  clone.querySelector('.nameItem').textContent = data.nameItem;
  clone.querySelector('.costItem').textContent = data.costItem;
  itemContainer.appendChild(clone);
}
)


//To chose all item of product
var all = document.querySelectorAll('.content .item');

//To count hiden item
function countHidenItem(all)
{
    let cnt = 0;
    for(let i=1; i<all.length; i++)
    {
      if(all[i].style.display === 'none')
      {
        cnt++;
      }
    }
    return cnt;
}
//To count type of filter follow
function countTypeOfFilter(selectedFilter)
{
  let count = 0;

  if(selectedFilter.classList.contains('typeFilterItem'))
  {
    count++;
  }
  if(selectedFilter.classList.contains('typeFilterCost'))
  {
    count++;
  }
  if(selectedFilter.classList.contains('typeFilterBranch'))
  {
    count++;
  }
  return count;
}


//To filter all item
function filterAll()
{
  for(var i=1; i<all.length; i++)
  {
      all[i].style.display = 'block';
  }

  let arrayClass = [...itemContainer.classList];
  for(let i=0; i < arrayClass.length; i++)
  {
    if(arrayClass[i]!='content')
    {
        itemContainer.classList.remove(arrayClass[i]);
    }
  }
  
}

// Hàm filter chung cho từng loại
function filterByClass(className, typeClass) {
  if (countHidenItem(all) === 0) {
    for (var i = 1; i < all.length; i++) {
      all[i].style.display = 'none';
    }
        console.log('Vao dk if 1');
  }
  selectedFilter.classList.add(typeClass);
  for (var i = 1; i < all.length; i++) {
    if(countTypeOfFilter(selectedFilter) < 2){
      if(all[i].classList.contains(className))
      {
        all[i].style.display = 'block';
      }
    }
    else
    {
      if(all[i].style.display === 'block' && !all[i].classList.contains(className))
          {
          
              all[i].style.display = 'none';
              console.log(all[i]);
              console.log('Vao dk else if');
          }
    }
  }
}


// Select All
var selectAll = document.querySelector('.sidebar__filter--all');
selectAll.addEventListener("click",filterAll);

// Select Racket
var selectRacket = document.querySelector('.sidebar__filter__subContaniner p:first-child');
selectRacket.addEventListener("click",function()
{
  filterByClass('racket','typeFilterItem');
});

// Select Shoes
var selectShoes = document.querySelector('.sidebar__filter__subContaniner p:nth-child(2)');
selectShoes.addEventListener("click", function() {
  filterByClass('shoes', 'typeFilterItem');
});
//Select Shirt
var selectShirt = document.querySelector('.sidebar__filter__subContaniner p:nth-child(3)');
selectShirt.addEventListener("click", function() {
  filterByClass('shirt', 'typeFilterItem');
});


// Select Dress
var selectDress = document.querySelector('.sidebar__filter__subContaniner p:nth-child(4)');
selectDress.addEventListener("click", function() {
  filterByClass('dress', 'typeFilterItem');
});


// Select Trouser
var selectTrouser = document.querySelector('.sidebar__filter__subContaniner p:nth-child(5)');
selectTrouser.addEventListener("click", function() {
  filterByClass('trouser', 'typeFilterItem');
});


var subContainers = document.querySelectorAll('.sidebar__filter__subContaniner');
// Select cost less than 500 
var subContainers = document.querySelectorAll('.sidebar__filter__subContaniner');
var selectLessThan500 = subContainers[1].querySelector('p:first-child');
selectLessThan500.addEventListener("click", function() {
  filterByClass('lessThan500', 'typeFilterCost');
});

// Select cost from 500 to 1M 
var selectFrom500To1M = subContainers[1].querySelector('p:nth-child(2)');
selectFrom500To1M.addEventListener("click", function() {
  filterByClass('from500To1M', 'typeFilterCost');
});

// Select cost from 1M to 2M 
var selectFrom1Mto2M = subContainers[1].querySelector('p:nth-child(3)');
selectFrom1Mto2M.addEventListener("click", function() {
  filterByClass('from1MTo2M', 'typeFilterCost');
});

// Select cost from 2M to 3M 
var selectFrom2MTo3M = subContainers[1].querySelector('p:nth-child(4)');
selectFrom2MTo3M.addEventListener("click", function() {
  filterByClass('from2MTo3M', 'typeFilterCost');
});


// Select cost more than 3M 
var selectMoreThan3M = subContainers[1].querySelector('p:nth-child(5)');
selectMoreThan3M.addEventListener("click", function() {
  filterByClass('moreThan3M', 'typeFilterCost');
});


// Select Yonex
var selectYonex = subContainers[2].querySelector('p:first-child');
selectYonex.addEventListener("click", function() {
  filterByClass('yonex', 'typeFilterBranch');
});



// Select Lining
var selectLining = subContainers[2].querySelector('p:nth-child(2)');
selectLining.addEventListener("click", function() {
  filterByClass('lining', 'typeFilterBranch');
});

// Select Victor
var selectVictor = subContainers[2].querySelector('p:nth-child(3)');
selectVictor.addEventListener("click", function() {
  filterByClass('victor', 'typeFilterBranch');
});


// Select Mizuno
var selectMizuno = subContainers[2].querySelector('p:nth-child(4)');
selectMizuno.addEventListener("click", function() {
  filterByClass('mizuno', 'typeFilterBranch');
});

// Select VNB
var selectVNB = subContainers[2].querySelector('p:nth-child(5)');
selectVNB.addEventListener("click", function() {
  filterByClass('vnb', 'typeFilterBranch');
});

//Lợi dụng sự kiện nổi bọt để xử lý thêm class của cha
var selectedFilter = document.querySelector('.content');


//Select descendent sort 
var orderLowToHigh = subContainers[3].querySelector('p:first-child');
orderLowToHigh.addEventListener('click', function()
{
    ascendent(itemList);
});

var orderHighToLow = subContainers[3].querySelector('p:nth-child(2)');
orderHighToLow.addEventListener('click', function()
{
    descendent(itemList);
});



function ascendent(itemList)
{
  for(let i=0; i<itemList.length-1; i++)
  {
      for(let j=i+1; j<itemList.length; j++)
      {
          let costNumberI = parseInt(itemList[i].costItem.replace(/\D/g, ''));     
          let costNumberJ = parseInt(itemList[j].costItem.replace(/\D/g, ''));     
          if(costNumberJ < costNumberI)
          {
            let temp = itemList[i];
            itemList[i] = itemList[j];
            itemList[j] = temp;
          }
      }
  } 
  let items = document.querySelectorAll('.content .item');
  items.forEach(function(element, index)
    {
      if(index!==0)
      {
        element.remove();
      }
    });


    for (let i = 0; i < itemList.length; i++) {
    const clone = item.cloneNode(true);
    itemList[i].class.split(' ').forEach(cls => clone.classList.add(cls));
    clone.style.display = "block";
    clone.querySelector('img').src = itemList[i].img;
    clone.querySelector('.nameItem').textContent = itemList[i].nameItem;
    clone.querySelector('.costItem').textContent = itemList[i].costItem;
    itemContainer.appendChild(clone);
  }
}



function descendent(itemList)
{
  for(let i=0; i<itemList.length-1; i++)
  {
      for(let j=i+1; j<itemList.length; j++)
      {
          let costNumberI = parseInt(itemList[i].costItem.replace(/\D/g, ''));     
          let costNumberJ = parseInt(itemList[j].costItem.replace(/\D/g, ''));     
          if(costNumberJ > costNumberI)
          {
            let temp = itemList[i];
            itemList[i] = itemList[j];
            itemList[j] = temp;
          }
      }
  } 
  let items = document.querySelectorAll('.content .item');
  items.forEach(function(element, index)
    {
      if(index!==0)
      {
      element.remove();
      }
    });


    for (let i = 0; i < itemList.length; i++) {
    const clone = item.cloneNode(true);
    itemList[i].class.split(' ').forEach(cls => clone.classList.add(cls));
    clone.style.display = "block";
    clone.querySelector('img').src = itemList[i].img;
    clone.querySelector('.nameItem').textContent = itemList[i].nameItem;
    clone.querySelector('.costItem').textContent = itemList[i].costItem;
    itemContainer.appendChild(clone);
  }
}



var heart = document.querySelectorAll('.item__iconHeart');
heart.forEach( function(element, index) {
  const isClicked = localStorage.getItem(index);
  if (isClicked === 'true') 
  {
    element.classList.add('clicked__iconHeart');
  }

  element.addEventListener('click', function(event)
  {
      event.stopPropagation();
      element.classList.toggle('clicked__iconHeart')
      let clicked = element.classList.contains('clicked__iconHeart');
      if(clicked.toString() ==='true')
      {
        localStorage.setItem(index, true);
      }
      else
      {
        localStorage.setItem(index, false);
      }
  });

  
});


// Code trang giỏ hàng 
 






