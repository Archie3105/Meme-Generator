import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="bg-dark p-2 text-xl mb-0  rounded-xl text-center ">
        <h6 className="text-white  ">
          Copyright ©2024 All rights reserved by{" "}
          <Link target="_blank"
            to={
              "https://www.instagram.com/official.eternal.code?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            }
            className="text-amber-400 username"
          >
            <strong>@official.eternal.code</strong>
          </Link>
        </h6>
      </div>
    </footer>
  );
}

export default Footer;
