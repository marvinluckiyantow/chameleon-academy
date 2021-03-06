import Head from 'next/head'
import Doctor from '../components/doctor'
import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Head>
                    <title>Home</title>
                </Head>
                <div className="container">
                    <Doctor />
                </div>
            </div>
        )
    }
}

export default Home;