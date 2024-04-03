import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Infocard.css"

export default function Infocard({cardiconof,uppertext,amount,progresspercentage,directionone,background,iconbackground}) {
    let directionarrowcolor;
  if(directionone.iconName==="arrow-up"){
    directionarrowcolor="Green"
  }

  else{
    directionarrowcolor="Red"
  }
  return (
    <div className='inforcardparent justify-center flex gap-4'>
      <div className="leftphotoparentone flex justify-center items-center" style={{backgroundColor:background}}>
        <div className=''>
        <p className="insidelogoofinfocard">
        <FontAwesomeIcon  icon={cardiconof} style={{color:iconbackground}}/> 
        </p>
        </div>
      </div>

      <div className="righttextparentofinfocard flex flex-col justify-center">
    <p className="uupertextparent">{uppertext}</p>
    <p className="amountparenttext">${amount}K</p>
    <p className="progressprecentagetext" >
        <FontAwesomeIcon icon={directionone} style={{color:directionarrowcolor}}/> 
        <span className='percentageofgrowt' style={{color:directionarrowcolor}} > {progresspercentage}%</span> <span className='lastmonthweekinfo'>this month</span></p>
      </div>
    </div>
  )
}
