document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#addReview form");
  const reviewTable = document.getElementById("reviewTable");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // 폼 제출 기본 동작 막기

    // 폼의 입력값 가져오기
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    // 현재 시간을 "YYYY-MM-DD HH:MM:SS" 형식으로 가져오기
    const currentDateTime = new Date()
      .toISOString()
      .replace("T", " ")
      .slice(0, 19);

    // 새로운 리뷰 번호 계산
    const newIndex = reviewTable.querySelectorAll("tr").length + 1;

    // 새로운 리뷰 행 생성
    const newRow = document.createElement("tr");

    newRow.innerHTML = `
        <th scope="row">${newIndex}</th>
        <td>익명 사용자</td>
        <td>${title}</td>
        <td>${currentDateTime}</td>
      `;

    // 새로운 행을 테이블의 가장 아래에 추가
    reviewTable.appendChild(newRow);

    // 폼 초기화 및 모달 닫기
    form.reset();
    const modal = bootstrap.Modal.getInstance(document.getElementById('addReview'))
    modal.hide();
  });
});
