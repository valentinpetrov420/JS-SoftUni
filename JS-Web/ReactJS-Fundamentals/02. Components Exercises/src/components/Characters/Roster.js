import React from 'react';

export default class Roster extends React.Component {
    constructor(props) {
        super(props);
    }
    render = () => {
        const images = this.props.images.map(i => (
            //i deleted the first one because it was like 1000 by 1000 while the other 3 were like 200 by 200
            //which made the css className in App.css under the name .roster-image-container not use the flex tag properly
            <div key={i.id}>
                <img src={i.url} alt="missing image urls" onClick={() => this.props.select(i.id)}/>
            </div>
        ));

        return (
            <section id="roster-image-container">
                {images}
            </section>
        )
    }
}