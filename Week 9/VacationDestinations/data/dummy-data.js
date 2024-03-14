import Country from "../models/countries";
import VacationLocation from "../models/destinations";

// Country Item data for each country ft. id, name, color, image
export const COUNTRIES = [
  new Country(
    "c1",
    "Italy",
    "#ffffff",
    "https://www.state.gov/wp-content/uploads/2023/07/shutterstock_433413835v2.jpg"
  ),
  new Country(
    "c2",
    "Japan",
    "#ffffff",
    "https://content.api.news/v3/images/bin/7608caf3984791a222f377f9649e045e"
  ),
  new Country(
    "c3",
    "Greece",
    "#ffffff",
    "https://www.odysseys-unlimited.com/wp-content/uploads/2023/05/Lead-AdobeStock_134362781-scaled.jpeg"
  ),
  new Country(
    "c4",
    "New Zealand",
    "#ffffff",
    "https://a.cdn-hotels.com/gdcs/production135/d348/7d147b54-c34d-462b-ab61-75e89fc7ac40.jpg"
  ),
  new Country(
    "c5",
    "Egypt",
    "#ffffff",
    "https://i.natgeofe.com/k/109a4e08-5ebc-48a5-99ab-3fbfc1bbd611/Giza_Egypt_KIDS_0123_square.jpg"
  ),
  new Country(
    "c6",
    "Peru",
    "#ffffff",
    "https://www.peru.travel/Contenido/AcercaDePeru/Imagen/en/6/0.0/Principal/Machu%20Picchu.jpg"
  ),
  new Country(
    "c7",
    "Iceland",
    "#ffffff",
    "https://i0.wp.com/nomadictadka.com/wp-content/uploads/2018/07/Iceland-1.jpg?fit=2048%2C1356&ssl=1"
  ),
  new Country(
    "c8",
    "Australia",
    "#ffffff",
    "https://media.cnn.com/api/v1/images/stellar/prod/191011110307-02-australia-beautiful-places.jpg?q=w_2187,h_1230,x_0,y_0,c_fill/h_618"
  ),
  new Country(
    "c9",
    "Turkey",
    "#ffffff",
    "https://assets-news.housing.com/news/wp-content/uploads/2022/09/20150857/TURKEY-FEATURE-compressed.jpg"
  ),
  new Country(
    "c10",
    "Pakistan",
    "#ffffff",
    "https://www.state.gov/wp-content/uploads/2019/04/Pakistan-2115x1406.jpg"
  ),
];

