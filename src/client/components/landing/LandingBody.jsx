import React, { Component } from 'react';

import Style from '../../styles/main.less';

class LandingBody extends Component {

  render() {
    return (
      <div className={Style.Header}>
        <div className={Style.Introduction}>
            <img src="LogoDarkMode.png" length="1400" width="393" alt="" />
            <p className={Style.shortBlurb}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ea doloremque recusandae eos tenetur consequuntur ut aut, distinctio accusantium molestias sit totam porro ullam provident laudantium rem sed assumenda? Sequi?
            </p>
            <button type="button" className="btn btn-light btn-lg">
                <a className={Style.FindOut} href="#FindOutMore">Find Out More</a>
            </button>
            <div className={Style.LaptopSlideShow}>
                <img src="macbook-562499.png" alt="" length="500" width="500" />
            </div>
        </div>
      </div>
    );
  }
}

export default LandingBody;
