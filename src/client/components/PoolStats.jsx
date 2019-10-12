import React, { Component } from 'react';

import Style from '../styles/main.less';

class PoolStats extends Component {

    render() {
        return (
            <section id="PoolStats">
        <p class="sectionHeader">POOL STATS</p>
        <div class="graphs">
            <div class="firstRow">
                <div class="card" style="width: 18rem;">
                    <img src="screenShot.png" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h3>50.98 <span class="cardSubText">MH/sec</span></h3>
                        <p class="card-text">Pool Hash Rate</p>
                    </div>
                </div>
                <div class="card" style="width: 18rem;">
                    <img src="screenShot.png" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h3>22 <span class="cardSubText">Minutes</span></h3>
                        <p class="card-text">Previous Block Found</p>
                    </div>
                </div>
                <div class="card" style="width: 18rem;">
                    <img src="screenShot.png" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h3>9,477 <span class="cardSubText"></span></h3>
                        <p class="card-text">Miners Connected</p>
                    </div>
                </div>
            </div>
            <div class="secondRow">
                <div class="card" style="width: 18rem;">
                    <img src="screenShot.png" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h3>333.94 <span class="cardSubText">MH/sec</span></h3>
                        <p class="card-text">Network Hash Rate</p>
                    </div>
                </div>
                <div class="card" style="width: 18rem;">
                    <img src="screenShot.png" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h3>2.4041 <span class="cardSubText">XMR</span></h3>
                        <p class="card-text">Block Reward</p>
                    </div>
                </div>
                <div class="card" style="width: 18rem;">
                    <img src="screenShot.png" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h3>$70.60 <span class="cardSubText">USD</span></h3>
                        <p class="card-text">XMR Value</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
        )
    }
}