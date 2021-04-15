import {memo, useEffect, useState} from 'react'
import {Styles} from './App'
import style from './Bottom.module.css'
/*-------------------ICE--------------------------*/
import littleIce from '../Assets/img/littleIce.png'
import middleIce from '../Assets/img/middleIce.png'
import bigIce from '../Assets/img/bigIce.png'

/*-------------------ITEMS--------------------------*/
import muscle from '../Assets/img/muscle.png'
import liver from '../Assets/img/liver.png'
import brain from '../Assets/img/brain.png'
import lipid from '../Assets/img/lipid.png'
import lipid_part from '../Assets/img/lipid_part.png'
import stomach from '../Assets/img/stomach.png'
import infection from '../Assets/img/infection.png'
import brain_part from '../Assets/img/brain_part.png'
import arrowLeftBottom from '../Assets/img/arrowLeftBottom.png'
import arrowBottom from '../Assets/img/arrowBottom.png'
import arrowRight from '../Assets/img/arrowRight.png'
import arrowLeft from '../Assets/img/arrowLeft.png'
import arrowRightBottom from '../Assets/img/arrowRightBottom.png'
import arrowBottom_second from '../Assets/img/arrowBottom2.png'
import arrowRight_second from '../Assets/img/arrowRight2.png'
import arrowLeft_second from '../Assets/img/arrowLeft2.png'
import arrowUp_second from '../Assets/img/arrowUp_second.png'


enum Slide {
    FIRST = 0,
    SECOND = -1,
    THIRD = -2
}

