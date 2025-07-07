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


//To filter all item
function filterAll()
{
  for(var i=1; i<all.length; i++)
  {
      all[i].style.display = 'block';
  }
}

//To filter racket item
function filterRacket()
{
  if(countHidenItem(all)===0)
  {
    for(var i=1; i<all.length; i++)
    {
      all[i].style.display = 'none';
    }
  }

  for(var i=1; i<all.length; i++)
  {
    if(all[i].classList.contains("racket"))
    {
      all[i].style.display = 'block';
    }
  }
}


//To filter shoes item
function filterShoes()
{
  if(countHidenItem(all)===0)
  {
    for(var i=1; i<all.length; i++)
    {
      all[i].style.display = 'none';
    }
  }

  for(var i=1; i<all.length; i++)
  {
    if(all[i].classList.contains("shoes"))
    {
      all[i].style.display = 'block';
    }
  }
}


//To filter shirt item
function filterShirt()
{
  if(countHidenItem(all)===0)
  {
    for(var i=1; i<all.length; i++)
    {
      all[i].style.display = 'none';
    }
  }

  for(var i=1; i<all.length; i++)
  {
    if(all[i].classList.contains("shirt"))
    {
      all[i].style.display = 'block';
    }
  }
}


//To filter dress item
function filterDress()
{
  if(countHidenItem(all)===0)
  {
    for(var i=1; i<all.length; i++)
    {
      all[i].style.display = 'none';
    }
  }

  for(var i=1; i<all.length; i++)
  {
    if(all[i].classList.contains("dress"))
    {
      all[i].style.display = 'block';
    }
  }
}

//To filter dress trouser
function filterTrouser()
{
  if(countHidenItem(all)===0)
  {
    for(var i=1; i<all.length; i++)
    {
      all[i].style.display = 'none';
    }
  }

  for(var i=1; i<all.length; i++)
  {
    if(all[i].classList.contains("trouser"))
    {
      all[i].style.display = 'block';
    }
  }
}

//To filter cost less than 500000
function filterLessThan500()
{
  if(countHidenItem(all)===0)
  {
    for(var i=1; i<all.length; i++)
    {
      all[i].style.display = 'none';
    }
  }

  for(var i=1; i<all.length; i++)
  {
    if(all[i].classList.contains("lessThan500"))
    {
      all[i].style.display = 'block';
    }
  }
}

//To filter cost 500 to 1M
function filter500To1M()
{
  if(countHidenItem(all)===0)
  {
    for(var i=1; i<all.length; i++)
  {
    all[i].style.display = 'none';
  }
  }

  for(var i=1; i<all.length; i++)
  {
    if(all[i].classList.contains("from500To1M"))
    {
      all[i].style.display = 'block';
    }
  }
}

  //To filter cost from 1M to 2M
function filter1MTo2M()
{
  if(countHidenItem(all)===0)
  {
    for(var i=1; i<all.length; i++)
  {
    all[i].style.display = 'none';
  }
  }

  for(var i=1; i<all.length; i++)
  {
    if(all[i].classList.contains("from1MTo2M"))
    {
      all[i].style.display = 'block';
    }
  }
}

  //To filter cost from 2M to 3M
function filter2MTo3M()
{
  if(countHidenItem(all)===0)
  {
    for(var i=1; i<all.length; i++)
  {
    all[i].style.display = 'none';
  }
  }

  for(var i=1; i<all.length; i++)
  {
    if(all[i].classList.contains("from2MTo3M"))
    {
      all[i].style.display = 'block';
    }
  }
}

  //To filter cost more than 3M
function filterMoreThan3M() 
{
  if(countHidenItem(all)===0)
  {
    for(var i=1; i<all.length; i++)
  {
    all[i].style.display = 'none';
  }
  }

  for(var i=1; i<all.length; i++)
  {
    if(all[i].classList.contains("moreThan3M"))
    {
      all[i].style.display = 'block';
    }
  }
}


  //To filter Yonex branch
function filterYonex() 
{
  if(countHidenItem(all)===0)
  {
    for(var i=1; i<all.length; i++)
  {
    all[i].style.display = 'none';
  }
  }

  for(var i=1; i<all.length; i++)
  {
    if(all[i].classList.contains("yonex"))
    {
      all[i].style.display = 'block';
    }
  }
}

  //To filter Lining branch
