import kendangImage from "../Assets/Alat Musik PNG_/kendang 2.png";
import angklungImage from "../Assets/Alat Musik PNG/angklung.png";
import gambangImage from "../Assets/Alat Musik PNG_/gambangg.png";
import rebabImage from "../Assets/Alat Musik PNG_/rebabb.png";
import arambaImage from "../Assets/Alat Musik PNG_/arambaa.png";
import tifaImage from "../Assets/Alat Musik PNG_/tifaa.png";
import sasandoImage from "../Assets/Alat Musik PNG/sasando.png";
import kolintangImage from "../Assets/Alat Musik PNG_/kolintangg.png";
import gongImage from "../Assets/Alat Musik PNG_/gongg.png";
import kecapiImage from "../Assets/Alat Musik PNG_/kecapii.png";
import bonangImage from "../Assets/Alat Musik PNG_/bonangg.png";
import sulingImage from "../Assets/Alat Musik PNG/suling.png";
import bendeImage from "../Assets/Alat Musik PNG_/bendee.png";
import rumbaImage from "../Assets/Alat Musik PNG_/rumbaa.png";
import genggongImage from "../Assets/Alat Musik PNG_/gengongg.png";
import pantingImage from "../Assets/Alat Musik PNG_/pantingg.png";
import kesoKesoImage from "../Assets/Alat Musik PNG/keso keso.png";
import saluangImage from "../Assets/Alat Musik PNG_/saluangg.png";

import kendangSound from "../Assets/SFX Alat Musik/kendang.mp3";
import angklungSound from "../Assets/suara angklung.mp3";
import gambangSound from "../Assets/SFX Alat Musik/gambang.mp3";
import rebabSound from "../Assets/SFX Alat Musik/rebab.mp3";
import arambaSound from "../Assets/SFX Alat Musik/aramba.mp3";
import tifaSound from "../Assets/SFX Alat Musik/tifa.mp3";
import sasandoSound from "../Assets/SFX Alat Musik/sasando.mp3";
import kolintangSound from "../Assets/SFX Alat Musik/kolintang.mp3";
import gongSound from "../Assets/SFX Alat Musik/gong.mp3";
import kecapiSound from "../Assets/SFX Alat Musik/kecapi.mp3";
import bonangSound from "../Assets/SFX Alat Musik/bonang.mp3";
import sulingSound from "../Assets/SFX Alat Musik/suling.mp3";
import bendeSound from "../Assets/SFX Alat Musik/bende.mp3";
import rumbaSound from "../Assets/SFX Alat Musik/rumba.mp3";
import genggongSound from "../Assets/SFX Alat Musik/genggong.mp3";
import pantingSound from "../Assets/SFX Alat Musik/panting.mp3";
import kesoKesoSound from "../Assets/SFX Alat Musik/keso keso.mp3";
import saluangSound from "../Assets/SFX Alat Musik/saluang.mp3";



