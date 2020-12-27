import React from 'react'

export default function Header() {
    return (
        <div className="header">
            <h1>Temperature Alert Management System</h1>
            <div className="nav">
                <a href="/">  Home   <i class="fa fa-home" aria-hidden="true"></i>     </a> | 
                <a href="/history">       History   <i class="fa fa-bookmark" aria-hidden="true"></i>    </a>|
                <a href="/alerts">    Alerts   <i class="fa fa-bell" aria-hidden="true"></i></a>
            </div>
        </div>
    )
}
