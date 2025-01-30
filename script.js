$(document).ready(function () {
    const API_URL = "https://smileschool-api.hbtn.info/courses";
    
    function fetchCourses() {
        let searchValue = $(".search-text-area").val() || "";
        let topic = $("#dropdownMenuTopic span").text().trim();
        let sort = $("#dropdownMenuSort span").text().trim();
        
        $(".results .row").html('<div class="text-center w-100 py-5"><img src="images/loader.gif" alt="Loading..." /></div>');
        
        $.get(API_URL, { q: searchValue, topic: topic, sort: sort }, function (data) {
            $(".results .row").empty();
            $(".video-count").text(`${data.courses.length} videos`);
            
            data.courses.forEach(course => {
                let stars = "";
                for (let i = 0; i < 5; i++) {
                    stars += `<img src="images/${i < course.star ? 'star_on' : 'star_off'}.png" alt="star" width="15px" />`;
                }
                
                let videoCard = `
                    <div class="col-12 col-sm-4 col-lg-3 d-flex justify-content-center">
                        <div class="card">
                            <img src="${course.thumb_url}" class="card-img-top" alt="Video thumbnail" />
                            <div class="card-img-overlay text-center">
                                <img src="images/play.png" alt="Play" width="64px" class="align-self-center play-overlay" />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title font-weight-bold">${course.title}</h5>
                                <p class="card-text text-muted">${course.subtitle}</p>
                                <div class="creator d-flex align-items-center">
                                    <img src="${course.author_pic_url}" alt="Creator" width="30px" class="rounded-circle" />
                                    <h6 class="pl-3 m-0 main-color">${course.author}</h6>
                                </div>
                                <div class="info pt-3 d-flex justify-content-between">
                                    <div class="rating">${stars}</div>
                                    <span class="main-color">${course.duration}</span>
                                </div>
                            </div>
                        </div>
                    </div>`;
                
                $(".results .row").append(videoCard);
            });
        });
    }
    
    function fetchDropdowns() {
        $.get(API_URL, function (data) {
            let topicsDropdown = "";
            data.topics.forEach(topic => {
                topicsDropdown += `<a class="dropdown-item" href="#">${topic}</a>`;
            });
            $(".dropdown-menu#topics").html(topicsDropdown);
            
            let sortDropdown = "";
            data.sorts.forEach(sort => {
                sortDropdown += `<a class="dropdown-item" href="#">${sort}</a>`;
            });
            $(".dropdown-menu#sorts").html(sortDropdown);
        });
    }
    
    fetchDropdowns();
    fetchCourses();
    
    $(".search-text-area").on("input", fetchCourses);
    $(".dropdown-menu#topics").on("click", "a", function () {
        $("#dropdownMenuTopic span").text($(this).text());
        fetchCourses();
    });
    $(".dropdown-menu#sorts").on("click", "a", function () {
        $("#dropdownMenuSort span").text($(this).text());
        fetchCourses();
    });
});

$(document).ready(function () {
    const QUOTES_API_URL = "https://smileschool-api.hbtn.info/quotes";
    
    function fetchQuotes() {
        $(".carousel-inner").html('<div class="text-center w-100 py-5"><img src="images/loader.gif" alt="Loading..." /></div>');
        
        $.get(QUOTES_API_URL, function (data) {
            $(".carousel-inner").empty();
            
            data.forEach((quote, index) => {
                let activeClass = index === 0 ? "active" : "";
                let quoteItem = `
                    <div class="carousel-item ${activeClass}">
                        <div class="row mx-auto align-items-center">
                            <div class="col-12 col-sm-2 col-lg-2 offset-lg-1 text-center">
                                <img src="${quote.pic_url}" class="d-block align-self-center rounded-circle" alt="${quote.name}">
                            </div>
                            <div class="col-12 col-sm-7 offset-sm-2 col-lg-9 offset-lg-0">
                                <div class="quote-text">
                                    <p class="text-white">« ${quote.text} »</p>
                                    <h4 class="text-white font-weight-bold">${quote.name}</h4>
                                    <span class="text-white">${quote.title}</span>
                                </div>
                            </div>
                        </div>
                    </div>`;
                
                $(".carousel-inner").append(quoteItem);
            });
        });
    }
    
    fetchQuotes();
});