export const Bottom = memo(() => {

    const [slide, setSlide] = useState(Slide.THIRD);
    const [sliderValue, setSliderValue] = useState(100);
    const onToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSliderValue(+e.currentTarget.value)
    }

    const onToggleEnd = (e: React.TouchEvent<HTMLInputElement>) => {
        const interval = setInterval(() => {
            setSliderValue(value => {
                switch (slide) {
                    case Slide.THIRD:
                        if (value < 100)
                            return value + 1
                        else {
                            clearInterval(interval)
                            return value
                        }
                    case Slide.SECOND:
                        if (value > 50)
                            return value - 1
                        else if (value < 50)
                            return value + 1
                        else {
                            clearInterval(interval)
                            return value
                        }
                    case Slide.FIRST:
                        if (value > 0)
                            return value - 1
                        else {
                            clearInterval(interval)
                            return value
                        }
                    default:
                        return value
                }
            })
        }, 15)
    }

    useEffect(() => {
        if (sliderValue > 75 && slide !== Slide.THIRD)
            setSlide(Slide.THIRD)
        if (sliderValue < 25 && slide !== Slide.FIRST)
            setSlide(Slide.FIRST)
        if (75 >= sliderValue && sliderValue >= 25 && slide !== Slide.SECOND)
            setSlide(Slide.SECOND)
    }, [sliderValue, slide])

    const styleSlider: Styles = {
        background: `linear-gradient(90deg, #d1eaff ${sliderValue}%, #435063 ${0}%)`
    }
    const stylePageStyle: Styles = {
        transform: `translateX(${slide * 1024}px)`
    }

    return (
        <div className={style.bottom}>
            <div className={style.bottom__container} style={stylePageStyle}>
                <div className={style.bottom__first + ' ' + style.page__1988year}>
                    <img src={littleIce}
                         alt=''
                         className={style.page__1988year__first_ice + ' ' + style.little}
                    />
                    <img src={middleIce}
                         alt=''
                         className={style.page__1988year__second_ice + ' ' + style.middle}
                    />
                    <img src={bigIce}
                         alt=''
                         className={style.page__1988year__third_ice + ' ' + style.big}
                    />
                    <p className={style.page__1988year__header}>
                        Звенья патогенеза СД2
                    </p>
                    <div className={style.page__1988year__content}>
                        <div className={style.page__1988year__1 + " " + style.field}>
                            <p className={style.field__number}>
                                1
                            </p>
                            <p className={style.field__text}>
                                &beta;-клетки
                            </p>
                            <div className={style.field__point}>
                                &beta;
                            </div>
                        </div>
                        <div className={style.page__1988year__container}>
                            <div className={style.page__1988year__2 + " " + style.field}>
                                <p className={style.field__number}>
                                    2
                                </p>
                                <p className={style.field__text}>
                                    Мышцы
                                </p>
                                <div className={style.field__point}>
                                    <img className={style.field__img} src={muscle} alt=''/>
                                </div>
                            </div>
                            <div className={style.page__1988year__hyperglycemia}>
                                Гипергликимия
                            </div>
                            <div className={style.page__1988year__3 + " " + style.field}>
                                <p className={style.field__number}>
                                    3
                                </p>
                                <p className={style.field__text}>
                                    Печень
                                </p>
                                <div className={style.field__point}>
                                    <img className={style.field__img} src={liver} alt=''/>
                                </div>
                            </div>
                        </div>
                        <img src={arrowLeftBottom}
                             className={style.page__1988year__lba + " " + style.arrow}
                             alt=''
                        />
                        <img src={arrowRightBottom}
                             className={style.page__1988year__rba + " " + style.arrow}
                             alt=''
                        />
                        <img src={arrowLeft}
                             className={style.page__1988year__la + " " + style.arrow}
                             alt=''/>
                        <img src={arrowRight}
                             className={style.page__1988year__ra + " " + style.arrow}
                             alt=''/>
                        <img src={arrowBottom}
                             className={style.page__1988year__ba + " " + style.arrow}
                             alt=''/>
                    </div>
                </div>
                <div className={style.bottom__2 + " " + style.page__2009year}>
                    <img src={littleIce}
                         alt=''
                         className={style.page__2009year__ice1 + " " + style.little}
                    />
                    <img src={middleIce}
                         alt=''
                         className={style.page__2009year__ice2 + " " + style.middle}
                    />
                    <img src={bigIce}
                         alt=''
                         className={style.page__2009year__ice3 + " " + style.big}
                    />
                    <p className={style.page__2009year__header}>
                        Смертельный октет
                    </p>
                    <div className={style.page__2009year__content}>
                        <div className={style.page__2009year__container1}>
                            <div className={style.page__2009year__23}>
                                <p className={style.page__2009year__text_right}>
                                    Инкрентиновый эффект
                                </p>
                                <div className={style.page__2009year__top__top__second_point3}>
                                    2
                                </div>
                            </div>
                            <div className={style.page__2009year__1}>
                                <p className={style.page__2009year__number}>
                                    1
                                </p>
                                <p className={style.page__2009year__text}>
                                    &beta;-клетки
                                </p>
                                <div className={style.page__2009year__point}>
                                    &beta;
                                </div>
                            </div>
                            <div className={style.page__2009year__23}>
                                <div className={style.page__2009year__top__top__second_point3}>
                                    3
                                </div>
                                <div className={style.page__2009year__defect}>
                                    <p className={style.page__2009year__text}>
                                        Дефект
                                    </p>
                                    <p className={style.page__2009year__text}>
                                        &alpha;-клеток
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={style.page__2009year__container2}>
                            <div className={style.page__2009year__23}>
                                <div className={style.page__2009year__kidneys}>
                                    <p className={style.page__2009year__number_right}>
                                        8
                                    </p>
                                    <p className={style.page__2009year__text}>
                                        Почки
                                    </p>
                                </div>
                                <div className={style.page__2009year__point}>
                                    <img src={lipid_part}
                                         alt=''
                                    />
                                </div>
                            </div>
                            <div className={style.page__2009year__hyperglycemia}>
                                Гиперликимия
                            </div>
                            <div className={style.page__2009year__23_right}>
                                <div className={style.page__2009year__point}>
                                    <img src={lipid}
                                         alt=''
                                    />
                                </div>
                                <div className={style.page__2009year__fat_cells}>
                                    <p className={style.page__2009year__number_left}>
                                        4
                                    </p>
                                    <p className={style.page__2009year__text_thin}>
                                        Жировые клетки
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={style.page__2009year__container3}>
                            <div className={style.page__2009year__1}>
                                <div className={style.page__2009year__point}>
                                    <img src={brain}
                                         alt=''
                                    />
                                </div>
                                <p className={style.page__2009year__number}>
                                    7
                                </p>
                                <p className={style.page__2009year__text_thin_center}>
                                    Головной мозг
                                </p>
                            </div>
                            <div className={style.page__2009year__1}>
                                <div className={style.page__2009year__point}>
                                    <img className={style.page__2009year__img_liver}
                                         src={liver}
                                         alt=''/>
                                </div>
                                <p className={style.page__2009year__number}>
                                    6
                                </p>
                                <p className={style.page__2009year__text}>
                                    Печень
                                </p>
                            </div>
                            <div className={style.page__2009year__1}>
                                <div className={style.page__2009year__point_muscle}>
                                    <img className={style.page__2009year__img_muscle}
                                         src={muscle}
                                         alt=''
                                    />
                                </div>
                                <p className={style.page__2009year__number}>
                                    5
                                </p>
                                <p className={style.page__2009year__text}>Мышцы</p>
                            </div>
                        </div>
                        <img src={arrowLeft_second}
                             className={style.page__2009year__la2 + " " + style.arrow}
                             alt=''
                        />
                        <img src={arrowRight_second}
                             className={style.page__2009year__ra2 + " " + style.arrow}
                             alt=''
                        />
                        <img src={arrowBottom_second}
                             className={style.page__2009year__ba1 + " " + style.arrow}
                             alt=''
                        />
                        <img src={arrowBottom_second}
                             className={style.page__2009year__ba2 + " " + style.arrow}
                             alt=''
                        />
                        <img src={arrowBottom_second}
                             className={style.page__2009year__ba3 + " " + style.arrow}
                             alt=''
                        />
                        <img src={arrowUp_second}
                             className={style.page__2009year__ua1 + " " + style.arrow}
                             alt=''
                        />
                        <img src={arrowUp_second}
                             className={style.page__2009year__ua2 + " " + style.arrow}
                             alt=''
                        />
                        <img src={arrowUp_second}
                             className={style.page__2009year__ua3 + " " + style.arrow}
                             alt=''
                        />
                    </div>
                </div>
                <div className={style.bottom__3 + " " + style.page2016}>
                    <img src={littleIce}
                         alt=''
                         className={style.page2016__ice1 + " " + style.little}
                    />
                    <img src={middleIce}
                         alt=''
                         className={style.page2016__ice2 + " " + style.middle}
                    />
                    <img src={bigIce}
                         alt=''
                         className={style.page2016__ice3 + " " + style.big}
                    />
                    <p className={style.page2016__header}>
                        Звенья патогенеза СД2
                    </p>
                    <div className={style.page2016__content}>
                        <div className={style.page2016__arrow1 + " " + style.arrow_c}>

                        </div>
                        <div className={style.page2016__arrow2 + " " + style.arrow_c}>

                        </div>
                        <div className={style.page2016__arrow3 + " " + style.arrow_c}>

                        </div>
                        <div className={style.page2016__arrow4 + " " + style.arrow_c}>

                        </div>
                        <div className={style.page2016__arrow5 + " " + style.arrow_c}>

                        </div>
                        <div className={style.page2016__arrow6 + " " + style.arrow_c}>

                        </div>
                        <div className={style.page2016__arrow7 + " " + style.arrow_c}>

                        </div>
                        <div className={style.page2016__arrow8 + " " + style.arrow_c}>

                        </div>
                        <div className={style.page2016__arrow9 + " " + style.arrow_c}>

                        </div>
                        <div className={style.page2016__arrow10 + " " + style.arrow_c}>

                        </div>
                        <div className={style.page2016__arrow11 + " " + style.arrow_c}>

                        </div>
                        <div className={style.page2016__arrow12 + " " + style.arrow_c}>

                        </div>
                        <div className={style.page2016__arrow13 + " " + style.arrow_c}>

                        </div>
                        <div className={style.page2016__arrow14 + " " + style.arrow_c}>

                        </div>
                        <div className={style.page2016__arrow15 + " " + style.arrow_c}>

                        </div>
                        <div className={style.page2016__arrow16 + " " + style.arrow_c}>

                        </div>
                        <div className={style.page2016__arrow17 + " " + style.arrow_c}>

                        </div>
                        <div className={style.page2016__arrow18 + " " + style.arrow_c}>

                        </div>
                        <div className={style.page2016__arrow19 + " " + style.arrow_c}>

                        </div>
                        <div className={style.page2016__arrow20 + " " + style.arrow_c}>

                        </div>
                        <div className={style.page2016__arrow21 + " " + style.arrow_c}>

                        </div>
                        <div className={style.page2016__arrow22 + " " + style.arrow_c}>

                        </div>
                        <div className={style.page2016__left_side}>
                            <div className={style.page2016__8 + " " + style.point_filed}>
                                <div>
                                    <p className={style.point_filed__number}>
                                        8
                                    </p>
                                    <p className={style.point_filed__text}>
                                        Микрофлора кишечника
                                    </p>
                                </div>
                                <div className={style.point_field__point}>
                                    <img src={brain_part}
                                         alt=''
                                    />
                                </div>
                            </div>
                            <div className={style.page2016__9 + " " + style.point_filed}>
                                <div>
                                    <p className={style.point_filed__number}>
                                        9
                                    </p>
                                    <p className={style.point_filed__text}>
                                        Нарушение иммунной регуляции/воспаление
                                    </p>
                                </div>
                                <div className={style.point_field__point}>
                                    <img src={infection}
                                         alt=''
                                    />
                                </div>
                            </div>
                            <p className={style.page2016__amylin}>
                                ↓ амилин
                            </p>
                            <div className={style.page2016__10 + " " + style.point_filed}>
                                <div>
                                    <p className={style.point_filed__number}>
                                        10
                                    </p>
                                    <p className={style.point_filed__text}>
                                        Желудок
                                    </p>
                                </div>
                                <div className={style.point_field__point}>
                                    <img src={stomach}
                                         alt=''
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={style.page2016__center}>
                            <div className={style.page2016__1 + " " + style.point_filed}>
                                <div className={style.point_filed__flex_container}>
                                    <p className={style.point_filed__number}>
                                        1
                                    </p>
                                    <p className={style.point_filed__text}>
                                        &beta;-клетки
                                    </p>
                                </div>
                                <div className={style.point_field__point}>
                                    &beta;
                                </div>
                            </div>
                            <div className={style.page2016__23}>
                                <div className={style.page2016__2}>
                                    <p className={style.page2016__number}>
                                        2
                                    </p>
                                    <p className={style.page2016__text}>
                                        ↓ инкретинового эффекта
                                    </p>
                                </div>
                                <div className={style.page2016__3}>
                                    <p className={style.page2016__number}>
                                        3
                                    </p>
                                    <p className={style.page2016__text}>
                                        Дефект α-клеток
                                    </p>
                                </div>
                            </div>
                            <p className={style.page2016__glucogan}>
                                ↑ глюкагон
                            </p>
                            <p className={style.page2016__hyperglycemia}>
                                Гипергликимия
                            </p>
                            <div className={style.page2016__11 + " " + style.point_filed}>
                                <div>
                                    <p className={style.point_filed__number}>
                                        11
                                    </p>
                                    <p className={style.point_filed__text}>
                                        Почки
                                    </p>
                                </div>
                                <div className={style.point_field__point}>
                                    <img src={lipid_part}
                                         alt=''
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={style.page2016__right_side}>
                            <div className={style.page2016__7 + " " + style.point_filed}>
                                <div className={style.point_field__point}>
                                    <img src={brain}
                                         alt=''
                                    />
                                </div>
                                <div>
                                    <p className={style.point_filed__number}>
                                        7
                                    </p>
                                    <p className={style.point_filed__text}>
                                        Головной мозг
                                    </p>
                                </div>
                            </div>
                            <div className={style.page2016__654 + " " + style.container654}>
                                <p className={style.container654__header}>
                                    Инсулинорезистентность
                                </p>
                                <div className={style.container654__6 + " " + style.point_filed}>
                                    <div className={style.point_field__point}>
                                        <img src={liver}
                                             alt=''
                                        />
                                    </div>
                                    <div>
                                        <p className={style.point_filed__number}>
                                            6
                                        </p>
                                        <p className={style.point_filed__text}>
                                            Печень
                                        </p>
                                    </div>
                                </div>
                                <div className={style.container654__5 + " " + style.point_filed}>
                                    <div className={style.point_field__point}>
                                        <img src={muscle}
                                             alt=''
                                        />
                                    </div>
                                    <div>
                                        <p className={style.point_filed__number}>
                                            5
                                        </p>
                                        <p className={style.point_filed__text}>
                                            Мышцы
                                        </p>
                                    </div>
                                </div>
                                <div className={style.container654__4 + " " + style.point_filed}>
                                    <div className={style.point_field__point}>
                                        <img src={lipid}
                                             alt=''
                                        />
                                    </div>
                                    <div>
                                        <p className={style.point_filed__number}>
                                            4
                                        </p>
                                        <p className={style.point_filed__text}>
                                            Жировые клетки
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.bottom__line}>
                <input className={style.bottom__slider}
                       type="range"
                       min="0"
                       max="100"
                       step="1"
                       onChange={onToggle}
                       value={sliderValue}
                       onTouchEnd={onToggleEnd}
                       style={styleSlider}/>
            </div>
        </div>
    )
})
