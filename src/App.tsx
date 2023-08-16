import { Component } from "react";
import { nanoid } from 'nanoid'

import Form from './components/Form'
import Watch from './components/Watch'

import './App.css'

type State = {
  watches: WatchItem[]
}

type WatchItem = {
  id: string
  title: string
  timeZone: string
}

export default class App extends Component  {
  state = {
    watches: []
  }

  addWatch = (title: string, timeZone: string) => {
    const newWatch = {
        id: nanoid(),
        title: title,
        timeZone: timeZone
    }

    this.setState((prevState: State) => {
      const watches = [...prevState.watches]
      watches.push(newWatch)

      return {
        watches
      }
    }      
  )
  }

  removeWatch(id: string) {
    this.setState((prevState: any) => {
      const watches = [...prevState.watches].filter(watch => watch.id !== id)

      return {
        watches
      }
    })
  }

  render() {
    return (
    <>
      <Form submitHandler={(title: string, timeZone: string) => this.addWatch(title, timeZone)}/>
      
      <ul className="watches-list">
        {this.state.watches.map((watch: WatchItem) => (
          <li className="watches-list__item" key={watch.id}>
            <button className="btn btn-remove" onClick={() => this.removeWatch(watch.id)}>X</button>
            <Watch 
            title={watch.title} 
            timeZone={watch.timeZone} 
            />
          </li>
        ))}       
      </ul>

    </>
  )}
}
