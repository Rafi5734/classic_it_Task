import "./topNavbar.css";
const TopNavbar = () => {
  return (
    <div className="top_nav_main w-100 p-2 pt-3 pb-3 d-flex justify-content-center align-center">
      <div className="top_nav_wrapper">
        <div>
          <span className="text-nowrap">Save 30% sitewidget! Ends in</span>
        </div>

        <div className="top_nav_timer">
          <span className="ms-2 days ps-2 pe-2 pt-1 pb-1 rounded-1 fw-bold">
            33<span className="d_sign fw-light ms-1">d</span>
          </span>{" "}
          <span className="ms-2 days ps-2 pe-2 pt-1 pb-1 rounded-1 fw-bold">
            33<span className="d_sign fw-light ms-1">h</span>
          </span>{" "}
          <span className="ms-2 days ps-2 pe-2 pt-1 pb-1 rounded-1 fw-bold">
            33<span className="d_sign fw-light ms-1">m</span>
          </span>{" "}
          <span>:</span>
          <span className="ms-2 days ps-2 pe-2 pt-1 pb-1 rounded-1 fw-bold">
            33<span className="d_sign fw-light ms-1">s</span>
          </span>{" "}
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
