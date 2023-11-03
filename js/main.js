$(document).ready(function () {
  // 게시물 등록 이벤트 생성
  $("#postForm").on("submit", function (e) {
    e.preventDefault();

    let name = $("#postName").val();
    let content = $("#postContent").val();
    addPost(name, content);
    showPosts();

    postForm.reset();
  });

  showPosts();
});

// 게시물 불러오기
function getPosts() {
  return JSON.parse(localStorage.getItem("posts")) || [];
}

// 게시물 등록
function addPost(name, content) {
  let posts = getPosts();
  posts.push({ name, content });
  localStorage.setItem("posts", JSON.stringify(posts));
}

// 게시물 뿌려주기
function showPosts() {
  $("#postList").html("");
  let posts = getPosts();
  posts.forEach(function (post, index) {
    $("#postList").append(
      "<tr><td>" +
        Number(index + 1) +
        "</td><td>" +
        post.name +
        "</td><td>" +
        post.content +
        "</td><td><button onclick='deletePost(" +
        index +
        ")'>삭제</button></td></tr>"
    );
  });
}

// 게시물 삭제
function deletePost(index) {
  let posts = getPosts();
  posts.splice(index, 1);
  localStorage.setItem("posts", JSON.stringify(posts));
  location.reload();
}

/*
방명록 실습 가이드
1. html, css
 - css는 각자 웹페이지에 맞게 스타일 적용하기
 - form태그 안에 input박스, textarea 생성
 - 게시글 리스트를 넣어줄 요소 추가 (목록태그, 테이블태그 등등)
 - submit, reset 버튼 생성

2. 게시물 등록 이벤트 생성
 - 이름, 내용 값을 매개변수로 클릭이벤트 발생시켜 게시물 추가 함수 호출

3. 게시물을 localStorage에서 불러오는 함수 생성
 - 로컬저장소에서 객체로 데이터 불러오기
function getPosts() {
  return JSON.parse(localStorage.getItem("posts")) || [];
}

4. 게시물 localStorage안에 추가하는 함수 생성
 - 게시물 불러오는 함수 호출
 - 불러온 데이터에 입력한 데이터 추가
 - 로컬 저장소에 다시 저장

5. 등록된 게시물을 뿌려주는 함수 생성
 - 게시글 불러오는 함수 호출
 - 반복문 메서드를 사용하여 불러온 데이터 만큼 게시글 생성
 - 게시글 삭제 버튼에 삭제 함수 호출하는 이벤트 부여

6. 게시물 삭제하는 함수 생성
 - 게시물 불러오는 함수 호출 후 splice() 메서드로 해당 데이터 삭제
 - 로컬 저장소에 다시 저장
 - 화면 리로드
*/
