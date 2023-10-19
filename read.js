db.inventory.find(); // fetch all documents
db.inventory.find({qty:10});
db.inventory.find({status:{$in:["A","D"]}})
// SELECT * FROM inventory WHERE status in ("A", "D")