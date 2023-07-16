import React from "react";
import styles from './Dashboard.module.css'
import LineChart from './Linechart'
import DoughnutChart from './Doughnet'

const Dashboard = () => {
    return (
        <div className="container">
            <div className={styles.Main}>

                {/* 1 row */}

                <div className="row">
                    <div className={styles.dashboard}>
                        <span className={styles.DashboardText}>
                            <h2>Dashboard</h2>
                        </span>
                        <span>
                            <button className={styles.reportbtn}>
                                <i className={`fa-solid fa-download  ${styles.reportimg}`} style={{ color: '#97acec' }}></i>
                                Generate Report
                            </button>
                        </span>
                    </div>
                </div>



                {/* 2 row */}

                <div className="row">
                    <div className="col-xl-3">
                        <div className={styles.cards1}>
                            <div className={styles.cardheader1}>
                                EARNINGS (MONTHLY)
                            </div>
                            <div className={styles.cardbody1}>
                                <h5>$40,000</h5>
                                <span>
                                    <i className="fa-solid fa-calendar fa-2x" style={{ color: '#dddfeb' }} />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <div className={styles.cards2}>
                            <div className={styles.cardheader2}>
                                EARNINGS (ANNUAL)
                            </div>
                            <div className={styles.cardbody1}>
                                <h5>$215,000</h5>
                                <span>
                                    <i className="fa-solid fa-dollar-sign  fa-2x" style={{ color: '#dddfeb' }} />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <div className={styles.cards3}>
                            <div className={styles.cardheader3}>
                                TASKS
                            </div>
                            <div className={styles.cardbody3}>
                                <span className={styles.title3}>
                                    <b>50%</b>
                                </span>
                                <span className={`progress ${styles.progress}`} role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="50">
                                    <span className={`progress-bar w-50  ${styles.progressbar}`}></span>
                                </span>
                                <span className={styles.taskicon}>
                                    <i className="fa-solid fa-clipboard fa-11xs" style={{ color: '#dddfeb' }} />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <div className={styles.cards4}>
                            <div className={styles.cardheader4}>
                                PENDING REQUESTS
                            </div>
                            <div className={styles.cardbody1}>
                                <h5>18</h5>
                                <span>
                                    <i className="fa-solid fa-comments fa-2x" style={{ color: '#dddfeb' }} />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3 row */}

                <div className="row">
                    <div className="col-xl-8">
                        <div className={styles.cardOverview}>
                            <div className={styles.cardOverviewheader}>
                                <b>Earning Overview</b>
                            </div>
                            <div className={styles.linechart}>
                                <LineChart />
                            </div>
                        </div>
                    </div>



                    <div className="col-xl-4">
                        <div className={styles.cardOverviewDoughnet}>
                            <div className={styles.cardOverviewheader}>
                                <b>Revenue Sources</b>
                            </div>
                            <div className={styles.Doughnet}>
                                <DoughnutChart />
                            </div>
                        </div>
                    </div>
                </div>




                {/* 4 row */}


                <div className="row">

                    <div className="col-xl-6">
                        <div className="row-fluid">
                            <div className={styles.cardOverviewprojects}>
                                <div className={styles.cardOverviewheaderprojects}>
                                    <b>Project</b>
                                </div>
                                <div className={styles.projects}>
                                    <p className={styles.progressname}>Server Migration <span>20%</span></p>
                                    <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar " style={{ width: '20%', backgroundColor: "#e74a3b" }}></div>
                                    </div>
                                    <p className={styles.progressname}>Sales Tracking<span>40%</span></p>
                                    <div className="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar " style={{ width: '40%', backgroundColor: "#f6c23e" }}></div>
                                    </div>
                                    <p className={styles.progressname}>Customer Database <span>60%</span></p>
                                    <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar " style={{ width: '60%', backgroundColor: "#4e73df" }}></div>
                                    </div>
                                    <p className={styles.progressname}>Payout Details <span>80%</span></p>
                                    <div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar " style={{ width: '80%', backgroundColor: "#36b9cc" }}></div>
                                    </div>
                                    <p className={styles.progressname}>Account Setup<span>Complete!</span></p>
                                    <div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar " style={{ width: '100%', backgroundColor: "#1cc88a" }}></div>
                                    </div>
                                </div>
                            </div>


                            <div className={styles.colorCard}>
                                <div className="row">
                                    <div className="col-xl-6">
                                        <div className="p-3 mb-3 text-bg-primary rounded-3">Primary<div style={{ color: '#ecedf2', fontSize: 13 }}>#4e73df</div></div>
                                    </div>

                                    <div className="col-xl-6">
                                        <div className="p-3 mb-3 text-bg-success rounded-3">Success<div style={{ color: '#ecedf2', fontSize: 13 }}>#1cc88a</div></div>
                                    </div>

                                    <div className="col-xl-6">
                                        <div className="p-3 mb-3 text-bg-info rounded-3">Info<div style={{ color: '#ecedf2', fontSize: 13 }}>#36b9cc</div></div>
                                    </div>

                                    <div className="col-xl-6">
                                        <div className="p-3 mb-3 text-bg-warning rounded-3">Warning<div style={{ color: '#ecedf2', fontSize: 13 }}>#f6c23e</div></div>
                                    </div>

                                    <div className="col-xl-6">
                                        <div className="p-3 mb-3 text-bg-danger rounded-3">Danger<div style={{ color: '#ecedf2', fontSize: 13 }}>#e74a3b</div></div>
                                    </div>

                                    <div className="col-xl-6">
                                        <div className="p-3 mb-3 text-bg-secondary rounded-3">Secondary<div style={{ color: '#ecedf2', fontSize: 13 }}>#858796</div></div>
                                    </div>


                                    <div className="col-xl-6">
                                        <div className="p-3 mb-3 text-bg-light rounded-3">Light<div style={{ color: '#ecedf2', fontSize: 13 }}>#f8f9fc</div></div>
                                    </div>

                                    <div className="col-xl-6">
                                        <div className="p-3 mb-3 text-bg-dark rounded-3">Dark<div style={{ color: '#ecedf2', fontSize: 13 }}>#5a5c69</div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>




                    <div className="col-xl-6">
                        <div className="row-fluid">
                            <div className={styles.cardOverviewIllustrations}>
                                <div className={styles.cardOverviewheaderIllustrations}>
                                    <b>Illustrations</b>
                                </div>
                                <div className={`card-body ${styles.illustrationBody}`}>
                                    <div className="text-center">
                                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: '25rem' }} src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg" alt="..." />
                                    </div>
                                    <p>Add some quality, svg illustrations to your project courtesy of <a target="_blank" rel="nofollow noreferrer" href="https://undraw.co/">unDraw</a>, a
                                        constantly updated collection of beautiful svg images that you can use
                                        completely free and without attribution!</p>
                                    <a target="_blank" rel="nofollow noreferrer" href="https://undraw.co/">Browse Illustrations on
                                        unDraw →</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12">
                            <div className={styles.cardOverviewDevelopment}>
                                <div className={styles.cardOverviewheaderDevelopment}>
                                    <b>Development Approach</b>
                                </div>
                                <div className={`card-body ${styles.illustrationBody}`}>
                                    <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. Custom CSS classes are used to create custom components and custom utility classes.</p>

                                    <p>Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div >
            </div>

        </div>


    );
}

export default Dashboard;