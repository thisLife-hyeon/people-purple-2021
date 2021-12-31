const TodayDate = document.querySelector(".chat-date");

function ChatDate() {
  const dateObj = new Date();
  const year = dateObj.getFullYear();

  const month = dateObj.getMonth() + 1; //months from 1-12
  String(dateObj.getMonth()).padStart(2, "0");

  const day = dateObj.getDate();
  String(dateObj.getDate()).padStart(2, "0");

  const date = dateObj.getDay();
  const week = new Array("일", "월", "화", "수", "목", "금", "토");

  TodayDate.innerText = `${year}년 ${month}월 ${day}일 ${week[date]}요일`;
}

ChatDate();
