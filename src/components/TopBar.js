import React, { Component } from 'react';
import '../css/TopBar.css'

class TopBar extends Component {
    render() {
        const popularCats = ['Home','Promotions', 'Beauty Hall', 'Women', 'Men', 'Sports Mall', 'Power Mall', 'Watches', 'Kids Planet', ' Betrend', 'The Living']

        return (
            <div className="Container">
                <div className="TopBar">
                    {popularCats.map((x,index) => (
                        <h3 key={index}>
                            <a href="/">
                                {x.toUpperCase()}
                            </a>
                        </h3>
                    ))}

                </div>
            </div>
        );
    }
}

export default TopBar;