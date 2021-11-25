// BEGIN HTML
/* <div class="slide__wapper">
    <ul class="slide__list">
        <li class="slide__item">
            <div class="content">
                <p>1</p>
            </div>
        </li>
        <li class="slide__item">
            <div class="content">
                <p>2</p>
            </div>
        </li>
        <li class="slide__item">
            <div class="content">
                <p>3</p>
            </div>
        </li>
        <li class="slide__item">
            <div class="content">
                <p>4</p>
            </div>
        </li>
        <li class="slide__item">
            <div class="content">
                <p>5</p>
            </div>
        </li>
        <li class="slide__item">
            <div class="content">
                <p>6</p>
            </div>
        </li>
    </ul>
    <button onclick="changeslide(-1)">prev</button>
    <button onclick="changeslide(1)">next</button>
</div> */
// END HTML

// BEGIN CSS
// *{
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
// }
// .container{
//     width: 1140px;
//     margin: 0 auto;
// }
// .slide__wapper{
//     width: 500px;
//     margin: 0 auto;
//     overflow: hidden;
//     /* overflow hidden để tí nữa cái slides tràn ra nó 
//     che lại á ^^ */
//     font-size: 0;
// }
// .slide__list{
//     font-size: 0;
//     /* tại sao mình lại dùng font size 0
//     -> vì ở slide thằng con của nó mình chia layoyt
//     dạng display inline-block
//     -> nó tựa như các chữ bình thường (2 chữ kế nhau nó sẽ
//     có 1 khoảng cách nhỏ nên mình phải cho 0 để triệu
//     tiêu khoảng cách nó */
//     transition: all 0.6s ease;
// }
// .slide__item{
//     font-size: 30px;
//     display: inline-block;
//     text-align: center;
//     padding: 30px 0;
//     background-color: green;
// }
// button{
//     display: inline-block;
//     width: 50%;
//     padding: 10px;
//     /* ví dụ button mình cho inline block
//     2 khối left right đều 50% tại sao lại bị xuống hàng
//     do mình chưa set font-size 0 cho cha nó */
//     /* sau khi set thì 50% nó cộng lại đúng 100%
//     k có lỗ hở nên không bị xuống hàng nữa
//     tương tự mình làm với class .slide */
// }
// END CSS

//===================================================================
// BEGIN RENDER LIST SLIDES FROM DATA
const slidesElement = document.querySelector('.slide__list');
const slidesData = [
    {
        background: './assets/img/container/slide/slide-item/1.jpg',
        name1: 'Venom 2: Đối Mặt Tử Thù',
        name2: 'Venom: Let There Be Carnage',
        ribbon: 'HD Vietsub | 90 phút'
    },
    {
        background: './assets/img/container/slide/slide-item/2.jpg',
        name1: 'Shang-Chi Và Huyền Thoại Thập Nhẫn',
        name2: 'Shang-Chi and the Legend of the Ten Rings',
        ribbon: 'CAM Vietsub | '
    },
    {
        background: './assets/img/container/slide/slide-item/4.jpg',
        name1: 'Đảo Hải Tặc',
        name2: 'One Piece',
        ribbon: 'HD Vietsub | Tập 996'
    },
    {
        background: './assets/img/container/slide/slide-item/3.jpg',
        name1: 'Giải Cứu ‘Guy’',
        name2: 'Free Guy',
        ribbon: 'HD Vietsub | '
    },
    {
        background: './assets/img/container/slide/slide-item/5.jpg',
        name1: 'Bạn Trai Thuê',
        name2: 'Boy For Rent',
        ribbon: 'HD Vietsub | Full 12/12'
    },
    {
        background: './assets/img/container/slide/slide-item/6.jpg',
        name1: 'Góa Phụ Đen',
        name2: 'Black Widow',
        ribbon: 'HD Vietsub | 143 phút'
    },
    {
        background: './assets/img/container/slide/slide-item/7.jpg',
        name1: 'Loki (Phần 1)',
        name2: 'Loki (Season 1)',
        ribbon: 'HD Vietsub | Full 6/6'
    },

    {
        background: './assets/img/container/slide/slide-item/8.jpg',
        name1: 'Nhóc Trùm: Nối Nghiệp Gia Đình',
        name2: 'The Boss Baby: Family Business',
        ribbon: 'HD Vietsub |'
    },

    {
        background: './assets/img/container/slide/slide-item/9.jpg',
        name1: 'Vệ Sĩ Sát Thủ 2: Nhà Có Nóc',
        name2: 'Hitman\'s Wife\'s Bodyguard',
        ribbon: 'HD Vietsub | '
    },

    {
        background: './assets/img/container/slide/slide-item/10.jpeg',
        name1: 'Chí Khí Bay Cao',
        name2: 'New Horizon',
        ribbon: 'HD Vietsub | Full 47/47'
    },

    {
        background: './assets/img/container/slide/slide-item/11.jpeg',
        name1: 'Người Yêu Chàng Kỹ Sư',
        name2: 'Nitiman',
        ribbon: 'HD Vietsub | Full 10/10'
    },
    {
        background: './assets/img/container/slide/slide-item/12.jpg',
        name1: 'Truy Tìm Kẻ Sát Nhân 4',
        name2: 'Voice 4: Judgment Hour',
        ribbon: 'HD Vietsub | Full 14/14'
    }
]

