import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import Article from '../../components/article'
import ArticleFor3 from '../../components/articlefor3'
import './index.scss'
import {getIndexData} from '../../store/actions/index'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    this.props.getIndexData({
      banner: [
        {
          img: 'http://img.cnys.com/upload5/thumb/2018/04-27/0-lAeckV.jpg'
        },
        {
          img: 'http://img.cnys.com/upload5/thumb/2018/05-02/0-YpJf3j.jpg'
        }
      ],
      list: [{}, {}, {}, {}, {}, {}, {}]
    })
  }

  componentDidMount() {
    new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    })
  }

  render() {
    return (
      <div className='index-page'>
        <div className='banner'>
          <div className='swiper-container'>
            <div className='swiper-wrapper'>
              {
                this.props.indexData.banner && this.props.indexData.banner.map((item, index)=> {
                  return (
                    <a onClick={this.gety} to='/detail' key={index} className={'swiper-slide'}>
                      <img alt='' src={item.img}/>
                    </a>
                  )
                })
              }
            </div>
            <div className='swiper-pagination'></div>
          </div>
        </div>
        <div className='list'>
          {
            this.props.indexData.list && this.props.indexData.list.map((item, index)=> {
              if (index % 2 === 0) {
                return (
                  <Article key={index}/>
                )
              } else {
                return <ArticleFor3 key={index}/>
              }
            })
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {initDataCenter} = state
  const {indexData} = initDataCenter
  return {indexData}
}

const mapDispatchProps = dispatch => {
  return {
    getIndexData: json => dispatch(getIndexData(json))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchProps)(Index))
