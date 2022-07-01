import React, { Component } from 'react'
import styled, {keyframes} from 'styled-components'
import { createGlobalStyle } from 'styled-components'



const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`
const MainDiv = styled.div`
width: 100%;
height: 618px;
border: solid green;
/* background-image: linear-gradient(to right, #000, #151515); */
`
const H1 = styled.h1`
`
const BtnDiv = styled.div`
display: flex;
justify-content: space-evenly;
margin: 40vh;
border: solid red;
color: #fff;
`
const FirstBtn = styled.button`
width: 12vw;
height: 50px;
border-radius: 7px;
border: none;
color: #fff;
background-image: linear-gradient(to left, #228B22, #32CD32, #00FF00);
font-family: 'Inconsolata', monospace;
font-size: 1.5rem;
font-weight: 600;
&:hover{
  cursor: pointer;
  transform:scale(1.1);
}
`
const SecondBtn = styled.button`
width: 12vw;
height: 50px;
border-radius: 7px;
border: none;
color: #fff;
/* background-color: #DC143C; */
background-image: linear-gradient(to left, 		#8B0000, 	#FF0000, #FF6347);
font-family: 'Inconsolata', monospace;
font-size: 1.5rem;
font-weight: 600;
&:hover{
  cursor: pointer;
  transform:scale(1.1);
}
`
const ThirdBtn = styled.button`
width: 12vw;
height: 50px;
border-radius: 7px;
border: none;
color: #fff;
background-image: linear-gradient(to left, 	#FF4500, #FF8C00, #FFA500);
font-family: 'Inconsolata', monospace;
font-size: 1.5rem;
font-weight: 600;
&:hover{
  cursor: pointer;
  transform:scale(1.1);
}
`

export default class App extends Component {

  state = {
    number: 0,
    minutes: 0
  }

  start = () => {
    const StartTime = setInterval(() => {
      this.setState({
        number: this.state.number + 1
      })
    }, 1000)

    const CountMinutes = setInterval(() => {
      this.setState(() => ({
        minutes: this.state.minutes + 1
      }))
    }, 60000)

    this.stop = () => {
      clearInterval(StartTime, CountMinutes)
    }
  }

  restart = () => {
    this.setState({
      number: 0,
      minutes: 0
    })
  }

  render() {
    return (
      <MainDiv>
        <GlobalStyle />

        <H1>{this.state.minutes}:{this.state.number}</H1>

        <BtnDiv>


          <FirstBtn onClick={this.start}>START</FirstBtn>
          <SecondBtn onClick={this.stop}>STOP</SecondBtn>
          <ThirdBtn onClick={this.restart}>RESTART</ThirdBtn>
        </BtnDiv>

      </MainDiv>
    )
  }
}