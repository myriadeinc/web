import React, { Component } from 'react';

import Style from '../styles/main.less';

class HeaderComponent extends Component {

  render() {
    return (
      <div className={Style.Header}>

        <div className={Style.Navbar}>
            <img src="Logo.png" alt="logo" length="50" width="50" />
            <div className={Style.links}>
                <a className={Style.menuLink} href="#GameRoom">Game Room</a>
                <a className={Style.menuLink} href="#Shop">Shop</a>
                <div className={Style.user}>
                    <a href="#User"><img src="user3.png" alt="" width="30" length="30" /></a>
                    <img className={Style.menuLink} src="dropDown.png" length="15" width="15" alt="" />
                </div>
                <a className={Style.menuLink} href="#Notification"><img src="notification.png" alt="" length="30" width="30" /></a>
                <div className={Style.Stats, Style.menuLink}>
                    <div className={Style.myriadeStat, Style.cryptoStat}>
                        <img src="monero-symbol.png" alt="" length="13" width="16" />
                        <p className={Style.navStats}>2.590843</p>
                    </div>
                    <div className={Style.moneroStat, Style.cryptoStat}>
                        <img src="myriadeWhiteLogo.png" alt="" length="13" width="16" />
                        <p className={Style.navStats}>6,548,701</p>
                    </div>
                </div>
                <button type="button" className="btn btn-dark">
                    <a className={Style.menuLink + "btn"} href="#Download"> + Download </a>   
                </button>
            </div>
        </div>

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

export default HeaderComponent;