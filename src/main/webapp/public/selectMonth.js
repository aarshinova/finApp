import React, {Component} from 'react';

export default class SelectMonth extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const months = this.props.months;
        //const { months } = this.props;

        return (
            <div>
                <p>Select months to display the results</p>
                <label>From</label>
                <select>
                    {months.map((month, idx) => (
                        <option key={idx} id={month.month}>{month.month}</option>
                    ))}
                </select>
                <label>To</label>
                <select>
                    {months.map((month, idx) => (
                        <option key={idx} id={month.month}>{month.month}</option>
                    ))}
                </select>
            </div>
        );
    }
}