// Vacation Destination data ft. country id, name, average cost, year founded, rating, image, and description
export const VACATIONDESTINATIONS = [
  new VacationLocation(
    "v1",
    "c1",
    "Cinque Terre",
    "$1,057",
    "11th century",
    4.3,
    "https://lp-cms-production.imgix.net/features/2015/12/Riomaggiore_cs.jpg?auto=format&w=1440&h=810&fit=crop&q=75",
    "Often considered one of Italy’s most beautiful villages, is well-known for its picture-perfect houses and grand medieval castle."
  ),
  new VacationLocation(
    "v2",
    "c2",
    "Fukuoka",
    "$1,676",
    "1889",
    4.5,
    "https://a3.cdn.japantravel.com/photo/290-216180/1440x960!/fukuoka-fukuoka-prefecture-216180.jpg",
    "Fukuoka offers travelers a mix of urban sprawl, sandy coastlines and ancient temples and shrines."
  ),
  new VacationLocation(
    "v3",
    "c3",
    "Athens",
    "$1,924",
    "3000 BC",
    4.3,
    "https://media-cdn.tripadvisor.com/media/photo-m/1280/1c/c0/98/c5/caption.jpg",
    "Athens is that perfect mix of traditional but trendy, ancient but modern, full of nature but cosmopolitan at the very same time."
  ),
  new VacationLocation(
    "v4",
    "c4",
    "Auckland",
    "$1,960",
    "1840",
    3.8,
    "https://www.newzealand.com/assets/Tourism-NZ/Auckland/98618569ff/img-1536065871-6217-4403-p-10D1D0BD-B88E-AAB3-AE3F2E903EF65717-2544003__aWxvdmVrZWxseQo_CropResizeWzE5MDAsMTAwMCw3NSwianBnIl0.jpg",
    "Auckland Domain, the city’s oldest park, is based around an extinct volcano and home to the formal Wintergardens."
  ),
  new VacationLocation(
    "v5",
    "c5",
    "Cairo",
    "$1,298",
    "969 AD",
    4.0,
    "https://imageio.forbes.com/specials-images/imageserve/466090186/Panoramic-view-of-the-Mosques-of-Sultan-Hassan-and-Al-Rifai/960x0.jpg?format=jpg&width=960",
    "Known for its upscale casinos, yacht-lined harbor, and prestigious Grand Prix motor race."
  ),
  new VacationLocation(
    "v6",
    "c6",
    "Lima",
    "$1,052",
    "1535",
    4.2,
    "https://lp-cms-production.imgix.net/2022-04/shutterstock_1047718252.jpg?auto=format&w=1440&h=810&fit=crop&q=75",
    "It's home to the Museo Larco collection of pre-Columbian art and the Museo de la Nación, tracing the history of Peru’s ancient civilizations. "
  ),
  new VacationLocation(
    "v7",
    "c7",
    "Reykjavík",
    "$2,907",
    "1786",
    4.2,
    "https://cdn.britannica.com/71/73371-050-9DFAEC1E/Reykjavik-Iceland.jpg",
    "Home to the National and Saga museums, tracing Iceland’s Viking history. "
  ),
  new VacationLocation(
    "v8",
    "c8",
    "Melbourne",
    "$1,239",
    "1835",
    4.1,
    "https://static.independent.co.uk/2023/06/12/13/newFile-3.jpg",
    "A place where stunning architecture and a vibrant arts scene combine to put on a constant performance to rival that of New York or Paris."
  ),
  new VacationLocation(
    "v9",
    "c9",
    "İstanbul",
    "$909",
    "330 AD",
    3.3,
    "https://a.cdn-hotels.com/gdcs/production6/d781/3bae040b-2afb-4b11-9542-859eeb8ebaf1.jpg",
    "Famous for its rich history, vibrant culture, and delectable cuisine."
  ),
  new VacationLocation(
    "v10",
    "c10",
    "Lahore",
    "$796",
    "1152",
    3.7,
    "https://cdn.britannica.com/48/143848-050-C4971221/Lahore-Museum-Pakistan.jpg",
    "The city hosts much of Pakistan's tourist industry, with major attractions including the Walled City, the famous Badshahi and Wazir Khan mosques, as well as several Sikh and Sufi shrines."
  ),
  new VacationLocation(
    "v11",
    "c1",
    "Sorrento",
    "$1,150",
    "6th century",
    4.7,
    "https://www.italyreview.com/uploads/2/6/3/6/26365745/marina-grande-sorrento-22_orig.jpg",
    "Considered the land of the sirens in Greek mythology, Sorrento continues to lure people with its charm and stunning views."
  ),
  new VacationLocation(
    "v12",
    "c2",
    "Nara",
    "$1,700",
    "710 AD",
    4.8,
    "https://imgcp.aacdn.jp/img-a/860/auto/global-aaj-front/article/2019/01/5c454130a9a84_5c453ef2dc2a6_327973339.jpg",
    "Japan's first permanent capital is famous for housing the Great Buddha, a nearly 50-foot-tall bronze statue of Buddha."
  ),
  new VacationLocation(
    "v13",
    "c3",
    "Aegina",
    "$1,393",
    "657 BC",
    4.2,
    "https://kaningostours.com/wp-content/uploads/2021/02/Aegina-town-Kaningostours.jpg",
    "Aegina is known for some of its popular attractions, which include: Moni Island Beach."
  ),
  new VacationLocation(
    "v14",
    "c4",
    "Queenstown",
    "$1,498",
    "1860",
    4.5,
    "https://upload.wikimedia.org/wikipedia/commons/c/c9/Queenstown_1_%288168013172%29.jpg",
    "Renowned for adventure sports, it’s also a base for exploring the region’s vineyards and historic mining towns."
  ),
  new VacationLocation(
    "v15",
    "c5",
    "Hurghada",
    "$1,330",
    "1905",
    4.7,
    "https://deih43ym53wif.cloudfront.net/Hurghada-egypt-g814effd0b_1920.jpg_5339f4b350.jpg",
    "Renowned for scuba diving, and has numerous dive shops and schools in its modern Sekalla district."
  ),
  new VacationLocation(
    "v16",
    "c6",
    "Cusco",
    "$833",
    "1200 AD",
    3.3,
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Cuzco_D%C3%A9cembre_2007_-_Panorama_1.jpg/815px-Cuzco_D%C3%A9cembre_2007_-_Panorama_1.jpg",
    "Once capital of the Inca Empire, and is now known for its archaeological remains and Spanish colonial architecture."
  ),
  new VacationLocation(
    "v17",
    "c7",
    "Akureyri",
    "1,983",
    "1786",
    4.8,
    "https://guidetoiceland.imgix.net/400086/x/0/akureyri-2721199-960-720-jpg?ar=1.91%3A1&w=1200&fit=crop",
    "A winter wonderland with easy access to great ski slopes and skating rinks, open skies for northern lights spotting, and geothermal pools to sink into and hide from the cold."
  ),
  new VacationLocation(
    "v18",
    "c8",
    "Adelaide",
    "$1,359",
    "1836",
    4.5,
    "https://www.ncl.com/sites/default/files/1000x667-adelaide-australia-city-torrens-river_0.jpg",
    "Known by its many festivals and sporting events, its food and wine, its coastline and hills, its large defence and manufacturing sectors and its emerging space sector."
  ),
  new VacationLocation(
    "v19",
    "c9",
    "Antalya",
    "$2,120",
    "200 BC",
    3.6,
    "https://content.r9cdn.net/rimg/dimg/b4/ba/4035ecda-city-1669-54fd74eb.jpg?width=1366&height=768&xhint=1954&yhint=1190&crop=true",
    "Known for its stunning beaches, rich history, and beautiful landscapes."
  ),
  new VacationLocation(
    "v20",
    "c10",
    "Skardu",
    "$679",
    "1500",
    4.5,
    "https://upload.wikimedia.org/wikipedia/commons/9/9f/Shangrila_resort_skardu.jpg",
    "A major tourism, trekking and expedition hub in Gilgit–Baltistan."
  ),
];
