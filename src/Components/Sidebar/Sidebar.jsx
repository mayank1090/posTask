import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHalved,
  faPerson,
  faLandmark,
  faPercent,
  faCircleQuestion,
  faGear,
  faChevronRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/fontawesome-free-solid";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className=" parentofsidebarmenu justify-between flex flex-col h-full overflow-y-auto text-white pt-4 pb-4 pl-2 pr-2">
        <div className="uppersidebarprnth ">
      <div className="uppersidebarhead mt-4 flex pl-4 pr-4 gap-1">
        <div className="dashfonticonprnt">
          <FontAwesomeIcon icon={faGear} className="fa-2x " style={{color:"white"}}/>
        </div>
        <div className="textprnt">
          <p className="upperheadside">Dashboard</p>
        </div>
      </div>
      <div className="sidebarmenu  pl-4 pr-4 ">
        <ul className="menubarsideul  pt-6 ">
          <li className="sidemenu p-2 flex" style={{backgroundColor:" rgb(54, 54, 128)"}}>
            <div className="dashboardmenygapprt flex gap-4">
            <FontAwesomeIcon icon={faUser} className="fa-fw" />
            <p className="innermenutext"> Dashboard</p>
            </div>
          </li>
          <li className="sidemenu p-2 flex">
          <div className="dashboardmenygapprt flex gap-4">
            <FontAwesomeIcon icon={faShieldHalved} className="fa-fw" />
            <p className="innermenutext">Product</p>
            </div>
            <FontAwesomeIcon className="rightarrow" icon={faChevronRight} />
          </li>
          <li className="sidemenu p-2 flex">
          <div className="dashboardmenygapprt flex gap-4">
            <FontAwesomeIcon icon={faPerson} className="fa-fw" />
            <p className="innermenutext">Customers</p>
            </div>
            <FontAwesomeIcon className="rightarrow" icon={faChevronRight} />
          </li>
          <li className="sidemenu p-2 flex">
          <div className="dashboardmenygapprt flex gap-4">
            <FontAwesomeIcon icon={faLandmark} className="fa-fw"  />
            <p className="innermenutext">Income</p>
            </div>
            <FontAwesomeIcon className="rightarrow" icon={faChevronRight} />
          </li>
          <li className="sidemenu p-2 flex">
          <div className="dashboardmenygapprt flex gap-4">
            <FontAwesomeIcon icon={faPercent} className="fa-fw" />
            <p className="innermenutext">Promote</p>
            </div>
            <FontAwesomeIcon className="rightarrow" icon={faChevronRight} />
          </li>
          <li className="sidemenu p-2 flex">
            <div className="dashboardmenygapprt flex gap-4">
            <FontAwesomeIcon icon={faCircleQuestion} className="fa-fw" />
            <p className="innermenutext">help</p>
            </div>
            <FontAwesomeIcon className="rightarrow" icon={faChevronRight} />
          </li>
        </ul>
      </div>
      </div>
      <div className="lowerpersondetail flex justify-between p-2 items-center" style={{backgroundColor:" rgb(54, 54, 128)"}}>
        <div className="manernamenadphotoprnt flex gap-2 ">
        <img src="./manager.png" alt="manager" className="projectmanagerpic  w-10 h-10" />
        <div className="mangerdetailtext">
          <p className="managername">Evano</p>
          <p className="mangerpost">Project Manager</p>
        </div>
        </div>
        <div className="downarrowpent">
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </div>
    </div>
  );
}
