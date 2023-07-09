import React from 'react';

const Contact = ({ data }) => {
  return (
    <>

      <div className="container-fluid kontak">

        <div className="row" >
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img className="img-fluid images" src="/images/person.png" alt="" />
          </div>
          <div className="col-md-6">
            <div className="d-flex justify-content-center"><h1 style={{ color: "black" }}>Contact</h1></div>
            <div className="social-media">
              <div className="row my-1">
                <div className="col-1">
                </div>
                {data.dataKontak.map((data) => (
                  <div className="mr-3 d-flex align-items-center fs-4" style={{ color: "black" }}>
                    
                    {data.icon} : {data.nama}
                    
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Contact;
