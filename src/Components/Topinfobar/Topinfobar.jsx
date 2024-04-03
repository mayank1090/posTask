import React from 'react'
import "./Topinfobar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHandsClapping,faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";
import { faUser, faBars } from "@fortawesome/fontawesome-free-solid";

export default function Topinfobar({setsidebar,showsidebar}) {
  return (
    <div className='topinforbarparent flex  flex-row-reverse md:flex-row justify-between p-8'>
      <div className='hamerburgericon  md:hidden' onClick={()=>{setsidebar(!showsidebar)}}>
      <FontAwesomeIcon icon={faBars} />
      </div>

      <div className='wecanhvaitfoufurthr md:w-full flex flex-col md:flex-row  md:gap-0 gap-3 md:justify-between '>
        <div className="firstlefthandforthetoprightbar flex gap-2">
        <p className='hellousertext'>Hello Shahrukh </p>
        <p className='anyhands' ><FontAwesomeIcon icon={faHandsClapping} /> </p>
        </div>

        <div className="righttopbarparent flex gap-2">
           <p className='searchiconforrightsearchbar'><FontAwesomeIcon icon={faMagnifyingGlass} /></p>
            <input type='text' className='searchbaroftopright ' placeholder='Search'/>
        </div>
        </div>
    </div>
  )
}
