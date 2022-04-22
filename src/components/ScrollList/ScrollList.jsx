import React, {useState} from "react";
import { Navigate, useNavigate} from "react-router-dom";
import { pages } from "../../enumerators/enums";
import { ScrollListStyle,ScrollListItemContainerStyle, ScrollListItemLeftStyle, ScrollListItemRightStyle } from "./style";


function ScrollList(props){  
  var isProjects = props.page == pages.projects;

  let navigate = useNavigate();
  const handleRoute = (uid, time, name) =>{
    if (isProjects){
      navigate(`/${pages.tasks}`, {replace:true, state:uid});
    }
    else{
      navigate(`/${pages.cron}`, {replace:true, state:[uid, time, name]});
    }
  }
  const data = props.items;
  const [clicked, setclicked] = useState(false);
  const [uid, setuid] = useState("");
  
  return(
    <>
      <ScrollListStyle>
        <form>
          {data.map(({name, uid, time}) => {
            return(
              <ScrollListItemContainerStyle onClick={() => handleRoute(uid, time, name)} id={uid}>
                <ScrollListItemLeftStyle>
                  {name}
                </ScrollListItemLeftStyle>
                <ScrollListItemRightStyle>
                  {time}
                </ScrollListItemRightStyle>
              </ScrollListItemContainerStyle>
            )
          })}
        </form>
      </ScrollListStyle>
    </>
  )
}

export default ScrollList;