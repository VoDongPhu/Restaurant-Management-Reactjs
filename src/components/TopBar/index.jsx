import React from "react";
import "./styles.scss"
function TopBar ()
{
    return (
        <div className="topbar">
        <div className="search">
            <label>
                <input type="text" placeholder="Search here"></input>
                <i class="fa-solid fa-magnifying-glass icon"></i>
            </label>
        </div>
        <div className="notify">
        <i class="fa-solid fa-bell"></i>
        </div>
        <div className="user-name">Võ Đông Phú</div>
        <div className="user-img">
            <img src="https://scontent.fhan3-4.fna.fbcdn.net/v/t1.6435-1/157093435_862460091200587_2661915237980729971_n.jpg?stp=dst-jpg_p320x320&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=5OW2D_NptxsAX-qfQAi&tn=uXkrl07T49_Q6zRi&_nc_ht=scontent.fhan3-4.fna&oh=00_AfB2_2TQ8Agv5VRYqYll6hiBbB9uYF8jZ1oeVKvhseFtfg&oe=63BA08F4"></img>
        </div>
    </div>
    )
}
export default TopBar