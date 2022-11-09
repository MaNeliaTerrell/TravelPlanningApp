

const placesToVisit = [{
    img1: "https://gttp.imgix.net/225409/x/0/top-18-things-to-do-in-coron-palawan-kayangan-lake-and-islands-4.jpg?auto=compress%2Cformat&ch=Width%2CDPR&dpr=1&ixlib=php-3.3.0&w=883.jpg",
    name: 'Kayangan Lake'
},
{
    img2: "https://gttp.imgix.net/225414/x/0/top-18-things-to-do-in-coron-palawan-kayangan-lake-and-islands-5.jpg?auto=compress%2Cformat&ch=Width%2CDPR&dpr=1&ixlib=php-3.3.0&w=883.jpg",
    name: 'Barracuda Lake'
},
{
    img3: "https://gttp.imgix.net/225415/x/0/top-18-things-to-do-in-coron-palawan-kayangan-lake-and-islands-6.jpg?auto=compress%2Cformat&ch=Width%2CDPR&dpr=1&ixlib=php-3.3.0&w=883.jpg",
    name: 'Siete Pecados'
},
{
    img4: "https://gttp.imgix.net/225416/x/0/top-18-things-to-do-in-coron-palawan-kayangan-lake-and-islands-7.jpg?auto=compress%2Cformat&ch=Width%2CDPR&dpr=1&ixlib=php-3.3.0&w=883.jpg",
    name: 'Malcapuya Island'
},
{
    img5:"https://gttp.imgix.net/225417/x/0/top-18-things-to-do-in-coron-palawan-kayangan-lake-and-islands-8.jpg?auto=compress%2Cformat&ch=Width%2CDPR&dpr=1&ixlib=php-3.3.0&w=883.jpg",
    name: 'Twin Lagoon'
},
{
    img6: "https://sweetescapeholiday.ph/wp-content/uploads/2020/07/Maniquit-Hot-Spring.jpg",
    name: 'Maquinit Hot Spring'
},
{
    img7: "https://mediaim.expedia.com/localexpert/1076367/7ff9f679-f8e8-4924-a6fc-5833c4e13c19.jpg?impolicy=resizecrop&rw=1005&rh=565.jpg",
    name: 'Culion Island'
},
{
    img8: "https://waytogo.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2015/11/09172402/Busuanga-2.jpg",
    name: 'Busuanga Island (Malajon Island to the locals)'
},
{
    img9: "https://gttp.imgix.net/225424/x/0/top-18-things-to-do-in-coron-palawan-kayangan-lake-and-islands-12.jpg?auto=compress%2Cformat&ch=Width%2CDPR&dpr=1&ixlib=php-3.3.0&w=883.jpg",
    name: 'Calauit Safari Park'
},
{
    img10: "https://www.shoreexcursions.asia/wp-content/uploads/2019/11/Banana-Island-Coron-Shore-Excursion.jpg",
    name: 'Banana Island'
},
{
    img11: "https://gttp.imgix.net/225426/x/0/top-18-things-to-do-in-coron-palawan-kayangan-lake-and-islands-13.jpg?auto=compress%2Cformat&ch=Width%2CDPR&dpr=1&ixlib=php-3.3.0&w=883.jpg",
    name: 'Pass Island'
},
{
    img12: "https://gttp.imgix.net/225429/x/0/top-18-things-to-do-in-coron-palawan-kayangan-lake-and-islands-14.jpg?auto=compress%2Cformat&ch=Width%2CDPR&dpr=1&ixlib=php-3.3.0&w=883.jpg",
    name: 'Coron Youth Club Beach'
},
{
    img13: "https://gttp.imgix.net/225427/x/0/top-18-things-to-do-in-coron-palawan-kayangan-lake-and-islands-16.jpg?auto=compress%2Cformat&ch=Width%2CDPR&dpr=1&ixlib=php-3.3.0&w=883.jpg",
    name: 'Bulog Dos Island'
},
{
    img14: "https://gttp.imgix.net/225430/x/0/top-18-things-to-do-in-coron-palawan-kayangan-lake-and-islands-17.jpg?auto=compress%2Cformat&ch=Width%2CDPR&dpr=1&ixlib=php-3.3.0&w=883.jpg",
    name: 'Banul Beach'
}
]

