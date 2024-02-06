import styles from "./FrameConnectedDevicesStats.module.css";

const FrameConnectedDevicesStats = () => {
  return (
    <div className={styles.frameConnectedDevicesStats}>
      <div className={styles.connectedDevicesParent}>
        <button className={styles.connectedDevices}>
          <div className={styles.connectedDevicesChild} />
          <img
            className={styles.ionarrowBackOutlineIcon}
            alt=""
            src="/ionarrowbackoutline.svg"
          />
        </button>
        <div className={styles.frameTracker}>
          <h1 className={styles.yourFitnessTrackerContainer}>
            <p className={styles.your}>{`Your `}</p>
            <p className={styles.fitnessTracker}>Fitness Tracker</p>
          </h1>
        </div>
      </div>
      <div className={styles.fRAME}>
        <button className={styles.fRAME1}>
          <div className={styles.fRAMEChild} />
          <b className={styles.connectedDevices1}>Connected Devices</b>
        </button>
        <input className={styles.fRAME2} placeholder="Statistics" type="text" />
      </div>
      <div className={styles.rECTANGLE}>
        <div className={styles.eLLIPSE}>
          <div className={styles.fRAME3}>
            <div className={styles.circleIcon} />
            <div className={styles.tEXT}>
              <div className={styles.tEXTChild} />
              <div className={styles.smartwatchInfo} />
            </div>
            <img
              className={styles.screenshot20240205200304P}
              loading="eager"
              alt=""
              src="/screenshot-20240205-200304photoroom-1@2x.png"
            />
          </div>
          <div className={styles.connectedDevicesFrame}>
            <div className={styles.connectedDevicesFrameChild} />
            <div className={styles.yourFitnessTracker}>
              <div className={styles.frameConnectedDevicesStatis}>
                <div className={styles.smartWatch}>Smart Watch</div>
                <h2 className={styles.fireBoltt}>Fire Boltt</h2>
              </div>
            </div>
            <div className={styles.scanTheDeviceQRtoConnect}>
              <div className={styles.caloriesFrame}>
                <div className={styles.scanTheDevice}>
                  Scan the device QR to connect
                </div>
              </div>
              <button className={styles.ageHeightFrame}>
                <div className={styles.ageHeightFrameChild} />
                <b className={styles.scan}>Scan</b>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.addDetailsForm}>
          <div className={styles.personalInfoFrame}>
            <div className={styles.name}>
              <div className={styles.nameChild} />
              <div className={styles.fitnessFrame} />
              <div className={styles.dietPreferenceEllipse}>
                <div className={styles.ellipseDots} />
                <b className={styles.ellipseDots1}>5,233</b>
                <div className={styles.ellipseDots2}>
                  <div className={styles.steps}>Steps</div>
                </div>
              </div>
            </div>
            <div className={styles.caloriesKcalFrame}>
              <div className={styles.frameWaterLtrs}>
                <div className={styles.frameWaterLtrsChild} />
                <div className={styles.caloriesKcalInfo}>
                  <div className={styles.calories}>Calories</div>
                </div>
                <div className={styles.kcal}>1200 Kcal</div>
              </div>
              <div className={styles.frameWaterLtrs1}>
                <div className={styles.frameWaterLtrsItem} />
                <div className={styles.water}>Water</div>
                <div className={styles.ltrs}>1.8 Ltrs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameConnectedDevicesStats;
