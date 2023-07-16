import React from "react";
import styles from './leftmenu.module.css'

const Leftmenu = () => {
    return (
        <div className={styles.leftmenu}>




            <div className="sidebar-brand-icon rotate-n-15">
                <div className={styles.header}>
                    <span className="fas fa-laugh-wink fa-2x" />
                    <span className={styles.headerName}>SB ADMIN <sup>2</sup></span>
                </div>
            </div>
            <hr />
            <div className={styles.Dashboard}>
                <i className="fas fa-fw fa-tachometer-alt" />
                <span>  Dashboard</span>
            </div>
            <hr />
            <div className={styles.interface}>

                <div className={styles.interfaceTitle}>INTERFACE</div>
                <br />
                <div className={styles.interfaceComponents}>


                    <div className={styles.Components}>
                        <i className="fas fa-fw fa-cog" />
                        <span className={styles.ComponentsName}>Components</span>
                    </div>
                    <i className="fa-solid fa-chevron-right" style={{ color: ' #a3b9ef' }} />

                </div>




                <div className={styles.interfaceUtilities}>
                    <div className={styles.Utilities}>
                        <i className="fa-solid fa-wrench" />
                        <span className={styles.UtilitiesName}>Utilities</span>
                    </div>
                    <i className="fa-solid fa-chevron-right" style={{ color: '#a3b9ef' }}></i>
                </div>

            </div>
            <hr />





            <div className={styles.interface}>

                <div className={styles.interfaceTitle}>ADDONS</div>
                <br />
                <div className={styles.interfaceComponents}>


                    <div className={styles.Components}>
                        <i className="fa-solid fa-folder" />
                        <span className={styles.ComponentsName}>Pages</span>
                    </div>
                    <i className="fa-solid fa-chevron-right" style={{ color: ' #a3b9ef' }} />

                </div>




                <div className={styles.interfaceUtilities}>
                    <div className={styles.Utilities}>
                        <i className="fa-sharp fa-solid fa-chart-area" />
                        <span className={styles.UtilitiesName}>Charts</span>
                    </div>
                </div>

                <div className={styles.interfaceUtilities}>
                    <div className={styles.Utilities}>
                        <i className="fa-solid fa-table" />                    <span className={styles.UtilitiesName}>Tables</span>
                    </div>
                </div>

            </div>
            <hr />

            <div className={styles.sideButtondiv}>
                <button className={styles.sideButton} >
                    <i className="fa-solid fa-chevron-left fa-1x" style={{ color: ' #a3b9ef', padding: '10px' }} />
                </button>
            </div>



            <div className={`${styles.upgrade} sidebar-card d-none d-lg-flex`}>
                <div className={styles.upgradeImg}>
                    <img className={`${styles.sidebarimg} sidebar-card-illustration mb-2`} src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_rocket.svg" alt="..." />
                </div>
                <div>
                    <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
                </div>
                <div>
                    <a className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
                </div>
            </div>


        </div>








    );





}



export default Leftmenu;