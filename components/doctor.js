import Image from 'next/image'
import React from 'react'
import axios from 'axios'

class Doctor extends React.Component {
    state = {
        doctors: [],
    }

    selectDoctor = (event, p) => {
        event.preventDefault();
        this.props.selectDoctor(p);
    }

    componentDidMount() {
        axios.get(`https://run.mocky.io/v3/c9a2b598-9c93-4999-bd04-0194839ef2dc`)
        .then(response => {
            const data = response.data;
            const listDoctor = data.data.listDoctor;
            const rows = [...Array(Math.ceil(listProduct.length / 4))];
            const doctorRows = rows.map((row, index) => listDoctor.slice(index * 4, index * 4 + 4));
            const doctors = doctorRows.map((row, index) => (
                <div className='row' key={index}>
                    {row.map(p => (
                        <div className='col-20' key={p.doctor_id}>
                            <div className='doctor-container'>
                                <image src={photo} alt="photo.png"></image>
                                <p className='text-block'>{p.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ));

            this.setState({ doctors })
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        return (
            <div>
                {this.state.doctors}
            </div>
        )
    }
}

export default Doctor