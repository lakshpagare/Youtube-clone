// .......................................Cards................................
var Cards = [
  {
    id: 1,
    // video: video,
    // icon: <infoIcon />,
    title: "Lorem ipsum dolor, sit amet consectetur",
    description: "Lorem ipsum dolor sit amet",
  },
  {
    id: 2,
    // video: video,
    // icon: <infoIcon />,
    title: "Lorem ipsum dolor, sit amet consectetur",
    description: "Lorem ipsum dolor sit amet",
  },
  {
    id: 3,
    // video: video,
    // icon: <infoIcon />,
    title: "Lorem ipsum dolor, sit amet consectetur",
    description: "Lorem ipsum dolor sit amet",
  },
  {
    id: 4,
    // video: video,
    // icon: <infoIcon />,
    title: "Lorem ipsum dolor, sit amet consectetur",
    description: "Lorem ipsum dolor sit amet",
  },
  {
    id: 5,
    // video: video,
    // icon: <infoIcon />,
    title: "Lorem ipsum dolor, sit amet consectetur",
    description: "Lorem ipsum dolor sit amet",
  },
  {
    id: 6,
    // video: video,
    // icon: <infoIcon />,
    title: "Lorem ipsum dolor, sit amet consectetur",
    description: "Lorem ipsum dolor sit amet",
  },
  {
    id: 7,
    // video: video,
    // icon: <infoIcon />,
    title: "Lorem ipsum dolor, sit amet consectetur",
    description: "Lorem ipsum dolor sit amet",
  },
  {
    id: 8,
    // video: video,
    // icon: <infoIcon />,
    title: "Lorem ipsum dolor, sit amet consectetur",
    description: "Lorem ipsum dolor sit amet",
  },
  {
    id: 9,
    // video: video,
    // icon: <infoIcon />,
    title: "Lorem ipsum dolor, sit amet consectetur",
    description: "Lorem ipsum dolor sit amet",
  },
  {
    id: 10,
    // video: video,
    // icon: <infoIcon />,
    title: "Lorem ipsum dolor, sit amet consectetur",
    description: "Lorem ipsum dolor sit amet",
  },
  {
    id: 11,
    // video: video,
    // icon: <infoIcon />,
    title: "Lorem ipsum dolor, sit amet consectetur",
    description: "Lorem ipsum dolor sit amet",
  },
  {
    id: 12,
    // video: video,
    // icon: <infoIcon />,
    title: "Lorem ipsum dolor, sit amet consectetur",
    description: "Lorem ipsum dolor sit amet",
  },
];

let container = "";
// ...........................................Last Cards.............................
function listCads(Cards) {
  console.log("list-card", Cards);
  return (
    '<div class="main_cards">' +
    Cards.map(
      (valuesCard) => `
              <div class="card">
                    <video width="320" height="185" controls>
                      <source src="./assets/video1.mp4" type="video/mp4">
                      Your browser does not support the video tag.
                  </video>
                    <div class="description">
                      <div class="description-profile">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24"
                              width="24" focusable="false" aria-hidden="true"
                              style="pointer-events: none; display: inherit; width: 100%; height: 100%;">
                              <path clip-rule="evenodd"
                                  d="M12 20.5c1.894 0 3.643-.62 5.055-1.666a5.5 5.5 0 00-10.064-.105.755.755 0 01-.054.099A8.462 8.462 0 0012 20.5Zm4.079-5.189a7 7 0 012.142 2.48 8.5 8.5 0 10-12.443 0 7 7 0 0110.3-2.48ZM12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm2-12.5a2 2 0 11-4 0 2 2 0 014 0Zm1.5 0a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0Z"
                                  fill-rule="evenodd"></path>
                          </svg>
                      </div>
                    <div class="description-heading">
                        <h3>${valuesCard.title}</h3>
                        <p>${valuesCard.description}</p>
                    </div>
                    <div class="">
                        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24"
                            viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true"
                            style="pointer-events: none; display: inherit; width: 100%; height: 100%;">
                            <path
                            d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z">
                            </path>
                          </svg>
                    </div>
              </div>
      </div>`
    ).join("") +
    "</div>"
  );
}
window.onload = function () {
  container = document.getElementById("last-cards");
  let cardData = localStorage.getItem("videoList");
  console.log(JSON.parse(cardData));

  if (cardData) {
    container.innerHTML = listCads(JSON.parse(cardData));
  } else {
    container.innerHTML = listCads(Cards);
  }
  // ...................................Category Data ..............................
  let categoryData = document.getElementById("category-list");
  const category = [
    {
      id: 1,
      title: "All",
    },
    {
      id: 2,
      title: "Music",
    },
    {
      id: 3,
      title: "Gaming",
    },
    {
      id: 4,
      title: "Development",
    },
    {
      id: 5,
      title: "series",
    },
    {
      id: 6,
      title: "Movies",
    },
    {
      id: 7,
      title: "Podcasts",
    },
    {
      id: 8,
      title: "playlist",
    },
    {
      id: 9,
      title: "mantras",
    },
    {
      id: 10,
      title: "Watched",
    },
    {
      id: 11,
      title: "mixes",
    },
    {
      id: 12,
      title: "cricket",
    },
    {
      id: 13,
      title: "songs",
    },
  ];
  function categoryList(category) {
    return (
      '<div class="category">' +
      category
        .map(
          (categoryData) => `
          <button>
          ${categoryData.title}
          </button>`
        )
        .join("") +
      "</div>"
    );
  }
  categoryData.innerHTML = categoryList(category);
};

// ........................................dark Mode.............................
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

// ...........................................Upload video data ......................
function submitData() {
  let videoTitle = document.getElementById("video-title").value;
  let videoDescription = document.getElementById("video-description").value;
  let uploadVideo = document.getElementById("myFile").value;

  let tempData = {
    id: Math.floor(Math.random() * 10),
    video: uploadVideo,
    title: videoTitle,
    description: videoDescription,
  };
  Cards.push(tempData);
  console.log(Cards);

  container.innerHTML = listCads(Cards);
  closeFn();
  videoTitle = document.getElementById("video-title").value = "";
  videoDescription = document.getElementById("video-description").value = "";
  uploadVideo = document.getElementById("myFile").value = "";

  localStorage.setItem("videoList", JSON.stringify(Cards));
}

// .........................................PopUp function....................
function popupFn() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("popupDialog").style.display = "block";
}
function closeFn() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("popupDialog").style.display = "none";
}
