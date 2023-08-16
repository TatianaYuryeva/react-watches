import { Component } from "react";

type Props = {
    submitHandler: Function
}

type State = {
    newWatchTitle: string
    newWatchZone: string
}

export default class Form extends Component<Props, State> {
  state = {
    newWatchTitle: '',
    newWatchZone: ''
  }
  
  constructor(props: Props) {
    super(props)
    this.addWatch = this.addWatch.bind(this)
  }
  
  addWatch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    this.props.submitHandler(this.state.newWatchTitle, this.state.newWatchZone)
    this.setState({newWatchTitle: ''})
    this.setState({newWatchZone: ''})
  }
  
  render() {

    return(
      <>
      <form className="form" onSubmit={this.addWatch}>
        <div className="form-group">
          <label htmlFor="title">Название</label>
          <input 
          className="input" name="title" 
          value={this.state.newWatchTitle} 
          onChange={e => this.setState({newWatchTitle: (e.target.value)})}/>
        </div>
        <div className="form-group">
          <label htmlFor="timeZone">Временная зона</label>
          <input className="input" 
          name="timeZone" 
          value={this.state.newWatchZone}
          onChange={e => this.setState({newWatchZone: (e.target.value)})}/>
        </div>   
        <button className="btn form-btn" type="submit">Добавить</button>
      </form>     
      </>
    )
  }

}