function filterLining() 
{
  if(countHidenItem(all)===0)
  {
    for(var i=1; i<all.length; i++)
  {
    all[i].style.display = 'none';
  }
  }

  for(var i=1; i<all.length; i++)
  {
    if(all[i].classList.contains("lining"))
    {
      all[i].style.display = 'block';
    }
  }
}

  //To filter Victor branch
function filterVictor() 
{
  if(countHidenItem(all)===0)
  {
    for(var i=1; i<all.length; i++)
  {
    all[i].style.display = 'none';
  }
  }

  for(var i=1; i<all.length; i++)
  {
    if(all[i].classList.contains("victor"))
    {
      all[i].style.display = 'block';
    }
  }
}


  //To filter Victor branch
function filterMizuno() 
{
  if(countHidenItem(all)===0)
  {
    for(var i=1; i<all.length; i++)
  {
    all[i].style.display = 'none';
  }
  }

  for(var i=1; i<all.length; i++)
  {
  if(all[i].classList.contains("mizuno"))
    {
      all[i].style.display = 'block';
    }
  }
}

  //To filter Victor branch
function filterVNB() 
{
  if(countHidenItem(all)===0)
  {
    for(var i=1; i<all.length; i++)
  {
    all[i].style.display = 'none';
  }
  }

  for(var i=1; i<all.length; i++)
  {
  if(all[i].classList.contains("vnb"))
    {
      all[i].style.display = 'block';
    }
  }
}


// Select All
var selectAll = document.querySelector('.sidebar__filter--all');
selectAll.addEventListener("click",filterAll);

// Select Racket
var selectRacket = document.querySelector('.sidebar__filter__subContaniner p:first-child');
selectRacket.addEventListener("click",filterRacket);

// Select Shoes
var selectShoes = document.querySelector('.sidebar__filter__subContaniner p:nth-child(2)');
selectShoes.addEventListener("click",filterShoes);

//Select Shirt
var selectShoes = document.querySelector('.sidebar__filter__subContaniner p:nth-child(3)');
selectShoes.addEventListener("click",filterShirt);


// Select Dress
var selectDress = document.querySelector('.sidebar__filter__subContaniner p:nth-child(4)');
selectDress.addEventListener("click",filterDress);


// Select Trouser
var selectTrouser = document.querySelector('.sidebar__filter__subContaniner p:nth-child(5)');
selectTrouser.addEventListener("click",filterTrouser);


var subContainers = document.querySelectorAll('.sidebar__filter__subContaniner');
// Select cost less than 500 
var selectLessThan500 = subContainers[1].querySelector('p:first-child');
selectLessThan500.addEventListener("click",filterLessThan500);

// Select cost from 500 to 1M 
var selectFrom500To1M = subContainers[1].querySelector('p:nth-child(2)');
selectFrom500To1M.addEventListener("click",filter500To1M);

// Select cost from 1M to 2M 
var selectFrom1Mto2M = subContainers[1].querySelector('p:nth-child(3)');
selectFrom1Mto2M.addEventListener("click",filter1MTo2M);

// Select cost from 2M to 3M 
var selectFrom2MTo3M = subContainers[1].querySelector('p:nth-child(4)');
selectFrom2MTo3M.addEventListener("click",filter2MTo3M);

// Select cost more than 3M 
var selectMoreThan3M = subContainers[1].querySelector('p:nth-child(5)');
selectMoreThan3M.addEventListener("click",filterMoreThan3M);


// Select Yonex
var selectYonex = subContainers[2].querySelector('p:first-child');
selectYonex.addEventListener("click",filterYonex);


// Select Lining
var selectLining = subContainers[2].querySelector('p:nth-child(2)');
selectLining.addEventListener("click",filterLining);

// Select Victor
var selectVictor = subContainers[2].querySelector('p:nth-child(3)');
selectVictor.addEventListener("click",filterVictor);


// Select Mizuno
var selectMizuno = subContainers[2].querySelector('p:nth-child(4)');
selectMizuno.addEventListener("click",filterMizuno);

// Select VNB
var selectVNB = subContainers[2].querySelector('p:nth-child(5)');
selectVNB.addEventListener("click", filterVNB);




