import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss"
function MenuAdmin() {
    return (
        <div className="navigation">
        <ul>
            <li>
                <a href="">
                   <i class="fa-solid fa-house-user icon"></i>
                    <span className="title">GENZ RESTAURANT</span>
                </a>
            </li>
            <li>
                <a href="">
                   <i class="fa-solid fa-user icon"></i>
                    <span className="title">Dashboard</span>
                </a>
            </li>
            <li>
                <Link to="/admin/user">
                    <i class="fa-solid fa-person icon"></i>
                    <span className="title">Khách hàng</span>
                </Link>
            </li>
            <li>
                <Link to="/admin/food">
                    <i class="fa-solid fa-pizza-slice icon"></i>
                    <span className="title">Món ăn</span>
                </Link>
            </li>
            <li>
                <Link to="/admin/table">
                <i class="fa-solid fa-table-columns icon"></i>
               
                    <span className="title">Bàn ăn</span>
                </Link>
            </li>
            <li>
                <Link to="/admin/booking">
                   <i class="fa-solid fa-utensils icon"></i> 
                    <span className="title">Đặt bàn</span>
                </Link>
            </li>
            <li>
                <a href="">
                   <i class="fa-solid fa-gear icon"></i>
                    <span className="title">Cài đặt</span>
                </a>
            </li>
            <li>
                <a href="">
                     <i class="fa-solid fa-right-from-bracket icon"></i>
                    <span className="title">Đăng xuất</span>
                </a>
            </li>
        </ul>
    </div>
    )
}
export default MenuAdmin