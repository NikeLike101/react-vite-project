import {Component} from "react";


class ClassButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstState: 12,
            title: 'hello'
        }
    }
    componentDidMount() {
        console.log('mounted')
    }
    shouldComponentUpdate(nextProps, nextState) {

        // this.props
        // nextProps

        // this.state
        // nextState
        return true

    }
    getSnapshotBeforeUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>): any {
        // prevProps
        // this.props

        // prevState
        // this.state
    }
    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any) {

    }
    componentWillUnmount() {

    }
    // this.setState({
    //                   ...this.state,
    //                   title: 'privet'
    //               })
    render(){

        return <div>hello from class {this.state.firstState} {this.state.title}</div>
    }

}

export default ClassButton;