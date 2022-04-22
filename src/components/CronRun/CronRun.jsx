import React from 'react';
import { Link } from 'react-router-dom';
import  {CronContainerStyle, CronItemStyle} from './style';
import { useNavigate} from "react-router-dom";

function CronRun(props){  
  const taskUid = props.taskUid;
  let navigate = useNavigate();
  const handleClick = () =>{
    navigate(`/${pages.tasks}`, {replace:true, cronRunState:'stop'})
  }
  return(
    <>
    <Link  onClick={() => handleClick()} >
      <CronContainerStyle>
      <CronItemStyle>
        {props.formattedCron}
      </CronItemStyle>
      </CronContainerStyle>
    </Link>
    </>
  )
}

export default CronRun;