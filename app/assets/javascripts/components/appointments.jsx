var Appointments = React.createClass({
    getInitialState: function () {
        return {
            appointments: this.props.appointments,
            title: 'Team standup meeting',
            appointment_time: 'Tomorrow at 9am'
        }
    },
    handleUserInput: function (obj) {
        this.setState(obj);
    },
    render: function () {
        return (
            <div>
                <AppointmentForm input_title={this.state.title}
                                 input_appointment_time={this.state.appointment_time}
                                 onUserInput={this.handleUserInput}
                />
                <AppointmentsList appointments={this.state.appointments} />
            </div>
        )
    }
});