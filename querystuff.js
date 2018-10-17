db.product.find({}, {qty:0, company:0, _id :0 ,category: 0});
db.product.find({}, {qty:0, company:0, name:0, price : 0});
db.product.find({}, {qty:0, company:0, _id :0, price : 0});
db.product.find({}, {qty:0, _id :0, price : 0});
db.product.update({company: "Stanley"}, {$set : {company: "Stanley Black and Decker"}}, {multi: true});
db.product.find({$and: [{category: "Tools"}, {price: {$gt : 10}}]});
db.product.update({company: "Crest"}, {$set : {company: ""}}, {multi: true});