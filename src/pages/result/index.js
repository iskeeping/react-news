import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import Article from '../../components/article'
import ArticleFor3 from '../../components/articlefor3'
import './index.scss'
import {getResultData} from '../../store/actions/index'

class Result extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    this.props.getResultData({
      list: [{}, {}, {}, {}, {}, {}, {}]
    })
  }

  render() {
    return (
      <div className='result-page'>
        <div className="input-box">
          <input type="text" placeholder="搜索你感兴趣的内容"/>
        </div>
        <div className='list'>
          {
            this.props.resultData.list && this.props.resultData.list.map((item, index)=> {
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
  const {resultData} = initDataCenter
  return {resultData}
}

const mapDispatchProps = dispatch => {
  return {
    getResultData: json => dispatch(getResultData(json))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchProps)(Result))
