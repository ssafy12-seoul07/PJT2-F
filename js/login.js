document.addEventListener('DOMContentLoaded', function() {
  var loginForm = document.getElementById('loginForm');
  var loginLogoutButton = document.getElementById('loginLogoutButton');
  var recommendationSection = document.querySelector('.recommendation-section');

  // 페이지 로드 시 로그인 상태에 따라 버튼 및 추천 섹션 업데이트
  updateLoginLogoutButton();
  toggleRecommendationSection(); // 추천 섹션 표시 업데이트

  // 로그인 폼 제출 이벤트 리스너
  if (loginForm) {
      loginForm.addEventListener('submit', function(event) {
          event.preventDefault();
          var userID = document.getElementById('userID').value;
          localStorage.setItem('userID', userID);
          updateLoginLogoutButton(); // 로그인 후 버튼 업데이트
          toggleRecommendationSection(); // 추천 섹션 표시 업데이트
          updateRecommendationHeader(userID); // 사용자 추천 헤더 업데이트
          const modal = bootstrap.Modal.getInstance(document.getElementById('loginModal'))
          modal.hide();
      });
  }

  // 로그인/로그아웃 버튼 클릭 이벤트 처리
  loginLogoutButton.addEventListener('click', function() {
      if (localStorage.getItem('userID')) {
          localStorage.removeItem('userID');
          updateLoginLogoutButton(); // 로그인 버튼으로 변경
          toggleRecommendationSection(); // 추천 섹션 숨기기
          updateRecommendationHeader(null); // 추천 헤더 업데이트
      } else {
          const modal = bootstrap.Modal.getInstance(document.getElementById('loginModal'))
          modal.hide();
      }
  });

  function updateLoginLogoutButton() {
      if (localStorage.getItem('userID')) {
          loginLogoutButton.textContent = 'Logout';
          loginLogoutButton.removeAttribute('data-toggle');
          loginLogoutButton.removeAttribute('data-target');
      } else {
          loginLogoutButton.textContent = 'Login';
          loginLogoutButton.setAttribute('data-toggle', 'modal');
          loginLogoutButton.setAttribute('data-target', '#loginModal');
      }
  }

  function updateRecommendationHeader(userID) {
      var showUserId = document.getElementById('showUserId').querySelector('strong');
      if (userID) {
          showUserId.textContent = userID + "님에게 추천하는 오늘의 운동";
      } else {
          showUserId.textContent = "게스트님에게 추천하는 오늘의 운동";
      }
  }

  // 추천 섹션의 표시 상태를 토글하는 함수
  function toggleRecommendationSection() {
      if (localStorage.getItem('userID')) {
          recommendationSection.style.display = 'block';
      } else {
          recommendationSection.style.display = 'none';
      }
  }
});
