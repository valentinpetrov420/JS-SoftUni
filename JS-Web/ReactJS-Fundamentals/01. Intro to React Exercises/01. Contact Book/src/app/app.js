import React from 'react'
import './app.css'
import generateContact from '../contact/contact'
import contacts from '../data/contacts.json'
import generateUserDetails from '../user/user'

function createApp(clickHandler, id) {
    const user = contacts[id];

    return (
        <div className="container">
            <header>&#9993; Contact Book</header>
            <div id="book">
                <div id="list">
                    <h1>Contacts</h1>
                    <div className="content">
                        {contacts.map((c, i) => generateContact(c, i, clickHandler))}
                    </div>
                </div>
                {generateUserDetails(user)}
                <footer>Contact Book SPA &copy; 2017</footer>
            </div>
        </div>
    )
}

export default createApp