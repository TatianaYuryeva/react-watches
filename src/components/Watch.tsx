import moment from "moment";
import { Component } from "react";

type Props = {
  title: string
  timeZone: string
}

export default class Watch extends Component<Props> {

  timerId: number

  state = {
    time: this.time
  }

  constructor(props: Props) {
    super(props)
    this.timerId = 0
  }

  get time() {
    const time = moment().utcOffset(Number(this.props.timeZone)).format('HH:mm:ss')
    return time
  }

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {      
      this.setState({ time: this.time })
    }, 1000)
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId)
  }

  render() {

    return (
      <div className="watch">
        <div className="watch__title">{this.props.title}</div>
        <div className="watch__time">
          {this.state.time}
        </div>
      </div>
    )
  }
}