import React from 'react';
import config from 'config';
import 'styles/pages/TimSukses.scss';

const TimSukses = () => {
    const { assetsURL: { image } } = config;

    return (
        <div className="timses-container">
            <div
                className="quest-box p-4"
                style={{
                    backgroundImage: `url(${image}/paper-parchment.png)`,
                }}
            >
                <div
                    className="banner p-4 m-5 mt-6"
                    style={{
                        background: "#C4C4C4",
                    }}
                >
                    Banner ads
                </div>

                <div className="quest-nav">
                    <ul>
                        <li>
                            <div>Daftar Tim Sukses</div>
                        </li>
                    </ul>
                </div>
                <div className="quest-content timses-content">
                    <table>
                        <thead>
                            <tr>
                                <td>No</td>
                                <td>Nama</td>
                                <td>NIM</td>
                                <td>Fakultas</td>
                                <td>Jurusan</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>No</td>
                                <td>Nama</td>
                                <td>NIM</td>
                                <td>Fakultas</td>
                                <td>Jurusan</td>
                            </tr>
                            <tr>
                                <td>No</td>
                                <td>Nama</td>
                                <td>NIM</td>
                                <td>Fakultas</td>
                                <td>Jurusan</td>
                            </tr>
                            <tr>
                                <td>No</td>
                                <td>Nama</td>
                                <td>NIM</td>
                                <td>Fakultas</td>
                                <td>Jurusan</td>
                            </tr>
                            <tr>
                                <td>No</td>
                                <td>Nama</td>
                                <td>NIM</td>
                                <td>Fakultas</td>
                                <td>Jurusan</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default TimSukses
