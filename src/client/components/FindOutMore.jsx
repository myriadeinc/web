import React, { Component } from 'react';

import Style from '../styles/main.less';

class FindOutMoreComponent extends Component {

    render() {
        return (
            <section id="FindOutMore">
                <p className={Style.sectionHeader}>FIND OUT MORE</p>
                <p className={Style.FindOutBlurb}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ea doloremque recusandae eos tenetur consequuntur ut aut, distinctio accusantium molestias sit totam porro ullam provident laudantium rem sed assumenda? Sequi?
                </p>
            </section>
        )
    }
}

export default FindOutMoreComponent;