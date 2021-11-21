const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// === BEGIN FORM LOGIN ===
const loginBtn = $('.js__login-btn'); 
const registerBtn = $('.js__register-btn'); 
const modalElement = $('.js__modal'); 
const bodyElement = $('.modal__body'); 
const loginModal = $('.js__modal-login'); 
const registerModal = $('.js__modal-register'); 
const closeBtns = $$('.modal__close-button'); 
const loginSwiths = $$('.modal__footer-link'); 

// khi click vào nut đăng nhập
loginBtn.onclick = function() {
    modalElement.classList.add('modal--active');
    loginModal.classList.add('modal__wrap--active');
    bodyElement.style.height = '370px';
}

// khi click vào nut đăng ký
registerBtn.onclick = function() {
    modalElement.classList.add('modal--active');
    registerModal.classList.add('modal__wrap--active');
    bodyElement.style.height = '430px';
}

// ngăn cản sự kiện nổi bọt của thẻ body chính
bodyElement.onclick = function(e) {
    e.stopPropagation();
}

// bấm vào vùng khoảng không để tắt form
modalElement.onclick = function() {
    modalElement.classList.remove('modal--active');
    loginModal.classList.remove('modal__wrap--active');
    registerModal.classList.remove('modal__wrap--active');
}

// bấm vào nút close(X) để tắt form
for (var closeBtn of closeBtns) {
    closeBtn.onclick = function() {
        modalElement.classList.remove('modal--active');
        loginModal.classList.remove('modal__wrap--active');
        registerModal.classList.remove('modal__wrap--active');
    }
}    

loginSwiths[0].onclick = function() {
    registerModal.classList.add('modal__wrap--active');
    loginModal.classList.remove('modal__wrap--active');
    bodyElement.style.height = '430px';
}

loginSwiths[1].onclick = function() {
    registerModal.classList.remove('modal__wrap--active');
    loginModal.classList.add('modal__wrap--active');
    bodyElement.style.height = '370px';
}
// === END FORM LOGIN ===



