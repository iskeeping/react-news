import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import Article from '../../components/article'
import ArticleFor3 from '../../components/articlefor3'
import './index.scss'
import {getDetailData} from '../../store/actions/index'

class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    this.props.getDetailData({
      list: [{}, {}, {}, {}, {}]
    })
  }

  render() {
    return (
      <div className='detail-page'>
        <h3>立夏后吃这一物 对心血管有好处</h3>
        <div className='info'>
          <span>贺林</span>
          <em>2018.09.02</em>
        </div>
        <div className='desc'>
          <p>立夏后，天气也会越来越热。炎热的天气里，人体对水平的消耗和需求都会增多，多吃水果既可以补充水分，还能帮助消暑。时令水果新鲜多汁，当然要尝一个啦，那自然不能错过这时新鲜上市的杏儿。</p>
          <div className='img'>
            <img alt='' src='http://img.cnys.com/upload/picture/2018/05-04/TQPYuu.jpg'/>
          </div>
        </div>
        <div className='relative'>
          <div className='title'><span>相关推荐</span></div>
          <div className='list'>
            {
              this.props.detailData.list && this.props.detailData.list.map((item, index)=> {
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
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {initDataCenter} = state
  const {detailData} = initDataCenter
  return {detailData}
}

const mapDispatchProps = dispatch => {
  return {
    getDetailData: json => dispatch(getDetailData(json))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchProps)(Detail))
