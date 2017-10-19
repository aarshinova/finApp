import React, {Component} from 'react';

export default class SelectMonth extends Component {
    constructor(props) {
        super(props);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onDatesFilterSubmit();
    }

    render() {
        const { months, years } = this.props;

        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                <p>Select months to display the results</p>
                <label>From</label>
                <select>
                    {months.map((month, idx) => (
                        <option key={idx} id={month.month}>{month.month}</option>
                    ))}
                </select>

                <label>Year</label>
                <select>
                    {years.map((year, idx) => (
                        <option key={idx} id={year.year}>{year.year}</option>
                    ))}

                </select>

                <label>To</label>
                <select>
                    {months.map((month, idx) => (
                        <option key={idx} id={month.month}>{month.month}</option>
                    ))}
                </select>
                <label>Year</label>
                <select>
                    {years.map((year, idx) => (
                        <option key={idx} id={year.year}>{year.year}</option>
                    ))}

                </select>
                    <button type="submit" value="Show the results">Show the results</button>
                </form>
            </div>
        );
    }
}