function renderSlides(data) {
    const htmls = data.map((slide) => {
        return `
        <li class="slide__item">
            <a href="#" class="slide_item-link">
                <div class="slide__item-img" style="background-image: url('${slide.background}');"></div>
                <div class="slide__item-body">
                    <h3 class="slide__item-body-name1">${slide.name1}</h3>
                    <h4 class="slide__item-body-name2">${slide.name2}</h4>
                </div>
                <span class="slide__item-body-ribbon">${slide.ribbon}</span>
            </a>
        </li>`
    })
    slidesElement.innerHTML = htmls.join('');
}

renderSlides(slidesData);

//===================================================================
// END RENDER LIST SLIDES FROM DATA



var slideList=document.querySelector('.slide__list');
var slideItem=Array.from(document.querySelectorAll('.slide__item'));
// var slideItemLink=Array.from(document.querySelectorAll('.slide_item-link'));
// var slideWapper=document.querySelector('.slide__wapper');
var slideWapper=document.querySelector('.slide__border-list');
var num_page;

// dùng để đếm số trang tùy vào mình chia hiển thị
// bao nhiêu trên 1 trang
// mình làm function tạo slide trước
function makeslide(numberonetime) {
    // truyền vào số ô muốn hiển thị trên 1 slide
    var percentwidth_slide=100/numberonetime;
    // tính độ dài của từng slide
    num_page=Math.ceil(slideItem.length/numberonetime);
    // tính số lượng trang
    slideItem.forEach((el,index)=>{
        // el.style.width=(slideWapper.offsetWidth/100*percentwidth_slide)+'px';
        el.style.width=250 + 'px';
        // set độ rộng của từng slide
    })
    // slideWapper.offsetWidth/100*percentwidth_slide
    // tại sao không dùng công thức như trên mà tớ commnet lại
    // vì dùng nó sẽ bị sai số nên tránh sai số tớ dùng ở dưới
    // slideList.style.width=(slideWapper.offsetWidth/100*percentwidth_slide)*slideItem.length+'px';
    slideList.style.width=3000+'px';
}
// gọi hàm thử nhé
makeslide(4);
// ok nhé hiểu ý tưởng r phải không ^^
var curpage=1;
// tạo 1 biến giữ vị trí trang
function showslide(pagenumber){
    slideList.style.marginLeft=-(slideWapper.offsetWidth*(pagenumber-1))+'px';
    // chịu khó tự suy nghĩ sao ra cthuc này nhé vì khá dễ
    // không được thifi comment sau mình sẽ giải thích
}
showslide(1);
// cho nó chạy lúc đầu là hiểu thị trang 1 luôn nhé
function changeslide(n){
    curpage=curpage+n;
    if(curpage<1)curpage=num_page;
    if(curpage>num_page)curpage=1;
    showslide(curpage);
}
// ok thanks các bạn
// mình cũng là newbie gà mờ nên có gì ae góp ý nhé
// mong ae sub ủng hộ kênh ^^