const activities = [
{
    act1: "https://gttp.imgix.net/225419/x/0/top-18-things-to-do-in-coron-palawan-kayangan-lake-and-islands-15.jpg?auto=compress%2Cformat&ch=Width%2CDPR&dpr=1&ixlib=php-3.3.0&w=883.jpg",
    name: 'Wreck Diving',
    location: 'Coron Bay',
    website: href="https://piratediverscoron.com/index.html"        
},
{
    act2: "https://mediaim.expedia.com/localexpert/1284009/d9ce9e8f-a278-4807-9443-f3302f47730d.jpg?impolicy=resizecrop&rw=1005&rh=565.jpg",
    name: 'Parasailing, Jetski, Water Rides',
    location: 'Coron Island',
    website: href="https://www.royalislandwatersports.com/"
},
{
    act3: "https://static.wixstatic.com/media/43ce38_d9d9a0c56e7740a1978a6c9f17a3d3b9~mv2.jpg/v1/fill/w_1600,h_1071,al_c/43ce38_d9d9a0c56e7740a1978a6c9f17a3d3b9~mv2.jpg",
    name: 'Underground River Tour,Yacht and Camping',
    location: 'Puerto Princesa Subterranean River National Park',
    website: href="https://www.elnidoadventure.com/"   
},
{
    act4: "https://www.andbeyond.com/wp-content/uploads/sites/5/phinda-scuba-fishes.jpg",
    name: 'Scuba Diving and Snorkeling',
    location: 'El Nido',
    website: href='https://www.palawan-divers.org/padi-discover-scuba-diving-el-nido/'
},
{
    act5: "https://livingnomads.com/wp-content/uploads/2017/12/30/zipline-adventure.jpg",
    name: 'Zipline Adventure',
    location: 'Puerto Princesa',
    website: href="https://www.facebook.com/sabangxzipline/"
},
{
    act6: "https://cdn.getyourguide.com/img/tour/5c7755427d7f7.jpeg/99.jpg",
    name: 'Island Hopping',
    location: 'All Over Palawan',
    website: href='https://www.elnidoparadise.com/island-hopping/el-nido-tours/'
}
]

const placesToEat = [
{
    food1: "http://elnidoboutiqueandartcafe.com/wp-content/uploads/2018/11/20200827_181722-01-800x600.jpg",
    name: "Artcafe",
    location: 'El Nido',
    website: href='http://elnidoboutiqueandartcafe.com/'
},
{
    food2: "https://media-cdn.tripadvisor.com/media/photo-s/19/87/33/4a/20191008-153430-largejpg.jpg",
    name: "Big Bad Thai Bistro and Bar",
    location: 'El Nido',
    website: href="https://www.facebook.com/bigbadthai/"
},
{
    food3: "https://livingnomads.com/wp-content/uploads/2018/03/05/Badjao-Crab.jpg",
    name: "Badjao Seafront Restaurant",
    location:'Puerto Princesa',
    website: href='https://www.facebook.com/badjaoseafrontrestaurant/'
},
{
    food4: "https://www.purefoodtravel.com/wp-content/uploads/2014/03/kalui_restaurant_2.jpg",
    name: "Kalui",
    location: "Puerto Princesa",
    website: href="https://www.facebook.com/people/Kalui-Restaurant/100067595345168/"
}
]

const accommodation = [
{
    stay1: "El Nido Resorts",
    img: "https://www.ayalaland.com.ph/app/uploads/2020/10/Picture1a.jpg",
    Location: "Apulit Island, Miniloc Island, Lagen Island and Pangulasian Island",
    website: href='https://www.elnidoresorts.com/'
},
{
    stay2: "Club Paradise Palawan",
    img: "https://justglobetrotting.com/wp-content/uploads/2017/06/club-paradise-palawan.jpg",
    Location: "Coron, Northern Palawan",
    website: href='https://www.clubparadisepalawan.com/'
},
{
    stay3: "El Rio Y Mar Resort",
    img: "https://lh6.googleusercontent.com/proxy/P1CjXnyNOdD-bnlR5UzN4ynfTPJ2eGfr687ach3KKtoP3LSWxReyWcOzWjr02Qw0DxJU5GVBDYIv3c5qhCwqKy5MkQSwAoHLLQYinkLjAPnvaByuWYfMPivZyUzEsveCL_xZxYGLMi38LJu61hbbkUtm3SB7DA=w253-h142-k-no.jpg",
    Location: "Busuanga, Palawan",
    website: href="https://cocovanabeachresort.business.site/"
},
{
    stay4: "Cauayan Island Resort",
    img: "https://lh6.googleusercontent.com/proxy/i_6SuERK6FqrNU_m2CMopGBCeE6XwoJYkYWstn7aO-5AVxeaY4_bPfIXp_UKK9hIZJtwjxByJtLoHpU9jMPaIrPdWBt-HNuxLQVyZVSOgWtX4YjoIeOWKc0HqTOXYPtyXf3WbV7v_JRDMZqdJ6YEczzvKXygHQg=w253-h187-k-no.jpg",
    Location: "El Nido",
    website: href="https://cauayanresort.com/"
}
]

module.exports = {
    placesToVisit,
    placesToEat,
    accommodation
}