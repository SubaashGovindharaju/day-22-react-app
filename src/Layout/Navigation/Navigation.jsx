import React from "react";
import styles from './Navigation.module.css'
const Navigation = () => {
    return (
        <div className="container-fluid">
            <div className="row">

                <div className={styles.navBar}>

                    

                    <div className=  {`col-1 col-sm-3 col-md-3 col-lg-4 col-xl-4  ${styles.serbtn}`}>
                        <input className={` ${styles.search}`} type="text" placeholder="Search for..."/>
                    
                        <button className={styles.searchBtn}>
                            <i className="fa-solid fa-magnifying-glass" style={{ color: '#ffffff' }}/>
                        </button>
                    </div>

                    <div className={styles.action}>
                        <div className=" col-sm-2 col-md-2 col-lg-3 col-xl-3">
                            <div className={styles.bell}>
                                <i className="fa-solid fa-bell" style={{ color: "#cbd0d7", }} />
                                <span className={`${styles.notificationbell} badge`}>3+</span>
                            </div>
                        </div>

                        <div className="col-sm-2 col-md-2 col-lg-3 col-xl-3">
                            <div className={styles.message}>
                                <i className="fa-solid fa-envelope" style={{ color: "#cbd0d7", }} />
                                <span className={`${styles.notificationmessage} badge`}>7</span>

                            </div>
                        </div>

                        <div className={styles.vline} />
                        <div className={styles.profile} >
                            <div className={styles.profileName}>Douglas McGee</div>
                            <div className={styles.profilePicture}>
                                <img src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_profile.svg" alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    );
}

export default Navigation;