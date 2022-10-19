class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            time: new Date()
        }
    }

    componentDidMount () {
        // 컴포넌트가 화면에 출력되었을 때
        this.timerID = setInterval(()=> {
            this.setState({
                time: new Date()
            })
        }, 1000)
    }

    render () {
        return <li>{this.props.value}</li>
    }
}

const container = document.getElementById('root')
ReactDOM.render(<App />, container)