// === BEGIN GROUP FIM BỘ MỚI
const moviesData1 = [
    {
        background: './assets/img/container/body-left/left-group-content/1.jpg',
        name1: 'Marla Lạc Vào Thế Giới Playmobil',
        name2: 'Playmobil: The Movie',
        time: '99 phút'
    },
    {
        background: './assets/img/container/body-left/left-group-content/2.jpg',
        name1: 'Cuộc Thi Ca Khúc Truyền Hình Eurovision: Câu Chuyện Về Fire Saga',
        name2: 'Eurovision Song Contest: The Story of Fire Saga',
        time: '123 phút'
    },
    {
        background: './assets/img/container/body-left/left-group-content/3.jpg',
        name1: 'Đội Quân Một Người',
        name2: 'Army of One',
        time: '101 phút'
    },
    {
        background: './assets/img/container/body-left/left-group-content/4.jpg',
        name1: 'Tân Tuyệt Đại Song Kiều',
        name2: 'Handsome Siblings',
        time: '120 phút'
    },
    {
        background: './assets/img/container/body-left/left-group-content/5.jpg',
        name1: 'Trả Thù 2002',
        name2: 'Sympathy For Mr Vengeance',
        time: '162 phút'
    },
    {
        background: './assets/img/container/body-left/left-group-content/6.jpg',
        name1: 'Lệnh Truy Nã Đỏ',
        name2: 'Red Notice',
        time: '150 phút'
    },
    {
        background: './assets/img/container/body-left/left-group-content/7.jpg',
        name1: 'Miền Đất Hứa',
        name2: 'Dreamland',
        time: '123 phút'
    },
    {
        background: './assets/img/container/body-left/left-group-content/8.jpg',
        name1: 'Con Trai Yêu Quý',
        name2: 'Beautiful Boy',
        time: '63 phút'
    },
    {
        background: './assets/img/container/body-left/left-group-content/9.jpg',
        name1: 'Chú Chó Đỏ Khổng Lồ',
        name2: 'Clifford The Big Red Dog',
        time: '90 phút'
    },
    {
        background: './assets/img/container/body-left/left-group-content/10.jpg',
        name1: 'Yêu Hết Mình',
        name2: 'Love Hard',
        time: '102 phút'
    },
  
    {
        background: './assets/img/container/body-left/left-group-content/11.jpg',
        name1: 'Nữ Thanh Tra Tài Ba',
        name2: 'One The Woman',
        time: '92 phút'
    },
    {
        background: './assets/img/container/body-left/left-group-content/12.jpg',
        name1: '46 Ngày – San Bằng Đám Cưới',
        name2: '46 Days',
        time: '173 phút'
    },
]
const moviesData2 = [
    {
        background: './assets/img/container/body-left/left-group-content/7.jpg',
        name1: 'Miền Đất Hứa',
        name2: 'Dreamland',
        time: '123 phút'
    },
    {
        background: './assets/img/container/body-left/left-group-content/8.jpg',
        name1: 'Con Trai Yêu Quý',
        name2: 'Beautiful Boy',
        time: '63 phút'
    },
    {
        background: './assets/img/container/body-left/left-group-content/9.jpg',
        name1: 'Chú Chó Đỏ Khổng Lồ',
        name2: 'Clifford The Big Red Dog',
        time: '90 phút'
    },
    {
        background: './assets/img/container/body-left/left-group-content/10.jpg',
        name1: 'Yêu Hết Mình',
        name2: 'Love Hard',
        time: '102 phút'
    },
  
    {
        background: './assets/img/container/body-left/left-group-content/11.jpg',
        name1: 'Nữ Thanh Tra Tài Ba',
        name2: 'One The Woman',
        time: '92 phút'
    },
    {
        background: './assets/img/container/body-left/left-group-content/12.jpg',
        name1: '46 Ngày – San Bằng Đám Cưới',
        name2: '46 Days',
        time: '173 phút'
    },
    {
        background: './assets/img/container/body-left/left-group-content/1.jpg',
        name1: 'Marla Lạc Vào Thế Giới Playmobil',
        name2: 'Playmobil: The Movie',
        time: '99 phút'
    },
    {
        background: './assets/img/container/body-left/left-group-content/2.jpg',
        name1: 'Cuộc Thi Ca Khúc Truyền Hình Eurovision: Câu Chuyện Về Fire Saga',
        name2: 'Eurovision Song Contest: The Story of Fire Saga',
        time: '123 phút'
    },
    {
        background: './assets/img/container/body-left/left-group-content/3.jpg',
        name1: 'Đội Quân Một Người',
        name2: 'Army of One',
        time: '101 phút'
    },
    {
        background: './assets/img/container/body-left/left-group-content/4.jpg',
        name1: 'Tân Tuyệt Đại Song Kiều',
        name2: 'Handsome Siblings',
        time: '120 phút'
    },
    {
        background: './assets/img/container/body-left/left-group-content/5.jpg',
        name1: 'Trả Thù 2002',
        name2: 'Sympathy For Mr Vengeance',
        time: '162 phút'
    },
    {
        background: './assets/img/container/body-left/left-group-content/6.jpg',
        name1: 'Lệnh Truy Nã Đỏ',
        name2: 'Red Notice',
        time: '150 phút'
    },
]
const moviesData3 = [
    {
        background: './assets/img/container/body-left/left-group-content/10.jpg',
        name1: 'Yêu Hết Mình',
        name2: 'Love Hard',
        time: '102 phút'
    },
    {
        background: './assets/img/container/body-left/left-group-content/7.jpg',
        name1: 'Miền Đất Hứa',
        name2: 'Dreamland',
        time: '123 phút'
    },
    {
        background: './assets/img/container/body-left/left-group-content/9.jpg',
        name1: 'Chú Chó Đỏ Khổng Lồ',
        name2: 'Clifford The Big Red Dog',
        time: '90 phút'
    },
    {
        background: './assets/img/container/body-left/left-group-content/11.jpg',
        name1: 'Nữ Thanh Tra Tài Ba',
        name2: 'One The Woman',
        time: '92 phút'
    },
    {
        background: './assets/img/container/body-left/left-group-content/12.jpg',
        name1: '46 Ngày – San Bằng Đám Cưới',
        name2: '46 Days',
        time: '173 phút'
    },
    {
        background: './assets/img/container/body-left/left-group-content/8.jpg',
        name1: 'Con Trai Yêu Quý',
        name2: 'Beautiful Boy',
        time: '63 phút'
    },
    {
        background: './assets/img/container/body-left/left-group-content/1.jpg',
        name1: 'Marla Lạc Vào Thế Giới Playmobil',
        name2: 'Playmobil: The Movie',
        time: '99 phút'
    },
    {
        background: './assets/img/container/body-left/left-group-content/4.jpg',
        name1: 'Tân Tuyệt Đại Song Kiều',
        name2: 'Handsome Siblings',
        time: '120 phút'
    },
    {
        background: './assets/img/container/body-left/left-group-content/2.jpg',
        name1: 'Cuộc Thi Ca Khúc Truyền Hình Eurovision: Câu Chuyện Về Fire Saga',
        name2: 'Eurovision Song Contest: The Story of Fire Saga',
        time: '123 phút'
    },
    {
        background: './assets/img/container/body-left/left-group-content/6.jpg',
        name1: 'Lệnh Truy Nã Đỏ',
        name2: 'Red Notice',
        time: '150 phút'
    },
    {
        background: './assets/img/container/body-left/left-group-content/3.jpg',
        name1: 'Đội Quân Một Người',
        name2: 'Army of One',
        time: '101 phút'
    },
    {
        background: './assets/img/container/body-left/left-group-content/5.jpg',
        name1: 'Trả Thù 2002',
        name2: 'Sympathy For Mr Vengeance',
        time: '162 phút'
    },
]

