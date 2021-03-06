import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const { kakao } = window;

function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
  }, []);

  const onClickHandler = () => {
    axios.get("/api/users/logout").then((response) => {
      if (response.data.success) {
        navigate("/login");
      } else {
        alert("로그아웃 하는데 실패 했습니다.");
      }
    });
  };

  return (
    <div
      id="map"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        // position: "relative",
      }}
    >
      <div
        id="contents"
        style={{
          zIndex: 2,
        }}
      >
        <h2>시작 페이지 </h2>
        <button onClick={onClickHandler}>로그아웃</button>
        <Link to="/login">
          <button
            style={{
              margin: "5px",
            }}
          >
            로그인 페이지로
          </button>
        </Link>
        <Link to="/register">
          <button>회원가입 페이지로</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
