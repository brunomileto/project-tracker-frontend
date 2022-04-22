import React, {useState, useEffect} from "react";
import BackArrow from "../../components/BackArrow/BackArrow";
import PageTitle from "../../components/AppTitle/PageTitle/PageTitle";
import { Link, useLocation } from "react-router-dom";
import { getTimeFromStr } from "../../utils/utils";
import { pages } from "../../enumerators/enums";
import StartImg from './assets/images/svg/btn_start.svg';
import StopImg from './assets/images/svg/btn_stop.svg';
import {CronItemButtonStyle, ImageStyle, CronItemStyle, CronContainerStyle, CronStyle, CronItemLeftSTitletyle, CronItemLeftValueStyle, CronItemLeftContainerStyle, CronItemContainerStyle, CronItemRightStyle } from "./style";
import api from "../../services/api";

function Cron(){  
  const location = useLocation();
  var uid = location.state[0];
  var timeStr = location.state[1];
  var taskName = location.state[2];
  var time = getTimeFromStr(timeStr);

  const [isActive, setIsActive] = useState(false);
  const [hour, setHour] = useState(time.hours);
  const [minute, setMinute] = useState(time.minutes);
  const [second, setSecond] = useState(time.seconds);
  const [seconds, setSeconds] = useState(0);
  const [formattedCron, setFormattedCron] = useState(timeStr);
  const [currentCron, setCurrentCron] = useState(timeStr);

  var imgSource = null;

  function toggle() {
    if(isActive){
      window.api.send("resize-back")
      setCurrentCron(formattedCron);
    }
    if(!isActive){
      window.api.send("resize")
    }
    setIsActive(!isActive);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSecond(second => second + 1);
        if(second == 60){
          setMinute(minute => minute + 1);
          setSecond(0)
        }
        if(minute == 60){
          setHour(hour => hour + 1);
          setMinute(0);
        }
        var hourStr = hour.toString();
        if (hourStr.length == 1)
          hourStr = 0+hourStr;
        var minuteStr = minute.toString();
        if (minuteStr.length == 1)
        minuteStr = 0+minuteStr;
        var secondStr = second.toString();
        if (secondStr.length == 1)
        secondStr = 0+secondStr;
        var newCronValue = `${hourStr}:${minuteStr}:${secondStr}`;
        setFormattedCron(newCronValue);
        api.updateTaskHour(newCronValue, uid);
        api.updateProjectHour();
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, second, minute, hour]);

  if(isActive){
    imgSource = <ImageStyle src={StopImg} />;
    // window.ipcRenderer.on('resize')
  } else {
    // window.ipcRenderer.on('resize-back')
    imgSource = <ImageStyle src={StartImg} />;
  }
  
  return(
    <>
      <PageTitle titleName={taskName} />
        <CronItemContainerStyle >
          <CronItemLeftContainerStyle>
          <CronItemLeftSTitletyle>
            Tempo Gasto
          </CronItemLeftSTitletyle>
          <CronItemLeftValueStyle>
            {currentCron}
          </CronItemLeftValueStyle>
          </CronItemLeftContainerStyle>
          <CronItemRightStyle onClick={() => toggle()} >
            {imgSource}
          </CronItemRightStyle>
        </CronItemContainerStyle>
        <CronContainerStyle>
          <CronItemStyle>
            {formattedCron}
          </CronItemStyle>
        </CronContainerStyle>
      <BackArrow url={pages.tasks}/>
    </>
  )
}

export default Cron;