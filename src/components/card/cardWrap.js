import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

// CSS
import 'swiper/swiper-bundle.min.css'
import './css/tab.css'
import './css/card.css'
import './css/slide.css'

class CardWrap extends React.Component {
  constructor(props) {
    super(props)

    this.sl = [
      {
        id: 1,
        name: 'защищённые<br>инвестиции в Alibaba',
        filter: 'one',
        icon: 'alibaba',
        color: 'swiper-slide-orange',
        price: [
          { id: 1, name: '3 мес.', subName: 'срок<br>размещения' },
          { id: 2, name: 'от 300 000 ₽', subName: 'минимальная<br>сумма' },
        ],
        result: 10
      },
      {
        id: 2,
        name: 'Нота №81<br>«Мультибарьер»',
        filter: 'two',
        icon: 'multi',
        color: 'swiper-slide-black',
        price: [
          { id: 1, name: 'от 1 250 $', subName: 'минимальная<br>сумма' },
          { id: 2, name: '5 лет', subName: 'срок<br>размещения' },
        ],
        result: 15
      },
      {
        id: 3,
        name: 'защищённые<br>инвестиции в сбербанк',
        filter: 'three',
        icon: 'sber',
        color: 'swiper-slide-green',
        price: [
          { id: 1, name: '3 мес.', subName: 'срок<br>размещения' },
          { id: 2, name: 'от 300 000 ₽', subName: 'минимальная<br>сумма' },
        ],
        result: 10
      }
    ]

    this.tab = [
      { id: 1, name: 'Гарантированная доходность', filter: 'one' },
      { id: 2, name: 'Регулярная доходность', filter: 'two' },
      { id: 3, name: 'Ставка на рост', filter: 'three' }
    ]

    this.state = { filter: '' }
  }

  render() {
    return (
      <section className="container">
        <h2 className="title card-title">Лучшие готовые инвестиционные решения</h2>

        <div className='tab'>
          {this.tab.map(arg => (
            <div key={arg.id} onClick={() => this.setState({ filter: arg.filter })} className={arg.filter === this.state.filter ? 'tab__item active' : 'tab__item'}>
              {arg.name}
            </div>
          ))}
        </div>

        <div className="card">
          <Swiper slidesPerView={3} spaceBetween={16}>
            {this.sl.map(arg => (
              <SwiperSlide key={arg.id} className={arg.filter === this.state.filter ? 'active' : arg.color}>
                <div className="card__body">
                  <div className="card__title" dangerouslySetInnerHTML={{__html:arg.name}}></div>
                  <div className="card__icon">
                    <img src={`/assets/img/${arg.icon}.svg`} alt={arg.name} />
                  </div>
                  <div className="card__group">
                    { arg.price.map(el => (
                      <div key={el.id} className="card__group_item">
                        <div className="card__group_title">{el.name}</div>
                        <div className="card__group_subTitle" dangerouslySetInnerHTML={{__html:el.subName}}></div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="card__result">
                  <div className="card__result_title">{ arg.result }%</div>
                  <div className="card__result_subtitle">максимальная  доходность</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    )
  }
}

export default CardWrap