const groupMovie = $('.left-group__content-list');
const oldMovie = $('.js__odd-movie');
const seriesMovie = $('.js__series-movie');
const allMovie = $('.js__all-movie');

function renderMovie(data) {
    const htmls = data.map((movie) => {
        return `
        <a href="#" class="left-group__content-link">
            <li class="left-group__content-item">
                <div class="left-group__content-item-thumb" style="background-image: url(${movie.background});"></div>
                <div class="left-group__content-item-body">
                    <span class="left-group__content-item-body-movie">${movie.name1}</span>
                    <span class="left-group__content-item-body-desc">${movie.name2}</span>
                </div>
                <span class="left-group__content-item-time">${movie.time}</span>
            </li>
        </a>`
    })
    groupMovie.innerHTML = htmls.join('');
}
// khi chưa bấm gì sẽ render ra list phim của 'Phim lẻ mới'
renderMovie(moviesData1);

// khi click vào từng option phim thì hiển thị nội dung từng thể loại phim đó
// và đổi chữ xanh khi tiêu đề dc bấm
oldMovie.onclick = function() {
    renderMovie(moviesData1);
    oldMovie.classList.add('left-group__headding-item--active');
    seriesMovie.classList.remove('left-group__headding-item--active');
    allMovie.classList.remove('left-group__headding-item--active');
}
seriesMovie.onclick = function() {
    renderMovie(moviesData2);
    oldMovie.classList.remove('left-group__headding-item--active');
    seriesMovie.classList.add('left-group__headding-item--active');
    allMovie.classList.remove('left-group__headding-item--active');
}
allMovie.onclick = function() {
    renderMovie(moviesData3);
    oldMovie.classList.remove('left-group__headding-item--active');
    seriesMovie.classList.remove('left-group__headding-item--active');
    allMovie.classList.add('left-group__headding-item--active');
}

// === END GROUP FIM BỘ MỚI




