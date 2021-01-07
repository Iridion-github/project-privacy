const articles = [
  {
    id: "0",
    date: "2020-12-25",
    author: "Gaetano Mastropierro",
    topic: "topic1",
    tags: ["#tag1", "#tag2", "#tag3"],
    previewImg: "articoli/url-preview-img-1.png",
    images: [
      {
        src: "articoli/url-preview-img-2.png",
        position: "right",
        size: "sm",
        margin: " mt-1 mb-1 ml-2"
      },
      {
        src: "articoli/url-preview-img-1.png",
        position: "left",
        size: "md",
        margin: " mt-1 mb-1 mr-2"
      },
      {
        src: "articoli/url-preview-img-4.png",
        position: "center",
        size: "lg",
        margin: " mt-2 mb-2"
      }],
    ita: {
      title: "titolo articolo 1",
      subtitle: "sottotitolo articolo 1",
      content: [
        `contenuto articolo 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
        anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
        ùad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 
        laborum. contenuto articolo 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
        anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
        voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
        `Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
        anim id est laborum. contenuto articolo 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
        deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
        anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
        anim id est laborum.`,
        `
        <strong><span style="font-size: 24px;">TITOLETTO PIU' GRANDE</span></strong>

        &nbsp;
        
        <strong>prova lista</strong>
        <ul>
           <li>elemento 1</li>
           <li>elemento 2</li>
           <li>elemento 3</li>
        </ul>
        &nbsp;
        
        prova citazione:&nbsp;
        <div>
        <blockquote>
        <div><span style="font-size: 14px;">Lorem&nbsp;ipsum&nbsp;dolor&nbsp;sit&nbsp;amet,&nbsp;consectetur&nbsp;adipiscing&nbsp;elit,&nbsp;sed&nbsp;do&nbsp;eiusmod&nbsp;tempor&nbsp;incididunt&nbsp;ut&nbsp;labore&nbsp;et&nbsp;dolore&nbsp;magna&nbsp;aliqua.&nbsp;</span></div>
        <div><span style="font-size: 14px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ut&nbsp;enim&nbsp;ad&nbsp;minim&nbsp;veniam,&nbsp;quis&nbsp;nostrud&nbsp;exercitation&nbsp;ullamco&nbsp;laboris&nbsp;nisi&nbsp;ut&nbsp;aliquip&nbsp;ex&nbsp;ea&nbsp;commodo&nbsp;consequat.&nbsp;Duis&nbsp;aute&nbsp;irure&nbsp;dolor&nbsp;in&nbsp;reprehenderit&nbsp;in&nbsp;</span></div>
        <div><span style="font-size: 14px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;voluptate&nbsp;velit&nbsp;esse&nbsp;cillum&nbsp;dolore&nbsp;eu&nbsp;fugiat&nbsp;nulla&nbsp;pariatur.</span></div></blockquote>
        </div>
        `
      ]
    },
    eng: {
      title: "title article 1",
      subtitle: "subtitle article 1",
      content: [`content article 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`]
    }
  },
  {
    id: "1",
    date: "2020-12-26",
    author: "Alessandro Mastropierro",
    topic: "topic2",
    tags: ["#tag1", "#tag2", "#tag3"],
    previewImg: "articoli/url-preview-img-2.png",
    images: [
      {
        src: "articoli/imgProva1.jpg",
        position: "left",
        size: "md",
        margin: " mt-1 mb-1 mr-2"
      },
      {
        src: "articoli/imgProva2.jpg",
        position: "center",
        size: "lg",
        margin: " mt-2 mb-2"
      }
    ],
    ita: {
      title: "titolo articolo 2",
      subtitle: "sottotitolo articolo 2",
      content: [
        `contenuto articolo 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
        anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
        ùad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 
        laborum. contenuto articolo 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
        anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
        anim id est laborum. contenuto articolo 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
        deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
        anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
        anim id est laborum.`,
        `contenuto articolo 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
        deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
        anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
        anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
        anim id est laborum.`
      ]
    },
    eng: {
      title: "title article 2",
      subtitle: "subtitle article 2",
      content: ["content article 2 - bla bla bla"]
    }
  },
  {
    id: "2",
    date: "2020-12-27",
    author: "Autore Esterno",
    topic: "topic3",
    tags: ["#tag1", "#tag2", "#tag3"],
    previewImg: "articoli/url-preview-img-3.png",
    images: ["url-preview-img-2.png", "url-preview-img-3.png", "url-preview-img-4.png"],
    ita: {
      title: "titolo articolo 3",
      subtitle: "sottotitolo articolo 3",
      content: ["contenuto articolo 3 - bla bla bla"]
    },
    eng: {
      title: "title article 3",
      subtitle: "subtitle article 3",
      content: ["content article 3 - bla bla bla"]
    }
  },
  {
    id: "3",
    date: "2020-12-28",
    author: "Autore Esterno",
    topic: "topic4",
    tags: ["#tag1", "#tag2", "#tag3"],
    previewImg: "articoli/url-preview-img-4.png",
    images: ["url-preview-img-2.png", "url-preview-img-3.png", "url-preview-img-4.png"],
    ita: {
      title: "titolo articolo 4",
      subtitle: "sottotitolo articolo 4",
      content: ["contenuto articolo 4 - bla bla bla"]
    },
    eng: {
      title: "title article 4",
      subtitle: "subtitle article 4",
      content: ["content article 4 - bla bla bla"]
    }
  },
  {
    id: "4",
    date: "2020-12-29",
    author: "Autore Esterno",
    topic: "topic5",
    tags: ["#tag1", "#tag2", "#tag3"],
    previewImg: "articoli/url-preview-img-5.png",
    images: ["url-preview-img-2.png", "url-preview-img-3.png", "url-preview-img-4.png"],
    ita: {
      title: "titolo articolo 5",
      subtitle: "sottotitolo articolo 5",
      content: ["contenuto articolo 5 - bla bla bla"]
    },
    eng: {
      title: "title article 5",
      subtitle: "subtitle article 5",
      content: ["content article 5 - bla bla bla"]
    }
  },
  {
    id: "5",
    date: "2020-12-25",
    author: "Gaetano Mastropierro",
    topic: "topic1",
    tags: ["#tag1", "#tag2", "#tag3"],
    previewImg: "articoli/url-preview-img-1.png",
    images: ["url-preview-img-2.png", "url-preview-img-3.png", "url-preview-img-4.png"],
    ita: {
      title: "titolo articolo 6",
      subtitle: "sottotitolo articolo 6",
      content: ["contenuto articolo 6 - bla bla bla"]
    },
    eng: {
      title: "title article 6",
      subtitle: "subtitle article 6",
      content: ["content article 6 - bla bla bla"]
    }
  },
  {
    id: "6",
    date: "2020-12-25",
    author: "Gaetano Mastropierro",
    topic: "topic2",
    tags: ["#tag1", "#tag2", "#tag3"],
    previewImg: "articoli/url-preview-img-1.png",
    images: ["url-preview-img-2.png", "url-preview-img-3.png", "url-preview-img-4.png"],
    ita: {
      title: "titolo articolo 7",
      subtitle: "sottotitolo articolo 7",
      content: ["contenuto articolo 7 - bla bla bla"]
    },
    eng: {
      title: "title article 7",
      subtitle: "subtitle article 7",
      content: ["content article 7 - bla bla bla"]
    }
  },
  {
    id: "7",
    date: "2020-12-25",
    author: "Gaetano Mastropierro",
    topic: "topic3",
    tags: ["#tag1", "#tag2", "#tag3"],
    previewImg: "articoli/url-preview-img-1.png",
    images: ["url-preview-img-2.png", "url-preview-img-3.png", "url-preview-img-4.png"],
    ita: {
      title: "titolo articolo 8",
      subtitle: "sottotitolo articolo 8",
      content: ["contenuto articolo 8 - bla bla bla"]
    },
    eng: {
      title: "title article 8",
      subtitle: "subtitle article 8",
      content: ["content article 8 - bla bla bla"]
    }
  },
  {
    id: "8",
    date: "2020-12-25",
    author: "Gaetano Mastropierro",
    topic: "topic1",
    tags: ["#tag1", "#tag2", "#tag3"],
    previewImg: "articoli/url-preview-img-1.png",
    images: ["url-preview-img-2.png", "url-preview-img-3.png", "url-preview-img-4.png"],
    ita: {
      title: "titolo articolo 9",
      subtitle: "sottotitolo articolo 9",
      content: ["contenuto articolo 9 - bla bla bla"]
    },
    eng: {
      title: "title article 9",
      subtitle: "subtitle article 9",
      content: ["content article 9 - bla bla bla"]
    }
  },
  {
    id: "9",
    date: "2020-12-25",
    author: "Gaetano Mastropierro",
    topic: "topic2",
    tags: ["#tag1", "#tag2", "#tag3"],
    previewImg: "articoli/url-preview-img-1.png",
    images: ["url-preview-img-2.png", "url-preview-img-3.png", "url-preview-img-4.png"],
    ita: {
      title: "titolo articolo 10",
      subtitle: "sottotitolo articolo 10",
      content: ["contenuto articolo 10 - bla bla bla"]
    },
    eng: {
      title: "title article 10",
      subtitle: "subtitle article 10",
      content: ["content article 10 - bla bla bla"]
    }
  },
  {
    id: "10",
    date: "2020-12-25",
    author: "Gaetano Mastropierro",
    topic: "topic3",
    tags: ["#tag1", "#tag2", "#tag3"],
    previewImg: "articoli/url-preview-img-1.png",
    images: ["url-preview-img-2.png", "url-preview-img-3.png", "url-preview-img-4.png"],
    ita: {
      title: "titolo articolo 11",
      subtitle: "sottotitolo articolo 11",
      content: ["contenuto articolo 11 - bla bla bla"]
    },
    eng: {
      title: "title article 11",
      subtitle: "subtitle article 11",
      content: ["content article 11 - bla bla bla"]
    }
  },
  {
    id: "11",
    date: "2020-12-25",
    author: "Gaetano Mastropierro",
    topic: "topic4",
    tags: ["#tag1", "#tag2", "#tag3"],
    previewImg: "articoli/url-preview-img-1.png",
    images: ["url-preview-img-2.png", "url-preview-img-3.png", "url-preview-img-4.png"],
    ita: {
      title: "titolo articolo 12",
      subtitle: "sottotitolo articolo 12",
      content: ["contenuto articolo 12 - bla bla bla"]
    },
    eng: {
      title: "title article 12",
      subtitle: "subtitle article 12",
      content: ["content article 12 - bla bla bla"]
    }
  },
  {
    id: "12",
    date: "2020-12-25",
    author: "Gaetano Mastropierro",
    topic: "topic5",
    tags: ["#tag1", "#tag2", "#tag3"],
    previewImg: "articoli/url-preview-img-1.png",
    images: ["url-preview-img-2.png", "url-preview-img-3.png", "url-preview-img-4.png"],
    ita: {
      title: "titolo articolo 13",
      subtitle: "sottotitolo articolo 13",
      content: ["contenuto articolo 13 - bla bla bla"]
    },
    eng: {
      title: "title article 13",
      subtitle: "subtitle article 13",
      content: ["content article 13 - bla bla bla"]
    }
  },
  {
    id: "13",
    date: "2020-12-25",
    author: "Gaetano Mastropierro",
    topic: "topic4",
    tags: ["#tag1", "#tag2", "#tag3"],
    previewImg: "articoli/url-preview-img-1.png",
    images: ["url-preview-img-2.png", "url-preview-img-3.png", "url-preview-img-4.png"],
    ita: {
      title: "titolo articolo 14",
      subtitle: "sottotitolo articolo 14",
      content: ["contenuto articolo 14 - bla bla bla"]
    },
    eng: {
      title: "title article 14",
      subtitle: "subtitle article 14",
      content: ["content article 14 - bla bla bla"]
    }
  },
  {
    id: "14",
    date: "2020-12-25",
    author: "Gaetano Mastropierro, Davide Antinori",
    topic: "topic5",
    tags: ["#tag1", "#tag2", "#tag3"],
    previewImg: "articoli/url-preview-img-1.png",
    images: ["url-preview-img-2.png", "url-preview-img-3.png", "url-preview-img-4.png"],
    ita: {
      title: "titolo articolo 15",
      subtitle: "sottotitolo articolo 15",
      content: ["contenuto articolo 15 - bla bla bla"]
    },
    eng: {
      title: "title article 15",
      subtitle: "subtitle article 15",
      content: ["content article 15 - bla bla bla"]
    }
  },
  {
    id: "15",
    date: "2020-12-25",
    author: "Gaetano Mastropierro, Alessandro Mastropierro",
    topic: "topic4",
    tags: ["#tag1", "#tag2", "#tag3"],
    previewImg: "articoli/url-preview-img-1.png",
    images: ["url-preview-img-2.png", "url-preview-img-3.png", "url-preview-img-4.png"],
    ita: {
      title: "titolo articolo 16",
      subtitle: "sottotitolo articolo 16",
      content: ["contenuto articolo 16 - bla bla bla"]
    },
    eng: {
      title: "title article 16",
      subtitle: "subtitle article 16",
      content: ["content article 16 - bla bla bla"]
    }
  },
  {
    id: "16",
    date: "2020-12-25",
    author: "Gaetano Mastropierro, Alessandro Mastropierro",
    topic: "topic5",
    tags: ["#tag1", "#tag2", "#tag3"],
    previewImg: "articoli/url-preview-img-1.png",
    images: ["url-preview-img-2.png", "url-preview-img-3.png", "url-preview-img-4.png"],
    ita: {
      title: "titolo articolo 17",
      subtitle: "sottotitolo articolo 17",
      content: ["contenuto articolo 17 - bla bla bla"]
    },
    eng: {
      title: "title article 17",
      subtitle: "subtitle article 17",
      content: ["content article 17 - bla bla bla"]
    }
  }
]

export default articles