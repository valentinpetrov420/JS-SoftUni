import React from 'react'

function generateContact(user, id, clickHandler) {
    return (
        <div className="contact" data-id="{id}" onClick={() => clickHandler(id)}>
            <span className="avatar small">&#9787;</span>
            <span className="title">{user.firstName} {user.lastName}</span>
        </div>
    )
}

export default generateContact