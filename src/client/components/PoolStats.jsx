import React, { Component } from 'react';

import Style from '../styles/main.less';

class PoolStatsComponent extends Component {
    render() {
        return (
            <div>
                <p className={Style.sectionHeader}>POOL STATS</p>
                <div className={Style.graphs}>
                    <div className={Style.firstRow}>
                        <div className={Style.card + "card"}>
                            <img src="screenShot.png" className="card-img-top" alt="..." />
                            <div className={Style.cardBody + "card-body"}>
                                <h3>50.98 <span className={Style.cardSubText}>MH/sec</span></h3>
                                <p className="card-text">Pool Hash Rate</p>
                            </div>
                        </div>
                        <div className={Style.card + "card"}>
                            <img src="screenShot.png" className="card-img-top" alt="..." />
                            <div className={Style.cardBody + "card-body"}>
                                <h3>22 <span className={Style.cardSubText}>Minutes</span></h3>
                                <p className="card-text">Previous Block Found</p>
                            </div>
                        </div>
                        <div className={Style.card + "card"}>
                            <img src="screenShot.png" className="card-img-top" alt="..." />
                            <div className={Style.cardBody + "card-body"}>
                                <h3>9,477 <span className={Style.cardSubText}></span></h3>
                                <p className="card-text">Miners Connected</p>
                            </div>
                        </div>
                    </div>
                    <div className={Style.secondRow}>
                        <div className={Style.card + "card"}>
                            <img src="screenShot.png" className="card-img-top" alt="..." />
                            <div className={Style.cardBody + "card-body"}>
                                <h3>333.94 <span className={Style.cardSubText}>MH/sec</span></h3>
                                <p className="card-text">Network Hash Rate</p>
                            </div>
                        </div>
                        <div className={Style.card + "card"}>
                            <img src="screenShot.png" className="card-img-top" alt="..." />
                            <div className={Style.cardBody + "card-body"}>
                                <h3>2.4041 <span className={Style.cardSubText}>XMR</span></h3>
                                <p className="card-text">Block Reward</p>
                            </div>
                        </div>
                        <div className={Style.card + "card"}>
                            <img src="screenShot.png" className="card-img-top" alt="..." />
                            <div className={Style.cardBody + "card-body"}>
                                <h3>$70.60 <span className={Style.cardSubText}>USD</span></h3>
                                <p className="card-text">XMR Value</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PoolStatsComponent;