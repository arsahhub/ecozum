const slides = [
    {
        url: "gör/apartman.jpg",
        description: "Binalar ve apartmanlarda ortak alanlarda oluşan böcek ve zararlı sorunları tüm sakinleri etkileyebilir. Ortak alanlar, bodrum katları ve çöp odalarında periyodik ilaçlama hizmetleri sunarak haşere riskini minimuma indiriyoruz."
    },
    {
        url: "gör/bahçe.jpg",
        description: "Bahçeler, böceklerin üremesi için doğal bir ortam sağlar. Bitki zararlıları, sivrisinekler ve karıncalar gibi sorunlara karşı çevre dostu çözümler sunarak hem bahçenizi hem de evinizi koruyoruz."
    },
    {
        url: "gör/ev.jpg",
        description: "Evler, zararlıların en sık görülebileceği yaşam alanlarıdır. Hamam böceği, karınca, fare gibi sorunlara karşı insan ve evcil hayvan dostu çözümlerle evinizi koruma altına alıyoruz."
    },
    {
        url: "gör/fabrika.jpg",
        description: "Fabrikalar, özellikle üretim ve depolama alanlarında böcek ve kemirgenlerin sık görüldüğü yerlerdir. Gıda, tekstil veya elektronik gibi sektör fark etmeksizin, üretiminizi aksatmadan böcek kontrolü ve fumigasyon hizmeti sunarak zararlıların verdiği zararları minimuma indiriyoruz."
    },
    {
        url: "gör/gemi.jpg",
        description: "Gemiler, özellikle uzun yolculuklarda böcek ve kemirgenlerin üreme alanı haline gelebilir. Hem yolcu gemileri hem de ticari gemiler için fumigasyon ve ilaçlama hizmetleri sunarak güvenli bir ortam sağlıyoruz."
    },
    {
        url: "gör/lokanta.jpg",
        description: "Lokanta ve restoranlarda hijyen standartları kritik önemdedir. Gıda maddeleri böcekleri cezbedebilir ve bu durum işletmenin itibarına zarar verebilir. Gıda güvenliği standartlarına uygun, düzenli haşere kontrolü hizmetleri sağlıyoruz."
    },
    {
        url: "gör/ofis.jpg",
        description: "Ofisler ve iş yerleri, düzenli olarak ziyaret edilen alanlar olduğu için hijyenin korunması oldukça önemlidir. Çalışanlarınızın sağlığı ve iş yerinizin prestiji için profesyonel böcek ilaçlama hizmetleri sunuyoruz."
    },
    {
        url: "gör/okul.jpg",
        description: "Okullar, öğrencilerin günün büyük kısmını geçirdiği alanlardır. Böcek ve kemirgen sorunları öğrencilerin sağlığını ve dikkatini olumsuz etkileyebilir. Çocukların güvenliği için insan sağlığına zarar vermeyen, çevre dostu ilaçlama yöntemleri kullanıyoruz."
    },
    {
        url: "gör/otel.jpg",
        description: "Otellerde hijyen ve müşteri memnuniyeti en öncelikli konular arasındadır. Özellikle tahtakurusu, hamam böceği ve sinek gibi haşere sorunları, müşteri deneyimini olumsuz etkileyebilir. Konuklarınızın rahat ve hijyenik bir ortamda konaklaması için periyodik ilaçlama ve önleyici tedbirler sunuyoruz."
    },
    {
        url: "gör/şantiye.jpg",
        description: "Şantiyeler, açık alanlarda ve çeşitli yapı malzemelerinin bulunduğu yerlerde böcek ve kemirgenler için ideal ortam oluşturabilir. İşçilerin sağlığını korumak ve çalışmaları kesintisiz sürdürebilmek için şantiye alanlarında kapsamlı zararlı kontrolü sağlıyoruz."
    },
    {
        url: "gör/villa.jpg",
        description: "Villalar, geniş bahçe ve peyzaj alanları nedeniyle dış mekan kaynaklı zararlıların iç mekana taşınması riskiyle karşı karşıyadır. Özellikle sinek, karınca, fare ve örümcek gibi haşereler için kapsamlı ilaçlama ve koruyucu çözümler sunuyoruz."
    },
    {
        url: "gör/yurt.jpg",
        description: "Yurtlar, birçok kişinin ortak yaşam alanı olduğu için haşere ve zararlı problemleri açısından risk taşır. Düzenli böcek ilaçlama ve hijyen sağlanması, öğrencilerin sağlıklı bir ortamda yaşamalarını ve öğrenim görmelerini sağlar. Özellikle tahtakurusu, hamam böceği ve pire gibi sorunların önüne geçmek için profesyonel hizmet sunuyoruz."
    }
    // {
    //     url: "https://images.unsplash.com/photo-1455218873509-8097305ee378",
    //     description: "Kuzey ışıkları"
    // },
    // {
    //     url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    //     description: "Dağ silsilesi"
    // },
    // {
    //     url: "https://images.unsplash.com/photo-1505159940484-eb2b9f2588e2",
    //     description: "Kumsal ve palmiye ağaçları"
    // }
];

let currentIndex = 0;
let isHovered = false;
let autoplayInterval;

// Slider ve dots container elementlerini seç
const sliderContainer = document.querySelector('.slider');
const dotsContainer = document.querySelector('.dots-container');

// Slaytları oluştur
slides.forEach((slide, index) => {
    const slideElement = document.createElement('div');
    slideElement.className = `slide ${index === 0 ? 'active' : ''}`;
    
    const img = document.createElement('img');
    img.src = slide.url;
    img.alt = slide.description;
    
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    const description = document.createElement('p');
    description.textContent = slide.description;
    overlay.appendChild(description);
    
    slideElement.appendChild(img);
    slideElement.appendChild(overlay);
    sliderContainer.appendChild(slideElement);
    
    // Nokta oluştur
    const dot = document.createElement('button');
    dot.className = `dot ${index === 0 ? 'active' : ''}`;
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
});

// Navigasyon fonksiyonları
function updateSlides() {
    document.querySelectorAll('.slide').forEach((slide, index) => {
        slide.className = `slide ${index === currentIndex ? 'active' : ''}`;
    });
    
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.className = `dot ${index === currentIndex ? 'active' : ''}`;
    });
}

function goToSlide(index) {
    currentIndex = index;
    updateSlides();
}

function goToPrevious() {
    currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    updateSlides();
}

function goToNext() {
    currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    updateSlides();
}

// Event listeners
document.querySelector('.prev').addEventListener('click', goToPrevious);
document.querySelector('.next').addEventListener('click', goToNext);

sliderContainer.addEventListener('mouseenter', () => {
    isHovered = true;
});

sliderContainer.addEventListener('mouseleave', () => {
    isHovered = false;
});

// Otomatik geçiş
function startAutoplay() {
    autoplayInterval = setInterval(() => {
        if (!isHovered) {
            goToNext();
        }
    }, 8000);
}

function stopAutoplay() {
    clearInterval(autoplayInterval);
}

// Otomatik geçişi başlat
startAutoplay();


document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function() {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        
        this.classList.add('active');
        document.getElementById(this.dataset.tab).classList.add('active');
    });
});