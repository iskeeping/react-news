import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.scss'

class Article extends Component {
  render() {
    return (
      <Link to='/detail' className='component-article'>
        <div className='img'>
          <img alt='' src='http://img.cnys.com/upload5/thumb/2018/05-04/0-rUuf2B.jpg'/>
        </div>
        <div className='description'>
          <div className="h3">立夏后吃这一物 对心血管有好处</div>
          <div className="p">
            <span>贺林</span>
            <em>2018.09.02</em>
          </div>
        </div>
      </Link>
    )
  }
}

export default Article
