import styles from './Center.module.css'
import first_littleIce from '../Assets/img/center_ice__1.png'
import second_littleIce from '../Assets/img/center_ice__2.png'
import middleIce from '../Assets/img/center_ice__3.png'
import bigIce from '../Assets/img/center_ice__4.png'

export const Center = () => {
    return(
        <div className={styles.center}>
            <img src={first_littleIce}
                 className={styles.center__first_littleIce+' '+styles.ice}
                 alt=''/>
            <img src={second_littleIce}
                 className={styles.center__second_littleIce+' '+styles.ice}
                 alt=''/>
            <img src={middleIce}
                 className={styles.center__middleIce+' '+styles.ice}
                 alt=''/>
            <img src={bigIce}
                 className={styles.center__bigIce+' '+styles.ice}
                 alt=''/>
            <p className={styles.center__header}>
                Основа терапии — патогенез СД2</p>
        </div>
    )
}
