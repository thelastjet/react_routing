import { Component } from "react";


class IndividualPerson extends Component {
    constructor(props) {
        super(props)

        this.state = {
            person: {},
            feedback: null,
        };
    
    }

    
    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/people/" + this.props.match.params.id)
            .then((res) => {
                if (res.ok) {
                    this.setState({ feedback: null });
                    return res.json();
                } else {
                    throw new Error("Character not found");
                }
            })
            .then((data) => this.setState({ person: data }))
            .catch((err) => {
                console.error(err);
                this.setState({ feedback: err.message });
            });
    }

    render() {
        return (
            <div className="container singleCard">
                <p className="feedback">{this.state.feedback}</p>
                <div className="card">
                    <div className="card-header">
                        <button className="btn btn-secondary" onClick={this.props.history.goBack}>
                            Back
                        </button>
                    </div>
                    <div className="card-body">
                        <h1>{this.state.person.name}</h1>
                        <p>Age: {this.state.person.age}</p>
                        <p>Gender: {this.state.person.gender}</p>
                        <p>Hair Color: {this.state.person.hair_color}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default IndividualPerson;