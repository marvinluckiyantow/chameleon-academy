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
            const listDoctor = data.data;
            const rows = [...Array(Math.ceil(listDoctor.length / 2))];
            const doctorRows = rows.map((row, index) => listDoctor.slice(index * 2, index * 2 + 2));
            console.log(response);
            const doctors = doctorRows.map((row, index) => (
                <div className='row' key={index}>
                    {row.map(p => (
                        <div className='col-20' key={p.doctor_id}>
                            <div className='doctor-container'>
                                <p className='text-block'>
                                    Nama: {p.name}
                                    Harga: {p.price.formatted}
                                    specialisasi: {p.specialization.name}
                                </p>
                                <img src={p.photo.formats.thumbnail} alt="doctor.png" className='left'></img>
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