$(document).ready(function () {
    const QUOTES_API_URL = "https://smileschool-api.hbtn.info/quotes";
    const VIDEOS_API_URL = "https://smileschool-api.hbtn.info/popular-tutorials";
    
    function fetchQuotes() {
        $(".carousel-inner").html('<div class="text-center w-100 py-5"><img src="images/loader.gif" alt="Loading..." /></div>');
        
        $.get(QUOTES_API_URL, function (data) {
            $(".carousel-inner").empty();
            
            data.forEach((quote, index) => {
                let activeClass = index === 0 ? "active" : "";
                let quoteItem = `
                    <div class="carousel-item ${activeClass}">
                        <div class="row mx-auto align-items-center">
                            <div class="col-12 col-sm-2 col-lg-2 offset-lg-1 text-center">
                                <img src="${quote.pic_url}" class="d-block align-self-center rounded-circle" alt="${quote.name}">
                            </div>
                            <div class="col-12 col-sm-7 offset-sm-2 col-lg-9 offset-lg-0">
                                <div class="quote-text">
                                    <p class="text-white">« ${quote.text} »</p>
                                    <h4 class="text-white font-weight-bold">${quote.name}</h4>
                                    <span class="text-white">${quote.title}</span>
                                </div>
                            </div>
                        </div>
                    </div>`;
                
                $(".carousel-inner").append(quoteItem);
            });
        });
    }
    
    function fetchVideos() {
        $(".videos-carousel").html('<div class="text-center w-100 py-5"><img src="images/loader.gif" alt="Loading..." /></div>');
        
        $.get(VIDEOS_API_URL, function (data) {
            $(".videos-carousel").empty();
            
            data.forEach(video => {
                let videoCard = `
                    <div class="carousel-item">
                        <div class="card">
                            <img src="${video.thumb_url}" class="card-img-top" alt="${video.title}">
                            <div class="card-body">
                                <h5 class="card-title font-weight-bold">${video.title}</h5>
                                <p class="card-text text-muted">${video.sub_title}</p>
                                <div class="creator d-flex align-items-center">
                                    <img src="${video.author_pic_url}" alt="${video.author}" width="30px" class="rounded-circle">
                                    <h6 class="pl-3 m-0 main-color">${video.author}</h6>
                                </div>
                                <div class="info pt-3 d-flex justify-content-between">
                                    <span class="main-color">${video.duration}</span>
                                </div>
                            </div>
                        </div>
                    </div>`;
                
                $(".videos-carousel").append(videoCard);
            });
        });
    }
    
    fetchQuotes();
    fetchVideos();
});

$(document).ready(function () {
    const QUOTES_API_URL = "https://smileschool-api.hbtn.info/quotes";
    const POPULAR_VIDEOS_API_URL = "https://smileschool-api.hbtn.info/popular-tutorials";
    const LATEST_VIDEOS_API_URL = "https://smileschool-api.hbtn.info/latest-videos";
    
    function fetchQuotes() {
        $(".carousel-inner").html('<div class="text-center w-100 py-5"><img src="images/loader.gif" alt="Loading..." /></div>');
        
        $.get(QUOTES_API_URL, function (data) {
            $(".carousel-inner").empty();
            
            data.forEach((quote, index) => {
                let activeClass = index === 0 ? "active" : "";
                let quoteItem = `
                    <div class="carousel-item ${activeClass}">
                        <div class="row mx-auto align-items-center">
                            <div class="col-12 col-sm-2 col-lg-2 offset-lg-1 text-center">
                                <img src="${quote.pic_url}" class="d-block align-self-center rounded-circle" alt="${quote.name}">
                            </div>
                            <div class="col-12 col-sm-7 offset-sm-2 col-lg-9 offset-lg-0">
                                <div class="quote-text">
                                    <p class="text-white">« ${quote.text} »</p>
                                    <h4 class="text-white font-weight-bold">${quote.name}</h4>
                                    <span class="text-white">${quote.title}</span>
                                </div>
                            </div>
                        </div>
                    </div>`;
                
                $(".carousel-inner").append(quoteItem);
            });
        });
    }
    
    function fetchVideos(apiUrl, carouselClass) {
        $(`.${carouselClass}`).html('<div class="text-center w-100 py-5"><img src="images/loader.gif" alt="Loading..." /></div>');
        
        $.get(apiUrl, function (data) {
            $(`.${carouselClass}`).empty();
            
            data.forEach(video => {
                let videoCard = `
                    <div class="carousel-item">
                        <div class="card">
                            <img src="${video.thumb_url}" class="card-img-top" alt="${video.title}">
                            <div class="card-body">
                                <h5 class="card-title font-weight-bold">${video.title}</h5>
                                <p class="card-text text-muted">${video.sub_title}</p>
                                <div class="creator d-flex align-items-center">
                                    <img src="${video.author_pic_url}" alt="${video.author}" width="30px" class="rounded-circle">
                                    <h6 class="pl-3 m-0 main-color">${video.author}</h6>
                                </div>
                                <div class="info pt-3 d-flex justify-content-between">
                                    <span class="main-color">${video.duration}</span>
                                </div>
                            </div>
                        </div>
                    </div>`;
                
                $(`.${carouselClass}`).append(videoCard);
            });
        });
    }
    
    fetchQuotes();
    fetchVideos(POPULAR_VIDEOS_API_URL, "popular-videos-carousel");
    fetchVideos(LATEST_VIDEOS_API_URL, "latest-videos-carousel");
});
