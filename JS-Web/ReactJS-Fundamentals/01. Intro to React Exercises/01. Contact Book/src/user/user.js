import React from 'react'

function generateUserDetails(user) {
    return (
        <div id="details">
            <h1>Details</h1>
            <div className="content">
                <div className="info">
                    <div className="col">
                        <span className="avatar">&#9787;</span>
                    </div>
                    <div className="col">
                        <span className="name">{user.firstName}</span>
                        <span className="name">{user.lastName}</span>
                    </div>
                </div>
                <div className="info">
                    <span className="info-line">&phone; {user.phone}</span>
                    <span className="info-line">&#9993; {user.email}</span>
                </div>
            </div>
        </div>
    )
}

export default generateUserDetails