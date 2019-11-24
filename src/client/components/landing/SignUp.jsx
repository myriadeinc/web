import React, { Component } from 'react';

import Style from '../../styles/main.less';

class SignUp extends Component {

  render() {
    return (
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
    )
  }
}

export default SignUp;
