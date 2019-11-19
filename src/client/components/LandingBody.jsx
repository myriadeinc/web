import React, { Component } from 'react';

import Style from '../styles/main.less';

class LandingBody extends Component {

  render() {
    return (
      <>
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

      <section id="SignUp">
        <table>
            <tr>
                <td>
                    <div className={Style.signUpContent}>
                        <img src="contract.png" alt="" width="80" height="80" />
                        <div className={Style.secondContent}>
                            <h2>Sign Up</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos fugit quae, nulla laborum molestias voluptatem, dolor error.</p>
                        </div>
                    </div>
                </td>

            </tr>
            <tr>
                <td>
                    <div className={Style.signUpContent}>
                        <img src="cloud-computing.png" alt="" width="80" height="80" />
                        <div className={Style.secondContent}>
                            <h2>Download</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore cumque nostrum ad nam corrupti culpa, assumenda debitis.</p>
                        </div>
                    </div>
                </td>

            </tr>
            <tr>
                <td>
                    <div className={Style.signUpContent}>
                        <img src="cryptocurrency.png" alt="" width="80" height="80" />
                        <div className={Style.secondContent}>
                            <h2>Mine</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates soluta aspernatur quas facilis.</p>
                        </div>
                    </div>
                </td>

            </tr>
            <tr>
                <td>
                    <div className={Style.signUpContent}>
                        <img src="game-control.png" alt="" width="80" height="80" />
                        <div className={Style.secondContent}>
                            <h2>Play</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi praesentium labore nobis.</p>
                        </div>
                    </div>
                </td>
            </tr>
        </table>
      </section>

      </>
    );
  }
}

export default LandingBody;
