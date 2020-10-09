import React, { Component } from 'react'
import './css/index.css'

class InfoWrap extends Component {
  constructor(props) {
    super(props)

    this.info = [
      { id: 1, name: 'Возможность получать доход выше, чем по вкладу', icon: 'icon-1' },
      { id: 2, name: 'Фиксированный срок инвестирования', icon: 'icon-2' },
      { id: 3, name: 'Получите +13% к инвестициям ежегодно', icon: 'icon-3' },
      { id: 4, name: 'Все инвестиции онлайн в одном приложении', icon: 'icon-4' }
    ]
  }

  render() {
    return (
      <header className="container">
        <div className="info">
          { this.info.map(arg => (
            <div className="info__item" key={arg.id}>
              <div className="info__icon">
                <img src={`/assets/img/${arg.icon}.svg`} alt={arg.name} />
              </div>
              <div className="info__title">
                { arg.name }
              </div>
            </div>
          )) }
        </div>
      </header>
    )
  }
}

export default InfoWrap