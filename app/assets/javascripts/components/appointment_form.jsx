var AppointmentForm = React.createClass({
    handleChange: function (e) {
        var name = e.target.name;
        obj = {}
        obj[name] = e.target.value;
        console.log(obj);
        console.log(this.props.onUserInput);
        this.props.onUserInput(obj);
    },
    handleSubmit: function (e) {
        e.preventDefault();
        this.props.onFormSubmit();
    },
    setAppointmentTime: function (e) {
        var name = 'appointment_time'
        var obj = {}
        if(obj[name] = e.toDate()){ //It is supposed to be single equal
            this.props.onUserInput(obj);
        }
    },
    render: function () {
        var inputProps = {
            name: 'appointment_time'
        }
        return (
            <div>
                <h2>Make a new appointment</h2>
                <form onSubmit={this.handleSubmit}>
                    <input name="title" placeholder="Appointment Title"
                           value={this.props.input_title} onChange={this.handleChange}/>
                    <Datetime input={false} open={true} inputProps={inputProps}
                             value = {this.props.appointment_time}
                              onChange={this.setAppointmentTime}
                    />
                    <input type='submit' value='Make Appointment'k/>
                </form>
            </div>
        )
        }
        });