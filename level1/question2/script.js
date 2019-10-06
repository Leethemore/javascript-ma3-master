var data =JSON.parse('{"video":[{"id": 12312412312,"name": "Ecuaciones Diferenciales","url": "/video/math/edo/12312412312","author": {"data": [{"name_author": "Alejandro Morales","url": "/author/alejandro-morales","type": "master"}]}}]}');
console.log(data.video[0].id);
console.log(data.video[0].url);
console.log(data.video[0].name);
console.log(data.video[0].author.data[0].name_author);
console.log(data.video[0].author.data[0].url);
console.log(data.video[0].author.data[0].type);
//could also write a for loop but i dont think there is a point to it when the array has only one item. Could also define the object and write a foreach, but this is much less code. Also KISS principle.	