const alatMusik = [
  {
    id: 1,
    name: "Kendang",
    region: "Jawa Barat",
    description: "Kendang atau Gendang adalah alat bunyi-bunyian berupa kayu bulat panjang, di dalamnya ada rongga dan salah satu lubangnya atau kedua-duanya diberi kulit yang berasal dari Jawa Timur. Alat musik ini termasuk salah satu bagian dalam gamelan dan karawitan Jawa. Kendang adalah jenis alat musik membranofon yang terbuat dari kulit. Keberadaannya sendiri dipercaya sudah ada sejak zaman logam prasejarah di Indonesia, alias zaman perunggu.",
    image: kendangImage,
    sound: kendangSound,
  },
  {
    id: 2,
    name: "Angklung",
    region: "Jawa Barat",
    description: "Angklung adalah alat musik multitonal (bernada ganda) yang berkembang dari masyarakat Sunda. Alat musik ini dibuat dari bambu, dibunyikan dengan cara digoyangkan (bunyi disebabkan oleh benturan badan pipa bambu) sehingga menghasilkan bunyi yang bergetar dalam susunan nada 2, 3, sampai 4 nada dalam setiap ukuran, baik besar maupun kecil. Angklung biasa dimainkan dalam barisan untuk dimainkan secara solo sehingga tiap pemain bertanggung jawab untuk membunyikan satu nada dalam suatu pola atau melodi. ",
    image: angklungImage,
    sound: angklungSound,
  },
  {
    id: 3,
    name: "Sasando",
    region: "Nusa Tenggara Timur",
    description: "Sasando (bahasa Kupang) adalah alat musik berdawai yang dimainkan dengan cara dipetik menggunakan jari-jari tangan. Sasando merupakan alat musik tradisional dari kebudayaan Rote. Alat musik Sasando bentuknya sederhana bagian utamanya berbentuk tabung panjang dari bambu, bagian tengah melingkar dari atas ke bawah diberi penyangga (Bahasa Rote: senda) dimana dawai-dawai atau senar yang direntangkan ditabung bambu dari atas ke bawah bertumpu. Penyangga ini memberikan nada yang berbeda-beda pada setiap petikan dawai, lalu tabung sasando diberi sebuah wadah yang terbuat dari anyaman daun lontar(haik). Wadah ini merupakan tempat resonansi sasando.",
    image: sasandoImage,
    sound: sasandoSound,
  },
  {
    id: 4,
    name: "Rebab",
    region: "Jawa Barat",
    description: "Rebab (juga rebap, rabab, rebeb, rababah, atau al-rababa) adalah jenis alat musik senar yang dinamakan demikian paling lambat dari abad ke-8 dan menyebar melalui jalur-jalur perdagangan Islam yang lebih banyak dari Afrika Utara, Timur Tengah, bagiandari Eropa, dan Timur Jauh. Beberapa varietas sering memiliki tangkai di bagian bawah agar rebab dapat bertumpu di tanah, dan dengan demikian disebut rebab tangkai di daerah tertentu, tetapi terdapat versi yang dipetik seperti kabuli rebab (kadang-kadang disebut sebagai robab atau rubab).",
    image: rebabImage,
    sound: rebabSound,
  },
  {
    id: 5,
    name: "Aramba",
    region: "Sumatera Utara",
    description: "Aramba atau Arumba adalah alat musik tradisional yang berasal dari Kabupaten Nias, Sumatera Utara. Alat musik ini dipakai oleh warga setempat dalam acara kesenian daerah, seperti penikahan. Aramba terbuat dari tembaga, kuningan, suasa dan nikel. Alat ini dimainkan oleh satu orang. Alat musik ini juga diyakini mempunyai nilai keramat alias mistis oleh warga Nias. Jika ditelaah dari sejarah alat musik Aramba, alat musik ini merupakan hasil pertukaran budaya dari Jawa. Hal ini diperkuat dengan bentuk dari alat Aramba yang seperti gong. Namun, sejarah ini masih menjadi perdebatan dan perlu adanya pengkajian ulang.",
    image: arambaImage,
    sound: arambaSound,
  },
  {
    id: 6,
    name: "Tifa",
    region: "Papua",
    description: "Tifa adalah alat musik khas Indonesia bagian Timur, khususnya Kepulauan Maluku dan Papua. Alat musik ini bentuknya menyerupai kendang dan terbuat dari kayu yang di lubangi tengahnya. Tifa mirip dengan alat musik gendang yang dimainkan dengan cara dipukul. Alat musik ini terbuat dari sebatang kayu yang dikosongi atau dihilangi isinya dan pada salah satu sisi ujungnya ditutupi, dan biasanya penutupnya digunakan kulit rusa yang telah dikeringkan untuk menghasilkan suara yang bagus dan indah. Bentuknyapun biasanya dibuat dengan ukiran.",
    image: tifaImage,
    sound: tifaSound,
  },
  {
    id: 7,
    name: "Gambang",
    region: "Jawa Tengah",
    description: "Gambang adalah alat musik pukul tradisional khas Indonesia bagian dari Gamelan yang dibuat dari bilah-bilah kayu maupun bambu, biasanya terdiri dari 16 hingga 25 bilah yang dimainkan dengan alat pukul. Cara memainkannya dengan dipukul menggunakan dua buah kayu sepanjang 30-35 centimeter berujung bulat berlapis kain dalam dua tabuham, yaitu dilagu (menurut lagu) dan dicaruk atau dikotek.",
    image: gambangImage,
    sound: gambangSound,
  },
  {
    id: 8,
    name: "Kolintang",
    region: "Sulawesi Utara",
    description: "Kolintang adalah alat musik pukul tradisional Minahasa dari Sulawesi Utara, Indonesia, yang terdiri dari bilah-bilah kayu yang disusun berderet dan dipasang di atas sebuah bak kayu. Kolintang biasanya dimainkan secara ansambel. Kolintang dalam masyarakat Minahasa digunakan untuk mengiringi upacara adat, tari, menyanyi, dan bermusik. Kayu yang dipakai untuk membuat kolintang adalah kayu lokal yang ringan namun kuat seperti kayu telur (Alstonia spp.), kayu wenuang (Octomeles sumatrana Miq.), kayu cempaka (Elmerrillia tsiampacca, syn. Magnolia tsiampacca), kayu waru (Hibiscus tiliaceus), dan sejenisnya yang mempunyai konstruksi serat paralel.",
    image: kolintangImage,
    sound: kolintangSound,
  },
  {
    id: 9,
    name: "Bonang",
    region: "Jawa Timur ",
    description: "Bonang adalah alat musik tradisional Jawa Timur yang termasuk dalam keluarga gamelan. Bonang terdiri dari beberapa gong kecil yang diletakkan secara horizontal pada tali di dalam bingkai kayu (rancak), dengan masing-masing gong (atau ceret) diberi penutup cembung (pencu). Alat musik ini biasanya dimainkan dengan dua buah tabuh yang terbuat dari kayu berlapis kain atau karet. Bonang dimainkan dalam berbagai ensambel gamelan untuk berbagai jenis pertunjukan, seperti wayang kulit, tari, dan konser gamelan.",
    image: bonangImage,
    sound: bonangSound,
  },
  {
    id: 10,
    name: "Kecapi",
    region: "Sulawesi Selatan",
    description: "Kecapi adalah alat musik tradisional dari Sulawesi Selatan yang dimainkan dengan cara dipetik. Alat musik ini digunakan untuk mengiringi lagu-lagu daerah. Kecapi terbuat dari kayu pilihan yang kuat dan tahan lama. Ada dua jenis kecapi yang dikenal, yaitu kecapi perahu dan kecapi siter. Kecapi perahu adalah kecapi yang dibentuk seperti perahu dan biasanya digunakan oleh para musisi tradisional. Sedangkan kecapi siter berbentuk seperti kotak dan biasanya digunakan untuk mengiringi lagu-lagu daerah.",
    image: kecapiImage,
    sound: kecapiSound,
  },
  {
    id: 11,
    name: "Gong",
    region: "Jawa Tengah",
    description: "Gong merupakan sebuah alat musik pukul yang terkenal di Asia Tenggara dan Asia Timur. Gong ini digunakan untuk alat musik tradisional. Saat ini tidak banyak lagi perajin gong seperti ini. Gong yang telah ditempa belum dapat ditentukan nadanya. Nada gong baru terbentuk setelah dibilas dan dibersihkan. Apabila nadanya masih belum sesuai, gong dikerok sehingga diperoleh nada yang diinginkan.",
    image: gongImage,
    sound: gongSound,
  },
  {
    id: 12,
    name: "Suling",
    region: "Jawa Barat",
    description: "Suling adalah alat musik tiup tradisional dari Jawa Barat. Alat musik ini terbuat dari bambu dan memiliki enam lubang nada di bagian atasnya. Suling digunakan dalam berbagai jenis musik tradisional Sunda, termasuk degung, tembang Sunda, dan kacapi suling. Cara memainkan suling adalah dengan meniup lubang bagian atas sambil menutup dan membuka lubang-lubang nada dengan jari-jari untuk menghasilkan melodi.",
    image: sulingImage,
    sound: sulingSound,
  },
  {
    id: 13,
    name: "Bende",
    region: "Lampung",
    description: "Bende adalah alat musik pukul tradisional dari Lampung. Alat musik ini terbuat dari logam dan berbentuk seperti gong kecil. Bende dimainkan dengan cara dipukul menggunakan alat pemukul khusus. Dalam masyarakat Lampung, bende biasanya digunakan untuk mengiringi upacara adat, tarian, dan acara-acara ritual.",
    image: bendeImage,
    sound: bendeSound,
  },
  {
    id: 14,
    name: "Rumba",
    region: "Jawa Barat",
    description: "Rumba adalah alat musik tradisional dari Jawa Barat yang terbuat dari bambu atau kayu. Alat musik ini berbentuk tabung panjang dengan lubang-lubang kecil di sekitarnya. Cara memainkan rumba adalah dengan menggoyangkan atau memutar alat tersebut sehingga menghasilkan bunyi yang khas. Rumba digunakan dalam berbagai jenis musik tradisional Sunda.",
    image: rumbaImage,
    sound: rumbaSound,
  },
  {
    id: 15,
    name: "Genggong",
    region: "Bali",
    description: "Genggong adalah alat musik tiup tradisional dari Bali. Alat musik ini terbuat dari bambu atau kayu dan memiliki bentuk seperti seruling kecil. Genggong dimainkan dengan cara ditiup dan ditarik-tarik bagian ujungnya untuk menghasilkan bunyi yang unik. Dalam masyarakat Bali, genggong biasanya dimainkan dalam berbagai upacara adat dan ritual.",
    image: genggongImage,
    sound: genggongSound,
  },
  {
    id: 16,
    name: "Panting",
    region: "Kalimantan Selatan",
    description: "Panting adalah alat musik petik tradisional dari Kalimantan Selatan. Alat musik ini terbuat dari kayu dan memiliki senar yang terbuat dari kawat atau nilon. Panting dimainkan dengan cara dipetik menggunakan jari-jari tangan. Alat musik ini biasanya digunakan untuk mengiringi lagu-lagu daerah dan tari-tarian tradisional.",
    image: pantingImage,
    sound: pantingSound,
  },
  {
    id: 17,
    name: "Keso-keso",
    region: "Sulawesi Selatan",
    description: "Keso-keso adalah alat musik gesek tradisional dari Sulawesi Selatan. Alat musik ini terbuat dari kayu dan memiliki senar yang terbuat dari kawat atau nilon. Keso-keso dimainkan dengan cara digesek menggunakan busur. Alat musik ini biasanya digunakan untuk mengiringi lagu-lagu daerah dan tari-tarian tradisional.",
    image: kesoKesoImage,
    sound: kesoKesoSound,
  },
  {
    id: 18,
    name: "Saluang",
    region: "Sumatera Barat",
    description: "Saluang adalah alat musik tiup tradisional dari Sumatera Barat. Alat musik ini terbuat dari bambu dan memiliki bentuk seperti seruling kecil. Saluang dimainkan dengan cara ditiup dan ditutup-tutup lubang-lubangnya untuk menghasilkan melodi. Dalam masyarakat Minangkabau, saluang biasanya dimainkan dalam berbagai acara adat dan kesenian daerah.",
    image: saluangImage,
    sound: saluangSound,
  },
];

export default alatMusik;
