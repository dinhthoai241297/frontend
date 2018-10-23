import React, { Component } from 'react';
import logonlu from '../../assets/img/001.png';
import DetailResult from './DetailResult';
import Footer from '../common/Footer';

class Detail extends Component {
    render() {
        var detailResults = [
            {
                id: 1,
                kyHieu: 'NLS',
                tenTruong: 'Đại học Nông Lâm',
                loaiHinh: 'Công lập',
                address: 'Khu phố 6, P. Linh Trung, Q. Thủ Đức, TP.Hồ Chí Minh',
                status: true,
                phone: 123456,
                website: 'http://hcmuaf.edu.vn',
            },
            {
                id: 2,
                kyHieu: 'NEU',
                tenTruong: 'Đại học Kinh Tế Quốc Dân',
                loaiHinh: 'Công lập',
                address: '207 Giải Phóng, Đồng Tâm, Quận Hai Bà Trưng, Hà Nội',
                status: false,
                phone: 1234567,
                website: 'http://neu.edu.vn',
            },
            {
                id: 3,
                kyHieu: 'UIT',
                tenTruong: 'Đại học Công Nghệ Thông Tin',
                loaiHinh: 'Công lập',
                address: 'ĐHQG, Khu phố 6, P.Linh Trung, Q.Thủ Đức, Tp.Hồ Chí Minh.',
                status: false,
                phone: 12345678,
                website: 'http://uit.edu.vn',
            },
        ];

        let elements = detailResults.map((result, index) => {
            if (result.status) {
                return <DetailResult key={result.id}
                    kyHieu={result.kyHieu}
                    tenTruong={result.tenTruong}
                    loaiHinh={result.loaiHinh}
                    address={result.address}
                    phone={result.phone}
                    website={result.website}
                />
            }
        });

        return (
            <div>
                <div className="bg-main">
                </div>

                <content>
                    <div className="container">
                        <div className="content">
                            <div className="title">
                                <h2>Thông tin tra cứu</h2>
                            </div>
                            <div className="video-grid">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-4 video">
                                            <img src={logonlu}></img>
                                        </div>
                                        {elements}
                                    </div>
                                </div>
                            </div>

                            <div className="title1">
                                <h3>Đề án tuyển sinh</h3>
                                <div className="blog-section">
                                    <div className="table-responsive">
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th rowspan="2" width="3%">STT</th>
                                                    <th rowspan="2">Ngành học</th>
                                                    <th rowspan="2" width="12%">Mã</th>
                                                    <th colspan="2">Chỉ tiêu (Dự kiến)</th>
                                                    <th colspan="2">Tổ hợp môn xét tuyển 1</th>
                                                    <th colspan="2">Tổ hợp môn xét tuyển 2</th>
                                                    <th colspan="2">Tổ hợp môn xét tuyển 3</th>
                                                    <th colspan="2">Tổ hợp môn xét tuyển 4</th>
                                                </tr>

                                                <tr>
                                                    <th>Theo xét KQ thi THPT QG</th>
                                                    <th>Theo phương thức khác</th>
                                                    <th>Mã tổ hợp môn</th>
                                                    <th>Môn chính</th>
                                                    <th>Mã tổ hợp môn</th>
                                                    <th>Môn chính</th>
                                                    <th>Mã tổ hợp môn</th>
                                                    <th>Môn chính</th>
                                                    <th>Mã tổ hợp môn</th>
                                                    <th>Môn chính</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Các ngành đào tạo đại học</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td>1.1</td>
                                                    <td>Sư phạm Kỹ thuật nông nghiệp</td>
                                                    <td>7140215</td>
                                                    <td>45</td>
                                                    <td></td>
                                                    <td>A00</td>
                                                    <td></td>
                                                    <td>A01</td>
                                                    <td></td>
                                                    <td>B00</td>
                                                    <td></td>
                                                    <td>D08</td>
                                                    <td></td>
                                                </tr>

                                                <tr>
                                                    <td>1.2</td>
                                                    <td>Sư phạm Kỹ thuật nông nghiệp</td>
                                                    <td>7140215</td>
                                                    <td>45</td>
                                                    <td></td>
                                                    <td>A00</td>
                                                    <td></td>
                                                    <td>A01</td>
                                                    <td></td>
                                                    <td>B00</td>
                                                    <td></td>
                                                    <td>D08</td>
                                                    <td></td>
                                                </tr>

                                                <tr>
                                                    <td>1.3</td>
                                                    <td>Sư phạm Kỹ thuật nông nghiệp</td>
                                                    <td>7140215</td>
                                                    <td>45</td>
                                                    <td></td>
                                                    <td>A00</td>
                                                    <td></td>
                                                    <td>A01</td>
                                                    <td></td>
                                                    <td>B00</td>
                                                    <td></td>
                                                    <td>D08</td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </content>

                <Footer />

            </div>
        );
    }
}

export default Detail;