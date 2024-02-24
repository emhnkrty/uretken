## VERCEL LİNKİ:
https://uretken-akademi-bitirme-projesi-two.vercel.app/

## Bursa Nöbetçi Eczaneler Uygulaması
Bu proje, Bursa şehrindeki nöbetçi eczaneleri görüntülemek, harita üzerinde göstermek ve sağlık ile ilgili faydalı bilgiler sunmak için geliştirilmiştir.
![banner-resmi](https://github.com/emhnkrty/uretken/blob/main/public/assets/Uygulama-gorseli.png)
![banner-resmi](https://github.com/emhnkrty/uretken/blob/main/public/assets/Uygulama-gorseli2.png)
![banner-resmi](https://github.com/emhnkrty/uretken/blob/main/public/assets/Uygulama-gorseli3.png)
![banner-resmi](https://github.com/emhnkrty/uretken/blob/main/public/assets/Uygulama-gorseli4.png)

## Başlangıç
Projeyi klonlayın:
git clone https://github.com/emhnkrty/uretken.git

## Proje Dizinine Gidin:
cd my-app 
Gerekli bağımlılıkları yükleyin:
npm install


## ÖNEMLİ !!!
APİ aracılığı ile nöbetçi eczaneleri çekmeye çalıştığımızda sunucu taraflı CORS hatası aldığımız için aşağıdaki gibi bi çözüm ürettim.

`const fetchNobetBelediyeData = async () => {
            try {
                const response = await fetch('https://cors-anywhere.herokuapp.com/https://www.beo.org.tr/nobet-belediye', {
                    method: 'GET',
                    mode: 'cors', 
                });
        
                if (!response.ok) {
                    throw new Error('API isteği sırasında hata oluştu:', response.statusText);
                }
        
                const responseData = await response.text();
                const jsonData = JSON.parse(responseData);
                setNightPharmacies(jsonData);
            } catch (error) {
                setNightPharmacies(Data);
                console.error('API isteği sırasında hata oluştu:', error);
            }
}; `



APİ'den veri gelebilmesi için "CORS Unblock" crome eklentisi yüklü olmalıdır. Aksi takdirde CORS hatası alınır.
Bu geçici çözümle herzaman çalışmadığından kaynaklı APİ isteği başarısız olursa nöbetçi eczaneler proje içerisindeki Data.js'den alınmıştır. Apiden çekilmediği için güncel nöbetçi eczaneleri içermemektedir.


## Uygulamayı Başlatın:
npm start
Tarayıcınızda http://localhost:3000 adresine giderek uygulamayı görüntüleyebilirsiniz.


## Proje Hakkında
Bu proje, Bursa'daki nöbetçi eczaneleri görsel olarak kullanıcılara sunar. Google map aracılığı ile nöbetçi eczaneler haritada gösterilir. Kullanıcılar ayrıca nöbetçi eczanelerle ilgili bilgileri whatsapp , sms ve bağlantıyı kopyalama seçenekleriyle paylaşabilirler. Proje de sağlık ile ilgili faydalı bilgiler de kullanıcıya sunulmaktadır.


## Kullanılan Veri Seti
https://acikyesil.bursa.bel.tr/dataset/nobet-eczane
Proje, Bursa'nın nöbetçi eczanelerini içeren (https://www.beo.org.tr/nobet-belediye) veri setini kullanır.

## Lisans
Bu proje MIT lisansı altında lisanslanmıştır. Daha fazla bilgi için LICENSE dosyasına bakın.

