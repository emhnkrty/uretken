import React from "react";
import "./UsefulInformation.css";

const UsefulInformation = () => {
  return (
    <div className="container">
      <h2 className="text-center mb-4">Faydalı Bilgiler</h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Grip ve Nezle</h3>
              <p className="card-text">
                Grip ve nezle gibi bulaşıcı hastalıklardan korunmak için sık sık ellerinizi yıkayın.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Dengeli Beslenme</h3>
              <p className="card-text">
                Günlük egzersiz yapın ve dengeli beslenin, bağışıklık sisteminizi güçlendirebilir.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Egzersiz</h3>
              <p className="card-text">
                Düzenli egzersiz yapmak, bağışıklık sisteminizi güçlendirir ve sağlığınızı korur.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Kepekli Ürünler</h3>
              <p className="card-text">
                Haftada dört kez kepek içeren ekmek, makarna ya da kabuklu pirinç tüketmek kanser riskini yüzde 40 azaltıyor.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Sebze ve Meyve</h3>
              <p className="card-text">
                Özellikle domates, kırmızı üzüm, brokoli yiyenlerde kalp krizi, kanser ve şeker hastalığı riski düşüyor.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Fast Food</h3>
              <p className="card-text">
                Hamburger, patates kızartması vs. gibi yiyeceklerden uzak durun.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Bel Ağrısı</h3>
              <p className="card-text">
                Araştırmalar, bel ağrısı çekenlerin yatmak yerine normal aktivitelerine devam ettiğinde daha çabuk iyileştiğini gösteriyor.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Balık</h3>
              <p className="card-text">
                Düzenli olarak balık yemek kalp riskini azaltır ve bağışıklık sistemini güçlendirir.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Tuz Tüketimi</h3>
              <p className="card-text">
                Günde 5 gramdan fazla tuz tüketmek sakıncalıdır.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Şarap</h3>
              <p className="card-text">
                Günde bir-iki kadeh şarap, kanser riskini azaltır ve bağışıklık sistemini güçlendirir.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Kahve</h3>
              <p className="card-text">
                Günde iki fincan kahve, kolon kanseri riskini azaltır ve safra kesesinde taş riskini düşürür.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Çay</h3>
              <p className="card-text">
                Bol bol çay içmek, kalp krizi riskini azaltır.
              </p>
            </div>
          </div>
        </div>
        {/* Diğer bilgiler buraya eklenebilir */}
      </div>
    </div>
  );
};

export default UsefulInformation;
