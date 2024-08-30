document.addEventListener("DOMContentLoaded", () => {
  const videoData = [
    {
      id: "50WCSpZtdmA",
      title: "Shim EuDdeum 10 Minute Morning Stretch Everydayㅣ2023 Renewal",
      part: "전신",
      channelName: "힘으뜸",
      url: "https://www.youtube.com/watch?v=50WCSpZtdmA",
    },
    {
      id: "Kk7TQGqQ3nA",
      title:
        "하루 두 번🧘🏻‍♀️반드시 해야하는 20분 전신순환 스트레칭 Ep.08 - 피로회복, 디톡스, 심신안정, 혈액순환, 라인정리 효과 (Whole body stretch)",
      part: "전신",
      channelName: "빵느",
      url: "https://www.youtube.com/watch?v=Kk7TQGqQ3nA",
    },
    {
      id: "MTU4iCDntjs",
      title: "4 Minute OFFICE STRETCHING(full body)",
      part: "전신",
      channelName: "Allblanc TV",
      url: "https://www.youtube.com/watch?v=MTU4iCDntjs",
    },
    {
      id: "02K-k6daPb4",
      title: "15 MIN Fat Burning Cardio - 서서하는 유산소 - 다이어트 운동",
      part: "전신",
      channelName: "빅씨스 Bigsis",
      url: "https://www.youtube.com/watch?v=02K-k6daPb4",
    },
    {
      id: "gMaB-fG4u4g",
      title: "전신 다이어트 최고의 운동 [칼소폭 찐 핵핵매운맛]",
      part: "전신",
      channelName: "ThankyouBUBU",
      url: "https://www.youtube.com/embed/gMaB-fG4u4g",
    },
    {
      id: "swRNeYw1JkY",
      title: "하루 15분! 전신 칼로리 불태우는 다이어트 운동",
      part: "전신",
      channelName: "ThankyouBUBU",
      url: "https://www.youtube.com/embed/swRNeYw1JkY",
    },
    {
      id: "54tTYO-vU2E",
      title:
        "상체 다이어트 최고의 운동 BEST [팔뚝살/겨드랑이살/등살/가슴어깨라인]",
      part: "상체",
      channelName: "ThankyouBUBU",
      url: "https://www.youtube.com/embed/54tTYO-vU2E",
    },
    {
      id: "QqqZH3j_vH0",
      title: "상체비만 다이어트 최고의 운동 [상체 핵매운맛]",
      part: "상체",
      channelName: "ThankyouBUBU",
      url: "https://www.youtube.com/embed/QqqZH3j_vH0",
    },
    {
      id: "tzN6ypk6Sps",
      title: "하체운동이 중요한 이유? 이것만 보고 따라하자 ! [하체운동 교과서]",
      part: "하체",
      channelName: "김강민",
      url: "https://www.youtube.com/embed/tzN6ypk6Sps",
    },
    {
      id: "u5OgcZdNbMo",
      title: "저는 하체 식주의자 입니다",
      part: "하체",
      channelName: "GYM종국",
      url: "https://www.youtube.com/embed/u5OgcZdNbMo",
    },
    {
      id: "PjGcOP-TQPE",
      title: "11자복근 복부 최고의 운동 [복근 핵매운맛]",
      part: "복부",
      channelName: "ThankyouBUBU",
      url: "https://www.youtube.com/embed/PjGcOP-TQPE",
    },
    {
      id: "7TLk7pscICk",
      title: "(Sub)누워서하는 5분 복부운동!! 효과보장! (매일 2주만 해보세요!)",
      part: "복부",
      channelName: "SomiFit",
      url: "https://www.youtube.com/embed/7TLk7pscICk",
    },
  ];

  function generateCardHTML(video) {
    const thumbnailUrl = `https://img.youtube.com/vi/${video.id}/0.jpg`;
    const currentUrl = window.location.href.replace("index.html", "");
    const reviewHref = `${currentUrl}pages/reviews.html?id=${video.id}`;

    return `
      <div class="col-md-4 card-item">
          <div class="card">
              <a href="${video.url}" target="_blank">
                  <img src=${thumbnailUrl} class="card-img-top" alt="${video.title}">
              </a>
              <div class="card-body">
                <a href=${reviewHref} style="text-decoration: none; color: black;">
                  <h5 class="card-title">${video.title}</h5>
                  <p class="card-text">${video.channelName}</p>
                  <span class="badge badge-success">${video.part}</span>
                </a>
              </div>
          </div>
      </div>
    `;
  }

  function renderCards(videoList, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = videoList.map(generateCardHTML).join("");
  }

  // Rendering the cards for both sections
  renderCards(videoData.slice(0, 6), "recommendation-cards"); // First 6 videos
  renderCards(videoData, "exercise-cards"); // All videos

  // Scroll functionality for arrow buttons
  document.querySelectorAll(".arrow-controls .btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const container = e.target
        .closest("section")
        .querySelector(".card-container");
      const scrollAmount =
        container.scrollWidth / container.children.length / 3; // Calculate amount to scroll
      container.scrollBy({
        left: e.target.classList.contains("prev-btn")
          ? -scrollAmount
          : scrollAmount,
        behavior: "smooth",
      });
    });
  });

  function filterVideos(part) {
    if (part === "전체") {
      renderCards(videoData, "exercise-cards");
    } else {
      const filteredVideos = videoData.filter((video) => video.part === part);
      renderCards(filteredVideos, "exercise-cards");
    }
  }

  // Initial render of all videos
  filterVideos("전체");

  // Event listeners for buttons
  document
    .getElementById("all-btn")
    .addEventListener("click", () => filterVideos('전체'));
  document
    .getElementById("all-body-btn")
    .addEventListener("click", () => filterVideos("전신"));
  document
    .getElementById("upper-btn")
    .addEventListener("click", () => filterVideos("상체"));
  document
    .getElementById("lower-btn")
    .addEventListener("click", () => filterVideos("하체"));
  document
    .getElementById("abs-btn")
    .addEventListener("click", () => filterVideos("복부"));
});
