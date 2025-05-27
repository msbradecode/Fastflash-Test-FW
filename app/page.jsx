
'use client';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [apiTitle, setApiTitle] = useState('Fastflash API');
  const [totalEndpoint, setTotalEndpoint] = useState('-');
  const [totalRequest, setTotalRequest] = useState('-');

  useEffect(() => {
    // Simulasi fetch data (seharusnya ambil dari API)
    setApiTitle("Fastflash API");
    setTotalEndpoint("12");
    setTotalRequest("2340");

    setTimeout(() => {
      const loading = document.getElementById('loading-screen');
      if (loading) loading.style.display = 'none';
    }, 1000);
  }, []);

  return (
    <div>
      <div id="loading-screen">
        <div className="fastflash-loader">
          <div className="circle"></div>
          <div className="bolt"><i className="fas fa-bolt"></i></div>
        </div>
        <div className="loading-text">⚡ Fast Flash</div>
        <div className="loading-subtext">Loading API Documentation...</div>
      </div>

      <div className="container">
        <section className="hero fade-in">
          <div className="title-container">
            <i className="fas fa-bolt icon-title"></i>
            <h2>{apiTitle}</h2>
            <div className="title-divider"></div>
          </div>
          <p>Simple API with easy and minimalistic integration for WhatsApp Bot Developers.</p>
          <section id="apiLinks">
            <a href="#" id="information" title="Information">
              <i className="fas fa-info-circle"></i> Information API
            </a>
            <a href="#" id="contactdev" title="Contact Dev">
              <i className="fas fa-user"></i> Contact
            </a>
          </section>
        </section>

        <div className="stats" id="status-boxes" style={{ marginBottom: '2rem' }}>
          <div>
            <h3>Total Endpoint</h3>
            <p>{totalEndpoint}</p>
          </div>
          <div>
            <h3>Total Request</h3>
            <p>{totalRequest}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