// === BEGIN LIST FILM ITEM ===
const filmItemData1 = [
    {
        background: './assets/img/container/body-left/list-film-item/1.jpg',
        name1: 'Trái Tim Chàng Si Tình',
        name2: 'Duang Jai Nai Montra (2021)',
        status: 'HD Thuyết minh'
    },
    {
        background: './assets/img/container/body-left/list-film-item/2.jpg',
        name1: 'Cừu Non',
        name2: 'Lamp (2021)',
        status: 'HD Vietsub'
    },
    {
        background: './assets/img/container/body-left/list-film-item/3.jpg',
        name1: 'Ngôi Nhà Dưới Nước',
        name2: 'The Deep House (2021)',
        status: 'HD Vietsub'
    },
    {
        background: './assets/img/container/body-left/list-film-item/4.jpg',
        name1: 'Những Kẻ Nguyền Rủa',
        name2: 'The Cursed: Dead Man’s Prey (2021)',
        status: 'HD Vietsub'
    },
    {
        background: './assets/img/container/body-left/list-film-item/5.jpg',
        name1: 'Không Ai Ngủ Trong Rừng Đêm Nay 2',
        name2: 'Nobody Sleeps in the Woods Tonight 2 (2021)',
        status: 'HD Vietsub'
    },
    {
        background: './assets/img/container/body-left/list-film-item/6.jpg',
        name1: 'Dạ Quỷ Rừng Sâu',
        name2: 'The Widow (2020)',
        status: 'HD Vietsub'
    },
    {
        background: './assets/img/container/body-left/list-film-item/7.jpg',
        name1: 'Mẹ Tôi Gánh Đội',
        name2: 'Mother Gamer (2021)',
        status: 'HD Vietsub'
    },
    {
        background: './assets/img/container/body-left/list-film-item/8.jpg',
        name1: 'Cảnh Báo',
        name2: 'Warning (2021)',
        status: 'HD Vietsub'
    },
    {
        background: './assets/img/container/body-left/list-film-item/9.jpg',
        name1: 'Hành Tinh Cát',
        name2: 'Dune (2021)',
        status: 'HD Vietsub'
    },
    {
        background: './assets/img/container/body-left/list-film-item/10.jpg',
        name1: 'Halloween Chết Chóc',
        name2: 'Halloween Kills (2021)',
        status: 'HD Vietsub'
    },
    {
        background: './assets/img/container/body-left/list-film-item/11.jpg',
        name1: 'Âm Mưu Trộm Tranh',
        name2: 'The Burnt Orange Heresy (2020)',
        status: 'HD Vietsub'
    },
    {
        background: './assets/img/container/body-left/list-film-item/12.jpg',
        name1: 'Những Vị Thánh Của Newark',
        name2: 'The Many Saints of Newark (2021)',
        status: 'HD Vietsub'
    },
]
const filmItem1 = $('.js__film-item1')
const filmItem2 = $('.js__film-item2')
const filmItem3 = $('.js__film-item3')
const filmItem4 = $('.js__film-item4')


function renderFilmItem(data, filmItemElement) {
    const htmls = data.map((movie) => {
        return `
        <div class="col l-3">
            <a href="#" class="left-group__film-item-link">
                <div class="left-group__film-item-img" style="background-image: url(${movie.background});"></div>
                <h4 class="left-group__film-item-name1">${movie.name1}</h4>
                <h4 class="left-group__film-item-name2">${movie.name2}</h4>
                <div class="left-group__film-item-status">${movie.status}</div>
            </a>
        </div>`
    })
    filmItemElement.innerHTML = htmls.join('');
}
// khi chưa bấm gì sẽ render ra list phim chiếu rạp
renderFilmItem(filmItemData1, filmItem1);

// khi chưa bấm gì sẽ render ra list phim lẻ mới
renderFilmItem(filmItemData1, filmItem2);

// khi chưa bấm gì sẽ render ra list phim bộ mới
renderFilmItem(filmItemData1, filmItem3);

// khi chưa bấm gì sẽ render ra list phim hoạt hình
renderFilmItem(filmItemData1, filmItem4);

// === END LIST FILM ITEM ===
