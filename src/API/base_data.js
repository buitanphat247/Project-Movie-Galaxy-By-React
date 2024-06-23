export const breakpoints_responsive = {
  320: {
    slidesPerView: 2,
    spaceBetween: 5,
  },
  600: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  850: {
    slidesPerView: 3,
    spaceBetween: 10,
  },

  1024: {
    slidesPerView: 5,
    spaceBetween: 10,
  },
};

export const data_list_InHome = [
  {
    title_list: "upcoming",
    url: "movie/upcoming",
    breakpoints: breakpoints_responsive,
    type: "movie",
  },
  {
    title_list: "now playing",
    url: "movie/now_playing",
    breakpoints: breakpoints_responsive,
    type: "movie",
  },
  {
    title_list: "tv shows",
    url: "discover/tv",
    breakpoints: breakpoints_responsive,
    type: "tv",
  },
  {
    title_list: "popular",
    url: "movie/popular",
    breakpoints: breakpoints_responsive,
    type: "movie",
  },
  {
    title_list: "top rated",
    url: "movie/top_rated",
    breakpoints: breakpoints_responsive,
    type: "movie",
  },
];
export const ListToRoute_InSidebar = [
  {
    path: "/",
    name: "Home",
    icon: <i className="fa fa-home" aria-hidden="true"></i>,
  },
  {
    path: "/movies?page=1",
    name: "Movies",
    icon: <i className="fa fa-play-circle" aria-hidden="true"></i>,
    type: "movie",
  },
  {
    path: "/tv-shows?page=1",
    name: "Tv show",
    icon: <i class="fa-solid fa-tv"></i>,
    type: "tv",
  },

  {
    path: "/news",
    name: "news",
    icon: <i class="fa-solid fa-newspaper"></i>,
  },
  {
    path: "/casters",
    name: "casters",
    icon: <i class="fa-regular fa-circle-user"></i>,
  },

  {
    path: "/favourite",
    name: "Favourite",
    icon: <i class="fa-regular fa-heart"></i>,
  },
  {
    path: "/favourite",
    name: "Recently watched",
    icon: <i class="fa-regular fa-clock"></i>,
  },
  {
    path: "/favourite",
    name: "download",
    icon: <i class="fa-regular fa-circle-down"></i>,
  },
  {
    path: "/favourite",
    name: "playlist",
    icon: <i class="fa-solid fa-list-ul"></i>,
  },
  {
    path: "/login",
    name: "login",
    icon: <i class="fa-solid fa-arrow-right-to-bracket"></i>,
  },
];
export const dataFill_InFillMovies = {
  // gernes_select: [
  //   "thể loại",
  //   "hành động",
  //   "tình cảm",
  //   "hài hước",
  //   "khoa học",
  //   "viễn tưởng",
  //   "tâm lý",
  //   "cổ trang",
  //   "kịch bản",
  // ],
  // country_select: [
  //   "quốc gia",
  //   "Việt Nam",
  //   "Mỹ",
  //   "Anh",
  //   "Trung Quốc",
  //   "Nhật Bản",
  //   "Hàn Quốc",
  //   "Ấn Độ",
  //   "Thái Lan",
  //   "Nga",
  //   "Pháp",
  //   "Đức",
  //   "Tây Ban Nha",
  //   "Châu Âu",
  //   "Châu Phi",
  //   "Châu Mỹ",
  //   "Châu Úc",
  //   "Châu Á",
  //   "Châu Phi",
  // ],
  status_film: {
    movie: [
      {
        name: "discover",
      },
      {
        name: "now playing",
      },
      {
        name: "popular",
      },
      {
        name: "top rated",
      },
      {
        name: "upcoming",
      },
    ],
    tv: [
      { name: "discover", path: "discover" },
      {
        name: "Live show",
        path: "airing_today",
      },
      {
        name: "now show",
        path: "on_the_air",
      },
      {
        name: "popular",
        path: "popular",
      },
      {
        name: "top rated",
        path: "top_rated",
      },
    ],
  },
};
