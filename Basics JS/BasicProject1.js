const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   let myData=books.filter((items)=>items.publish>=2000)

//   console.log(myData);

  let myBooks=books.forEach((items)=>{
      if(items.publish>=2000){
        // console.log(items);
      }
  })

  //the above work will become easy by become the use of filters

  let myData=books.filter((items)=>items.genre==='Science' && items.edition>=2005)

//   console.log(myData);

  let book=books.filter((items)=>{
    return items.genre==='Fiction'
  })

  console.log(book);