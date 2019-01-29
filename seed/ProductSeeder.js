var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping', {useNewUrlParser: true } );

var products = [
    new Product({
    imagePath:'https://upload.wikimedia.org/wikipedia/en/thumb/7/71/FIFA_19_cover.jpg/220px-FIFA_19_cover.jpg',
    title:'FIFA 19 PC',
    price:1200
    }),
    new Product({
        imagePath:'https://www.instant-gaming.com/images/products/1995/271x377/1995.jpg',
        title:'PUBG PC',
        price:2000
    }),
    new Product({
        imagePath:'https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Pro_Evolution_Soccer_2019_Cover_Art.jpg/220px-Pro_Evolution_Soccer_2019_Cover_Art.jpg',
        title:'PES 2019',
        price:1500
    }),
    new Product({
        imagePath:'https://www.mobygames.com/images/covers/l/284614-watch-dogs-ps4-exclusive-edition-playstation-4-front-cover.jpg',
        title:'WATCH DOGS',
        price:1000
    }),
    new Product({
        imagePath:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ29f_FEQ4yv_bQLJbgeOIlCoY2wDFdwceaVFKS5wOchU1E3i5SiA',
        title:'FAR CRY 3',
        price:1200
    }),
    new Product({
        imagePath:'https://cdn.tutsplus.com/psd/uploads/legacy/psdtutsarticles/linkb_60vgamecovers/44.jpg',
        title:'CRYSIS',
        price:1600
    }),
    new Product({
        imagePath:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_-sU9Rhmhxa2y6lM-TJ7tJ2GPSaWUdN09ybX-RB-7GqT9mE90qg',
        title:'TOMB RAIDER',
        price:1500
    }),
    new Product({
        imagePath:'https://images-na.ssl-images-amazon.com/images/I/51o%2B6fAUSrL.jpg',
        title:'THE LINE : Spec Ops',
        price:1250
    }),
    new Product({
        imagePath:'https://media.rockstargames.com/rockstargames/img/global/news/upload/actual_1364906194.jpg',
        title:'GTA V',
        price:2050
    })
];

var done=0;
for (var i=0; i<products.length; i++)
{
    products[i].save(function(err, result){
        done++;
        if(done == products.length){
            exit();
        }
    });
}
function exit(){
    mongoose.disconnect();
}
