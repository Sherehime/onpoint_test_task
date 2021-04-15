import styles from './Top.module.css';

export const Top = () => { // first slide
    return (
        <div className={styles.top}>
            <div className={styles.top__first_point}>    </div>
            <div className={styles.top__first_point___animation+' '+styles.top__first_point}>    </div>
            <div className={styles.top__second_point___animation+' '+styles.top__first_point}></div>

            <div className={styles.top__top__second_point}> </div>
            <div className={styles.top__first_point___animation+' '+styles.top__top__second_point}>  </div>
            <div className={styles.top__second_point___animation+' '+styles.top__top__second_point}>  </div>

            <div className={styles.top__third_point}> </div>
            <div className={styles.top__first_point___animation+' '+styles.top__third_point}>    </div>
            <div className={styles.top__second_point___animation+' '+styles.top__third_point}>  </div>

            <div className={styles.top__fourth_point}> </div>
            <div className={styles.top__first_point___animation+' '+styles.top__fourth_point}>    </div>
            <div className={styles.top__second_point___animation+' '+styles.top__fourth_point}>    </div>

            <p className={styles.top__header}>
                    Всегда ли цели терапии СД2 на поверхности?
            </p>
            <p className={styles.top__text_first}>
                    Цель по HbA1c
            </p>
            <p className={styles.top__text_second}>
                    Гипогликемия
            </p>
            <p className={styles.top__text_third}>
                    Осложнения СД
            </p>
            <p className={styles.top__text_fourth}>
                    СС риски
            </p>

        </div>
    )
}
