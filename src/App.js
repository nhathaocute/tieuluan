import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  const [userMessage, setUserMessage] = useState("");
  const [botResponse, setBotResponse] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const handleShown = () => {
      const items = document.querySelectorAll(".list-menu");
      items.forEach((item, index) => {
        item.style.animation = `slideIn 0.5s ease forwards`;
        item.style.animationDelay = `${index * 0.5}s`; // Điều chỉnh độ trễ nếu cần
      });
    };

    const handleHidden = () => {
      const items = document.querySelectorAll(".list-menu");
      items.forEach((item) => {
        item.style.opacity = "0";
        item.style.transform = "translateY(-20px)";
        item.style.animation = "";
      });
    };

    const offcanvasElement = document.getElementById("offcanvasExample");
    offcanvasElement.addEventListener("shown.bs.offcanvas", handleShown);
    offcanvasElement.addEventListener("hidden.bs.offcanvas", handleHidden);

    return () => {
      offcanvasElement.removeEventListener("shown.bs.offcanvas", handleShown);
      offcanvasElement.removeEventListener("hidden.bs.offcanvas", handleHidden);
    };
  }, []);

  const handleChange = (event) => {
    setUserMessage(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3005/webhook", // Sửa đường dẫn để gửi yêu cầu đến Flask
        { message: userMessage }
      );
      console.log(response.data); // In ra dữ liệu phản hồi từ Flask
      setBotResponse(response.data.response); // Lấy phản hồi của bot và cập nhật state
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div>
      <div className="container pt-3">
        <header className="header">
          <div className="row mx-0">
            <div className="col-3 d-flex align-items-center justify-content-center">
              <div className="bao-logo p-1">
                <img
                  className="logots"
                  src={`${process.env.PUBLIC_URL}/img/logots.png`}
                  alt="My Image"
                />
              </div>
            </div>
            <div className="col-6">
              <h1 className="text-center text-shine">
                <span className="shine-effect">milk tea HaoCute</span>
              </h1>
            </div>
            <div className="col-3 menu-home">
              <a
                className="btn menu-canvas"
                data-bs-toggle="offcanvas"
                href="#offcanvasExample"
                role="button"
                aria-controls="offcanvasExample"
              >
                <i className="fa-regular fa-rectangle-list"></i>
                <span className="mx-1">menu</span>
              </a>
            </div>
          </div>
        </header>
        <div
          className="offcanvas offcanvas-end style-menu"
          tabIndex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="offcanvas-header header-menu">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel">
              Menu
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <div className="dropdown">
              <div className="list-menu">
                <a className="link-item">Đăng nhập</a>
              </div>
              <div className="list-menu">
                <a className="link-item">Đăng ký</a>
              </div>
              <div className="list-menu">
                <a className="link-item">Sản phẩm</a>
              </div>
              <div className="list-menu">
                <a className="link-item">Liên hệ</a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="row banner mx-5"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/img/banner1.jpg)`,
          }}
        >
          <div className="col-3 d-flex align-items-center justify-content-center bao-sticker">
            <div className="sticker1"></div>
          </div>
          <div className="col-6"></div>
          <div className="col-3 d-flex align-items-center justify-content-center bao-sticker">
            <div className="sticker2"></div>
          </div>
        </div>
        <div className="row">
          <div className="title-body text-center py-3 mt-5" id="border-animate">
            <h2>các loại trà sữa</h2>
          </div>
          <div className="col-3">
            <div>
              <div class="group-img-product">
                <img
                  className="card-img-top"
                  src={`${process.env.PUBLIC_URL}/img/1.png`}
                  alt="My Image"
                />
                <div class="new">new</div>
                <div class="view-details">
                  <i class="fa-solid fa-eye"></i>
                </div>
              </div>
              <div class="group-content-product">
                <h3 class="title-product">tra sua vi socola full topping</h3>
                <div class="price-product">Giá: 100000 VNĐ</div>
                <div class="add-cart">
                  <i class="fa-solid fa-cart-plus"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div>
              <div class="group-img-product">
                <img
                  className="card-img-top"
                  src={`${process.env.PUBLIC_URL}/img/2.png`}
                  alt="My Image"
                />
                <div class="new">new</div>
                <div class="view-details">
                  <i class="fa-solid fa-eye"></i>
                </div>
              </div>
              <div class="group-content-product">
                <h3 class="title-product">tra sua vi socola full topping</h3>
                <div class="price-product">Giá: 100000 VNĐ</div>
                <div class="add-cart">
                  <i class="fa-solid fa-cart-plus"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div>
              <div class="group-img-product">
                <img
                  className="card-img-top"
                  src={`${process.env.PUBLIC_URL}/img/3.png`}
                  alt="My Image"
                />
                <div class="new">new</div>
                <div class="view-details">
                  <i class="fa-solid fa-eye"></i>
                </div>
              </div>
              <div class="group-content-product">
                <h3 class="title-product">tra sua vi socola full topping</h3>
                <div class="price-product">Giá: 100000 VNĐ</div>
                <div class="add-cart">
                  <i class="fa-solid fa-cart-plus"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div>
              <div class="group-img-product">
                <img
                  className="card-img-top"
                  src={`${process.env.PUBLIC_URL}/img/4.png`}
                  alt="My Image"
                />
                <div class="new">new</div>
                <div class="view-details">
                  <i class="fa-solid fa-eye"></i>
                </div>
              </div>
              <div class="group-content-product">
                <h3 class="title-product">tra sua vi socola full topping</h3>
                <div class="price-product">Giá: 100000 VNĐ</div>
                <div class="add-cart">
                  <i class="fa-solid fa-cart-plus"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div className="title-body text-center py-3 mt-5" id="border-animate">
            <h2>các loại trà sữa</h2>
          </div>
          <div className="col-3">
            <div>
              <div class="group-img-product">
                <img
                  className="card-img-top"
                  src={`${process.env.PUBLIC_URL}/img/bttron.jpeg`}
                  alt="My Image"
                />
                <div class="new">new</div>
                <div class="view-details">
                  <i class="fa-solid fa-eye"></i>
                </div>
              </div>
              <div class="group-content-product">
                <h3 class="title-product">tra sua vi socola full topping</h3>
                <div class="price-product">Giá: 100000 VNĐ</div>
                <div class="add-cart">
                  <i class="fa-solid fa-cart-plus"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div>
              <div class="group-img-product">
                <img
                  className="card-img-top"
                  src={`${process.env.PUBLIC_URL}/img/btnuong.jpeg`}
                  alt="My Image"
                />
                <div class="new">new</div>
                <div class="view-details">
                  <i class="fa-solid fa-eye"></i>
                </div>
              </div>
              <div class="group-content-product">
                <h3 class="title-product">tra sua vi socola full topping</h3>
                <div class="price-product">Giá: 100000 VNĐ</div>
                <div class="add-cart">
                  <i class="fa-solid fa-cart-plus"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button className="bottom-right-button" onClick={toggleChat}>
        tư vấn tôi
      </button>

      {isChatOpen && (
        <div className="chat-box">
          <div className="chat-box-header">
            <h4>Chat</h4>
            <button className="close-chat" onClick={toggleChat}>
              &times;
            </button>
          </div>
          <div className="chat-box-content">
            <input
              type="text"
              value={userMessage}
              onChange={handleChange}
              placeholder="Nhập tin nhắn của bạn..."
            />
            <button className="btn btn-primary" onClick={handleSubmit}>
              Gửi
            </button>
            <div>Phản hồi của Bot: {botResponse}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
