db.inventory.insertOne(
  { item: "canvas", qty: 100, tags: ["cotton"], size: { h: 28, w: 35.5, uom: "cm" } }
)


  db.inventory.insertMany(
    [
    {
    item: 'canvas',
    qty: 100,
    tags: ['cotton'],
    size: { h: 28, w:35.5, uom: 'cm' }
  },

  {
    item: 'canvas',
    qty: 10,
    tags: ['cotton'],
    size: { h: 98, w:39.5, uom: 'cm' }
  }


]);

db.collects.insertMany([
  { "item": "journal", "qty": 25, "size": { "h": 14, "w": 21, "uom": "cm" }, "status": "A" },
  { "item": "notebook", "qty": 50, "size": { "h": 8.5, "w": 11, "uom": "in" }, "status": "A" },
  { "item": "paper", "qty": 100, "size": { "h": 8.5, "w": 11, "uom": "in" }, "status": "D" },
  { "item": "planner", "qty": 75, "size": { "h": 22.85, "w": 30, "uom": "cm" }, "status": "D" },
  { "item": "postcard", "qty": 45, "size": { "h": 10, "w": 15.25, "uom": "cm" }, "status": "A" }
])
  