
const bodyParser = require('body-parser');
let dataDummy = [
    {
        "id": 1,
        "image" : 
            [
                "https://down-id.img.susercontent.com/file/3603537e023cfa73f41b387cd7857a84",
                "https://cf.shopee.co.id/file/a542dc50c260540301c7119fe7e57cf5",
                "https://down-id.img.susercontent.com/file/3603537e023cfa73f41b387cd7857a84",
                "https://cf.shopee.co.id/file/a542dc50c260540301c7119fe7e57cf5"
            ],
        "nama": "Adidas Clasic Premium",
        "merk": "Adidas",
        "harga": "450.000",
        "diskon": "45",
        "love": true,
        "status": "",
        "ket": "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th "
    },
    {
        "id": 2,
        "image" : 
            [
                "https://down-id.img.susercontent.com/file/3603537e023cfa73f41b387cd7857a84",
                "https://cf.shopee.co.id/file/a542dc50c260540301c7119fe7e57cf5",
                "https://down-id.img.susercontent.com/file/3603537e023cfa73f41b387cd7857a84",
                "https://cf.shopee.co.id/file/a542dc50c260540301c7119fe7e57cf5"
            ],
        "nama": "Vans Of The Wall Clasic Premium",
        "merk": "Vans Of The Wall",
        "harga": "560.000",
        "diskon": "50",
        "love": false,
        "status": "New",
        "ket": "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed "
    },
    {
        "id": 3,
        "image" : 
            [
                "https://down-id.img.susercontent.com/file/3603537e023cfa73f41b387cd7857a84",
                "https://cf.shopee.co.id/file/a542dc50c260540301c7119fe7e57cf5",
                "https://down-id.img.susercontent.com/file/3603537e023cfa73f41b387cd7857a84",
                "https://cf.shopee.co.id/file/a542dc50c260540301c7119fe7e57cf5"
            ],
        "nama": "Adidas Clasic Premium",
        "merk": "Adidas",
        "harga": "450.000",
        "diskon": "45",
        "love": true,
        "status": "",
        "ket": "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th "
    },
    {
        "id": 4,
        "image" : 
            [
                "https://down-id.img.susercontent.com/file/3603537e023cfa73f41b387cd7857a84",
                "https://cf.shopee.co.id/file/a542dc50c260540301c7119fe7e57cf5",
                "https://down-id.img.susercontent.com/file/3603537e023cfa73f41b387cd7857a84",
                "https://cf.shopee.co.id/file/a542dc50c260540301c7119fe7e57cf5"
            ],
        "nama": "Vans Of The Wall Clasic Premium",
        "merk": "Vans Of The Wall",
        "harga": "560.000",
        "diskon": "50",
        "love": false,
        "status": "New",
        "ket": "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed "
    },
    {
        "id": 5,
        "image" : 
            [
                "https://down-id.img.susercontent.com/file/3603537e023cfa73f41b387cd7857a84",
                "https://cf.shopee.co.id/file/a542dc50c260540301c7119fe7e57cf5",
                "https://down-id.img.susercontent.com/file/3603537e023cfa73f41b387cd7857a84",
                "https://cf.shopee.co.id/file/a542dc50c260540301c7119fe7e57cf5"
            ],
        "nama": "Adidas Clasic Premium",
        "merk": "Adidas",
        "harga": "450.000",
        "diskon": "45",
        "love": true,
        "status": "",
        "ket": "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th "
    },
    {
        "id": 6,
        "image" : 
            [
                "https://down-id.img.susercontent.com/file/3603537e023cfa73f41b387cd7857a84",
                "https://cf.shopee.co.id/file/a542dc50c260540301c7119fe7e57cf5",
                "https://down-id.img.susercontent.com/file/3603537e023cfa73f41b387cd7857a84",
                "https://cf.shopee.co.id/file/a542dc50c260540301c7119fe7e57cf5"
            ],
        "nama": "Vans Of The Wall Clasic Premium",
        "merk": "Vans Of The Wall",
        "harga": "560.000",
        "diskon": "50",
        "love": false,
        "status": "New",
        "ket": "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed "
    },
    {
        "id": 7,
        "image" : 
            [
                "https://down-id.img.susercontent.com/file/3603537e023cfa73f41b387cd7857a84",
                "https://cf.shopee.co.id/file/a542dc50c260540301c7119fe7e57cf5",
                "https://down-id.img.susercontent.com/file/3603537e023cfa73f41b387cd7857a84",
                "https://cf.shopee.co.id/file/a542dc50c260540301c7119fe7e57cf5"
            ],
        "nama": "Adidas Clasic Premium",
        "merk": "Adidas",
        "harga": "450.000",
        "diskon": "45",
        "love": true,
        "status": "",
        "ket": "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th "
    },
    {
        "id": 8,
        "image" : 
            [
                "https://down-id.img.susercontent.com/file/3603537e023cfa73f41b387cd7857a84",
                "https://cf.shopee.co.id/file/a542dc50c260540301c7119fe7e57cf5",
                "https://down-id.img.susercontent.com/file/3603537e023cfa73f41b387cd7857a84",
                "https://cf.shopee.co.id/file/a542dc50c260540301c7119fe7e57cf5"
            ],
        "nama": "Vans Of The Wall Clasic Premium",
        "merk": "Vans Of The Wall",
        "harga": "560.000",
        "diskon": "50",
        "love": false,
        "status": "New",
        "ket": "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed "
    },
    {
        "id": 9,
        "image" : 
            [
                "https://down-id.img.susercontent.com/file/3603537e023cfa73f41b387cd7857a84",
                "https://cf.shopee.co.id/file/a542dc50c260540301c7119fe7e57cf5",
                "https://down-id.img.susercontent.com/file/3603537e023cfa73f41b387cd7857a84",
                "https://cf.shopee.co.id/file/a542dc50c260540301c7119fe7e57cf5"
            ],
        "nama": "Adidas Clasic Premium",
        "merk": "Adidas",
        "harga": "450.000",
        "diskon": "45",
        "love": true,
        "status": "",
        "ket": "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th "
    },
    {
        "id": 10,
        "image" : 
            [
                "https://down-id.img.susercontent.com/file/3603537e023cfa73f41b387cd7857a84",
                "https://cf.shopee.co.id/file/a542dc50c260540301c7119fe7e57cf5",
                "https://down-id.img.susercontent.com/file/3603537e023cfa73f41b387cd7857a84",
                "https://cf.shopee.co.id/file/a542dc50c260540301c7119fe7e57cf5"
            ],
        "nama": "Vans Of The Wall Clasic Premium",
        "merk": "Vans Of The Wall",
        "harga": "560.000",
        "diskon": "50",
        "love": false,
        "status": "New",
        "ket": "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed "
    },
    {
        "id": 11,
        "image" : 
            [
                "https://down-id.img.susercontent.com/file/3603537e023cfa73f41b387cd7857a84",
                "https://cf.shopee.co.id/file/a542dc50c260540301c7119fe7e57cf5",
                "https://down-id.img.susercontent.com/file/3603537e023cfa73f41b387cd7857a84",
                "https://cf.shopee.co.id/file/a542dc50c260540301c7119fe7e57cf5"
            ],
        "nama": "Adidas Clasic Premium",
        "merk": "Adidas",
        "harga": "450.000",
        "diskon": "45",
        "love": true,
        "status": "",
        "ket": "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th "
    },
    {
        "id": 12,
        "image" : 
            [
                "https://down-id.img.susercontent.com/file/3603537e023cfa73f41b387cd7857a84",
                "https://cf.shopee.co.id/file/a542dc50c260540301c7119fe7e57cf5",
                "https://down-id.img.susercontent.com/file/3603537e023cfa73f41b387cd7857a84",
                "https://cf.shopee.co.id/file/a542dc50c260540301c7119fe7e57cf5"
            ],
        "nama": "Vans Of The Wall Clasic Premium",
        "merk": "Vans Of The Wall",
        "harga": "560.000",
        "diskon": "50",
        "love": false,
        "status": "New",
        "ket": "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed "
    },
    {
        "id": 13,
        "image" : 
            [
                "https://down-id.img.susercontent.com/file/3603537e023cfa73f41b387cd7857a84",
                "https://cf.shopee.co.id/file/a542dc50c260540301c7119fe7e57cf5",
                "https://down-id.img.susercontent.com/file/3603537e023cfa73f41b387cd7857a84",
                "https://cf.shopee.co.id/file/a542dc50c260540301c7119fe7e57cf5"
            ],
        "nama": "Adidas Clasic Premium",
        "merk": "Adidas",
        "harga": "450.000",
        "diskon": "45",
        "love": true,
        "status": "",
        "ket": "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th "
    },
    {
        "id": 14,
        "image" : 
            [
                "https://down-id.img.susercontent.com/file/3603537e023cfa73f41b387cd7857a84",
                "https://cf.shopee.co.id/file/a542dc50c260540301c7119fe7e57cf5",
                "https://down-id.img.susercontent.com/file/3603537e023cfa73f41b387cd7857a84",
                "https://cf.shopee.co.id/file/a542dc50c260540301c7119fe7e57cf5"
            ],
        "nama": "Vans Of The Wall Clasic Premium",
        "merk": "Vans Of The Wall",
        "harga": "560.000",
        "diskon": "50",
        "love": false,
        "status": "New",
        "ket": "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed "
    },
    {
        "id": 15,
        "image" : 
            [
                "https://down-id.img.susercontent.com/file/3603537e023cfa73f41b387cd7857a84",
                "https://cf.shopee.co.id/file/a542dc50c260540301c7119fe7e57cf5",
                "https://down-id.img.susercontent.com/file/3603537e023cfa73f41b387cd7857a84",
                "https://cf.shopee.co.id/file/a542dc50c260540301c7119fe7e57cf5"
            ],
        "nama": "Adidas Clasic Premium",
        "merk": "Adidas",
        "harga": "450.000",
        "diskon": "45",
        "love": true,
        "status": "",
        "ket": "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th "
    },
    {
        "id": 16,
        "image" : 
            [
                "https://down-id.img.susercontent.com/file/3603537e023cfa73f41b387cd7857a84",
                "https://cf.shopee.co.id/file/a542dc50c260540301c7119fe7e57cf5",
                "https://down-id.img.susercontent.com/file/3603537e023cfa73f41b387cd7857a84",
                "https://cf.shopee.co.id/file/a542dc50c260540301c7119fe7e57cf5"
            ],
        "nama": "Vans Of The Wall Clasic Premium",
        "merk": "Vans Of The Wall",
        "harga": "560.000",
        "diskon": "50",
        "love": false,
        "status": "New",
        "ket": "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed "
    },
    {
        "id": 17,
        "image" : 
            [
                "https://down-id.img.susercontent.com/file/3603537e023cfa73f41b387cd7857a84",
                "https://cf.shopee.co.id/file/a542dc50c260540301c7119fe7e57cf5",
                "https://down-id.img.susercontent.com/file/3603537e023cfa73f41b387cd7857a84",
                "https://cf.shopee.co.id/file/a542dc50c260540301c7119fe7e57cf5"
            ],
        "nama": "Adidas Clasic Premium",
        "merk": "Adidas",
        "harga": "450.000",
        "diskon": "45",
        "love": true,
        "status": "",
        "ket": "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th "
    },
    {
        "id": 18,
        "image" : 
            [
                "https://down-id.img.susercontent.com/file/3603537e023cfa73f41b387cd7857a84",
                "https://cf.shopee.co.id/file/a542dc50c260540301c7119fe7e57cf5",
                "https://down-id.img.susercontent.com/file/3603537e023cfa73f41b387cd7857a84",
                "https://cf.shopee.co.id/file/a542dc50c260540301c7119fe7e57cf5"
            ],
        "nama": "Vans Of The Wall Clasic Premium",
        "merk": "Vans Of The Wall",
        "harga": "560.000",
        "diskon": "50",
        "love": false,
        "status": "New",
        "ket": "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed "
    },
    {
        "id": 19,
        "image" : 
            [
                "https://down-id.img.susercontent.com/file/3603537e023cfa73f41b387cd7857a84",
                "https://cf.shopee.co.id/file/a542dc50c260540301c7119fe7e57cf5",
                "https://down-id.img.susercontent.com/file/3603537e023cfa73f41b387cd7857a84",
                "https://cf.shopee.co.id/file/a542dc50c260540301c7119fe7e57cf5"
            ],
        "nama": "Adidas Clasic Premium",
        "merk": "Adidas",
        "harga": "450.000",
        "diskon": "45",
        "love": true,
        "status": "",
        "ket": "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th "
    },
    {
        "id": 20,
        "image" : 
            [
                "https://down-id.img.susercontent.com/file/3603537e023cfa73f41b387cd7857a84",
                "https://cf.shopee.co.id/file/a542dc50c260540301c7119fe7e57cf5",
                "https://down-id.img.susercontent.com/file/3603537e023cfa73f41b387cd7857a84",
                "https://cf.shopee.co.id/file/a542dc50c260540301c7119fe7e57cf5"
            ],
        "nama": "Vans Of The Wall Clasic Premium",
        "merk": "Vans Of The Wall",
        "harga": "560.000",
        "diskon": "50",
        "love": false,
        "status": "New",
        "ket": "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed "
    },
    {
        "id": 21,
        "image" : 
            [
                "https://down-id.img.susercontent.com/file/3603537e023cfa73f41b387cd7857a84",
                "https://cf.shopee.co.id/file/a542dc50c260540301c7119fe7e57cf5",
                "https://down-id.img.susercontent.com/file/3603537e023cfa73f41b387cd7857a84",
                "https://cf.shopee.co.id/file/a542dc50c260540301c7119fe7e57cf5"
            ],
        "nama": "Adidas Clasic Premium",
        "merk": "Adidas",
        "harga": "450.000",
        "diskon": "45",
        "love": true,
        "status": "",
        "ket": "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th "
    },
    {
        "id": 22,
        "image" : 
            [
                "https://down-id.img.susercontent.com/file/3603537e023cfa73f41b387cd7857a84",
                "https://cf.shopee.co.id/file/a542dc50c260540301c7119fe7e57cf5",
                "https://down-id.img.susercontent.com/file/3603537e023cfa73f41b387cd7857a84",
                "https://cf.shopee.co.id/file/a542dc50c260540301c7119fe7e57cf5"
            ],
        "nama": "Vans Of The Wall Clasic Premium",
        "merk": "Vans Of The Wall",
        "harga": "560.000",
        "diskon": "50",
        "love": false,
        "status": "New",
        "ket": "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed "
    },    {
        "id": 23,
        "image" : 
            [
                "https://down-id.img.susercontent.com/file/3603537e023cfa73f41b387cd7857a84",
                "https://cf.shopee.co.id/file/a542dc50c260540301c7119fe7e57cf5",
                "https://down-id.img.susercontent.com/file/3603537e023cfa73f41b387cd7857a84",
                "https://cf.shopee.co.id/file/a542dc50c260540301c7119fe7e57cf5"
            ],
        "nama": "Adidas Clasic Premium",
        "merk": "Adidas",
        "harga": "450.000",
        "diskon": "45",
        "love": true,
        "status": "",
        "ket": "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th "
    }
]; // Placeholder for your data

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(dataDummy);
  } else if (req.method === 'POST') {
    bodyParser.json()(req, res, () => {
      const { title, body } = req.body;
      const newPost = { id: generateId(), title, body };
      dataDummy.push(newPost);
      res.status(201).json(newPost);
    });
  } else if (req.method === 'PUT') {
    bodyParser.json()(req, res, () => {
      const { id, title, body } = req.body;
      const postIndex = dataDummy.findIndex((post) => post.id === id);
      if (postIndex !== -1) {
        dataDummy[postIndex] = { id, title, body };
        res.status(200).json({ message: 'Post updated successfully' });
      } else {
        res.status(404).json({ message: 'Post not found' });
      }
    });
  } else if (req.method === 'DELETE') {
    bodyParser.json()(req, res, () => {
      const { id } = req.body;
      const postIndex = dataDummy.findIndex((post) => post.id === id);
      if (postIndex !== -1) {
        dataDummy.splice(postIndex, 1);
        res.status(200).json({ message: 'Post deleted successfully' });
      } else {
        res.status(404).json({ message: 'Post not found' });
      }
    });
  } else {
    res.status(405).end();
  }
}

function generateId() {
  return Math.max(...dataDummy.map((post) => post.id)) + 1;
}





