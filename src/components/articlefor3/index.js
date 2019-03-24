import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.scss'

class ArticleFor3 extends Component {
  render() {
    return (
      <Link to='/detail' className='component-articlefor3'>
        <div className="h3">立夏后吃这一物 对心血管有好处</div>
        <div className="imgs">
          <div className='img'>
            <img alt='' src='http://img.cnys.com/upload5/thumb/2018/05-03/0-1QThXF.jpg'/>
          </div>
          <div className='img'>
            <img alt='' src='http://img.cnys.com/upload5/thumb/2018/05-03/0-t60agz.jpg'/>
          </div>
          <div className='img'>
            <img alt='' src='http://img.cnys.com/upload5/thumb/2018/05-03/0-4CUVCi.jpg'/>
          </div>
        </div>
        <div className="p">
          <span>贺林</span>
          <em>2018.09.02</em>
        </div>
      </Link>
    )
  }
}

export default ArticleFor3
