document.addEventListener('DOMContentLoaded', function() {
  var loginForm = document.getElementById('loginForm');
  var loginLogoutButton = document.getElementById('loginLogoutButton');

  // 페이지 로드 시 로그인 상태에 따라 버튼 업데이트
  updateLoginLogoutButton();

  // 로그인 폼 제출 이벤트 리스너
  if (loginForm) {
      loginForm.addEventListener('submit', function(event) {
          event.preventDefault();  // 폼의 기본 제출 동작 방지
          var userID = document.getElementById('userID').value;
          localStorage.setItem('userID', userID);
          updateLoginLogoutButton(); // 로그인 후 버튼 업데이트
          $('#loginModal').modal('hide'); // 모달 숨기기
          updateRecommendationHeader(userID); // 사용자 추천 헤더 업데이트
      });
  }

  // 로그인/로그아웃 버튼 클릭 이벤트 처리
  loginLogoutButton.addEventListener('click', function() {
      if (localStorage.getItem('userID')) {
          // 로그아웃 처리
          localStorage.removeItem('userID');
          updateLoginLogoutButton(); // 로그인 버튼으로 변경
          updateRecommendationHeader(null); // 추천 헤더 업데이트
      } else {
          // 모달을 열어 로그인 할 수 있게 함
          $('#loginModal').modal('show');
      }
  });

  function updateLoginLogoutButton() {
      if (localStorage.getItem('userID')) {
          loginLogoutButton.textContent = 'Logout';
          // 모달 트리거 비활성화
          loginLogoutButton.removeAttribute('data-toggle');
          loginLogoutButton.removeAttribute('data-target');
      } else {
          loginLogoutButton.textContent = 'Login';
          // 모달 트리거 활성화
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
});
