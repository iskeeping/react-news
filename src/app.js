import React, {Component} from 'react'
import {Route, Switch, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import Loadable from 'react-loadable'
import Loading from './components/loading'
import ScrollToTop from './components/scrolltotop'
import './normalize.scss'
import './app.scss'

const Index = Loadable({
  loading: Loading,
  loader: () => import('./pages/index')
})

const Detail = Loadable({
  loading: Loading,
  loader: () => import('./pages/detail')
})

const Result = Loadable({
  loading: Loading,
  loader: () => import('./pages/result')
})

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isShowTopbar: true,
      oldT: 0
    }
  }

  goPath = (path)=> {
    let history = this.props.history
    let location = history.location
    if (path === `${location.pathname}${location.search}`) {
      return
    }
    history.push(path)
  }

  scrollListener = ()=> {
    let topbarDom = document.querySelector('.topbar')
    let height = topbarDom.offsetHeight
    window.addEventListener('scroll', ()=> {
      let t = document.documentElement.scrollTop || document.body.scrollTop;
      if (t > height) {
        if (t > this.state.oldT) {
          this.setState({isShowTopbar: false})
        } else {
          this.setState({isShowTopbar: true})
        }
      } else {
        this.setState({isShowTopbar: true})
      }
      this.setState({
        oldT: t
      })
    })
  }

  componentDidMount() {
    this.scrollListener()
  }

  render() {
    return (
      <div className='app'>
        <ScrollToTop>
          <div className={['topbar',this.state.isShowTopbar?'active':''].join(' ')}>
            <div onClick={()=>this.goPath(`/?name=sjsk`)} className='home'>
              <img alt='' src={require('./assets/img/home.png')}/>
            </div>
            <span>站点名称</span>
            <div onClick={()=>this.goPath(`/result?name=jkdjk`)} className='result'>
              <img alt='' src={require('./assets/img/result.png')}/>
            </div>
          </div>
          <div className="router">
            <Switch>
              <Route exact path={`/`} render={() => <Index/>}/>
              <Route exact path={`/detail`} render={() => <Detail/>}/>
              <Route exact path={`/result`} render={() => <Result/>}/>
            </Switch>
          </div>
        </ScrollToTop>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchProps = dispatch => {
  return {}
}

export default withRouter(connect(mapStateToProps, mapDispatchProps)(App))
